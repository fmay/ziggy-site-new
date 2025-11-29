import { FC, ReactNode } from 'react'
import Image from 'next/image'

interface IntroProps {
  title: string
  description?: ReactNode
  image?: string
  imageAlt?: string
  imageScale?: number
}

const Intro: FC<IntroProps> = ({
  title,
  description,
  image,
  imageAlt = 'Intro image',
  imageScale = 1,
}) => {
  if (image) {
    return (
      <div className="flex flex-row items-center">
        <div className="w-2/3">
          <div className="section-title">{title}</div>
          {description && <div className="section-intro">{description}</div>}
        </div>
        <div className="w-1/3" style={{ transform: `scale(${imageScale})` }}>
          <Image
            src={image}
            alt={imageAlt}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="section-title">{title}</div>
      {description && <div className="section-intro">{description}</div>}
    </>
  )
}

export default Intro
