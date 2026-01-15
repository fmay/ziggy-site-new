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
      title="Transform data on any edge"
      description="The AI icon on the edge indicates opens the AI Assistant"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-flow.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Natural language prompt"
      description="The AI Assistant uses the incoming edge data to ensure it has full context for optimal transformations with minimal input. Error handling and validations elegantly handled. Writes failed validations to the Ziggy Data Store if requested."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-assistant.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Validations"
      description="Run any validation operations. Triage into passed and failed."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-failed.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Output"
      description="Transformed, valid, data is available to the next on the edge."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyplatform.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-data-out.webp"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <div>
      <Intro
        right={headerRight}
        title="AI Edge transformations"
        description={
          <>
            <p>
              Create validations, transformations and mappings on any edge. Data comes in, the AI
              assistant performs the transformations and validations
            </p>
            <p>
              AI is never applied at run time. It generates hidden code in the designer, so it is
              fast and 100% consistent.
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
