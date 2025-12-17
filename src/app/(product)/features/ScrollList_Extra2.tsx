import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'
import DocsLink from '@/components/ui/docs-link/DocsLink'

const ScrollListExtra2: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h3>Alerts and Logging</h3>
          <div className="">
            <p>
              Configure email and SMS alerts, which come as digests on a schedule you choose.
            </p>
          </div>

          <DocsLink href="https://docs.ziggyservices.com/user-guide/Alerts">Learn more</DocsLink>
        </div>
      ),
      image: '/product/features/alerts.webp',
      contentNudge: 10,
    },
    {
      content: (
        <div>
          <h3>Secrets Management</h3>
          <p>
            Store and manage your secrets, fully encrypted, in Ziggy and reference from your flows.
            You can optionally configure a development/production pair.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Secrets">Learn more</DocsLink>
        </div>
      ),
      image: '/product/features/secrets.webp',
    },
    {
      content: (
        <div>
          <h3>Connections</h3>
          <p>
            Store and manage your connection parameters and reference from your flows. You can
            optionally configure a development/production pair.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Connections">Learn more</DocsLink>
        </div>
      ),
      image: '/product/features/connections.webp',
      contentNudge: 90,
    },
  ]

  return (
    <>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListExtra2
