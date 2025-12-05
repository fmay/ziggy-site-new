import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/image-stack/StackCard'

interface JavascriptFeaturesProps {}

const EdgeAssistant: FC<JavascriptFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="Transform data on any edge"
      description="Click the AI icon on the edge to open the AI Assistant"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-flow.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Natural language prompt"
      description="The AI Assistant uses the incoming edge data to ensure it has full context for optimal transformations with minimal input."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-assistant.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Validations"
      description="Run any validation operations. Triage into passed and failed. Choice of error handling. Write failed validations to the Ziggy Data Store."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-failed.webp"
      graphicBgColor="bg-flow-gray"
    />,
    <StackCard
      title="Output"
      description="Transformed, valid, data is available to the next on the edge."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/AI-Edge-Assistant"
      ctaNewTab
      graphic="/product/ai-features/edge-assistant/aie-data-out.webp"
      graphicBgColor="bg-flow-gray"
    />,
  ]

  return (
    <div>
      <div id="javascript" className="section-intro mb-20">
        <h2>AI Edge transformations</h2>
        <p>
          Create validations, transformations and mappings on any edge. Data comes in, the AI
          assistant performs the transformations and validations
        </p>
        <p>
          <strong>AI is never applied at run time. It generates hidden code in the designer, so it is fast
            and 100% consistent.</strong>
        </p>
      </div>
      <ImageStack items={items} />
    </div>
  )
}

export default EdgeAssistant
