import { FC } from 'react'
import ScrollContentImagePairs from '@/components/ui/scroll-pairs/ScrollContentImagePairs'

const HomeScrollList: FC = () => {
  const HP_Pairs = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ziggy Cluster</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy can run one one small server up to as many as you need, giving you both high
            performance and high availability.
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
            platform when data changes in another, Ziggy is fast to learn yet incredibly powerful.
          </p>
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
