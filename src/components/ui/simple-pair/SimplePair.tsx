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
      <div className={`${styles.textRow} ${swap ? styles.swapped : ''}`}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.textColumn}></div>
      </div>

      {/* Second Row - Image and Image Copy */}
      <div className={`${styles.imageRow} ${swap ? styles.swapped : ''}`}>
        <div className={styles.imageColumn}>
          <Image src={image} alt={title} width={600} height={400} className={styles.image} />
        </div>
        <div className={styles.imageCopyColumn}>
          {imageCopy}
        </div>
      </div>
    </div>
  )
}

export default SimplePair