import { SceneDefinition, ImageActions } from '@/components/canvas/CanvasScene'
import { RefObject } from 'react'
import { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import { LineDrawHandle } from '@/components/canvas/LineDraw'
import { ImageMorphHandle } from '@/components/canvas/ImageMorph'

interface VariableDefinition {
  [key: string]: number
}

interface ActionParams {
  [key: string]: any
}

interface ParsedAction {
  type: string
  [key: string]: any
}

type RefMap = {
  [key: string]: RefObject<ImageFlipHandle | null> | RefObject<LineDrawHandle | null> | RefObject<ImageMorphHandle | null>
}

interface StepDefinition {
  delay: number
  duration: number
  imageActions?: Array<{
    target: string
    actions: Array<{ [actionName: string]: any }>
  }>
  actions?: Array<{
    target: string
    actions: Array<{ [actionName: string]: any }>
  }>
}

interface SceneYAML {
  variables?: Array<{ [key: string]: number }>
  steps?: Array<StepDefinition>
  [key: string]: any // Allow dynamic repeatN properties
}

export class SceneParserError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SceneParserError'
  }
}

/**
 * Parses variable definitions from the YAML structure
 */
function parseVariables(variables?: Array<{ [key: string]: number }>): VariableDefinition {
  const result: VariableDefinition = {}

  if (!variables) return result

  for (const varObj of variables) {
    for (const [key, value] of Object.entries(varObj)) {
      result[key] = value
    }
  }

  return result
}

/**
 * Evaluates a JS expression with given variables
 * Supports expressions like: { NumCards * (DiffY + 20) }
 */
function evaluateExpression(expr: string, variables: VariableDefinition): number {
  // Remove leading/trailing braces and whitespace
  const cleanExpr = expr.trim().replace(/^\{/, '').replace(/\}$/, '').trim()

  // Extract all variable names used in the expression
  const varNames = Object.keys(variables)
  const usedVars = varNames.filter(varName =>
    new RegExp(`\\b${varName}\\b`).test(cleanExpr)
  )

  // Check if all variables are defined
  for (const varName of usedVars) {
    if (!(varName in variables)) {
      throw new SceneParserError(
        `Variable '${varName}' used in expression '${expr}' is not defined in variables`
      )
    }
  }

  try {
    // Create a function with variable names as parameters
    const varValues = usedVars.map(name => variables[name])
    const fn = new Function(...usedVars, `return ${cleanExpr}`)
    const result = fn(...varValues)

    if (typeof result !== 'number' || !isFinite(result)) {
      throw new SceneParserError(
        `Expression '${expr}' did not evaluate to a valid number`
      )
    }

    return result
  } catch (error) {
    if (error instanceof SceneParserError) throw error
    throw new SceneParserError(
      `Failed to evaluate expression '${expr}': ${error instanceof Error ? error.message : String(error)}`
    )
  }
}

/**
 * Processes a parameter value, handling expressions and underscores
 */
function processParameter(
  value: any,
  variables: VariableDefinition
): any {
  // If value is underscore, return undefined (caller should skip this param)
  if (value === '_') {
    return undefined
  }

  // If value is a string that looks like an expression
  if (typeof value === 'string' && value.trim().startsWith('{') && value.trim().endsWith('}')) {
    return evaluateExpression(value, variables)
  }

  // If value is an object with a single property that's an expression
  // YAML parses { expression } as an object like { "expression": null }
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const keys = Object.keys(value)
    if (keys.length === 1) {
      const key = keys[0]
      // The key itself is the expression, value is typically null from YAML
      return evaluateExpression(`{ ${key} }`, variables)
    }
  }

  return value
}

/**
 * Maps action name and parameters to the proper typed action object
 */
function parseAction(
  actionName: string,
  params: any,
  variables: VariableDefinition
): ParsedAction | null {
  // Handle actions without parameters
  if (params === null || params === undefined) {
    return { type: actionName }
  }

  // Process array parameters
  if (Array.isArray(params)) {
    // Process parameters but keep original indices (don't filter out undefined)
    const processedParams = params.map(p => processParameter(p, variables))

    // Map to specific action types based on actionName
    const action: ParsedAction = { type: actionName }

    switch (actionName) {
      case 'flip':
        if (processedParams[0] !== undefined) action.direction = processedParams[0]
        if (processedParams[1] !== undefined) action.duration = processedParams[1]
        break

      case 'unflip':
        if (processedParams[0] !== undefined) action.duration = processedParams[0]
        break

      case 'move':
      case 'moveRelative':
        if (processedParams[0] !== undefined) action.x = processedParams[0]
        if (processedParams[1] !== undefined) action.y = processedParams[1]
        if (processedParams[2] !== undefined) action.duration = processedParams[2]
        break

      case 'fade':
        if (processedParams[0] !== undefined) action.opacity = processedParams[0]
        if (processedParams[1] !== undefined) action.duration = processedParams[1]
        break

      case 'brightness':
        if (processedParams[0] !== undefined) action.value = processedParams[0]
        if (processedParams[1] !== undefined) action.duration = processedParams[1]
        break

      case 'grayscale':
      case 'morph':
      case 'reset':
        if (processedParams[0] !== undefined) action.duration = processedParams[0]
        break

      case 'zIndex':
        if (processedParams[0] !== undefined) action.value = processedParams[0]
        break

      case 'draw':
      case 'restore':
        // No parameters
        break

      default:
        throw new SceneParserError(`Unknown action type: ${actionName}`)
    }

    return action
  }

  // Handle single value parameter
  const processed = processParameter(params, variables)
  if (processed === undefined) return null

  return { type: actionName, value: processed }
}

/**
 * Parses a single step definition
 */
function parseStepDefinition(
  step: StepDefinition,
  stepIndex: number,
  variables: VariableDefinition,
  refMap: RefMap,
  isRepeating: boolean = false
) {
  const imageActions: ImageActions[] = []

  // Handle both 'imageActions' and 'actions' fields (YAML uses 'actions')
  const actionsList = step.imageActions || step.actions || []

  for (const imageAction of actionsList) {
    const targetRef = refMap[imageAction.target]

    if (!targetRef) {
      throw new SceneParserError(
        `Target '${imageAction.target}' in step ${stepIndex} not found in ref map`
      )
    }

    const actions: ParsedAction[] = []

    // Check if actions is an object (YAML parses "morph:" as {morph: null})
    // or an array (explicit array format)
    const actionsData = imageAction.actions

    if (Array.isArray(actionsData)) {
      // Array format: [{ morph: [...] }, { fade: [...] }]
      for (const actionObj of actionsData) {
        const [actionName, actionParams] = Object.entries(actionObj)[0]
        const parsedAction = parseAction(actionName, actionParams, variables)

        if (parsedAction) {
          actions.push(parsedAction)
        }
      }
    } else if (typeof actionsData === 'object' && actionsData !== null) {
      // Object format: { morph: null, fade: [0, 1000] }
      for (const [actionName, actionParams] of Object.entries(actionsData)) {
        const parsedAction = parseAction(actionName, actionParams, variables)

        if (parsedAction) {
          actions.push(parsedAction)
        }
      }
    }

    imageActions.push({
      target: targetRef,
      actions: actions
    } as ImageActions)
  }

  return {
    delay: step.delay,
    duration: step.duration,
    imageActions,
    isRepeating
  }
}

/**
 * Parses the YAML scene structure into a SceneDefinition
 */
export function parseScene(sceneYAML: SceneYAML, refMap: RefMap): SceneDefinition {
  // Parse variables
  const variables = parseVariables(sceneYAML.variables)

  const repeatSections: any[][] = []
  const regularSteps: any[] = []

  // Find all repeatN properties (repeat1, repeat2, etc.)
  const repeatKeys = Object.keys(sceneYAML)
    .filter(key => /^repeat\d+$/.test(key))
    .sort() // Sort to maintain order (repeat1, repeat2, etc.)

  // Parse each repeat section separately
  for (const repeatKey of repeatKeys) {
    const repeatBlocks = sceneYAML[repeatKey]
    const sectionSteps: any[] = []

    if (Array.isArray(repeatBlocks)) {
      for (const repeatBlock of repeatBlocks) {
        if (repeatBlock.steps && Array.isArray(repeatBlock.steps)) {
          const repeatingSteps = repeatBlock.steps.map((step: StepDefinition, stepIndex: number) =>
            parseStepDefinition(step, stepIndex, variables, refMap, true)
          )
          sectionSteps.push(...repeatingSteps)
        }
      }
    }

    if (sectionSteps.length > 0) {
      repeatSections.push(sectionSteps)
    }
  }

  // Parse regular steps if they exist
  if (sceneYAML.steps && sceneYAML.steps.length > 0) {
    const steps = sceneYAML.steps.map((step, stepIndex) =>
      parseStepDefinition(step, stepIndex, variables, refMap, false)
    )
    regularSteps.push(...steps)
  }

  return {
    steps: regularSteps,
    repeatSections: repeatSections.length > 0 ? repeatSections : undefined
  }
}
