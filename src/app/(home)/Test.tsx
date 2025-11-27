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

interface MorphAction {
  type: 'morph'
  duration?: number
}

type Action = FlipAction | UnflipAction | MoveAction | MoveRelativeAction | FadeAction | MorphAction

interface ImageActions {
  target: 'I1' | 'I2' | 'I3' | 'CRM'
  actions: Action[]
}

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
  const I1 = useRef<ImageFlipHandle>(null)
  const I2 = useRef<ImageFlipHandle>(null)
  const I3 = useRef<ImageFlipHandle>(null)
  const CRM = useRef<ImageMorphHandle>(null)

  // Scene definition
  const sceneDefinition: SceneDefinition = {
    steps: [
      {
        delay: 0, // Start immediately
        duration: 1500, // This step takes 1500ms to complete
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
          {
            target: 'CRM',
            actions: [{ type: 'morph', duration: 1500 }],
          },
        ],
      },
      {
        delay: 100, // Wait 100ms after previous step completes
        duration: 100, // This step takes 1500ms to complete
        imageActions: [
          {
            target: 'I1',
            actions: [
              { type: 'fade', opacity: 100, duration: 100 },
              { type: 'unflip', duration: 0 },
              { type: 'move', x: 300, y: 0, duration: 100 },
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
    let cumulativeTime = 0

    scene.steps.forEach((step) => {
      // Wait for the delay after the previous step's duration
      cumulativeTime += step.delay

      setTimeout(() => {
        step.imageActions.forEach((imageAction) => {
          const targetRef = getImageRef(imageAction.target)

          imageAction.actions.forEach((action) => {
            executeAction(targetRef, action)
          })
        })
      }, cumulativeTime)

      // Add this step's duration to cumulative time
      cumulativeTime += step.duration
    })
  }

  // Helper to get the correct image ref
  const getImageRef = (target: 'I1' | 'I2' | 'I3' | 'CRM') => {
    switch (target) {
      case 'I1':
        return I1
      case 'I2':
        return I2
      case 'I3':
        return I3
      case 'CRM':
        return CRM
    }
  }

  // Execute individual action
  const executeAction = (
    ref: React.RefObject<ImageFlipHandle | ImageMorphHandle | null>,
    action: Action
  ) => {
    switch (action.type) {
      case 'flip':
        if ('flip' in (ref.current || {})) {
          (ref.current as ImageFlipHandle)?.flip(action.direction, action.duration)
        }
        break
      case 'unflip':
        if ('unflip' in (ref.current || {})) {
          (ref.current as ImageFlipHandle)?.unflip(action.duration)
        }
        break
      case 'move':
        if ('move' in (ref.current || {})) {
          (ref.current as ImageFlipHandle)?.move(action.x, action.y, action.duration)
        }
        break
      case 'moveRelative':
        if ('moveRelative' in (ref.current || {})) {
          (ref.current as ImageFlipHandle)?.moveRelative(action.x, action.y, action.duration)
        }
        break
      case 'fade':
        if ('fade' in (ref.current || {})) {
          (ref.current as ImageFlipHandle)?.fade(action.opacity, action.duration)
        }
        break
      case 'morph':
        if ('morph' in (ref.current || {})) {
          (ref.current as ImageMorphHandle)?.morph(action.duration)
        }
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

          <ImageMorph
            ref={CRM}
            x={20}
            y={20}
            scale={0.8}
            image1={'/crm.gray.png'}
            image2={'/crm.color.png'}
            duration={1000}
          />

          <ImageMorph
            ref={CRM}
            x={40}
            y={40}
            scale={0.8}
            image1={'/erp.gray.png'}
            image2={'/erp.color.png'}
            duration={1000}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Test
