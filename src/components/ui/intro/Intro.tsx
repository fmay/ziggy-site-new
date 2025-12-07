import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { HiOutlineServer } from 'react-icons/hi2'
import styles from './Intro.module.scss'

interface IntroProps {
  title: string
  description?: ReactNode
  image?: string
  imageAlt?: string
  imageScale?: number
  imageNudge?: number
  hasCTA?: boolean
  right?: boolean
  className?: string
}

const Intro: FC<IntroProps> = ({
  title,
  description,
  image,
  imageAlt = 'Intro image',
  imageScale = 1,
  imageNudge = 0,
  hasCTA,
  right,
  className
}) => {
  const getMarginY = () => {
    if (hasCTA) return -90
    if (imageNudge) return imageNudge
    return 0
  }

  const textContent = (
    <div className={styles.textContent}>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  )

  // If right prop is true, always use 2-column layout
  if (right || image) {
    const imageContent = image ? (
      <div
        className={styles.imageWrapper}
        style={{ transform: `scale(${imageScale})`, marginTop: getMarginY() }}>
        <Image
          src={image}
          alt={imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image}
        />
      </div>
    ) : (
      <div className={styles.column}></div>
    )

    return (
      <div className={`${styles.container} ${className}`}>
        <div className={styles.column}>{right ? imageContent : textContent}</div>
        <div className={styles.column}>{right ? textContent : imageContent}</div>
      </div>
    )
  }

  return textContent
}

export default Intro
