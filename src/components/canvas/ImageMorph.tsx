'use client'

import { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react'
import { Group, Image } from 'react-konva'
import Konva from 'konva'

interface Vector2D {
 x: number
 y: number
}

export interface ImageMorphProps {
 x: number
 y: number
 scale?: number
 image1: string
 image2: string
 duration: number
 width?: number
 height?: number
 morphBackAfter?: number
}

export interface ImageMorphHandle {
 morph: (duration?: number) => void
 reset: (duration?: number) => void
}

const ImageMorph = forwardRef<ImageMorphHandle, ImageMorphProps>(
 ({ x, y, scale = 1, image1: image1Url, image2: image2Url, duration, width, height, morphBackAfter }, ref) => {
  const [loadedImage1, setLoadedImage1] = useState<HTMLImageElement | null>(null)
  const [loadedImage2, setLoadedImage2] = useState<HTMLImageElement | null>(null)
  const [opacity1, setOpacity1] = useState(1)
  const [opacity2, setOpacity2] = useState(0)
  const morphBackTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Load first image
  useEffect(() => {
   const img = new window.Image()
   img.src = image1Url
   img.onload = () => {
    setLoadedImage1(img)
   }
  }, [image1Url])

  // Load second image
  useEffect(() => {
   const img = new window.Image()
   img.src = image2Url
   img.onload = () => {
    setLoadedImage2(img)
   }
  }, [image2Url])

  // Expose morph and reset methods
  useImperativeHandle(ref, () => ({
   morph: (animDuration?: number) => {
    // Clear any pending morph back timeout
    if (morphBackTimeoutRef.current) {
     clearTimeout(morphBackTimeoutRef.current)
     morphBackTimeoutRef.current = null
    }

    const dur = animDuration ?? duration
    const startTime = Date.now()
    const startOpacity1 = opacity1
    const startOpacity2 = opacity2

    const animate = () => {
     const elapsed = Date.now() - startTime
     const progress = Math.min(elapsed / dur, 1)

     // Easing function (ease-in-out)
     const eased =
      progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

     // Crossfade: image1 fades out, image2 fades in
     setOpacity1(startOpacity1 + (0 - startOpacity1) * eased)
     setOpacity2(startOpacity2 + (1 - startOpacity2) * eased)

     if (progress < 1) {
      requestAnimationFrame(animate)
     } else if (morphBackAfter !== undefined) {
      // Schedule morph back after the specified duration
      morphBackTimeoutRef.current = setTimeout(() => {
       // Use reset method to morph back
       ref && typeof ref !== 'function' && ref.current?.reset()
      }, morphBackAfter)
     }
    }

    animate()
   },

   reset: (animDuration?: number) => {
    // Clear any pending morph back timeout
    if (morphBackTimeoutRef.current) {
     clearTimeout(morphBackTimeoutRef.current)
     morphBackTimeoutRef.current = null
    }

    const dur = animDuration ?? duration
    const startTime = Date.now()
    const startOpacity1 = opacity1
    const startOpacity2 = opacity2

    const animate = () => {
     const elapsed = Date.now() - startTime
     const progress = Math.min(elapsed / dur, 1)

     // Easing function (ease-in-out)
     const eased =
      progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

     // Reset: image1 fades in, image2 fades out
     setOpacity1(startOpacity1 + (1 - startOpacity1) * eased)
     setOpacity2(startOpacity2 + (0 - startOpacity2) * eased)

     if (progress < 1) {
      requestAnimationFrame(animate)
     }
    }

    animate()
   },
  }), [duration, opacity1, opacity2, morphBackAfter])

  // Cleanup timeout on unmount
  useEffect(() => {
   return () => {
    if (morphBackTimeoutRef.current) {
     clearTimeout(morphBackTimeoutRef.current)
    }
   }
  }, [])

  // Don't render anything if image1 hasn't loaded yet
  if (!loadedImage1) return null

  return (
   <Group x={x} y={y} scaleX={scale} scaleY={scale}>
    {loadedImage1 && (
     <Image
      image={loadedImage1}
      width={width ?? loadedImage1.width}
      height={height ?? loadedImage1.height}
      opacity={opacity1}
     />
    )}
    {loadedImage2 && (
     <Image
      image={loadedImage2}
      width={width ?? loadedImage2.width}
      height={height ?? loadedImage2.height}
      opacity={opacity2}
     />
    )}
   </Group>
  )
 }
)

ImageMorph.displayName = 'ImageMorph'

export default ImageMorph
