'use client'

import { forwardRef, useImperativeHandle, useState, useRef, useEffect } from 'react'
import { Line } from 'react-konva'
import Konva from 'konva'

interface Point {
 x: number
 y: number
}

export interface LineDrawProps {
 x: number
 y: number
 path: Point[]
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
 ({ x, y, path, stroke, color, duration, deleteDelay = 0 }, ref) => {
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

  // Calculate total path length
  const calculatePathLength = () => {
   let totalLength = 0
   for (let i = 1; i < path.length; i++) {
    const dx = path[i].x - path[i - 1].x
    const dy = path[i].y - path[i - 1].y
    totalLength += Math.sqrt(dx * dx + dy * dy)
   }
   return totalLength
  }

  // Get point at specific progress along path
  const getPointAtProgress = (prog: number): { x: number; y: number } | null => {
   if (prog <= 0 || path.length === 0) {
    return null
   }

   const totalLength = calculatePathLength()
   const targetLength = prog * totalLength
   let accumulatedLength = 0

   if (targetLength === 0) {
    return { x: x + path[0].x, y: y + path[0].y }
   }

   for (let i = 1; i < path.length; i++) {
    const dx = path[i].x - path[i - 1].x
    const dy = path[i].y - path[i - 1].y
    const segmentLength = Math.sqrt(dx * dx + dy * dy)

    if (accumulatedLength + segmentLength >= targetLength) {
     // We've reached our target length in this segment
     const remainingLength = targetLength - accumulatedLength
     const ratio = remainingLength / segmentLength
     return {
      x: x + path[i - 1].x + dx * ratio,
      y: y + path[i - 1].y + dy * ratio,
     }
    } else {
     accumulatedLength += segmentLength
    }
   }

   // Return last point
   return { x: x + path[path.length - 1].x, y: y + path[path.length - 1].y }
  }

  // Get points array based on start and end progress (0 to 1)
  const getProgressPoints = (startProg: number, endProg: number): number[] => {
   if (endProg === 0 || path.length === 0 || startProg >= endProg) {
    return []
   }

   const totalLength = calculatePathLength()
   const startLength = startProg * totalLength
   const endLength = endProg * totalLength
   let accumulatedLength = 0
   const points: number[] = []

   // Find starting point
   let started = false
   if (startProg === 0) {
    points.push(x + path[0].x, y + path[0].y)
    started = true
   }

   for (let i = 1; i < path.length; i++) {
    const dx = path[i].x - path[i - 1].x
    const dy = path[i].y - path[i - 1].y
    const segmentLength = Math.sqrt(dx * dx + dy * dy)
    const segmentStartLength = accumulatedLength
    const segmentEndLength = accumulatedLength + segmentLength

    // Check if we need to add starting point
    if (!started && segmentEndLength >= startLength) {
     const remainingLength = startLength - segmentStartLength
     const ratio = remainingLength / segmentLength
     const startX = x + path[i - 1].x + dx * ratio
     const startY = y + path[i - 1].y + dy * ratio
     points.push(startX, startY)
     started = true
    }

    // Add intermediate points if we've started
    if (started && segmentEndLength <= endLength) {
     points.push(x + path[i].x, y + path[i].y)
    }

    // Check if we've reached end
    if (started && segmentEndLength >= endLength) {
     const remainingLength = endLength - segmentStartLength
     const ratio = remainingLength / segmentLength
     const endX = x + path[i - 1].x + dx * ratio
     const endY = y + path[i - 1].y + dy * ratio
     if (points[points.length - 2] !== endX || points[points.length - 1] !== endY) {
      points.push(endX, endY)
     }
     break
    }

    accumulatedLength += segmentLength
   }

   return points
  }

  // Expose draw and restore methods
  useImperativeHandle(ref, () => ({
   draw: () => {
    // Clear any pending delete timeout
    if (deleteTimeoutRef.current !== null) {
     clearTimeout(deleteTimeoutRef.current)
     deleteTimeoutRef.current = null
    }

    // Reset to drawing state
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
     // Animate drawing
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

    // Set to full line, then animate start forward (erase from front to back)
    setEndProgress(1)

    if (duration === 0) {
     // Restore immediately
     setStartProgress(1)
    } else {
     // Animate restoration from front to back
     const startTime = Date.now()

     const animate = () => {
      const elapsed = Date.now() - startTime
      const prog = Math.min(elapsed / duration, 1)

      setStartProgress(prog)

      if (prog < 1) {
       requestAnimationFrame(animate)
      }
     }

     animate()
    }
   },
  }))

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
