import styles from './hero.module.scss'
import HomeScene from '@/app/(home)/HomeScene'

const Hero = () => (
  <section className={styles.heroSection}>
    {/* Overlay for better text readability */}
    <div className={styles.overlay} />

    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.heading}>Integrations and Automations that run on <strong>your</strong> servers</h1>

      {/*Image*/}
      <div className={styles.subheadingImage}>
        <HomeScene />
      </div>

      {/*Subheading*/}
      <div className={styles.subheading}>
        <p className={styles.subheading}>
          Build blazingly fast integrations and migrations in a fraction of the time and at a fraction of
          the cost of normal ETL platforms.
        </p>
        <p  className={styles.subheading}>
          Customise with he Ziggy plugin system
        </p>
        <p className={styles.subheading}>
          Simple, non-usage based pricing
        </p>
      </div>
    </div>
  </section>
)

export default Hero
