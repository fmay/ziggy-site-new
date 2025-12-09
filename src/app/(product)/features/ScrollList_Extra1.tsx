import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'

const ScrollListExtra1: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Rate Limiting</h2>
          <div className="">
            <p className="text-lg text-gray-600 mb-4">
              Create special rate limit queues that ensure you don't exceed any 3rd party platform
              limits.
            </p>
          </div>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/product/features/rate-limiting.webp',
      contentNudge: 10,
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Batching</h2>
          <p className="text-lg text-gray-600 mb-4">
            When reading or writing large numbers of records, making batch calls increases
            throughput significantly and ensure you don't overload a platform or database.
          </p>
          <p>This is all baked into Ziggy so flows are both fast and safe.</p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Data Store</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy comes with a fast internal data store. This is a great place to write data for
            processing later or in other flows.
          </p>
          <p>
            You can also use external stores (DynamoDB, ElastiCache, Cosmos) and regular databases.
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/product/features/data-store.webp',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Scheduler</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy has an integrated scheduler that launches flows. For example, schedule daily reads
            from SFTP servers or update a data warehouse every hour.
          </p>
          <CTA className="my-2" label="How Ziggy works" href="flows" />
        </div>
      ),
      image: '/product/features/schedule.webp',
      contentNudge: 30,
    },
  ]

  return (
    <>
      {/*<div id="javascript" className="section-intro">*/}
      {/*  <h2>Rate limiting, batching, data store and scheduling</h2>*/}
      {/*  <p>*/}
      {/*    Some more powerful features available out-of-the-box.*/}
      {/*  </p>*/}
      {/*</div>*/}
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListExtra1
