import PageLayout from '@/components/PageLayout'
import Carousel from '@/components/ui/carousel/Carousel'
import ExamplePage from '@/components/ui/scroll-pairs/ScrollContentImagePairs.example'

export default function Products() {
  return (
    <PageLayout
      title="Ziggy Flows"
      description="Build simple or highly complex data pipelines using Ziggy Blocks"
      video="https://nxucrsk2vrk61vtm.public.blob.vercel-storage.com/website-videos/flow-animated.mov"
    >

    <ExamplePage />

      <div className="w-full h-[1000px] bg-red-50">HELLO</div>

    </PageLayout>
  )
}
