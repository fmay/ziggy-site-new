import styles from './hero.module.scss'
import Image from 'next/image'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import Mission from '@/app/about/Mission'

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
            <h1 className={styles.heading}>About Us</h1>

            {/*Subheading*/}
            <div className={styles.subheading}>
              <p className="text-lg">
                Ziggy was born out of a recognition that data automation, integration and migration
                also known as the Extract Transform and Load (ETL) space was in serious need of
                innovation.
              </p>
              <p className="text-lg">
                Existing ETL providers are complex and expensive. Cloud platform like Zapier and
                Make.com leave you without complete control over cost, performance and security.
              </p>
              <p>
                Integration projects usually overrun from a cost and time perspective. This is due
                to complexity of tools and lack of availability of suitable internal resources.
                Ziggy is not only priced sensibly but is is easier to use by less technical users
                enabling projects to be delivered much quicker.
              </p>
              <div className="">
                <p className="!text-[2.0rem] !mt-[50px]">So our mission is simple...</p>
                <p className="!text-[1.5rem] !leading-[2.0rem]">
                  To make it extremely easy to automate and integrate data and processes so the
                  Total Cost of Ownership is heavily reduced and where our customers have total
                  control over security, performance and cost.
                </p>
              </div>
            </div>
          </div>

          {/*Hero Image*/}
          <div className={styles.col2}>
            <div className={styles.heroImage}>
              <Image src="/hero/about.webp" alt="" width={600} height={600} />
            </div>
          </div>
        </div>
        {/*<Mission />*/}
      </div>
    </Wavy>
  </section>
)

export default Hero
