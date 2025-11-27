'use client'

import { FC, useRef, useState, useEffect } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  const lineDrawRef = useRef<LineDrawHandle>(null)
  const I1 = useRef<ImageFlipHandle>(null)
  const I2 = useRef<ImageFlipHandle>(null)
  const I3 = useRef<ImageFlipHandle>(null)

  const handleCanvasClick = () => {
    // Example: Call flip, move, and fade in parallel on the same ImageFlip
    // All three animations will run simultaneously
    I1.current?.flip('front', 1500)
    I1.current?.moveRelative(0, 300, 1500)
    I1.current?.fade(0.3, 1500)

    I2.current?.move(300, 200)

    I3.current?.move(300, 100)

    // Trigger line drawing
    lineDrawRef.current?.draw()
  }

  return (
    <div>
      <Stage width={1200} height={600} className="bg-red-50" onClick={handleCanvasClick}>
        <Layer>
          {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}
          <ImageFlip
            ref={I1}
            // width={300}
            x={300}
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
            x={300}
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
