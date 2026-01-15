import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/image-stack/StackCard'
import Intro from '@/components/ui/intro/Intro'

interface JavascriptFeaturesProps {}

const EdgeAssistant: FC<JavascriptFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="AI Generate block in a flow"
      description="Insert the AI Generate block anywhere into your flow. Note the data coming in (Receiver)"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/ai-generate/aigen-flow.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Configure your prompt"
      description="Ziggy passes the edge data to the context when building, testing and running."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/ai-generate/aigen-prompt.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Test it"
      description="You can test the prompt quickly and easily without having to run your Flow."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/ai-generate/aigen-test.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Flow execution"
      description="When the flow runs, the data is placed on the outgoing edge ready for the next block."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/ai-generate/aigen-data-out.webp"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <div>
      <Intro
        title="Generative AI"
        description={
          <p>
            The <strong>AI Generate</strong> block is a great way to generate content based on data
            on the incoming edge. This is great for summaries or whatever else you can turn you mind
            to.
          </p>
        }
        imageScale={0.5}
      />

      <ImageStack items={items} />
    </div>
  )
}

export default EdgeAssistant
