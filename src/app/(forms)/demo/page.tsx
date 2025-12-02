import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'

export default function BookDemoPage() {
  return (
    <PageLayout
      title="Book a Demo"
      style="pricing"
      description="Book a 30 minute demo with a product expert who will answer all your questions, however technical."
      >
      <PageSection bgColor="bg-pale-blue">
        <QuickBookDemo />
      </PageSection>
    </PageLayout>
  )
}
