'use client'

import { forwardRef, useImperativeHandle, useState, useRef, useEffect } from 'react'
import { Line } from 'react-konva'
import Konva from 'konva'

export interface LineDrawProps {
 x: number
 y: number
 endX: number
 endY: number
 stroke: number
 color: string
 duration: number
 deleteDelay?: number
}

export interface LineDrawHandle {
 draw: () => void
 restore: () => void
}

const LineDraw = forwardRef<LineDrawHandle, LineDrawProps>(
 ({ x, y, endX, endY, stroke, color, duration, deleteDelay = 0 }, ref) => {
  const lineRef = useRef<Konva.Line>(null)
  const [startProgress, setStartProgress] = useState(0)
  const [endProgress, setEndProgress] = useState(0)
  const deleteTimeoutRef = useRef<number | null>(null)

  // Clean up timeout on unmount
  useEffect(() => {
   return () => {
    if (deleteTimeoutRef.current !== null) {
     clearTimeout(deleteTimeoutRef.current)
    }
   }
  }, [])

  // Get points array based on start and end progress (0 to 1)
  const getProgressPoints = (startProg: number, endProg: number): number[] => {
   if (endProg === 0 || startProg >= endProg) {
    return []
   }

   // Calculate the start and end points based on progress
   const currentStartX = x + (endX - x) * startProg
   const currentStartY = y + (endY - y) * startProg
   const currentEndX = x + (endX - x) * endProg
   const currentEndY = y + (endY - y) * endProg

   return [currentStartX, currentStartY, currentEndX, currentEndY]
  }

  // Expose draw and restore methods
  useImperativeHandle(ref, () => ({
   draw: () => {
    // Clear any pending delete timeout
    if (deleteTimeoutRef.current !== null) {
     clearTimeout(deleteTimeoutRef.current)
     deleteTimeoutRef.current = null
    }

    // Reset to start (line not visible)
    setStartProgress(0)
    setEndProgress(0)

    // Schedule auto-delete if deleteDelay is set (start timer immediately)
    if (deleteDelay > 0) {
     deleteTimeoutRef.current = window.setTimeout(() => {
      ref && typeof ref !== 'function' && ref.current?.restore()
     }, deleteDelay)
    }

    if (duration === 0) {
     // Draw immediately
     setEndProgress(1)
    } else {
     // Animate drawing - end point moves from start to end
     const startTime = Date.now()

     const animate = () => {
      const elapsed = Date.now() - startTime
      const prog = Math.min(elapsed / duration, 1)

      setEndProgress(prog)

      if (prog < 1) {
       requestAnimationFrame(animate)
      }
     }

     animate()
    }
   },

   restore: () => {
    // Clear any pending delete timeout
    if (deleteTimeoutRef.current !== null) {
     clearTimeout(deleteTimeoutRef.current)
     deleteTimeoutRef.current = null
    }

    if (duration === 0) {
     // Restore immediately (hide the line)
     setStartProgress(1)
    } else {
     // Animate restoration - start point moves from start to end (same direction as draw)
     const startTime = Date.now()

     const animate = () => {
      const elapsed = Date.now() - startTime
      const prog = Math.min(elapsed / duration, 1)

      // Animate start point forward to "erase" the line in the same direction
      setStartProgress(prog)

      if (prog < 1) {
       requestAnimationFrame(animate)
      }
     }

     animate()
    }
   },
  }), [duration, deleteDelay])

  const points = getProgressPoints(startProgress, endProgress)

  if (points.length < 2) return null

  return (
   <Line
    ref={lineRef}
    points={points}
    stroke={color}
    strokeWidth={stroke}
    lineCap="round"
    lineJoin="round"
   />
  )
 }
)

LineDraw.displayName = 'LineDraw'

export default LineDraw
