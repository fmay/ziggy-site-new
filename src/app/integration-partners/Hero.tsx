import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { GiCheckMark } from 'react-icons/gi'
import CTA from '@/components/ui/cta/CTA'
import styles from '@/app/hero.module.scss'

const Hero = () => (
  <section className={styles.heroSection}>
    <Wavy fromColor="header-footer" toColor="white" variant={WavyVariantEnum.Simple}>
      {/* Overlay for better text readability */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/*Inner Wrapper*/}
        <div className={styles.wrapper}>
          {/*Left Col*/}
          <div className={styles.col1}>
            {/* Main Heading */}
            <h1 className={styles.heading}>Become an Integration Partner</h1>

            {/*Subheading*/}
            <div className={styles.subheading}>
              {/*<p className={styles.subheading}>*/}
              {/*  Runs on your servers. Easy access to the widest range of data sources. Fully*/}
              {/*  customizable. Transparent non usage based pricing.*/}
              {/*</p>*/}
              <ul>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>Simple for your customers to integrate and migrate with your platform</span>
                </li>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>
                    Provide your customers with your own branded and customised Ziggy Blocks that
                    integrate directly with your platform
                  </span>
                </li>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>Open up new customer revenue streams for your business</span>
                </li>
                <li>
                  <GiCheckMark className={styles.checkIcon} />
                  <span>Keep performance & security 100% under your control</span>
                </li>
              </ul>
            </div>
            <CTA label="Contact Us" href="contact" />
          </div>

          {/*Hero Image*/}
          <div className={styles.col2}>
            <div className={styles.heroImage}>
              <Image src="/hero/integration-partners.webp" alt="" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </Wavy>
  </section>
)

export default Hero
