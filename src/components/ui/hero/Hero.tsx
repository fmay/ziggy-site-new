'use client'

import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy from '@/components/ui/page-wrappers/Wavy'
import { WavyVariantEnum } from '@/types/wavy'
import { FC } from 'react'
import { tailwindClassToHex } from '@/utils/tailwindColors'
import { useScreenSize } from '@/hooks/useScreenSize'

interface HeroProps {
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
  fromColor: string
  toColor: string
  image: string
  wavyVariant: WavyVariantEnum
  cta?: React.ReactNode
  signoff?: string
  minimal?: boolean
  scale?: number
  imageNudge?: number
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
  imageNudge = 0,
}) => {
  const { isLg } = useScreenSize()
  return (
    <section
      className={`${styles.heroSection} ${minimal ? styles.minimal : ''}`}
      style={{ backgroundColor: tailwindClassToHex(fromColor) }}>
      <Wavy fromColor={fromColor} toColor={toColor} variant={wavyVariant}>
        {/* Overlay for better text readability */}
        <div className={styles.overlay} />

        <div className={`${styles.container} ${minimal ? styles.minimal : ''}`}>
          {/*Inner Wrapper*/}
          <div className={`${styles.wrapper}`}>
            {/*Left Col*/}
            <div className={`${styles.col1}  ${styles.beneath ? styles.beneath : ''}`}>
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
              <div
                className={styles.heroImage}
                style={{ marginTop: `${imageNudge && isLg ? imageNudge + 'px' : '0px'}` }}>
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
