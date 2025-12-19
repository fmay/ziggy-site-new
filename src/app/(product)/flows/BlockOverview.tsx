import { FC } from 'react'
import SimpleText from '@/components/ui/simple-text/SimpleText'
import CTA from '@/components/ui/cta/CTA'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import { getSwapStatus } from '@/utils/swapStatus'

interface AIProps {}

const AI: FC<AIProps> = ({}) => {
  return (
    <div>
      <SimplePair
        title="Ziggy Blocks"
        subtitle=""
        imageCopy={
          <div>
            <p>
              Each block does one thing and one thing only, which is what makes them so easy to use.
            </p>
          </div>
        }
        image="/product/features/block.webp"
        scale={0.7}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default AI
