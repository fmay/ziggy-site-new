import PageLayout from '@/components/ui/layout/page-layout/PageLayout'
import FlowFeatures from '@/app/(features)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(features)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(features)/flows/JavascriptFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'

export default function Products() {
  return (
    <PageLayout
      title="Ziggy Flows"
      description="Build simple or highly complex data pipelines using Ziggy Blocks"
      video="https://nxucrsk2vrk61vtm.public.blob.vercel-storage.com/website-videos/flow-animated.mov">
      {/*Scroll pair*/}
      <FlowFeatures />

      {/*Block Collections*/}
      <div>
        <BlockCollections />
        <HubspotBlockCollection />
      </div>

      <PageSection>
        <JavascriptFeatures />
      </PageSection>
    </PageLayout>
  )
}
