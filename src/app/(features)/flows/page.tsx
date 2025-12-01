import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import FlowFeatures from '@/app/(features)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(features)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(features)/flows/JavascriptFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'

export default function Products() {
  return (
    <PageLayout
      title="Ziggy Flows"
      description="Build simple or highly complex data pipelines using Ziggy Blocks and run them at any scale."
      video="https://nxucrsk2vrk61vtm.public.blob.vercel-storage.com/website-videos/flow-animated.mov">
      {/*Scroll pair*/}
      <FlowFeatures />

      <PageSection bgColor="bg-gray-500 text-white">
        <BlockCollections />
        <HubspotBlockCollection />
      </PageSection>


      <PageSection bgColor="bg-gray-50">
        <JavascriptFeatures />
      </PageSection>
    </PageLayout>
  )
}
