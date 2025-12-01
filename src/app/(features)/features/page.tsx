import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import FlowFeatures from '@/app/(features)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(features)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(features)/flows/JavascriptFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Intro from '@/components/ui/intro/Intro'

export default function Features() {
  return (
    <PageLayout
      title="Ziggy Features"
      style="feature"
      description="Discoer more of Ziggy's supporting features."
      image="/placeholder.svg">
      <PageSection bgColor="bg-gray">
        <Intro
          title="Ziggy Flows"
          description={
            <div className="section-intro">
              <p>
                Copy coming
              </p>
            </div>
          }
          image="/placeholder.svg"
          imageScale={0.5}
        />
      </PageSection>


    </PageLayout>
  )
}
