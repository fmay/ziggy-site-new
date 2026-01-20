import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface DiscountsProps {}

const Discounts: FC<DiscountsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>Resellers receive discounts for their own internal use. Please contact us for details.</p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Ziggy discounts"
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

export default Discounts
