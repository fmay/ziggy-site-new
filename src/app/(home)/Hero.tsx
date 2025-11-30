import styles from './hero.module.scss'
import Image from 'next/image'
import HomeScene from '@/app/(home)/hero-scene/HomeScene'

const Hero = () => (
  <section className={styles.heroSection}>
    {/* Overlay for better text readability */}
    <div className={styles.overlay} />

    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.heading}>
        Integrations and Automations that run on <strong>your</strong> servers
      </h1>

      {/*Home Scene*/}
      <div className="object-contain object-top mx-auto">
        <HomeScene bgColor="red"/>
      </div>

      {/*Subheading*/}
      <div className={styles.subheading}>
        <p className={styles.subheading}>
          Blazingly fast to build. Blazingly fast to execute. Fully customizable. Transparent
          non-usage based pricing.
        </p>
      </div>
    </div>
  </section>
)

export default Hero
