import { FC, ReactNode } from 'react'
import Image from 'next/image'
import styles from './SimplePair.module.scss'

interface SimplePairProps {
  swap?: boolean
  title: string
  subtitle: string
  imageCopy: ReactNode
  image: string
  scale?: number
  contentNudge?: number
}

const SimplePair: FC<SimplePairProps> = ({ swap = false, title, subtitle, imageCopy, image, scale = 1, contentNudge =0 }) => {
  return (
    <div className={styles.container}>

      {/* Second Row - Image and Image Copy */}
      <div className={`${styles.imageRow} ${swap ? styles.swapped : ''}`}>
        <div className={styles.imageCopyColumn} style={{ paddingTop: `${contentNudge}px` }}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.subCopy}>{imageCopy}</div>
        </div>
        <div className={styles.imageColumn}>
          <div
            style={{
              width: `${600 * scale}px`,
              margin: '0 auto',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              src={image}
              alt={title}
              width={600 * scale}
              height={0}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimplePair