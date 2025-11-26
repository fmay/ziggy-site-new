import styles from './hero.module.scss'

const Hero = () => (
  <section className={styles.heroSection}>
    {/* Background Image */}
    {/*<div*/}
    {/*  className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"*/}
    {/*  style={{ backgroundImage: 'url(/hero/hero-home.jpg)' }}*/}
    {/*/>*/}

    {/* Overlay for better text readability */}
    <div className={styles.overlay} />

    <div className={styles.container}>
      <div className={styles.content}>
        {/* Main Heading */}
        <h1 className={styles.heading}>
          The new ETL pioneer
        </h1>

        {/* Subheading */}
        <div className={styles.heroList}>
          <div className={styles.row}>
            <div className={styles.column1}>Ziggy Flows</div>
            <div className={styles.column2}>Build blazingly fast integrations and migrations in a fraction of the time</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1}>Ziggy Blocks</div>
            <div className={styles.column2}>Fabulously easy access to all your platforms and data sources</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1}>Ziggy Cluster</div>
            <div className={styles.column2}>Scale as much as you need for any load and high availability</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1}>Secure</div>
            <div className={styles.column2}>Ziggy runs on your servers so it's 100% under you control</div>
          </div>
          <div className={styles.row}>
            <div className={styles.column1}>Cost</div>
            <div className={styles.column2}>Low, predictable and not usage based</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <button className={styles.primaryButton}>
            Start now
          </button>
          <button className={styles.secondaryButton}>
            Contact sales
          </button>
        </div>


      </div>
    </div>
  </section>
)

export default Hero
