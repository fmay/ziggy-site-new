'use client'

import { FC, useRef, useState, useEffect } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'
import ImageMorph, { ImageMorphHandle } from '@/components/canvas/ImageMorph'

interface TestProps {}

// Scene Management Types
interface FlipAction {
  type: 'flip'
  direction: 'front' | 'back'
  duration?: number
}

interface UnflipAction {
  type: 'unflip'
  duration?: number
}

interface MoveAction {
  type: 'move'
  x: number
  y: number
  duration?: number
}

interface MoveRelativeAction {
  type: 'moveRelative'
  x: number
  y: number
  duration?: number
}

interface FadeAction {
  type: 'fade'
  opacity: number
  duration?: number
}

interface BrightnessAction {
  type: 'brightness'
  value: number
  duration?: number
}

interface GrayscaleAction {
  type: 'grayscale'
  duration?: number
}

interface MorphAction {
  type: 'morph'
  duration?: number
}

interface ResetMorphAction {
  type: 'reset'
  duration?: number
}

interface DrawAction {
  type: 'draw'
}

interface RestoreAction {
  type: 'restore'
}

// Separate action types per component type
interface ImageFlipActions {
  target: React.RefObject<ImageFlipHandle | null>
  actions: (
    | FlipAction
    | UnflipAction
    | MoveAction
    | MoveRelativeAction
    | FadeAction
    | BrightnessAction
    | GrayscaleAction
  )[]
}

interface ImageMorphActions {
  target: React.RefObject<ImageMorphHandle | null>
  actions: (MorphAction | ResetMorphAction)[]
}

interface LineDrawActions {
  target: React.RefObject<LineDrawHandle | null>
  actions: (DrawAction | RestoreAction)[]
}

type ImageActions = ImageFlipActions | ImageMorphActions | LineDrawActions

interface SceneStep {
  delay: number // milliseconds after previous step completes
  duration: number // how long this step takes to complete
  imageActions: ImageActions[]
}

interface SceneDefinition {
  steps: SceneStep[]
}

const Test: FC<TestProps> = ({}) => {
  const lineDrawRef = useRef<LineDrawHandle>(null)
  const CardFast = useRef<ImageFlipHandle>(null)
  const CardOneInstance = useRef<ImageFlipHandle>(null)
  const CardCluster = useRef<ImageFlipHandle>(null)
  const CRM = useRef<ImageMorphHandle>(null)
  const ERP = useRef<ImageMorphHandle>(null)
  const LineCRM = useRef<LineDrawHandle>(null)

  // Scene definition
  const sceneDefinition: SceneDefinition = {
    steps: [
      {
        delay: 0, // Start immediately
        duration: 1500, // This step takes 1500ms to complete
        imageActions: [
          {
            target: CardCluster,
            actions: [
              { type: 'flip', direction: 'front', duration: 1500 },
              { type: 'moveRelative', x: 0, y: 200, duration: 1500 },
              { type: 'fade', opacity: 0, duration: 1500 },
            ],
          },
          {
            target: LineCRM,
            actions: [{ type: 'draw' }],
          },
          {
            target: CardOneInstance,
            actions: [{ type: 'moveRelative', x: 0, y: 200, duration: 1500 }],
          },
          {
            target: CardFast,
            actions: [{ type: 'moveRelative', x: 0, y: 200, duration: 1500 }],
          },
          {
            target: CRM,
            actions: [{ type: 'morph', duration: 1500 }],
          },
          {
            target: ERP,
            actions: [{ type: 'morph', duration: 1500 }],
          },
        ],
      },
      {
        delay: 100, // Wait 100ms after previous step completes
        duration: 100, // This step takes 1500ms to complete
        imageActions: [
          {
            target: CardCluster,
            actions: [
              { type: 'unflip', duration: 0 },
              { type: 'moveRelative', x: 0, y: -400, duration: 0 },
              { type: 'fade', opacity: 100, duration: 0 },
            ],
          },
        ],
      },
      // {
      //   delay: 2000, // After another 2 seconds
      //   duration: 1500,
      //   imageActions: [
      //     {
      //       target: I2,
      //       actions: [
      //         { type: 'flip', direction: 'front', duration: 1500 },
      //         { type: 'moveRelative', x: 0, y: 300, duration: 1500 },
      //         { type: 'fade', opacity: 0.3, duration: 1500 },
      //       ],
      //     },
      //     {
      //       target: I3,
      //       actions: [{ type: 'moveRelative', x: 0, y: 100, duration: 0 }],
      //     },
      //     {
      //       target: I1,
      //       actions: [{ type: 'moveRelative', x: 0, y: 100, duration: 0 }],
      //     },
      //   ],
      // },
    ],
  }

  // Scene execution function
  const executeScene = (scene: SceneDefinition) => {
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
      | RestoreAction,
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
    }
  }

  const handleCanvasClick = () => {
    executeScene(sceneDefinition)
  }

  return (
    <div>
      <Stage width={1200} height={600} className="bg-gray-50 border" onClick={handleCanvasClick}>
        <Layer>
          {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}
          <ImageFlip
            ref={CardFast}
            x={200}
            y={0}
            scale={{ x: 1, y: 1 }}
            image="/canvas/cards/fast-friendly.card.png"
            direction="front"
            duration={1500}
            expansionScale={0.5}
          />

          <ImageFlip
            ref={CardOneInstance}
            x={200}
            y={100}
            scale={{ x: 1, y: 1 }}
            image="/canvas/cards/one-instance.card.png"
            direction="front"
            duration={1500}
            expansionScale={0.5}
          />

          <ImageFlip
            ref={CardCluster}
            x={200}
            y={200}
            scale={{ x: 1, y: 1 }}
            image="/canvas/cards/cluster.card.png"
            direction="front"
            duration={1500}
            expansionScale={0.5}
          />

          <ImageMorph
            ref={CRM}
            x={30}
            y={80}
            scale={0.8}
            image1={'/canvas/icons/crm.gray.png'}
            image2={'/canvas/icons/crm.color.png'}
            duration={1000}
          />

          <LineDraw
            ref={LineCRM}
            x={35}
            y={90}
            endX={200}
            endY={260}
            stroke={2}
            color={'#ff0000'}
            duration={600}
            deleteDelay={3000}
          />

          <ImageMorph
            ref={ERP}
            x={30}
            y={200}
            scale={0.8}
            image1={'/canvas/icons/erp.gray.png'}
            image2={'/canvas/icons/erp.color.png'}
            duration={1000}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Test
