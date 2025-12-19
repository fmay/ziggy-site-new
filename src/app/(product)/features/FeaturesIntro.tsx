import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import { getSwapStatus } from '@/utils/swapStatus'
import CTA from '@/components/ui/cta/CTA'
import Link from 'next/link'

interface FeaturesIntroProps {}

const FeaturesIntro: FC<FeaturesIntroProps> = ({}) => {
  return (
    <SimplePair
      title="Flows and Blocks"
      subtitle=""
      image="/platform/complex-flow.webp"
      swap={getSwapStatus()}
      imageCopy={
        <div>
          <p>See <Link href="flows">Ziggy Blocks and Flows</Link> for information about flow building process.</p>
        </div>
      }
      cta={<CTA label="Blocks and Flows" href="flows" />}
    />
  )
}

export default FeaturesIntro
