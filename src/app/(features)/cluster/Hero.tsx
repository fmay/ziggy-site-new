import styles from './hero.module.scss'
import HomeScene from '@/app/(home)/HomeScene'

const Hero = () => (
  <section className={styles.heroSection}>
    {/* Overlay for better text readability */}

    <div className={styles.container}>
      {/* Main Heading */}
      <h1 className={styles.heading}>The new ETL pioneer</h1>

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
          Run on <strong>your</strong> infrastructure so you have total control over security and
          performance.
        </p>
      </div>
    </div>
  </section>
)

export default Hero
