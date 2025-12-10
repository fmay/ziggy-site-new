import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import HomeScene from '@/app/(home)/HomeScene'
import CTA from '@/components/ui/cta/CTA'

interface FlowFeaturesProps {}

const ClusterFeatures: FC<FlowFeaturesProps> = ({}) => {
  const contentImagePairs: ContentImagePair[] = [
    {
      content: (
        <>
          <h2>Level 1</h2>
          <p>
            The basic Ziggy cluster can have two or more servers. One of them runs the database.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Level 1 is fine for testing scaling but is not fault tolerant if the database server
            goes down.
          </p>
          <CTA label="Docs" href="https://docs.ziggyservices.com/user-guide/cluster/levels" />
        </>
      ),
      contentNudge: 30,
      image: '/product/cluster/level1.webp',
    },
    {
      content: (
        <>
          <h2>Level 2</h2>
          <p>
            When you need both high performance and fault tolerance. The database can run in a
            managed service such as AWS RDS or in your own database cluster.
          </p>
          <CTA label="Docs" href="https://docs.ziggyservices.com/user-guide/cluster/levels" />
        </>
      ),
      contentNudge: 30,
      image: '/product/cluster/level2.webp',
    },
    {
      content: (
        <>
          <h2>Monitoring</h2>
          <p>
            Ziggy comes with several monitoring tools for the system and individual servers.
          </p>
          <p>
            System resources, flows per second, queue sizes, queue overflow to database can all be
            monitored in the UI in real time.
          </p>
          <CTA label="Docs" href="https://docs.ziggyservices.com/user-guide/cluster/monitoring" />
        </>
      ),
      image: '/product/cluster/monitor.webp',
    },
    {
      content: (
        <>
          <h2>Load Testing</h2>
          <p>
            We even offer a built-in load tester where you can run Flows under expected and extreme
            conditions.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Use Ziggy monitoring to see exactly how the system and each server is performing.
          </p>
          <CTA label="Docs" href="https://docs.ziggyservices.com/user-guide/cluster/load-testing" />

        </>
      ),
      image: '/product/cluster/load-test.webp',
    },
  ]

  return (
    <div className="">
      {/* Other page content above */}

      {/* The ScrollContentImagePairs component */}
      <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      {/* Other page content below */}
    </div>
  )
}

export default ClusterFeatures
