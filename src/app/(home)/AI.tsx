import { FC } from 'react'
import SimpleText from '@/components/ui/simple-text/SimpleText'
import CTA from '@/components/ui/cta/CTA'

interface AIProps {}

const AI: FC<AIProps> = ({}) => {
  return (
    <div>
      <SimpleText
        title="How we use AI"
        subtitle={
          <div>
            <p>
              We use AI extensively but judiciously. AI never runs during flow execution other than
              our Generative AI block.
            </p>
            <p>
              This ensures that you can be 100% confident that hallucinations and variations will
              never impact the integrity of your flow or its data.
            </p>
          </div>
        }
        centerExtra
        extra={<CTA label="AI Features" href="ai-features" />}
      />
    </div>
  )
}

export default AI
