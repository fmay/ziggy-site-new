import { FC } from 'react'
import ScrollContentImagePairs from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'

const HomeScrollList: FC = () => {
  const HP_Pairs = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Performance</h2>
          <p className="text-lg text-gray-600 mb-4">
            Normal integrations will run on one $12 per month cloud server. Use a Ziggy Cluster if
            you need to scale up. For one-off migrations you can run Ziggy on your laptop.
          </p>
          <CTA className="mt-10" label="Learn more" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ziggy Cluster</h2>
          <p className="text-lg text-gray-600 mb-4">
            A Ziggy Cluster Scale lets you scale as far as you need to go using any size of server.
            And high availability is a given.
          </p>
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Integrations and migrations</h2>
          <p className="text-lg text-gray-600 mb-4">
            Whether you are moving millions of records from one platform to another, or updating one
            platform when data changes in another, Ziggy is fast to learn yet incredibly powerful
            and packed with everything you need to
          </p>
          <ul>
            <li>Monitor</li>
            <li>Alert</li>
            <li>Stay within rate limits</li>
            <li>Work in Production and Development modes</li>
            <li>Manage secrets and connections</li>
            <li>Schedule flow execution</li>
            <li>and much, much more</li>
          </ul>
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
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
  ]
  return <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
}

export default HomeScrollList
