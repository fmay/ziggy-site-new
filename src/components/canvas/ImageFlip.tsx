'use client'

import { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react'
import { Shape } from 'react-konva'
import Konva from 'konva'

interface Vector2D {
 x: number
 y: number
}

export interface ImageFlipProps {
 x: number
 y: number
 scale: Vector2D
 image: string
 expansionScale: number

 direction: 'front' | 'back'
 opacity: number
 duration: number
 finalX?: number
 finalY?: number
}

export interface ImageFlipHandle {
 flip: () => void
 restore: () => void
}

const ImageFlip = forwardRef<ImageFlipHandle, ImageFlipProps>(
 ({ x, y, scale, image: imageUrl, direction, opacity, duration, expansionScale, finalX, finalY }, ref) => {
  const shapeRef = useRef<Konva.Shape>(null)
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null)
  const [trapezoidState, setTrapezoidState] = useState({
   bottomWidth: 0,
   topWidth: 0,
   height: 0,
   currentOpacity: 1,
   currentX: x,
   currentY: y,
  })

  // Load image
  useEffect(() => {
   const img = new window.Image()
   img.src = imageUrl
   img.onload = () => {
    setLoadedImage(img)
    // Set initial dimensions based on loaded image and scale
    const width = img.width * scale.x
    const height = img.height * scale.y
    setTrapezoidState({
     bottomWidth: width,
     topWidth: width,
     height: height,
     currentOpacity: 1,
     currentX: x,
     currentY: y,
    })
   }
  }, [imageUrl, scale.x, scale.y])

  // Expose flip and restore methods
  useImperativeHandle(ref, () => ({
   flip: () => {
    if (!loadedImage) return

    const startTime = Date.now()
    const initialWidth = loadedImage.width * scale.x
    const initialHeight = loadedImage.height * scale.y
    const startValues = trapezoidState

    // Calculate target values based on direction
    const targetWidth = initialWidth * expansionScale
    const targetValues =
     direction === 'front'
      ? {
         bottomWidth: initialWidth,
         topWidth: targetWidth,
         height: 10, // Nearly flat
         currentOpacity: opacity,
         currentX: finalX !== undefined ? finalX : startValues.currentX,
         currentY: finalY !== undefined ? finalY : startValues.currentY,
        }
      : {
         bottomWidth: targetWidth,
         topWidth: initialWidth,
         height: 10, // Nearly flat
         currentOpacity: opacity,
         currentX: finalX !== undefined ? finalX : startValues.currentX,
         currentY: finalY !== undefined ? finalY : startValues.currentY,
        }

    const animate = () => {
     const elapsed = Date.now() - startTime
     const progress = Math.min(elapsed / duration, 1)

     // Easing function (ease-in-out)
     const eased =
      progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

     setTrapezoidState({
      bottomWidth:
       startValues.bottomWidth + (targetValues.bottomWidth - startValues.bottomWidth) * eased,
      topWidth: startValues.topWidth + (targetValues.topWidth - startValues.topWidth) * eased,
      height: startValues.height + (targetValues.height - startValues.height) * eased,
      currentOpacity:
       startValues.currentOpacity +
       (targetValues.currentOpacity - startValues.currentOpacity) * eased,
      currentX: startValues.currentX + (targetValues.currentX - startValues.currentX) * eased,
      currentY: startValues.currentY + (targetValues.currentY - startValues.currentY) * eased,
     })

     if (progress < 1) {
      requestAnimationFrame(animate)
     }
    }

    animate()
   },

   restore: () => {
    if (!loadedImage) return

    const initialWidth = loadedImage.width * scale.x
    const initialHeight = loadedImage.height * scale.y

    // Restore immediately without animation
    setTrapezoidState({
     bottomWidth: initialWidth,
     topWidth: initialWidth,
     height: initialHeight,
     currentOpacity: 1,
     currentX: x,
     currentY: y,
    })
   },
  }))

  if (!loadedImage) return null

  return (
   <Shape
    ref={shapeRef}
    sceneFunc={(context, shape) => {
     const imgWidth = loadedImage.width
     const imgHeight = loadedImage.height
     const { bottomWidth, topWidth, height, currentOpacity, currentX, currentY } = trapezoidState

     // Enable high-quality image smoothing
     context.imageSmoothingEnabled = true
     if ('imageSmoothingQuality' in context) {
      ;(context as any).imageSmoothingQuality = 'high'
     }

     // Set opacity
     context.globalAlpha = currentOpacity

     // Check if image is in rectangular state (not transformed)
     const isRectangular = Math.abs(bottomWidth - topWidth) < 0.1 && height > 50

     if (isRectangular) {
      // Use simple drawImage for rectangular state (no artifacts)
      context.drawImage(loadedImage, currentX, currentY, bottomWidth, height)
     } else {
      // Draw image in strips to create trapezoid effect (more strips = smoother)
      const strips = 200
      const overlap = 0.6 // Pixels of overlap to eliminate white lines

      for (let i = 0; i < strips; i++) {
       const stripY = i / strips
       const nextStripY = (i + 1) / strips

       // Interpolate width between bottom and top
       const stripWidth = bottomWidth + (topWidth - bottomWidth) * stripY
       const nextStripWidth = bottomWidth + (topWidth - bottomWidth) * nextStripY

       // Calculate x offset based on direction (anchor to the narrower edge)
       let stripX, nextStripX
       if (direction === 'front') {
        // Bottom edge anchored, center strips relative to bottom
        stripX = currentX + (bottomWidth - stripWidth) / 2
        nextStripX = currentX + (bottomWidth - nextStripWidth) / 2
       } else {
        // Top edge anchored, center strips relative to top
        stripX = currentX + (topWidth - stripWidth) / 2
        nextStripX = currentX + (topWidth - nextStripWidth) / 2
       }

       // Draw strip from source image
       const sourceY = stripY * imgHeight
       const sourceHeight = imgHeight / strips

       context.save()
       context.beginPath()
       // Add overlap by extending the strip slightly
       const yStart = currentY + stripY * height - (i > 0 ? overlap : 0)
       const yEnd = currentY + nextStripY * height + (i < strips - 1 ? overlap : 0)

       context.moveTo(stripX, yStart)
       context.lineTo(stripX + stripWidth, yStart)
       context.lineTo(nextStripX + nextStripWidth, yEnd)
       context.lineTo(nextStripX, yEnd)
       context.closePath()
       context.clip()

       // Draw the strip with scaling and overlap
       context.drawImage(
        loadedImage,
        0,
        sourceY,
        imgWidth,
        sourceHeight,
        stripX,
        yStart,
        stripWidth,
        yEnd - yStart
       )

       context.restore()
      }
     }

     // Reset alpha
     context.globalAlpha = 1

     // Required for Konva
     context.fillStrokeShape(shape)
    }}
   />
  )
 }
)

ImageFlip.displayName = 'ImageFlip'

export default ImageFlip
