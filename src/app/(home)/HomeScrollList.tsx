import { FC } from 'react'
import ScrollContentImagePairs, { ContentImagePair } from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'

const HomeScrollList: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Integrate, Automate, Migrate
          </h2>
          <div className="">
            <p className="text-lg text-gray-600 mb-4">
              Whether you are moving millions of records from one platform to another or updating
              one platform when data changes in another, Ziggy is fast to learn and feature packed.
            </p>
            <ul>
              <li>Instantly respond to changes in one system and update another</li>
              <li>Automate data warehouse syncing</li>
              <li>High frequency event stream processing (IoT, Telco etc.)  </li>
              <li>Keep platforms and data warehouses in sync</li>
              <li>Migrate and transform large data volumes</li>
            </ul>
          </div>
          <CTA className="mt-10" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/images/customise/home/flows-list.webp',
      contentNudge: 10
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <strong>Your</strong> servers - single instance or cluster.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy gives you complete control over
          </p>
          <ul>
            <li>Performance</li>
            <li>Fault-tolerance</li>
            <li>Security</li>
            <li>Customizations</li>
          </ul>
          <p>
            Start with a low cost 2GB instance. Scale up and out as demand dictates.
          </p>
          <CTA className="mt-20" label="Learn more" href="cluster" />
        </div>
      ),
      image: '/images/customise/home/cluster-configs.webp',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            New revenue streams. Delighted customers.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Create your own collection of Ziggy Blocks that talk to your platform. Then expose these
            to your own customers.
          </p>
          <p>
            We offer special commission based pricing to our <strong>Integration Partners</strong>.
            You can then give them secure and easy access to your platform so they can perform their
            own processes using a white-labelled version of Ziggy.
          </p>
          <CTA className="" label="Learn more" href="integration-partners"/>
        </div>
      ),
      image: '/images/customise/home/custom-flow.webp',
      contentNudge: 90,
    },
  ]
  return <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
}

export default HomeScrollList
