import styles from './hero.module.scss'
import Image from 'next/image'
import HomeScene from '@/app/(home)/hero-scene/HomeScene'

const Hero = () => (
  <section className={styles.heroSection}>
    {/* Overlay for better text readability */}
    <div className={styles.overlay} />

    <div className={styles.container}>
      {/*Left Col*/}
      <div className={styles.col1}>
        {/* Main Heading */}
        <h1 className={styles.heading}>
          The Automation and Integration Platform - new and different
        </h1>

        {/*Subheading*/}
        <div className={styles.subheading}>
          {/*<p className={styles.subheading}>*/}
          {/*  Runs on your servers. Easy access to the widest range of data sources. Fully*/}
          {/*  customizable. Transparent non usage based pricing.*/}
          {/*</p>*/}
          <ul>
            <li>Runs on your servers</li>
            <li>Easy access to the widest range of data sources</li>
            <li>Fully customizable</li>
            <li>Transparent non usage based pricing</li>
          </ul>
        </div>
        <p className={styles.signoff}>Ziggy it!</p>
      </div>

      {/*Hero Image*/}
      <div className={styles.col2}>
        <div className={styles.heroImage}>
          <Image src="/placeholder.svg" alt="" width={700} height={400} />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
