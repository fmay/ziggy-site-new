'use client'

import { FC, ReactNode } from 'react'
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
  x: number
  y: number
  duration?: number
}

export interface MoveRelativeAction {
  type: 'moveRelative'
  x: number
  y: number
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
}

export interface SceneDefinition {
  steps: SceneStep[]
}

interface TestProps {
  children: ReactNode
  scene: SceneDefinition
}

const CanvasScene: FC<TestProps> = ({ children, scene }) => {

  // Scene execution function
  const executeScene = () => {
    let cumulativeTime = 0

    scene.steps.forEach(step => {
      // Wait for the delay after the previous step's duration
      cumulativeTime += step.delay

      setTimeout(() => {
        step.imageActions.forEach(imageAction => {
          imageAction.actions.forEach(action => {
            executeAction(imageAction.target, action)
          })
        })
      }, cumulativeTime)

      // Add this step's duration to cumulative time
      cumulativeTime += step.duration
    })
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

  const handleCanvasClick = () => {
    executeScene()
  }

  return (
    <div>
      <Stage width={1200} height={600} className="bg-gray-50 border" onClick={handleCanvasClick}>
        <Layer>{children}</Layer>
      </Stage>
    </div>
  )
}

export default CanvasScene
