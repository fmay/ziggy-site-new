import { FC } from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
import styles from './CarouselItem.module.scss'

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
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {imageUrl && imageAlt && (
          <Image className={styles.image} src={imageUrl} alt={imageAlt} width={300} height={300} />
        )}
        <div className={styles.lowerContent}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.content}>{children}</div>
          {linkText && (
            <div className={styles.linkWrapper}>
              <a href={linkUrl} className={styles.link}>
                <div className={styles.linkText}>
                  <span>{linkText}</span> <FaLongArrowAltRight className={styles.icon} />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
