import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import CustomizationStack from '@/app/(product)/extend/CustomizationStack'
import CollectionsExtendIntro from '@/app/(product)/extend/CollectionsExtendIntro'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import PartnerFeatures from '@/app/integration-partners/PartnerFeatures'

export default function IntegrationPartners() {
  return (
    <PageLayout
      title="Integration Partner"
      style="feature"
      description="Let your customers read and write to your platform using Ziggy and completely avoid coding."
      image="/placeholder.svg">
      <PageSection bgColor="bg-gray">
        <Intro
          title="What is an Integration Partner?"
          description={
            <div className="section-intro">
              <p>
                As an Integration Partner you can build your own custom blocks that connect to your
                platform. Then let your customers use Ziggy to pull data from and write data to your
                platform.
              </p>
              <p>
                Providing easy access to your platform will not only delight your customers - they
                no longer have to write code or even use you API, it opens up new revenue streams
                for you.
              </p>
              <p>
                You control all aspects of infrastructure, security, performance and
                fault-tolerance.
              </p>
              <CTA
                label="Integration Partner Info"
                href="https://docs.ziggyservices.com/user-guide/plugin/overview"
                className="mb-0"
              />
            </div>
          }
          image="/placeholder.svg"
          imageNudge={-90}
          imageScale={0.5}
        />
      </PageSection>

      <PageSection>
        <PartnerFeatures/>
      </PageSection>

      <PageSection bgColor="bg-gray-800">
        <QuickBookDemo background="dark" />
      </PageSection>
    </PageLayout>
  )
}
