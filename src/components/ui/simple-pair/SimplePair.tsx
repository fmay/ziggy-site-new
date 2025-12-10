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
  cta? : ReactNode
}

const SimplePair: FC<SimplePairProps> = ({ swap = false, title, subtitle, imageCopy, image, cta, scale = 1, contentNudge =0 }) => {
  return (
    <div className={styles.container}>

      <div className={`${styles.imageRow} ${swap ? styles.swapped : ''}`}>
        {/*COL1*/}
        <div className={styles.headerSection} style={{ paddingTop: `${contentNudge}px` }}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.subCopy}>{imageCopy}</div>
          {cta && <div className={styles.ctaDesktop}>{cta}</div>}
        </div>

        {/*COL2*/}
        <div className={styles.imageColumn}>
          <div
            className={styles.imageWrapper}
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
          {cta && <div className={styles.ctaMobile}>{cta}</div>}
        </div>
      </div>
    </div>
  )
}

export default SimplePair