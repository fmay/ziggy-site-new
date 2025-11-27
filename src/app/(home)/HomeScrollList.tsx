import { FC } from 'react'
import ScrollContentImagePairs from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'

const HomeScrollList: FC = () => {
  const HP_Pairs = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Single Instance → Ziggy Cluster
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Most integrations run happily on a single $12 per month cloud server. Most migrations
            will run on your laptop.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            When you need to go big, a Ziggy Cluster provides high availability and lets you scale
            up on your own infrastructure.
          </p>
          <CTA className="mt-20" label="Ziggy Cluster" href="flows" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Integrations and migrations</h2>
          <p>We pride ourselves on making integrations and migrations as easy as they can possibly be. Ziggy Blocks make this possible. Each block does one thing and one thing only.</p>
          <CTA className="mt-20" label="About Ziggy Blocks" href="flows" />
          <p className="text-lg text-gray-600 mb-4">
            Whether you are moving millions of records from one platform to another or updating one
            platform when data changes in another, Ziggy is fast to learn yet incredibly powerful
            and packed with everything you need to
          </p>
          <ul>
            <li>
              Connect to any platform <strong>easily</strong>
            </li>
            <li>Monitor</li>
            <li>Alert</li>
            <li>Stay within rate limits</li>
            <li>Work in Production and Development modes</li>
            <li>Manage secrets and connections</li>
            <li>Schedule flow execution</li>
            <li>and much, much more</li>
          </ul>
          <CTA className="mt-20" label="Feature overview" href="flows" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Secure and easy to deploy</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy runs on the server of your choice. It's a simple Docker installation. This gives
            you complete control over security as well as performance.
          </p>
          <CTA className="mt-20" label="Learn more" href="flows" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
  ]
  return <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
}

export default HomeScrollList
