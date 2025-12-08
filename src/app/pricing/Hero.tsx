import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { GiCheckMark } from 'react-icons/gi'
import CTA from '@/components/ui/cta/CTA'
import styles from '@/app/hero.module.scss'

const Hero = () => (
  <section className={styles.heroSection}>
    <Wavy fromColor="header-footer" toColor="pale-blue" variant={WavyVariantEnum.Simple}>
      {/* Overlay for better text readability */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/*Inner Wrapper*/}
        <div className={styles.wrapper}>
          {/*Left Col*/}
          <div className={styles.col1}>
            {/* Main Heading */}
            <h1 className={styles.heading}>Pricing</h1>

            {/*Subheading*/}
            <div className={styles.subheading}>
              <p className={styles.subheading}>
                Our subscription prices are the lowest you'll find. But you will spend a lot less in
                staff time and cost, too.
              </p>
            </div>
            <CTA label="Contact Us" href="contact" />
          </div>

          {/*Hero Image*/}
          <div className={styles.col2}>
            <div className={styles.heroImage}>
              <Image src="/hero/pricing.webp" alt="" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </Wavy>
  </section>
)

export default Hero
