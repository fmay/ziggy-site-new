import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ResaleOpportunityProps {}

const ResaleOpportunity: FC<ResaleOpportunityProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>Resale commission</p>
        <p>Ziggy offers generous commissions for Ziggy system sales. Contact us for more information.</p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Resale commissions"
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

export default ResaleOpportunity
