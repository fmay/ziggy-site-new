import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/image-stack/StackCard'

interface PerformanceFeaturesProps {}

const PerformanceFeatures: FC<PerformanceFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="Performance tuning"
      description="Tune number of parallel executing flows, system queue sizes, Javascript worker pool size. Then use the load tester to see the results. Rinse and repeat."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/Performance-Tuning"
      ctaNewTab
      graphic="/product/features/running-flows.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Monitor"
      description="Ziggy has two monitoring screens. One shows currently executing flows and another for key server resource levels (shown)."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/Global-Settings#system-monitor"
      ctaNewTab
      graphicBgColor="bg-flow-gray"
      graphic="/product/features/system-monitor.webp"
    />,
    <StackCard
      title="Clustering"
      description="Configuring a Ziggy Cluster is easy. Add multiple instances and optionally configure an external database cluster."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/cluster/overview"
      ctaNewTab
      graphic="/product/features/alerts.webp"
    />,
    <StackCard
      title="Load Testing"
      description="Use Ziggy's internal load tester or use your own for more varied tests."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/Global-Settings#load-test"
      ctaNewTab
      graphic="/product/features/load-test.webp"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <div>
      <div id="javascript" className="section-intro">
        <h3>Performance Features</h3>
        <p>
          Ziggy lets you tune, monitor and manage performance in various ways. There's even an internal load tester.
        </p>
      </div>
      <ImageStack items={items} />
    </div>
  )
}

export default PerformanceFeatures
