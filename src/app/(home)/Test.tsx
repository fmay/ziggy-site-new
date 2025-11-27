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
  const [flipTrigger, setFlipTrigger] = useState(0)
  const [flipTriggerPerformance, setFlipTriggerPerformance] = useState(0)
  const [restoreTrigger, setRestoreTrigger] = useState(0)
  const [restoreTriggerPerformance, setRestoreTriggerPerformance] = useState(0)
  const [friendlyY, setFriendlyY] = useState(200)
  const [performanceY, setPerformanceY] = useState(50)

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
        setFriendlyY(50)
        setPerformanceY(200)
        setRestoreTrigger(prev => prev + 1)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [flipTrigger])

  return (
    <div>
      <Stage width={600} height={600} onClick={handleCanvasClick}>
        <Layer>
          <Performance flip={flipTriggerPerformance} restore={restoreTriggerPerformance} initialX={200} initialY={performanceY} />
          <Friendly flip={flipTrigger} restore={restoreTrigger} initialX={200} initialY={friendlyY} />
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
