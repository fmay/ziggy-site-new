import { FC } from 'react'
import Image from 'next/image'

interface CarouselItemProps {
  children: React.ReactNode
  imageUrl?: string
  imageAlt?: string
  title: string
  linkText?: string
  linkUrl?: string
}

const CarouselItem: FC<CarouselItemProps> = ({
  children,
  title,
  imageAlt,
  imageUrl,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="mx-2">
      <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-2xl font-semibold text-stripe-navy mb-3">{title}</h3>
        {imageUrl && imageAlt && <Image src={imageUrl} alt={imageAlt} width={300} height={300} />}
        <div className="spaced-letters-small">{children}</div>
        {linkText && (
          <a href={linkUrl} className="text-stripe-purple hover:underline font-semibold">
            {linkText}
          </a>
        )}
      </div>
    </div>
  )
}

export default CarouselItem
