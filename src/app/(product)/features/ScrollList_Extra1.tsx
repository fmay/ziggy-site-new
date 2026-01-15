import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'
import DocsLink from '@/components/ui/docs-link/DocsLink'

const ScrollListExtra1: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h3>Rate Limiting</h3>
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Create special rate limit queues that ensure you don't exceed any 3rd party platform
              limits.
            </p>
          </div>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/Queuing">Learn more</DocsLink>
        </div>
      ),
      image: '/product/features/rate-limiting.webp',
      contentNudge: 10,
    },
    {
      content: (
        <div>
          <h3>Batching</h3>
          <p>
            When reading or writing large numbers of records, making batch calls increases
            throughput significantly and ensure you don't overload a platform or database.
          </p>
          <p>This is all baked into Ziggy so flows are both fast and safe.</p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/Batching">Learn more</DocsLink>
        </div>
      ),
      image: '/product/features/batching.webp',
    },
    {
      content: (
        <div>
          <h3>Data Store</h3>
          <p>
            Ziggy comes with a fast internal data store. This is a great place to write data for
            processing later or in other flows.
          </p>
          <p>
            You can also use external stores (DynamoDB, ElastiCache, Cosmos) and regular databases.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/block-types/utility/Data-Store">Learn more</DocsLink>
        </div>
      ),
      image: '/product/features/data-store.webp',
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h3>Scheduler</h3>
          <p>
            Ziggy has an integrated scheduler that launches flows. For example, schedule daily reads
            from SFTP servers or update a data warehouse every hour.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/Scheduled-Flows">Learn more</DocsLink>
        </div>
      ),
      image: '/product/features/schedule.webp',
      contentNudge: 30,
    },
  ]

  return (
    <>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListExtra1
