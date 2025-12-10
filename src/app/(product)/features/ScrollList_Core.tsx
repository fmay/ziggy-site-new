import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'
import DocsLink from '@/components/ui/docs-link/DocsLink'

const ScrollListCore: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      bgColor: 'bg-red-50',
      content: (
        <div>
          <h2>Flow Editor</h2>
          <p>
            A drag-and-drop canvas for building your data pipelines. These can be very simple but
            complex flows are no problem, too.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/editor/Flow-Editor-Layout">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/editor.webp',
    },
    {
      content: (
        <div>
          <h2>Visual Debugger</h2>
          <p>
            Ziggy has a great visual debugger. Step through the flow. Supply with test data
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/product/features/debugger.webp',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2>Launch flows with API calls</h2>
          <p>
            Each flow can be run from the Ziggy UI or with an API call. Pass in data that should be
            processed by the flow.
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/product/features/postman.webp',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2>Execution History</h2>
          <p>
            You have the option of storing successful and/or failed flow executions to a history
            log. These can then be viewed in a browser.
          </p>
          <p>You can even open up failed flows to see where and why they failed.</p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/product/features/execution-history.webp',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2>Development & Production</h2>
          <p>
            Create development and production Connection and Secret configurations then toggle
            between these in your flow for testing or making changes
          </p>
          <p>
            Alternatively, use a dev or staging server (these are free) and transfer flows between
            them.
          </p>
          <CTA className="" label="Learn more" href="integration-partners" />
        </div>
      ),
      image: '/product/features/dev-prod.webp',
      contentNudge: 90,
    },
  ]
  return (
    <>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListCore
