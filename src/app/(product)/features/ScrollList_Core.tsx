import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'

const ScrollListCore: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Flows and Blocks</h2>
          <div className="">
            <p className="text-lg text-gray-600 mb-4">
              Flows are your data pipelines, composed of interncononected Blocks.
            </p>
            <ul>
              <li>Each Block performs one focused task only</li>
              <li>Blocks are extremely easy to use</li>
              <li>They can connect to anything</li>
              <li>They can perform any task</li>
              <li>You can build your own</li>
            </ul>
          </div>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
      contentNudge: 10,
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Blocks</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy's plugins allow you to build your own block collection that do everything you need
            to connect to any system, including your own platform.
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Visual Debugger</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy has a great visual debugger. Step through the flow. Supply with test data
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Launching flows with API calls</h2>
          <p className="text-lg text-gray-600 mb-4">
            Each flow can be run from the Ziggy UI or with an API call. Pass in data that should be
            processed by the flow.
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Execution History</h2>
          <p className="text-lg text-gray-600 mb-4">
            You have the option of storing successful and/or failed flow executions to a history
            log. These can then be viewed in a browser.
          </p>
          <p>You can even open up failed flows to see where and why they failed.</p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Development & Production</h2>
          <p className="text-lg text-gray-600 mb-4">
            Create development and production Connection and Secret configurations then toggle
            between these in your flow for testing or making changes
          </p>
          <p>Alternatively, use a dev or staging server (these are free) and transfer flows between them.</p>
          <CTA className="" label="Learn more" href="integration-partners" />
        </div>
      ),
      image: '/placeholder.svg',
      contentNudge: 90,
    },
  ]
  return (
    <>
      <div id="javascript" className="section-intro">
        <h2>Building flows</h2>
        <p>
          All data pipelines are built in your browser using a visual canvas called a Flow. It's
          easy to use and is self-documenting thanks to its visual nature.
        </p>
      </div>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListCore
