import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import { getSwapStatus } from '@/utils/swapStatus'

interface ComplexFlowsProps {}

const swap = getSwapStatus()

const ComplexFlows: FC<ComplexFlowsProps> = ({}) => {
  return (
    <SimplePair
      swap={swap}
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
    />
  )
}

export default ComplexFlows
