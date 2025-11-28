'use client'

import { FC, ReactNode, useEffect } from 'react'
import { Stage, Layer } from 'react-konva'
import { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import { LineDrawHandle } from '@/components/canvas/LineDraw'
import { ImageMorphHandle } from '@/components/canvas/ImageMorph'

// Scene Management Types
export interface FlipAction {
  type: 'flip'
  direction: 'front' | 'back'
  duration?: number
}

export interface UnflipAction {
  type: 'unflip'
  duration?: number
}

export interface MoveAction {
  type: 'move'
  x?: number
  y?: number
  duration?: number
}

export interface MoveRelativeAction {
  type: 'moveRelative'
  x?: number
  y?: number
  duration?: number
}

export interface FadeAction {
  type: 'fade'
  opacity: number
  duration?: number
}

export interface BrightnessAction {
  type: 'brightness'
  value: number
  duration?: number
}

export interface GrayscaleAction {
  type: 'grayscale'
  duration?: number
}

export interface MorphAction {
  type: 'morph'
  duration?: number
}

export interface ResetMorphAction {
  type: 'reset'
  duration?: number
}

export interface DrawAction {
  type: 'draw'
}

export interface RestoreAction {
  type: 'restore'
}

export interface ZIndexAction {
  type: 'zIndex'
  value: number
}

// Separate action types per component type
export interface ImageFlipActions {
  target: React.RefObject<ImageFlipHandle | null>
  actions: (
    | FlipAction
    | UnflipAction
    | MoveAction
    | MoveRelativeAction
    | FadeAction
    | BrightnessAction
    | GrayscaleAction
    | ZIndexAction
  )[]
}

export interface ImageMorphActions {
  target: React.RefObject<ImageMorphHandle | null>
  actions: (MorphAction | ResetMorphAction)[]
}

export interface LineDrawActions {
  target: React.RefObject<LineDrawHandle | null>
  actions: (DrawAction | RestoreAction | ZIndexAction)[]
}

export type ImageActions = ImageFlipActions | ImageMorphActions | LineDrawActions

export interface SceneStep {
  delay: number // milliseconds after previous step completes
  duration: number // how long this step takes to complete
  imageActions: ImageActions[]
  isRepeating?: boolean // marks if this step is part of a repeating sequence
}

export interface SceneDefinition {
  steps: SceneStep[]
  repeatStartIndex?: number // index where repeating steps start (deprecated)
  repeatSections?: SceneStep[][] // array of repeat sections to run in parallel
}

interface TestProps {
  children: ReactNode
  scene: SceneDefinition
  autoPlay?: boolean
}

const CanvasScene: FC<TestProps> = ({ children, scene, autoPlay = false }) => {

  // Scene execution function
  const executeScene = () => {
    const { steps, repeatStartIndex, repeatSections } = scene

    // Execute a single step
    const executeStep = (step: SceneStep, time: number) => {
      setTimeout(() => {
        step.imageActions.forEach(imageAction => {
          imageAction.actions.forEach(action => {
            executeAction(imageAction.target, action)
          })
        })
      }, time)
    }

    // Execute each repeat section in parallel
    if (repeatSections && repeatSections.length > 0) {
      repeatSections.forEach(sectionSteps => {
        const executeRepeatingCycle = (cycleNumber: number) => {
          let cycleTime = 0

          sectionSteps.forEach(step => {
            cycleTime += step.delay
            executeStep(step, cycleTime)
            cycleTime += step.duration
          })

          // Calculate total cycle duration and schedule next cycle
          const cycleDuration = sectionSteps.reduce(
            (total, step) => total + step.delay + step.duration,
            0
          )
          setTimeout(() => executeRepeatingCycle(cycleNumber + 1), cycleDuration)
        }

        executeRepeatingCycle(0)
      })
    } else {
      // Fallback to old behavior for backwards compatibility
      const repeatingSteps = repeatStartIndex !== undefined
        ? steps.slice(repeatStartIndex)
        : steps.filter(s => s.isRepeating)

      if (repeatingSteps.length > 0) {
        const executeRepeatingCycle = (cycleNumber: number) => {
          let cycleTime = 0

          repeatingSteps.forEach(step => {
            cycleTime += step.delay
            executeStep(step, cycleTime)
            cycleTime += step.duration
          })

          const cycleDuration = repeatingSteps.reduce(
            (total, step) => total + step.delay + step.duration,
            0
          )
          setTimeout(() => executeRepeatingCycle(cycleNumber + 1), cycleDuration)
        }

        executeRepeatingCycle(0)
      }
    }

    // Execute non-repeating steps
    const nonRepeatingSteps = repeatStartIndex !== undefined
      ? steps.slice(0, repeatStartIndex)
      : steps.filter(s => !s.isRepeating)

    if (nonRepeatingSteps.length > 0) {
      let cumulativeTime = 0

      nonRepeatingSteps.forEach(step => {
        cumulativeTime += step.delay
        executeStep(step, cumulativeTime)
        cumulativeTime += step.duration
      })
    }
  }

  // Execute individual action
  const executeAction = (
    ref:
      | React.RefObject<ImageFlipHandle | null>
      | React.RefObject<ImageMorphHandle | null>
      | React.RefObject<LineDrawHandle | null>,
    action:
      | FlipAction
      | UnflipAction
      | MoveAction
      | MoveRelativeAction
      | FadeAction
      | BrightnessAction
      | GrayscaleAction
      | MorphAction
      | ResetMorphAction
      | DrawAction
      | RestoreAction
      | ZIndexAction,
  ) => {
    if (!ref.current) return

    switch (action.type) {
      case 'flip':
        if ('flip' in ref.current) {
          ref.current.flip(action.direction, action.duration)
        }
        break
      case 'unflip':
        if ('unflip' in ref.current) {
          ref.current.unflip(action.duration)
        }
        break
      case 'move':
        if ('move' in ref.current) {
          ref.current.move(action.x, action.y, action.duration)
        }
        break
      case 'moveRelative':
        if ('moveRelative' in ref.current) {
          ref.current.moveRelative(action.x, action.y, action.duration)
        }
        break
      case 'fade':
        if ('fade' in ref.current) {
          ref.current.fade(action.opacity, action.duration)
        }
        break
      case 'brightness':
        if ('brightness' in ref.current) {
          ref.current.brightness(action.value, action.duration)
        }
        break
      case 'grayscale':
        if ('grayscale' in ref.current) {
          ref.current.grayscale(action.duration)
        }
        break
      case 'morph':
        if ('morph' in ref.current) {
          ref.current.morph(action.duration)
        }
        break
      case 'reset':
        if ('reset' in ref.current) {
          ref.current.reset(action.duration)
        }
        break
      case 'draw':
        if ('draw' in ref.current) {
          ref.current.draw()
        }
        break
      case 'restore':
        if ('restore' in ref.current) {
          ref.current.restore()
        }
        break
      case 'zIndex':
        if ('zIndex' in ref.current) {
          ref.current.zIndex(action.value)
        }
        break
    }
  }

  // Auto-play effect
  useEffect(() => {
    if (autoPlay) {
      executeScene()
    }
  }, [autoPlay])

  const handleCanvasClick = () => {
    executeScene()
  }

  return (
    <div>
      <Stage width={700} height={450} scale={{x:1.2, y: 1.2}} className="bg-gray-50" onClick={handleCanvasClick}>
        <Layer>{children}</Layer>
      </Stage>
    </div>
  )
}

export default CanvasScene
