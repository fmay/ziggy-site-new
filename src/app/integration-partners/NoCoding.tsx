import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import DocsLink from '@/components/ui/docs-link/DocsLink'

interface NoCodingProps {}

const NoCoding: FC<NoCodingProps> = ({}) => {
  return (
    <div>
      <SimplePair
        title="API and code free integration for your customers"
        subtitle=""
        imageCopy={
          <>
            {' '}
            <p>
              Delight your customers by letting them use Ziggy to get data out of and into your
              platform without having to code.
            </p>
            <p>See how Ziggy blocks are built below.</p>
          </>
        }
        image="/integration-partners/no-code.webp"
        cta={
          <>
            <DocsLink href="https://docs.ziggyplatform.com/user-guide/plugin/overview">Learn More</DocsLink>
          </>
        }
        scale={0.8}
        swap
      />
    </div>
  )
}

export default NoCoding
