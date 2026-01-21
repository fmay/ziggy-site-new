import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface DiscountsProps {}

const Discounts: FC<DiscountsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>We offer generous discounts to qualified resellers for internal usage.</p>
        <p>We provide free Ziggy platforms for internal evaluation purposes.</p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Internal usage discounts and evaluations"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/reseller/reseller-discounts.webp"
        cta={<CTA label="Contact Us" href="/contact" noBottomMargin />}
        scale={0.5}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default Discounts
