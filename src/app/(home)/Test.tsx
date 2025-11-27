'use client'

import { FC, useRef, useState, useEffect } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import Konva from 'konva'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'
import Friendly from '@/app/(home)/canvas/Friendly'
import Performance from '@/app/(home)/canvas/Performance'

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  const lineDrawRef = useRef<LineDrawHandle>(null)
  const exampleImageFlipRef = useRef<ImageFlipHandle>(null)

  const handleCanvasClick = () => {
    // Example: Call flip, move, and fade in parallel on the same ImageFlip
    // All three animations will run simultaneously
    exampleImageFlipRef.current?.flip('back', 1500)
    exampleImageFlipRef.current?.move(300, 600, 1500)
    exampleImageFlipRef.current?.fade(0.3, 1500)

    // Trigger line drawing
    lineDrawRef.current?.draw()
  }

  return (
    <div>
      <Stage width={600} height={600} onClick={handleCanvasClick}>
        <Layer>
          {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}
          <ImageFlip
            ref={exampleImageFlipRef}
            x={300}
            y={50}
            scale={{ x: 0.4, y: 0.4 }}
            image="/hubspot-blocks/read-batch.png"
            direction="back"
            duration={1500}
            expansionScale={0.5}
          />

          {/*<Performance flip={flipTriggerPerformance} restore={restoreTriggerPerformance} initialX={200} initialY={performanceY} />*/}
          {/*<Friendly flip={flipTrigger} restore={restoreTrigger} initialX={200} initialY={friendlyY} />*/}
          {/*<LineDraw*/}
          {/*  ref={lineDrawRef}*/}
          {/*  x={400}*/}
          {/*  y={20}*/}
          {/*  path={[*/}
          {/*    { x: 0, y: 0 },*/}
          {/*    { x: 0, y: 100 },*/}
          {/*    { x: 100, y: 100 },*/}
          {/*  ]}*/}
          {/*  stroke={2}*/}
          {/*  color="black"*/}
          {/*  duration={2000}*/}
          {/*  deleteDelay={1000}*/}
          {/*/>*/}
        </Layer>
      </Stage>
    </div>
  )
}

export default Test
