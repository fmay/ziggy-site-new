import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { GiCheckMark } from 'react-icons/gi'
import CTA from '@/components/ui/cta/CTA'

const Hero = () => (
  <section className={styles.heroSection}>
    <Wavy fromColor="header-footer" toColor="gray-100" variant={WavyVariantEnum.Simple}>
      {/* Overlay for better text readability */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/*Inner Wrapper*/}
        <div className={styles.wrapper}>
          {/*Left Col*/}
          <div className={styles.col1}>
            {/* Main Heading */}
            <h1 className={styles.heading}>
              The Automation and Integration Platform. New and Different.
            </h1>

            {/*Subheading*/}
            <div className={styles.subheading}>
              {/*<p className={styles.subheading}>*/}
              {/*  Runs on your servers. Easy access to the widest range of data sources. Fully*/}
              {/*  customizable. Transparent non usage based pricing.*/}
              {/*</p>*/}
              <ul>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>Runs on your servers</span>
                </li>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>Wonderfully easy to use</span>
                </li>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>Fully customizable</span>
                </li>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>Transparent non usage based pricing</span>
                </li>
              </ul>
            </div>
            <p className={styles.signoffDesktop}>Ziggy it!</p>
            <CTA label="The Ziggy Platform" href="platform" />

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
