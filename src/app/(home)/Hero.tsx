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
      {/* Main Heading */}
      <h1 className={styles.heading}>The new ETL pioneer</h1>

      {/*Image*/}
      <div className={styles.subheadingImage}>
        <img src="https://picsum.photos/800/800" alt="Placeholder" />
      </div>

      {/*Subheading*/}
      <div className={styles.subheading}>
        Build blazingly fast integrations and migrations unbelievably quickly and for so much less.
        Ziggy runs on <strong>your</strong> servers so you have total control over security and performance.
      </div>


      {/* CTA Buttons */}
      {/*<div className={styles.ctaButtons}>*/}
      {/*  <button className={styles.primaryButton}>*/}
      {/*    Start now*/}
      {/*  </button>*/}
      {/*  <button className={styles.secondaryButton}>*/}
      {/*    Contact sales*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  </section>
)

export default Hero
