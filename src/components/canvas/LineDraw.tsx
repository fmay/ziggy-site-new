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
  const [progress, setProgress] = useState(0)
  const deleteTimeoutRef = useRef<number | null>(null)

  // Clean up timeout on unmount
  useEffect(() => {
   return () => {
    if (deleteTimeoutRef.current !== null) {
     clearTimeout(deleteTimeoutRef.current)
    }
   }
  }, [])

  // Get points array based on progress (0 to 1)
  const getProgressPoints = (prog: number): number[] => {
   if (prog === 0) {
    return []
   }

   // Calculate the current end point based on progress
   const currentEndX = x + (endX - x) * prog
   const currentEndY = y + (endY - y) * prog

   return [x, y, currentEndX, currentEndY]
  }

  // Expose draw and restore methods
  useImperativeHandle(ref, () => ({
   draw: () => {
    // Clear any pending delete timeout
    if (deleteTimeoutRef.current !== null) {
     clearTimeout(deleteTimeoutRef.current)
     deleteTimeoutRef.current = null
    }

    // Reset to start
    setProgress(0)

    // Schedule auto-delete if deleteDelay is set (start timer immediately)
    if (deleteDelay > 0) {
     deleteTimeoutRef.current = window.setTimeout(() => {
      ref && typeof ref !== 'function' && ref.current?.restore()
     }, deleteDelay)
    }

    if (duration === 0) {
     // Draw immediately
     setProgress(1)
    } else {
     // Animate drawing
     const startTime = Date.now()

     const animate = () => {
      const elapsed = Date.now() - startTime
      const prog = Math.min(elapsed / duration, 1)

      setProgress(prog)

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
     setProgress(0)
    } else {
     // Animate restoration (reverse the line drawing)
     const startTime = Date.now()
     const startProgress = progress

     const animate = () => {
      const elapsed = Date.now() - startTime
      const animProgress = Math.min(elapsed / duration, 1)

      // Animate from current progress back to 0
      setProgress(startProgress * (1 - animProgress))

      if (animProgress < 1) {
       requestAnimationFrame(animate)
      }
     }

     animate()
    }
   },
  }), [duration, deleteDelay, progress])

  const points = getProgressPoints(progress)

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
