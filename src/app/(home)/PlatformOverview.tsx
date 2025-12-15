'use client'

import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface PlatformOverviewProps {}
const swap = getSwapStatus()

const PlatformOverview: FC<PlatformOverviewProps> = ({}) => {
  return (
    <div>
      <SimplePair
        title="Easy to use. Packed with features."
        subtitle=""
        imageCopy={
          <>
            {/*<p>Ziggy is easy to use. And it's packed features.</p>*/}
          </>
        }
        contentNudge={30}
        image="/platform/features.webp"
        scale={0.6}
        cta={<CTA label="Learn More" href="platform" noBottomMargin />}
        swap={swap}
      />
    </div>
  )
}

export default PlatformOverview
