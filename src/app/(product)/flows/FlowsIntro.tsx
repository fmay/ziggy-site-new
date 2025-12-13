import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/image-stack/StackCard'
import Intro from '@/components/ui/intro/Intro'

interface JavascriptFeaturesProps {
  headerRight?: boolean
}

const EdgeAssistant: FC<JavascriptFeaturesProps> = ({ headerRight }) => {
  const items: ReactNode[] = [
    <StackCard
      title="Simple Flows"
      description="This flow is all it takes to get exchange rates from an API, transform the data then finally update all exchange rates in HubSpot with the latest rates."
      ctaText="Feature Overview"
      ctaHref=""
      ctaNewTab
      graphic="/home/simple-flow.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Complex Flows"
      description="Flows can get complex when you need them to. Create reusable subflows to keep things neat and tidy."
      ctaText="Feature Overview"
      ctaHref=""
      ctaNewTab
      graphic="/platform/complex-flow.webp"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <div>
      <Intro
        right={headerRight}
        title="Ziggy Flows"
        description={
          <>
            <p>
              Ziggy flows are a visual canvas for designing your data pipelines. Flows are made up of Ziggy blocks.
            </p>
          </>
        }
        imageScale={0.5}
      />

      <ImageStack items={items} />
    </div>
  )
}

export default EdgeAssistant
