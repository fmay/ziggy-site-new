import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/QuickBookDemo'
import CustomizationStack from '@/app/(features)/extend/CustomizationStack'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import CollectionsExtendIntro from '@/app/(features)/extend/CollectionsExtendIntro'

export default function Extend() {
  return (
    <PageLayout
      title="Extend Ziggy with plugins"
      style="feature"
      description="Extend Ziggy by building your own custom blocks that can connect your platform with any others."
      image="/placeholder.svg">
      <PageSection bgColor="bg-gray">
        <Intro
          title="Become an Integration Partner"
          description={
            <div className="section-intro">
              <p>
                Do you want to give your customers the ability to pull data from your platform and
                push data into it?
              </p>
              <p>
                You can see how to extend Ziggy with plugin blocks so they can effortlessly do
                things with your data that gives them all the flexibility they need and avoids the
                complexities.
              </p>
              <CTA
                label="Integration Partner Info"
                href="https://docs.ziggyservices.com/user-guide/plugin/overview"
              />
            </div>
          }
          image="/placeholder.svg"
          imageScale={0.5}
        />
      </PageSection>

      <PageSection bgColor="bg-gray-50">
        <CustomizationStack />
      </PageSection>

      <PageSection bgColor="">
        <CollectionsExtendIntro />
        <HubspotBlockCollection />
      </PageSection>

      <PageSection bgColor="bg-gray-800">
        <QuickBookDemo background="dark" />
      </PageSection>
    </PageLayout>
  )
}
