import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import FlowFeatures from '@/app/(features)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(features)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(features)/flows/JavascriptFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Intro from '@/components/ui/intro/Intro'
import QuickBookDemo from '@/app/(forms)/QuickBookDemo'

export default function Products() {
  return (
    <PageLayout
      title="Ziggy Flows"
      style="feature"
      description="Build simple or highly complex data pipelines using Ziggy Blocks and run them at any scale."
      video="https://nxucrsk2vrk61vtm.public.blob.vercel-storage.com/website-videos/flow-animated.mov"
      image="/placeholder.svg">
      <PageSection bgColor="bg-gray">
        <Intro
          title="Ziggy Flows"
          description={
            <div className="section-intro">
              <p>
                A Ziggy flow is a canvas based pipeline for performing operations on data. There is
                a large number of blocks you can use to read, write, transform, map data as it flows
                through the pipeline.
              </p>
              <CTA label="Platform features" href="/features" />
            </div>
          }
          image="/placeholder.svg"
          imageScale={0.5}
        />
      </PageSection>

      <PageSection bgColor="bg-gray-50">
        <FlowFeatures />
      </PageSection>

      <PageSection id="hubspot" bgColor="">
        <BlockCollections />
        <HubspotBlockCollection />
      </PageSection>

      <PageSection id="javascript" bgColor="bg-gray-50">
        <JavascriptFeatures />
      </PageSection>

      <PageSection id="javascript" bgColor="bg-gray-300">
        <QuickBookDemo />
      </PageSection>
    </PageLayout>
  )
}
