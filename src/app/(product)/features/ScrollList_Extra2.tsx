import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'

const ScrollListExtra2: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Alerts and Logging</h2>
          <div className="">
            <p className="text-lg text-gray-600 mb-4">
              Configure email and SMS alerts, which come as digests on a schedule you choose.
            </p>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Secrets Management</h2>
          <p className="text-lg text-gray-600 mb-4">
            Store and manage your secrets, fully encrypted, in Ziggy and reference from your flows.
            You can optionally configure a development/production pair.
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Connections</h2>
          <p className="text-lg text-gray-600 mb-4">
            Store and manage your connection parameters and reference from your flows. You can
            optionally configure a development/production pair.
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
      contentNudge: 90,
    },
  ]

  return (
    <>
      <div id="javascript" className="section-intro">
        <h2>Alerting, Secrets, Connections, Auditing</h2>
        <p>A few more powerful features available out-of-the-box.</p>
      </div>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListExtra2
