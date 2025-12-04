import PricingCalculator from '@/components/pricing/PricingCalculator'
import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'

export default function Pricing() {
  return (
    <PageLayout
      title="Ziggy Pricing"
      style={LayoutStyleEnum.Feature}
      description="Our pricing is simple and transparent. Use the calculator to estimate your costs.">
      <PageSection bgColor="bg-pale-blue">
        <PricingCalculator />
      </PageSection>
    </PageLayout>
  )
}
