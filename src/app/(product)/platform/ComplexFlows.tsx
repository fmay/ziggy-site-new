import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import { getSwapStatus } from '@/utils/swapStatus'
import CTA from '@/components/ui/cta/CTA'

interface ComplexFlowsProps {}

const ComplexFlows: FC<ComplexFlowsProps> = ({}) => {
  return (
    <SimplePair
      swap={getSwapStatus()}
      title="Ziggy does complex, too!"
      subtitle=""
      image="/platform/complex-flow.webp"
      imageCopy={
        <div>
          <p>
            Flows can get complex when you need them to. Create reusable subflows to keep things
            neat and tidy.
          </p>
        </div>
      }
      cta={<CTA label="Flows and Blocks" href="flows" noBottomMargin />}
    />
  )
}

export default ComplexFlows
