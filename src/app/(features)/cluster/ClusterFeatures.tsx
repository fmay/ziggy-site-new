import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import HomeScene from '@/app/(home)/HomeScene'

interface FlowFeaturesProps {}

const ClusterFeatures: FC<FlowFeaturesProps> = ({}) => {
  const contentImagePairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Level 1</h2>
          <p className="text-lg text-gray-600 mb-4">
            The basic Ziggy cluster has one or more many servers. One of them runs the database.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Ideal for high load but not fault tolerate if the database server goes down.
          </p>
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Level 2</h2>
          <p className="text-lg text-gray-600 mb-4">
            When you need both high load and fault tolerance, you can run the database on any server
            you like.
          </p>
          <p>Use a managed service or your own database cluster.</p>
        </div>
      ),
      image: '/hubspot-blocks/filtering.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Monitoring</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy comes with several monitor tools for the system and individual servers.
          </p>
        </div>
      ),
      scene: <HomeScene scale={1} />,
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Load Testing</h2>
          <p className="text-lg text-gray-600 mb-4">
            We even offer a built-in load tester where you can run any Flow under normal and extreme
            conditions.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Use Ziggy monitoring to see exactly how the system and each server is performing.
          </p>
        </div>
      ),
      image: '/images/flows/parallel.png',
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
