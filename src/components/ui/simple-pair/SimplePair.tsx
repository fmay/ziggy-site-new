import { FC, ReactNode } from 'react'
import Image from 'next/image'
import styles from './SimplePair.module.scss'

interface SimplePairProps {
  swap?: boolean
  title: string
  subtitle: string
  imageCopy: ReactNode
  image: string
}

const SimplePair: FC<SimplePairProps> = ({ swap = false, title, subtitle, imageCopy, image }) => {
  return (
    <div className={styles.container}>
      {/* First Row - Title and Subtitle */}
      <div className={`${styles.textColumn} ${swap ? styles.swapped : ''}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {/* Second Row - Image and Image Copy */}
      <div className={`${styles.imageColumn} ${swap ? styles.swapped : ''}`}>
        <Image src={image} alt={title} width={600} height={400} className={styles.image} />
      </div>
      <div className={`${styles.imageCopyColumn} ${swap ? styles.swapped : ''}`}>
        {imageCopy}
      </div>
    </div>
  )
}

export default SimplePair