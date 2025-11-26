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
  height?: string
}

const CarouselItem: FC<CarouselItemProps> = ({
  children,
  title,
  imageAlt,
  imageUrl,
  linkText,
  linkUrl,
  height,
}) => {
  return (
    <div className={styles.wrapper} style={height ? { height } : undefined}>
      <div
        className={styles.card}
        style={height ? { height: '100%', display: 'flex', flexDirection: 'column' } : undefined}>
        {imageUrl && imageAlt && (
          <Image className={styles.image} src={imageUrl} alt={imageAlt} width={300} height={300} />
        )}
        <div
          className={styles.lowerContent}
          style={
            height
              ? { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }
              : undefined
          }>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.content}>{children}</div>
          </div>
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
