import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ExampleBlocksProps {}

const ExampleBlocks: FC<ExampleBlocksProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          Ziggy Flows are visual data pipelines that move and transform data using Ziggy Blocks.
          They can do almost anything and are quickly built whether you have development skills or not.
        </p>
        <p>
          Below are some HubSpot blocks. Other CRM platforms have a similar set of Blocks and new
          ones can be added.
        </p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="How it works"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/solutions/crm/crm-how-it-works.webp"
        cta={<CTA label="Learn More" href="/flows" noBottomMargin />}
        scale={1}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ExampleBlocks
