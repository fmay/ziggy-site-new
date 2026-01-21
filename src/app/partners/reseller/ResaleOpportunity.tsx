import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ResaleOpportunityProps {}

const ResaleOpportunity: FC<ResaleOpportunityProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>We offer generous commissions for Ziggy system sales. Contact us for more information.</p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Commission on Ziggy sales"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/reseller/reseller-commissions.webp"
        cta={<CTA label="Contact Us" href="/contact" noBottomMargin />}
        scale={0.5}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ResaleOpportunity
