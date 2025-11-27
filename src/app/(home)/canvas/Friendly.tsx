import { FC, useRef, useEffect } from 'react'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'

interface FriendlyProps {
  flip?: number
  restore?: number
}

const Friendly: FC<FriendlyProps> = ({ flip = 0, restore = 0 }) => {
  const imageFlipRef = useRef<ImageFlipHandle>(null)

  // Trigger flip when flip prop changes
  useEffect(() => {
    if (flip > 0) {
      imageFlipRef.current?.flip()
    }
  }, [flip])

  // Trigger restore when restore prop changes
  useEffect(() => {
    if (restore > 0) {
      imageFlipRef.current?.restore()
    }
  }, [restore])


  return (
    <ImageFlip
      ref={imageFlipRef}
      x={200}
      y={100}
      scale={{ x: 0.5, y: 0.5 }}
      image="/hubspot-blocks/read-batch.png"
      direction="front"
      opacity={0}
      duration={2000}
      expansionScale={1.3}
      radius={16}
      shadow={{
        color: 'rgba(0, 0, 0, 0.5)',
        blur: 10,
        offsetX: 5,
        offsetY: 5,
      }}
    />
  )
}

export default Friendly
