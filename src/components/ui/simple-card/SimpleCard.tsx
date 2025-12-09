import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
import styles from './SimpleCard.module.scss'

interface SimpleCardProps {
  className?: string
  content: string
  imageUrl?: string
  imageAlt?: string
  imageDiv?: ReactNode
  title: string
  linkText?: string
  linkUrl?: string
}

const SimpleCard: FC<SimpleCardProps> = ({
  className,
  content,
  title,
  imageAlt,
  imageUrl,
  imageDiv,
  linkText,
  linkUrl,
}) => {
  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {imageUrl && imageAlt && (
            <div className={styles.image}>
              <Image
                // className={styles.image}
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={0}
                // style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          )}
          {imageDiv && <div className={styles.image}>{imageDiv}</div>}
          <div className={styles.lowerContent}>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.content}>{content}</div>
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
    </div>
  )
}

export default SimpleCard
