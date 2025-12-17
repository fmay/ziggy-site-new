import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'
import DocsLink from '@/components/ui/docs-link/DocsLink'
import Intro from '@/components/ui/intro/Intro'

const ScrollListIntegration: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      title: 'Example 1 : when your ERP data changes, update your CRM',
      content: (
        <div>
          <p>Configure a webhook in your CRM that launches a Ziggy Flow.</p>
          <p>
            The flow can perform any transformations and actions you require such as writing to a
            Data Warehouse, Database, calling an API or writing back to your CRM.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Launching-flows">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/what-are-automations/webhook-hubspot.webp',
      contentNudge: 0,
    },
    {
      title: 'Example 2 : Launch a flow from your own application with an API call.',
      content: (
        <div>
          <p>
            Your application makes a simple REST API call to Ziggy to launch a flow. That Flow
            performs any transformation and 3rd party platform operations your require.
          </p>

          <DocsLink href="https://docs.ziggyservices.com/user-guide/Launching-flows">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/postman.webp',
      contentNudge: 0,
    },
    {
      title: 'Example 3 : Data Migrations',
      content: (
        <div>
          <p>Ziggy is ideal for performing both small and enterprise scale data migrations.</p>
          <p>
            Whether you're migrating a few hundred records or millions across multiple, related
            objected, Ziggy Flows let you audit, validate, map, transform your data so it ends up in
            the right place in the right format.
          </p>
          {/*<DocsLink href="https://docs.ziggyservices.com/user-guide/Dev-Prod-Modes">*/}
          {/*  Learn more*/}
          {/*</DocsLink>*/}
        </div>
      ),
      image: '/product/features/dev-prod.webp',
      contentNudge: 60,
    },
  ]
  return (
    <>
      <Intro
        className="mb-[30px]"
        title="Integration Examples"
        description="The list of possible Integrations is also endless. Trigger a Ziggy Flow manually, with a Webhook or an API Call."
      />
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListIntegration
