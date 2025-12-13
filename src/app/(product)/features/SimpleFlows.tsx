import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import { getSwapStatus } from '@/utils/swapStatus'
import CTA from '@/components/ui/cta/CTA'

interface SimpleFlowsProps {}

const swap = getSwapStatus()

const SimpleFlows: FC<SimpleFlowsProps> = ({}) => {
  return (
    <SimplePair
      title="Simple flows can do complex things"
      subtitle=""
      image="/home/simple-flow.webp"
      swap={swap}
      imageCopy={
        <div>
          <p>
            This flow is all it takes to get exchange rates from an API, transform the data then
            finally update all exchange rates in HubSpot with the latest rates.
          </p>
        </div>
      }
      cta={<CTA label="Flows and Blocks" href="flows" noBottomMargin />}
    />
  )
}

export default SimpleFlows
