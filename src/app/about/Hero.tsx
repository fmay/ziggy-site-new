import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import Mission from '@/app/pricing/Mission'

const Hero = () => (
  <section className={styles.heroSection}>
    <Wavy fromColor="header-footer" toColor="header-footer" variant={WavyVariantEnum.Simple}>
      {/* Overlay for better text readability */}
      <div className={styles.container}>
        {/*Inner Wrapper*/}
        <div className={styles.wrapper}>
          {/*Left Col*/}
          <div className={styles.col1}>
            {/* Main Heading */}
            <h1 className={styles.heading}>Our Mission</h1>

            {/*Subheading*/}
            <div className={styles.subheading}>
              <p className="text-lg">
                Ziggy was born out of a recognition that data automation, integration and migration
                also known as the Extract Transform and Load (ETL) space was in desperate need of
                innovation.
              </p>
              <p className="text-lg">
                Existing technology service providers are either cumbersome, inflexible and
                expensive or they have cloud based platforms where security can’t be controlled.
              </p>
              <p className="text-lg">
                Also, because of the technology providers current offerings, resourcing data
                automation projects with the right people is challenging. The tasks required demand
                an over-reliance on ‘developer level’ technical resources. These are scarce
                resources for most businesses and can be costly to deploy.
              </p>
            </div>
          </div>

          {/*Hero Image*/}
          <div className={styles.col2}>
            <div className={styles.heroImage}>
              <Image src="/hero/about.webp" alt="" width={600} height={600} />
            </div>
            <Mission />
          </div>
        </div>
      </div>
    </Wavy>
  </section>
)

export default Hero
