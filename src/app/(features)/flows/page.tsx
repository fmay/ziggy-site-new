import PageLayout from '@/components/PageLayout'
import Carousel from '@/components/ui/carousel/Carousel'
import ExamplePage from '@/components/ui/scroll-pairs/ScrollContentImagePairs.example'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import FlowFeatures from '@/app/(features)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(features)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(features)/flows/JavascriptFeatures'

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

      <JavascriptFeatures />
    </PageLayout>
  )
}
