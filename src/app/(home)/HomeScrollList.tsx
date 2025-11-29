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
          <CTA className="mt-20" label="Learn more" href="flows" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Integrations, Automations, Migrations
          </h2>
          <div className="">
            <p className="text-lg text-gray-600 mb-4">
              Whether you are moving millions of records from one platform to another or updating
              one platform when data changes in another, Ziggy is fast to learn and feature packed.
            </p>
          </div>
          <CTA className="mt-10" label="Feature overview" href="flows" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            For simple and the most complex cases
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Most integrations run very happily on a single, low-cost 2GB instance. Most migrations
            will run on your laptop.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            When you need to go big, a Ziggy Cluster provides high availability and lets you scale
            up on your own infrastructure and with your desired configuration.
          </p>
          <CTA className="mt-20" label="Ziggy Cluster" href="cluster" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
    // {
    //   content: (
    //     <div>
    //       <h2 className="text-4xl font-bold text-gray-900 mb-6">Customizations</h2>
    //       <p className="text-lg text-gray-600 mb-4">
    //         Customize Ziggy by creating plugin blocks. You control both the UI and the run-time with
    //         simple TypeScript code.
    //       </p>
    //       <CTA className="mt-20" label="Learn more" href="flows" />
    //     </div>
    //   ),
    //   image: '/images/flows/js-debugger.png',
    // },
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
          <CTA className="mt-20" label="Learn more" href="flows" />
        </div>
      ),
      image: '/images/flows/js-debugger.png',
    },
  ]
  return <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
}

export default HomeScrollList
