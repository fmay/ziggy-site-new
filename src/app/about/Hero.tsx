import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import Mission from '@/app/about/Mission'

const Hero = () => (
  <section className={styles.heroSection}>
    <Wavy fromColor="header-footer" toColor="header-footer" variant={WavyVariantEnum.Simple}>
      {/* Overlay for better text readability */}
      <div className={styles.container}>
        {/*Inner Wrapper*/}
        <div className={styles.wrapper}>
          {/*Left Col*/}
          <div className={styles.col1}>
            {/* Main Heading */}
            <h1 className={styles.heading}>About Us</h1>

            {/*Subheading*/}
            <div className={styles.subheading}>
              <p className="text-lg">
                Ziggy was born out of a recognition that data automation, integration and migration
                also known as the Extract Transform and Load (ETL) space was in desperate need of
                innovation.
              </p>
            </div>
          </div>

          {/*Hero Image*/}
          <div className={styles.col2}>
            <div className={styles.heroImage}>
              <Image src="/hero/about.webp" alt="" width={600} height={600} />
            </div>
          </div>
        </div>
        <Mission />
      </div>
    </Wavy>
  </section>
)

export default Hero
