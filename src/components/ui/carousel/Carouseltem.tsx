import { FC } from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'

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
    <div className="link-small my-4 mx-4">
      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-lg transition-shadow duration-200">
        <h3 className="text-2xl font-semibold text-stripe-navy mb-3">{title}</h3>
        {imageUrl && imageAlt && <Image className="image-treat-rounded" src={imageUrl} alt={imageAlt} width={300} height={300} />}
        <div className="spaced-letters-small my-6">{children}</div>
        {linkText && (
          <div className="mt-3">
            <a href={linkUrl} className="text-stripe-purple hover:underline font-semibold">
              <div className="link-text-small">
                <span>{linkText}</span> <FaLongArrowAltRight className="link-text-small" />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default CarouselItem
