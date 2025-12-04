import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'

export default function About() {
  return (
    <PageLayout title="About Us" description="">
      <PageSection>
        <div className="max-w-4xl prose prose-lg">
          <div className="bg-white p-8 mt-[40px] mb-[280px] rounded-lg  border-gray-200 ">
            <h2 className="text-3xl font-semibold text-stripe-navy mb-4">Our Mission</h2>
            <p className="text-stripe-gray text-lg">
              At Ziggy we recognise that the data automation and integration market also known as
              the Extract, Transform and Load (ETL) space has for too long been underserved either
              by cumbersome service providers that are inflexible and expensive or by cloud based
              platforms where it’s difficult to control security.
            </p>
            <p className="text-stripe-gray text-lg">So our mission is simple...</p>
            <p className="text-stripe-gray text-lg">
              To make it extremely easy, for any business to automate and integrate data, across
              their own systems, and to and from third party systems, where security, customization,
              resource flexibility, auditability and cost effectiveness are paramount. Ziggy it!
            </p>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  )
}
