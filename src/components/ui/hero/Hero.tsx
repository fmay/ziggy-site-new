import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy from '@/components/ui/page-wrappers/Wavy'
import { WavyVariantEnum } from '@/types/wavy'
import { FC } from 'react'

interface HeroProps {
  title: string
  subtitle: string | React.ReactNode
  fromColor: string
  toColor: string
  image: string
  wavyVariant: WavyVariantEnum
  cta?: React.ReactNode
  signoff?: string
  minimal?: boolean
  scale?: number
  contentNudge?: number
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  fromColor,
  toColor,
  image,
  wavyVariant,
  cta,
  signoff,
  minimal,
  scale = 1,
  contentNudge = 0,
}) => {
  console.log('Hero:', title, 'wavyVariant:', wavyVariant)
  return (
    <section className={styles.heroSection}>
      <Wavy fromColor={fromColor} toColor={toColor} variant={wavyVariant}>
        {/* Overlay for better text readability */}
        <div className={styles.overlay} />

        <div className={`${styles.container} ${minimal ? styles.minimal : ''}`}>
          {/*Inner Wrapper*/}
          <div className={`${styles.wrapper}`}>
            {/*Left Col*/}
            <div className={`${styles.col1}  ${styles.beneath ? styles.beneath : ''}`}>
              {/* TITLE */}
              <h1
                className={styles.heading}
                style={{ marginTop: `${contentNudge && contentNudge + 'px'}` }}>
                {title}
              </h1>

              {/*SUBTITLE*/}
              <div className={styles.subheading}>{subtitle}</div>

              {/*CTA*/}
              {signoff && <p className={styles.signoffDesktop}>{signoff}</p>}
              {cta && <div className={`${styles.ctaButtons} ${styles.desktop}`}>{cta}</div>}
            </div>

            {/*IMAGE*/}
            <div className={styles.col2}>
              <div className={styles.heroImage}>
                <Image src={image} alt="" width={600 * scale} height={0} />
              </div>
            </div>

            {signoff && <p className={styles.signoffMobile}>{signoff}</p>}
            {cta && <div className={`${styles.ctaButtons} ${styles.mobile}`}>{cta}</div>}
          </div>
        </div>
      </Wavy>
    </section>
  )
}

export default Hero
