import { FC } from 'react'
import SimpleText from '@/components/ui/simple-text/SimpleText'
import CTA from '@/components/ui/cta/CTA'
import SimplePair from '@/components/ui/simple-pair/SimplePair'

interface AIProps {}

const AI: FC<AIProps> = ({}) => {
  return (
    <div>
      <SimplePair
        title="How we use AI"
        subtitle=""
        imageCopy={
          <div>
            <p>
              We use AI extensively but judiciously. AI never runs during flow execution other than
              our Generative AI block.
            </p>
            <p>
              This ensures that you can be 100% confident that hallucinations and variations will
              never impact the integrity of your flow or its data.
            </p>
            <CTA label="AI Features" href="ai-features" noBottomMargin />
          </div>
        }
        image="/home/ai-features.webp"
        scale={0.4}
      />
    </div>
  )
}

export default AI
