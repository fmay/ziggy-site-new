import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'

const Hero = () => (
  <section className={styles.heroSection}>
    <Wavy fromColor="header-footer" toColor="gray-100" variant={WavyVariantEnum.Simple}>
      {/* Overlay for better text readability */}
      <div className={styles.container}>
        {/*Inner Wrapper*/}
        <div className={styles.wrapper}>
          {/*Left Col*/}
          <div className={styles.col1}>
            {/* Main Heading */}
            <h1 className={styles.heading}>Ziggy - a new Automation and Integration Platform.</h1>

            {/*Subheading*/}
            <div className={styles.subheading}>
              <p>
                Automate the movement of data from anywhere to anywhere else!
              </p>
              <p>
                Runs on <strong>your</strong> servers, giving you full control over security,
                performance and cost. And it's exceptionally easy to use and fully extensible.
              </p>
            </div>
            <p className={styles.signoffDesktop}>Ziggy it!</p>
            <CTA label="Ziggy Features" href="features" />
          </div>

          {/*Hero Image*/}
          <div className={styles.col2}>
            <div className={styles.heroImage}>
              <Image src="/hero/home.webp" alt="" width={600} height={600} />
            </div>
          </div>

          <p className={styles.signoffMobile}>Ziggy it!</p>
        </div>
      </div>
    </Wavy>
  </section>
)

export default Hero
