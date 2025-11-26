import { FC, ReactNode } from 'react'
import StackCard from '@/components/ui/stack-card/StackCard'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Carousel from '@/components/ui/carousel/Carousel'
import styles from '@/components/ui/carousel/CarouselItem.module.scss'

const HomePricing: FC = () => {
  const items: ReactNode[] = [
    <StackCard
      title="Included in the standard subscription"
      description="One production server, one development server and one staging server"
      ctaText="Pricing page"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript"
      ctaNewTab
      graphic="/images/flows/js-example.png"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="No usage based costs"
      description="As you add more Ziggy Flows that do more and more you will not be charged a cent more"
      ctaText="Pricing page"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#ai-assistant"
      ctaNewTab
      graphicBgColor="bg-flow-gray"
      graphic="/images/flows/js-ai.png"
    />,
    <StackCard
      title="So what does cost extra?"
      description="We only charge extra for additional servers. Check out the pricing page calculator."
      ctaText="Pricing page"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#debugger"
      ctaNewTab
      graphic="/images/flows/js-debugger.png"
    />,
    <StackCard
      title="AI Explain"
      description="Not sure what's going on? AI Explain will put you out of your misery."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#explain"
      ctaNewTab
      graphic="/images/flows/js-explain.png"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <PageSection>
      <div className="section-intro">
        <h2>Pricing that is beyond fair</h2>
        <p>
          We hope you'll agree that our pricing is not only low, but it steers well clear of hidden
          costs associated with ETL platforms, Make.com and Zapier let alone custom development!
        </p>
      </div>
      <Carousel slidesToShow={3}>
        {/*Always included*/}
        <div className="mx-4">
          <div className={styles.carouselItem}>
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <h3 className={styles.title}>Always included</h3>
              <p className={styles.content}>
                One production server, one development server and one staging server
              </p>
              <a href="#" className={styles.link}>
                Learn more →
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
                As you add more Ziggy Flows that do more and more you will not be charged a cent more
              </p>
              <a href="#" className={styles.link}>
                Learn more →
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
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </PageSection>
  )
}

export default HomePricing
