import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/stack-card/StackCard'

interface JavascriptFeaturesProps {}

const CustomizationHome: FC<JavascriptFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="Manage with the Ziggy CLI"
      description="Create and manage your plugins with our CLI."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript"
      ctaNewTab
      graphic="/images/flows/js-example.png"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Code"
      description="Each block consists of a React UI component and an execution component - written in TypeScript"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#ai-assistant"
      ctaNewTab
      graphicBgColor="bg-flow-gray"
      graphic="/images/flows/js-ai.png"
    />,
    <StackCard
      title="Embed in flows"
      description="Custom blocks behave just like standard Ziggy blocks and can be used in any flow."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#debugger"
      ctaNewTab
      graphic="/images/flows/js-debugger.png"
    />,
    <StackCard
      title="Access to your platform"
      description="Build a collection of blocks that provide access to your platform for your customers."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#explain"
      ctaNewTab
      graphic="/images/flows/js-explain.png"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <div>
      <div className="section-intro">
        <h2>Customized by you</h2>
        <p>
          Customize Ziggy by creating plugin blocks. You control both the UI and the run-time with
          simple TypeScript code.
        </p>
        <p>
          For the ultimate in control, we also offer the Ziggy source code.
        </p>
      </div>
      <ImageStack items={items} />
    </div>
  )
}

export default CustomizationHome
