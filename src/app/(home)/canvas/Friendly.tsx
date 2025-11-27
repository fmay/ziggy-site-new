import { FC, useRef, useEffect } from 'react'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'

interface FriendlyProps {
  flip?: number
  restore?: number
  initialX?: number
  initialY?: number
}

const Friendly: FC<FriendlyProps> = ({ flip = 0, restore = 0, initialX = 200, initialY = 100 }) => {
  const imageFlipRef = useRef<ImageFlipHandle>(null)

  // Trigger flip when flip prop changes
  useEffect(() => {
    if (flip > 0) {
      imageFlipRef.current?.flip('back')
    }
  }, [flip])

  // Trigger restore when restore prop changes
  useEffect(() => {
    if (restore > 0) {
      imageFlipRef.current?.unflip(0)
    }
  }, [restore])


  return (
    <ImageFlip
      ref={imageFlipRef}
      x={initialX}
      y={initialY}
      scale={{ x: 0.5, y: 0.5 }}
      image="/hubspot-blocks/read-batch.png"
      direction="back"
      duration={2000}
      expansionScale={1.3}
    />
  )
}

export default Friendly
