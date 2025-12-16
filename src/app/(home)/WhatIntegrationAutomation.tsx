'use client'

import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface WhatIntegrationAutomationProps {}
const swap = getSwapStatus()

const WhatIntegrationAutomation: FC<WhatIntegrationAutomationProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          Integrations and Automations listen to events in systems and react to them by launching
          Ziggy flows and blocks.
        </p>
        <p>Click Learn More to see some examples.</p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="What are Integrations and Automations?"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/hero/whats-an-automation.webp"
        cta={<CTA label="Learn More" href="what-are-automations" noBottomMargin />}
        scale={0.7}
        swap={swap}
      />
    </div>
  )
}

export default WhatIntegrationAutomation
