import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'

export default function About() {
  return (
    <PageLayout title="About Us" description="">
      <PageSection>
        <div className="max-w-4xl prose prose-lg">
          <div className="bg-white p-0 mt-[40px] mb-[280px] rounded-lg  border-gray-200 ">
            <h2 className="text-3xl font-semibold text-stripe-navy mb-4">Our Mission</h2>
            <p className="text-lg">
              Ziggy was born out of a recognition that data automation, integration and migration
              also known as the Extract Transform and Load (ETL) space was in desperate need of
              innovation.
            </p>
            <p className="text-lg">
              Existing technology service providers are either cumbersome, inflexible and expensive
              or they have cloud based platforms where security can’t be controlled.
            </p>
            <p className="text-lg">
              Also, because of the technology providers current offerings, resourcing data
              automation projects with the right people is challenging. The tasks required demand an
              over-reliance on ‘developer level’ technical resources. These are scarce resources for
              most businesses and can be costly to deploy.
            </p>
            <p className="text-xl font-semibold mt-10">So our mission is simple...</p>
            <p className="text-lg">
              To make it extremely easy, for any business to automate and integrate data, across
              their own systems, and to and from third party systems, where security, customization,
              technical resource flexibility, auditability and cost effectiveness are paramount.
            </p>
            <CTA label="Book a demo" href="demo"/>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  )
}
