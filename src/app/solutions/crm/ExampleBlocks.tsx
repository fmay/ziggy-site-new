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
          Ziggy Flows are a visual data pipeline that move and transform data using Ziggy Blocks.
          Data transformations are heavily AI supported. Developers can write and debug Javascript
          code within a special Javascript block.
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
        image="/hero/whats-an-automation.webp"
        cta={<CTA label="Learn More" href="what-are-automations" noBottomMargin />}
        scale={0.7}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ExampleBlocks
