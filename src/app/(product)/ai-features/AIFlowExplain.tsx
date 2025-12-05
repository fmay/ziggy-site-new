import { FC, ReactNode } from 'react'
import ScrollContentImagePairs from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import DocsLink from '@/components/ui/docs-link/DocsLink'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import StackCard from '@/components/ui/image-stack/StackCard'
import ImageStack from '@/components/ui/image-stack/ImageStack'

const AIFlowExplain: FC = () => {
  const items: ReactNode[] = [
    <StackCard
      title="Transform data on any edge"
      description="Click the AI icon on the edge to open the AI Assistant"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/flow-explain/flow-nasty.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Natural language prompt"
      description="The AI Assistant uses the incoming edge data to ensure it has full context for optimal transformations with minimal input."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/flow-explain/flow-explain.webp"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <div>
      <Intro
        title="Flow Explanation"
        description={
          <div className="mb-[100px]">
            <p>
              Sometimes you're faced with a Flow and you're not sure it does. Ziggy can explain with
              a button click.
            </p>
          </div>
        }
        imageScale={0.5}
      />
      <ImageStack items={items} />
    </div>
  )
}

export default AIFlowExplain
