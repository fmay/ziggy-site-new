import { FC } from 'react'
import SimpleText from '@/components/ui/simple-text/SimpleText'
import CTA from '@/components/ui/cta/CTA'

interface PricingProps {}

const Pricing: FC<PricingProps> = ({}) => {
  return (
    <div>
      <SimpleText
        title="Pricing"
        subtitle="Ziggy is priced to delight. We do not charge based on usage and subscriptions are significantly lower than ETL platforms and custom development."
        centerExtra
        extra={<CTA label="Pricing page" href="pricing" />}
      />
    </div>
  )
}

export default Pricing
