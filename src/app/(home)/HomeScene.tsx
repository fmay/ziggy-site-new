'use client'

import { FC, useRef } from 'react'
import CanvasScene, { SceneDefinition } from '../../components/canvas/CanvasScene'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'
import ImageMorph, { ImageMorphHandle } from '@/components/canvas/ImageMorph'

const HomeScene: FC = () => {
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
            actions: [{ type: 'moveRelative', x: 0, y: 100, duration: 1500 }],
          },
          {
            target: CardFast,
            actions: [{ type: 'moveRelative', x: 0, y: 100, duration: 1500 }],
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
              { type: 'fade', opacity: 100, duration: 20 },
              { type: 'zIndex', value: 0 }, // Set specific layer
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

  return (
    <CanvasScene scene={sceneDefinition}>
      {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}
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

      <ImageFlip
        ref={CardOneInstance}
        x={200}
        y={100}
        zIndex={1}
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
        zIndex={2}
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
        x={50}
        y={120}
        endX={200}
        endY={260}
        stroke={2}
        color={'#ff0000'}
        duration={600}
        // deleteDelay={3000}
      />

      {/*<ImageMorph*/}
      {/*  ref={ERP}*/}
      {/*  x={30}*/}
      {/*  y={200}*/}
      {/*  scale={0.8}*/}
      {/*  image1={'/canvas/icons/erp.gray.png'}*/}
      {/*  image2={'/canvas/icons/erp.color.png'}*/}
      {/*  duration={1000}*/}
      {/*/>*/}
    </CanvasScene>
  )
}

export default HomeScene
