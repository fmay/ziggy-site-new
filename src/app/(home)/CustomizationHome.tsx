import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/image-stack/StackCard'

interface JavascriptFeaturesProps {}

const CustomizationHome: FC<JavascriptFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="Ziggy CLI"
      description="Create and manage your plugins with the Ziggy CLI."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript"
      ctaNewTab
      graphic="/images/customise/ss-cli.webp"
      graphicBgColor=""
    />,
    <StackCard
      title="Code"
      description="Each block consists of a React UI component and an execution component - written in TypeScript"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#ai-assistant"
      ctaNewTab
      graphicBgColor=""
      graphic="/images/customise/ss-custom-block-code.webp"
    />,
    <StackCard
      title="Embed in flows"
      description="This flow read from your platform (green block) then writes to Snowflake"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#debugger"
      ctaNewTab
      graphicBgColor=""
      graphic="/images/customise/ss-custom-flow.webp"
    />,
    <StackCard
      title="Access to your platform"
      description="Build a collection of blocks that provide access to your platform for your customers. Above is a collection of HubSpot blocks, for example."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#explain"
      ctaNewTab
      graphic="/images/customise/ss-collections.webp"
    />,
  ]

  return (
    <div>
      <div className="section-intro">
        <h2>
          Integrate Ziggy with <span className="underline">your</span> platform. Ziggy for{' '}
          <span className="underline">your</span> customers.
        </h2>
        <p>
          Customize Ziggy by creating plugin blocks. You control both the UI and the run-time with
          simple TypeScript code.
        </p>
        <p>Ziggy source code is also available for those who require the ultimate control.</p>
      </div>
      <ImageStack items={items} />
    </div>
  )
}

export default CustomizationHome
