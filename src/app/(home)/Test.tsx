'use client'

import { FC, useRef, useState } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import Konva from 'konva'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'
import Friendly from '@/app/(home)/canvas/Friendly'

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  const redShapeRef = useRef<Konva.Line>(null)
  const imageFlipRef = useRef<ImageFlipHandle>(null)
  const lineDrawRef = useRef<LineDrawHandle>(null)
  // Initial rectangle: bottom-left, bottom-right, top-right, top-left
  const [points, setPoints] = useState([50, 150, 150, 150, 150, 50, 50, 50])
  const [flipTrigger, setFlipTrigger] = useState(0)
  const [restoreTrigger, setRestoreTrigger] = useState(0)

  const handleCanvasClick = () => {
    // Trigger Friendly flip
    setFlipTrigger(prev => prev + 1)

    // Trigger line drawing
    lineDrawRef.current?.draw()
  }

  return (
    <div>
      <Stage width={600} height={600} onClick={handleCanvasClick}>
        <Layer>
          <Friendly flip={flipTrigger} restore={restoreTrigger} />
          <LineDraw
            ref={lineDrawRef}
            x={400}
            y={20}
            path={[
              { x: 0, y: 0 },
              { x: 0, y: 100 },
              { x: 100, y: 100 },
            ]}
            stroke={2}
            color="black"
            duration={2000}
            deleteDelay={1000}
          />
          {/*<ImageFlip*/}
          {/* ref={imageFlipRef}*/}
          {/* x={200}*/}
          {/* y={100}*/}
          {/* scale={{ x: 0.5, y: 0.5 }}*/}
          {/* image="/hubspot-blocks/read-batch.png"*/}
          {/* direction="front"*/}
          {/* opacity={0}*/}
          {/* duration={2000}*/}
          {/* expansionScale={1.3}*/}
          {/* radius={16}*/}
          {/* shadow={{*/}
          {/*  color: 'rgba(0, 0, 0, 0.5)',*/}
          {/*  blur: 10,*/}
          {/*  offsetX: 5,*/}
          {/*  offsetY: 5,*/}
          {/* }}*/}
          {/*/>*/}
        </Layer>
      </Stage>
    </div>
  )
}

export default Test
