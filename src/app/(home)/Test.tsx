'use client'

import { FC, useRef, useState, useEffect } from 'react'
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
  const [friendlyY, setFriendlyY] = useState(50)

  const handleCanvasClick = () => {
    // Trigger Friendly flip
    setFlipTrigger(prev => prev + 1)

    // Trigger line drawing
    lineDrawRef.current?.draw()
  }

  // Restore Friendly at new Y position after 3 seconds
  useEffect(() => {
    if (flipTrigger > 0) {
      const timer = setTimeout(() => {
        setFriendlyY(150)
        setRestoreTrigger(prev => prev + 1)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [flipTrigger])

  return (
    <div>
      <Stage width={600} height={600} onClick={handleCanvasClick}>
        <Layer>
          <Friendly flip={flipTrigger} restore={restoreTrigger} initialX={200} initialY={friendlyY} />
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
        </Layer>
      </Stage>
    </div>
  )
}

export default Test
