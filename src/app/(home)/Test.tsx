'use client'

import { FC, useRef, useState, useEffect } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'

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

type Action = FlipAction | UnflipAction | MoveAction | MoveRelativeAction | FadeAction

interface ImageActions {
  target: 'I1' | 'I2' | 'I3'
  actions: Action[]
}

interface SceneStep {
  delay: number // milliseconds from previous step
  imageActions: ImageActions[]
}

interface SceneDefinition {
  steps: SceneStep[]
}

const Test: FC<TestProps> = ({}) => {
  const lineDrawRef = useRef<LineDrawHandle>(null)
  const I1 = useRef<ImageFlipHandle>(null)
  const I2 = useRef<ImageFlipHandle>(null)
  const I3 = useRef<ImageFlipHandle>(null)

  // Scene definition
  const sceneDefinition: SceneDefinition = {
    steps: [
      {
        delay: 0, // After 2 seconds
        imageActions: [
          {
            target: 'I1',
            actions: [
              { type: 'flip', direction: 'front', duration: 1500 },
              { type: 'moveRelative', x: 0, y: 300, duration: 1500 },
              { type: 'fade', opacity: 0, duration: 1500 },
            ],
          },
          {
            target: 'I2',
            actions: [{ type: 'moveRelative', x: 0, y: 120, duration: 1500 }],
          },
          {
            target: 'I3',
            actions: [{ type: 'moveRelative', x: 0, y: 120, duration: 1500 }],
          },
        ],
      },
      {
        delay: 100, // After another 0.1 seconds
        imageActions: [
          {
            target: 'I1',
            actions: [
              { type: 'unflip', duration: 0 },
              { type: 'move', x: 300, y: 0, duration: 1500 },
            ],
          },
        ],
      },
      // {
      //   delay: 2000, // After another 2 seconds
      //   imageActions: [
      //     {
      //       target: 'I2',
      //       actions: [
      //         { type: 'flip', direction: 'front', duration: 1500 },
      //         { type: 'moveRelative', x: 0, y: 300, duration: 1500 },
      //         { type: 'fade', opacity: 0.3, duration: 1500 },
      //       ],
      //     },
      //     {
      //       target: 'I3',
      //       actions: [{ type: 'moveRelative', x: 0, y: 100, duration: 0 }],
      //     },
      //     {
      //       target: 'I1',
      //       actions: [{ type: 'moveRelative', x: 0, y: 100, duration: 0 }],
      //     },
      //   ],
      // },
    ],
  }

  // Scene execution function
  const executeScene = (scene: SceneDefinition) => {
    let cumulativeDelay = 0

    scene.steps.forEach((step) => {
      cumulativeDelay += step.delay

      setTimeout(() => {
        step.imageActions.forEach((imageAction) => {
          const targetRef = getImageRef(imageAction.target)

          imageAction.actions.forEach((action) => {
            executeAction(targetRef, action)
          })
        })
      }, cumulativeDelay)
    })
  }

  // Helper to get the correct image ref
  const getImageRef = (target: 'I1' | 'I2' | 'I3') => {
    switch (target) {
      case 'I1':
        return I1
      case 'I2':
        return I2
      case 'I3':
        return I3
    }
  }

  // Execute individual action
  const executeAction = (
    ref: React.RefObject<ImageFlipHandle | null>,
    action: Action
  ) => {
    switch (action.type) {
      case 'flip':
        ref.current?.flip(action.direction, action.duration)
        break
      case 'unflip':
        ref.current?.unflip(action.duration)
        break
      case 'move':
        ref.current?.move(action.x, action.y, action.duration)
        break
      case 'moveRelative':
        ref.current?.moveRelative(action.x, action.y, action.duration)
        break
      case 'fade':
        ref.current?.fade(action.opacity, action.duration)
        break
    }
  }

  const handleCanvasClick = () => {
    executeScene(sceneDefinition)
  }

  return (
    <div>
      <Stage width={1200} height={600} className="bg-red-50" onClick={handleCanvasClick}>
        <Layer>
          {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}
          <ImageFlip
            ref={I1}
            // width={300}
            x={200}
            y={200}
            scale={{ x: 0.4, y: 0.4 }}
            image="/hubspot-blocks/write-upsert.png"
            direction="front"
            duration={1500}
            expansionScale={0.5}
          />

          <ImageFlip
            ref={I2}
            x={300}
            y={100}
            scale={{ x: 0.4, y: 0.4 }}
            image="/hubspot-blocks/get-owners.png"
            direction="front"
            duration={1500}
            expansionScale={0.5}
          />

          <ImageFlip
            ref={I3}
            // width={300}
            x={400}
            y={0}
            scale={{ x: 0.4, y: 0.4 }}
            image="/hubspot-blocks/read-batch.png"
            direction="front"
            duration={1500}
            expansionScale={0.5}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Test
