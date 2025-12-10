import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { FC } from 'react'

const NUDGE_UP = 100 // pixels

interface HeroProps {
  title: string
  subtitle: string | React.ReactNode
  fromColor: string
  toColor: string
  image: string
  wavyVariant: WavyVariantEnum
  cta?: React.ReactNode
  signoff?: string
  beneath?: React.ReactNode
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
  beneath
}) => (
  <section className={styles.heroSection}>
    <Wavy fromColor={fromColor} toColor={toColor} variant={wavyVariant}>
      {/* Overlay for better text readability */}
      <div className={styles.overlay} />

      <div
        className={styles.container}
        style={beneath ? { marginTop: `-${NUDGE_UP}px` } : undefined}
      >
        {/*Inner Wrapper*/}
        <div className={styles.wrapper}>
          {/*Left Col*/}
          <div className={styles.col1}>
            {/* TITLE */}
            <h1 className={styles.heading}>{title}</h1>

            {/*SUBTITLE*/}
            <div className={styles.subheading}>{subtitle}</div>

            {/*CTA*/}
            {signoff && <p className={styles.signoffDesktop}>{signoff}</p>}
            {cta && <div className={`${styles.ctaButtons} ${styles.desktop}`}>{cta}</div>}
          </div>

          {/*IMAGE*/}
          <div className={styles.col2}>
            <div className={styles.heroImage}>
              <Image src={image} alt="" width={600} height={600} />
            </div>
          </div>

          {signoff && <p className={styles.signoffMobile}>{signoff}</p>}
          {cta && <div className={`${styles.ctaButtons} ${styles.mobile}`}>{cta}</div>}

        </div>

        {beneath && <div className={styles.beneath}>{beneath}</div>}
      </div>
    </Wavy>
  </section>
)

export default Hero
