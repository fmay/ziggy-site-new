import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/image-stack/StackCard'

interface JavascriptFeaturesProps {}

const CustomizationStack: FC<JavascriptFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="Ziggy CLI"
      description="Create and manage your plugins with the Ziggy CLI."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/plugin/cli"
      ctaNewTab
      graphic="/images/customise/ss-cli.webp"
      graphicBgColor=""
    />,
    <StackCard
      title="Code"
      description="Each block consists of a React UI component and an execution component - written in TypeScript"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/plugin/client"
      ctaNewTab
      graphicBgColor=""
      graphic="/images/customise/ss-custom-block-code.webp"
    />,
    <StackCard
      title="Embed in flows"
      description="This flow read from your platform (green block) then writes to Snowflake"
      ctaNewTab
      graphicBgColor=""
      graphic="/images/customise/ss-custom-flow.webp"
    />,
    <StackCard
      title="Access to your platform"
      description="Build a collection of blocks that provide access to your platform for your customers. Above is a collection of HubSpot blocks, for example."

      ctaNewTab
      graphic="/images/customise/ss-collections.webp"
    />,
  ]

  return (
    <div>
      <div className="section-intro">
        <h2>
          Build custom Ziggy blocks
        </h2>
        <p>
          Create custom Ziggy blocks with TypeScript, our CLI and SDK.
        </p>
        <p>Ziggy's full source code is also available for those who require the ultimate control.</p>
      </div>
      <ImageStack items={items} />
    </div>
  )
}

export default CustomizationStack
