import { FC, ReactNode } from 'react'
import StackCard from '@/components/ui/stack-card/StackCard'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Carousel from '@/components/ui/carousel/Carousel'
import styles from '@/components/ui/carousel/CarouselItem.module.scss'

const HomePricing: FC = () => {
  return (
    <PageSection>
      <div className="section-intro">
        <h2>Transparent pricing</h2>
        <p>
          We hope you'll agree that our pricing is not only low, but it steers well clear of hidden
          costs associated with ETL platforms, Make.com and Zapier let alone custom development.
        </p>
      </div>
      <Carousel slidesToShow={3}>
        {/*Always included*/}
        <div className="mx-4">
          <div className={styles.carouselItem}>
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <h3 className={styles.title}>Always included</h3>
              <p className={styles.content}>
                One production server, one development server, one staging server
              </p>
              <a href="#" className={styles.link}>
                Pricing →
              </a>
            </div>
          </div>
        </div>

        {/*No usage based costs*/}
        <div className="mx-4">
          <div className={styles.carouselItem}>
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <h3 className={styles.title}>No usage based costs</h3>
              <p className={styles.content}>
                As you add more and more Ziggy Flows, you don't pay a cent more
                more
              </p>
              <a href="#" className={styles.link}>
                Pricing →
              </a>
            </div>
          </div>
        </div>

        {/*No usage based costs*/}
        <div className="mx-4">
          <div className={styles.carouselItem}>
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <h3 className={styles.title}>What costs extra?</h3>
              <p className={styles.content}>
                We only charge extra for additional servers. Check out the pricing page calculator.
              </p>
              <a href="#" className={styles.link}>
                Pricing →
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </PageSection>
  )
}

export default HomePricing
