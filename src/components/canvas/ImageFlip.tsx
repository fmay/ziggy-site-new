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
 direction: 'front' | 'back'
 opacity: number
 duration: number
 expansionScale: number
 radius?: number
 shadow?: {
  color: string
  blur: number
  offsetX: number
  offsetY: number
  opacity?: number
 }
}

export interface ImageFlipHandle {
 flip: () => void
 restore: () => void
}

const ImageFlip = forwardRef<ImageFlipHandle, ImageFlipProps>(
 ({ x, y, scale, image: imageUrl, direction, opacity, duration, expansionScale, radius = 0, shadow }, ref) => {
  const shapeRef = useRef<Konva.Shape>(null)
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null)
  const [trapezoidState, setTrapezoidState] = useState({
   bottomWidth: 0,
   topWidth: 0,
   height: 0,
   currentOpacity: 1,
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
        }
      : {
         bottomWidth: targetWidth,
         topWidth: initialWidth,
         height: 10, // Nearly flat
         currentOpacity: opacity,
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
     })

     if (progress < 1) {
      requestAnimationFrame(animate)
     }
    }

    animate()
   },

   restore: () => {
    if (!loadedImage) return

    const startTime = Date.now()
    const initialWidth = loadedImage.width * scale.x
    const initialHeight = loadedImage.height * scale.y
    const startValues = trapezoidState
    const targetValues = {
     bottomWidth: initialWidth,
     topWidth: initialWidth,
     height: initialHeight,
     currentOpacity: 1,
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
     })

     if (progress < 1) {
      requestAnimationFrame(animate)
     }
    }

    animate()
   },
  }))

  if (!loadedImage) return null

  return (
   <Shape
    ref={shapeRef}
    sceneFunc={(context, shape) => {
     const imgWidth = loadedImage.width
     const imgHeight = loadedImage.height
     const { bottomWidth, topWidth, height, currentOpacity } = trapezoidState

     // Enable high-quality image smoothing
     context.imageSmoothingEnabled = true
     if ('imageSmoothingQuality' in context) {
      ;(context as any).imageSmoothingQuality = 'high'
     }

     // Apply shadow if specified
     if (shadow) {
      context.shadowColor = shadow.color
      context.shadowBlur = shadow.blur
      context.shadowOffsetX = shadow.offsetX
      context.shadowOffsetY = shadow.offsetY
      if (shadow.opacity !== undefined) {
       // Parse the color and apply opacity
       const tempAlpha = context.globalAlpha
       context.globalAlpha = shadow.opacity
       context.shadowColor = shadow.color
       context.globalAlpha = tempAlpha
      }
     }

     // Set opacity
     context.globalAlpha = currentOpacity

     // Check if image is in rectangular state (not transformed)
     const isRectangular = Math.abs(bottomWidth - topWidth) < 0.1 && height > 50

     if (isRectangular) {
      // Use simple drawImage for rectangular state (no artifacts)
      if (radius > 0) {
       // Draw with rounded corners
       context.save()
       context.beginPath()
       const r = Math.min(radius, bottomWidth / 2, height / 2)
       context.moveTo(x + r, y)
       context.lineTo(x + bottomWidth - r, y)
       context.arcTo(x + bottomWidth, y, x + bottomWidth, y + r, r)
       context.lineTo(x + bottomWidth, y + height - r)
       context.arcTo(x + bottomWidth, y + height, x + bottomWidth - r, y + height, r)
       context.lineTo(x + r, y + height)
       context.arcTo(x, y + height, x, y + height - r, r)
       context.lineTo(x, y + r)
       context.arcTo(x, y, x + r, y, r)
       context.closePath()
       context.clip()
       context.drawImage(loadedImage, x, y, bottomWidth, height)
       context.restore()
      } else {
       context.drawImage(loadedImage, x, y, bottomWidth, height)
      }
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

       // Calculate x offset to center the strip
       const stripX = x - (stripWidth - bottomWidth) / 2
       const nextStripX = x - (nextStripWidth - bottomWidth) / 2

       // Draw strip from source image
       const sourceY = stripY * imgHeight
       const sourceHeight = imgHeight / strips
       const stripHeight = height / strips

       context.save()
       context.beginPath()
       // Add overlap by extending the strip slightly
       const yStart = y + stripY * height - (i > 0 ? overlap : 0)
       const yEnd = y + nextStripY * height + (i < strips - 1 ? overlap : 0)

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
