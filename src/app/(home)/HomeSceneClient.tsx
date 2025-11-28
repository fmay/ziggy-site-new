'use client'

import { FC, useRef } from 'react'
import CanvasScene, { SceneDefinition } from '../../components/canvas/CanvasScene'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'
import ImageMorph, { ImageMorphHandle } from '@/components/canvas/ImageMorph'

const HomeSceneClient: FC = () => {
  const CardFast = useRef<ImageFlipHandle>(null)
  const CardOneInstance = useRef<ImageFlipHandle>(null)
  const CardCluster = useRef<ImageFlipHandle>(null)

  const MorphCRMLeft = useRef<ImageMorphHandle>(null)
  const MorphERPLeft = useRef<ImageMorphHandle>(null)

  const LineDBLeft = useRef<LineDrawHandle>(null)
  const LineCRMLeft = useRef<LineDrawHandle>(null)
  const LineERPLeft = useRef<LineDrawHandle>(null)

  const DiffY = 60
  const NumCards = 3

  // Scene definition
  const sceneDefinition: SceneDefinition = {
    steps: [
      // STEP 1
      {
        delay: 0, // Start immediately
        duration: 1500, // This step takes 1500ms to complete
        imageActions: [
          {
            target: CardCluster,
            actions: [
              { type: 'flip', direction: 'front', duration: 1500 },
              { type: 'moveRelative', x: 0, y: NumCards * (DiffY+20), duration: 1500 },
              { type: 'fade', opacity: 0, duration: 1500 },
            ],
          },
          {
            target: LineCRMLeft,
            actions: [{ type: 'draw' }],
          },
          {
            target: CardOneInstance,
            actions: [{ type: 'moveRelative', x: 0, y: DiffY, duration: 1500 }],
          },
          {
            target: CardFast,
            actions: [{ type: 'moveRelative', x: 0, y: DiffY, duration: 1500 }],
          },
        ],
      },
      {
        delay: 100,
        duration: 100,
        imageActions: [
          {
            target: CardCluster,
            actions: [
              { type: 'unflip', duration: 0 },
              { type: 'move', y: 0, duration: 0 },
              { type: 'fade', opacity: 100, duration: 20 },
              { type: 'zIndex', value: 0 }, // Set specific layer
            ],
          },
        ],
      },
      // STEP 2
      {
        delay: 0, // Start immediately
        duration: 1500, // This step takes 1500ms to complete
        imageActions: [
          {
            target: CardOneInstance,
            actions: [
              { type: 'flip', direction: 'front', duration: 1500 },
              { type: 'moveRelative', x: 0, y: DiffY, duration: 1500 },
              { type: 'fade', opacity: 0, duration: 1500 },
            ],
          },
          {
            target: LineERPLeft,
            actions: [{ type: 'draw' }],
          },
          {
            target: CardCluster,
            actions: [{ type: 'moveRelative', x: 0, y: DiffY, duration: 1500 }],
          },
          {
            target: CardFast,
            actions: [{ type: 'moveRelative', x: 0, y: DiffY, duration: 1500 }],
          },
        ],
      },
      {
        delay: 100, // Wait 100ms after previous step completes
        duration: 100, // This step takes 1500ms to complete
        imageActions: [
          {
            target: CardOneInstance,
            actions: [
              { type: 'unflip', duration: 0 },
              { type: 'moveRelative', x: 0, y: -(DiffY - 1) * NumCards, duration: 0 },
              { type: 'fade', opacity: 100, duration: 20 },
              { type: 'zIndex', value: 0 }, // Set specific layer
            ],
          },
        ],
      },
    ],
  }

  return (
    <CanvasScene scene={sceneDefinition}>
      {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}

      {/*FAST & FRIENDLY*/}
      <ImageFlip
        ref={CardFast}
        x={200}
        y={0}
        zIndex={0}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/fast-friendly.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*ONE INSTANCE*/}
      <ImageFlip
        ref={CardOneInstance}
        x={200}
        y={DiffY}
        zIndex={1}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/one-instance.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*CLUSTER*/}
      <ImageFlip
        ref={CardCluster}
        x={200}
        y={2 * DiffY}
        zIndex={2}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/cluster.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      <LineDraw
        ref={LineCRMLeft}
        x={50}
        y={120}
        endX={200}
        endY={260}
        stroke={2}
        color={'#ff0000'}
        duration={600}
        deleteDelay={2000}
      />

      <LineDraw
        ref={LineDBLeft}
        x={50}
        y={120}
        endX={200}
        endY={260}
        stroke={2}
        color={'#ff0000'}
        duration={600}
        deleteDelay={2000}
      />

      <LineDraw
        ref={LineERPLeft}
        x={50}
        y={420}
        endX={200}
        endY={320}
        stroke={2}
        color={'#ff0000'}
        duration={600}
        deleteDelay={2000}
      />

      <ImageMorph
        ref={MorphCRMLeft}
        x={30}
        y={80}
        scale={0.8}
        image1={'/canvas/icons/crm.gray.png'}
        image2={'/canvas/icons/crm.color.png'}
        duration={1000}
      />

      <ImageMorph
        ref={MorphERPLeft}
        x={30}
        y={400}
        scale={0.8}
        image1={'/canvas/icons/erp.gray.png'}
        image2={'/canvas/icons/erp.color.png'}
        duration={1000}
      />
    </CanvasScene>
  )
}

export default HomeSceneClient
