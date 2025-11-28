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
 cornerRadius?: number
 zIndex?: number
}

export interface LineDrawHandle {
 draw: () => void
 restore: () => void
 zIndex: (value: number) => void
}

const LineDraw = forwardRef<LineDrawHandle, LineDrawProps>(
 ({ x, y, endX, endY, stroke, color, duration, deleteDelay = 0, cornerRadius = 10, zIndex = -1 }, ref) => {
  const lineRef = useRef<Konva.Line>(null)
  const [startProgress, setStartProgress] = useState(0)
  const [endProgress, setEndProgress] = useState(0)
  const [currentZIndex, setCurrentZIndex] = useState(zIndex)
  const deleteTimeoutRef = useRef<number | null>(null)

  // Clean up timeout on unmount
  useEffect(() => {
   return () => {
    if (deleteTimeoutRef.current !== null) {
     clearTimeout(deleteTimeoutRef.current)
    }
   }
  }, [])

  // Set initial zIndex after line is mounted
  useEffect(() => {
   if (lineRef.current) {
    lineRef.current.zIndex(currentZIndex)
   }
  }, [currentZIndex])

  // Calculate the full path with rounded corner
  const calculateFullPath = (): { points: number[]; totalLength: number } => {
   const points: number[] = []
   let totalLength = 0

   // Vertical segment length
   const verticalLength = Math.abs(endY - y)
   // Horizontal segment length
   const horizontalLength = Math.abs(endX - x)

   // Limit corner radius to not exceed the smaller of the two segments
   const actualRadius = Math.min(cornerRadius, verticalLength / 2, horizontalLength / 2)

   // Direction of movement
   const verticalDir = endY > y ? 1 : -1
   const horizontalDir = endX > x ? 1 : -1

   // Start point
   points.push(x, y)

   // Vertical segment (minus the radius at the end)
   const verticalEndY = y + verticalDir * (verticalLength - actualRadius)
   points.push(x, verticalEndY)
   totalLength += Math.abs(verticalEndY - y)

   // Corner points - the arc should bend inward
   // The corner point before the arc
   const cornerStartX = x
   const cornerStartY = verticalEndY

   // The corner point after the arc
   const cornerEndX = x + horizontalDir * actualRadius
   const cornerEndY = endY

   // Add arc points for the rounded corner (90-degree turn)
   const arcSteps = 10
   for (let i = 1; i <= arcSteps; i++) {
    const t = i / arcSteps
    const angle = (Math.PI / 2) * t

    // Calculate arc position - the arc should curve inward from vertical to horizontal
    let arcX: number
    let arcY: number

    if (horizontalDir > 0 && verticalDir > 0) {
     // Moving right and down - arc curves from bottom to right
     arcX = x + actualRadius * (1 - Math.cos(angle))
     arcY = verticalEndY + actualRadius * Math.sin(angle)
    } else if (horizontalDir > 0 && verticalDir < 0) {
     // Moving right and up - arc curves from top to right
     arcX = x + actualRadius * (1 - Math.cos(angle))
     arcY = verticalEndY - actualRadius * Math.sin(angle)
    } else if (horizontalDir < 0 && verticalDir > 0) {
     // Moving left and down - arc curves from bottom to left
     arcX = x - actualRadius * (1 - Math.cos(angle))
     arcY = verticalEndY + actualRadius * Math.sin(angle)
    } else {
     // Moving left and up - arc curves from top to left
     arcX = x - actualRadius * (1 - Math.cos(angle))
     arcY = verticalEndY - actualRadius * Math.sin(angle)
    }

    points.push(arcX, arcY)
   }
   totalLength += (Math.PI / 2) * actualRadius

   // Horizontal segment
   points.push(endX, endY)
   totalLength += horizontalLength - actualRadius

   return { points, totalLength }
  }

  // Get points array based on start and end progress (0 to 1)
  const getProgressPoints = (startProg: number, endProg: number): number[] => {
   if (endProg === 0 || startProg >= endProg) {
    return []
   }

   const { points: fullPath, totalLength } = calculateFullPath()

   // Calculate distances along the path
   const startDistance = startProg * totalLength
   const endDistance = endProg * totalLength

   // Find points at start and end distances
   const getPointAtDistance = (targetDistance: number): { x: number; y: number; index: number } => {
    let accumulatedDistance = 0

    for (let i = 0; i < fullPath.length - 2; i += 2) {
     const x1 = fullPath[i]
     const y1 = fullPath[i + 1]
     const x2 = fullPath[i + 2]
     const y2 = fullPath[i + 3]

     const segmentLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

     if (accumulatedDistance + segmentLength >= targetDistance) {
      const remainingDistance = targetDistance - accumulatedDistance
      const ratio = remainingDistance / segmentLength
      return {
       x: x1 + (x2 - x1) * ratio,
       y: y1 + (y2 - y1) * ratio,
       index: i
      }
     }

     accumulatedDistance += segmentLength
    }

    // Return last point if we've gone past the end
    return {
     x: fullPath[fullPath.length - 2],
     y: fullPath[fullPath.length - 1],
     index: fullPath.length - 2
    }
   }

   const startPoint = getPointAtDistance(startDistance)
   const endPoint = getPointAtDistance(endDistance)

   const resultPoints: number[] = []
   resultPoints.push(startPoint.x, startPoint.y)

   // Add intermediate points between start and end
   for (let i = startPoint.index + 2; i <= endPoint.index; i += 2) {
    resultPoints.push(fullPath[i], fullPath[i + 1])
   }

   // Add end point if it's different from the last added point
   if (resultPoints[resultPoints.length - 2] !== endPoint.x || resultPoints[resultPoints.length - 1] !== endPoint.y) {
    resultPoints.push(endPoint.x, endPoint.y)
   }

   return resultPoints
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

   zIndex: (value: number) => {
    setCurrentZIndex(value)
    // Use the Konva API to set zIndex on the actual line node
    if (lineRef.current) {
     lineRef.current.zIndex(value)
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
