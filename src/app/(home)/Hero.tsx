import styles from './hero.module.scss'
import HomeScene from '@/app/(home)/HomeScene'
import Image from 'next/image'

const Hero = () => (
  <section className={styles.heroSection}>
    {/* Overlay for better text readability */}
    <div className={styles.overlay} />

    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.heading}>
        Integrations and Automations that run on <strong>your</strong> servers
      </h1>

      {/*Image*/}
      <div className="object-contain object-top mx-auto">
        <Image src="/canvas/home/hero/server.svg" alt={'cluster'} width={400} height={400} />
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
