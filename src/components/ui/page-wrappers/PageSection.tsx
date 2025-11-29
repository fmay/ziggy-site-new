import { FC, ReactNode } from 'react'
import Image from 'next/image'

interface PageSectionProps {
  children: ReactNode
  paddingY?: number
  paddingX?: number
  bgColor?: string
  image?: string

  alt?: string
}

const PageSection: FC<PageSectionProps> = ({
  children,
  paddingY = 100,
  paddingX = 40,
  bgColor = 'bg-green-50',
  image,
  alt,
}) => {
  if (image) {
    return (
      <div className={`w-full ${bgColor} py-[80px] px-[10px]`}>
        <div className="w-full max-w-[1200px] bg-transparent mx-auto">
          <div className="flex flex-row">
            <div className="w-2/3">{children}</div>
            <div className="w-1/3">
              <Image src={image} alt={alt || 'Section image'} width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full ${bgColor} py-[80px] px-[10px]`}>
      <div className="w-full max-w-[1200px] bg-transparent mx-auto">{children}</div>
    </div>
  )
}

export default PageSection
