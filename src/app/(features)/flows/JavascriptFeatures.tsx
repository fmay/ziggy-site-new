import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/stack-card/StackCard'

interface JavascriptFeaturesProps {}

const JavascriptFeatures: FC<JavascriptFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="Basic features"
      description="Code completion, linting, full screen editor"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript"
      ctaNewTab
      graphic="/images/flows/js-ai.png"
    />,
    <StackCard
      title="AI Code generation"
      description="Ziggy will generate code from your instructions. It also understands the data in your flow to ensure it has the full context."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#ai-assistant"
      ctaNewTab
      graphic="/images/flows/js-ai.png"
    />,
    <StackCard
      title="Debugger"
      description="Comes with a fully integrated debugger, letting you step through your code and inspect variables"
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#debugger"
      ctaNewTab
      graphic="/images/flows/parallel.png"
    />,
    <StackCard
      title="AI Explain"
      description="Not sure what's going on? AI Explain will put you out of your misery."
      ctaText="Learn more in the docs"
      ctaHref="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#explain"
      ctaNewTab
      graphic="/images/flows/parallel.png"
    />,
  ]

  return (
    <div>
      <div className="section-intro">
        <h2>Javascript Block</h2>
        <p>
          You don't need to be a developer to use the Javascript block. It's fully AI supported
          letting you generate code and explain it, too.
        </p>
        <p>
          It can take the data from the incoming edge to help produce the best possible results.
        </p>
      </div>
      <ImageStack items={items} />
    </div>
  )
}

export default JavascriptFeatures
