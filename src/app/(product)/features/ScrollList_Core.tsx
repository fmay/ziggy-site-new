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
      content: (
        <div>
          <h2>Launch flows with API calls</h2>
          <p>
            Each flow can be run from the Ziggy UI or with an API call. Pass in data that should be
            processed by the flow.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Launching-flows">
            Learn more
          </DocsLink>
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
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Monitoring">
            Learn more
          </DocsLink>
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
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Dev-Prod-Modes">
            Learn more
          </DocsLink>
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
