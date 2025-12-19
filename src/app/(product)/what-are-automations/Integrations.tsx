'use client'

import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface IntegrationsProps {
}

const Integrations:FC<IntegrationsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          An Ziggy flow that is triggered manually, by a webhook, through an API call.
        </p>
      </>
    )
  }

  return (
    <SimplePair
      title="What's an Integration?"
      subtitle=""
      imageCopy={<ImageContent />}
      image="/product/what-are-automations/integrations.webp"
      cta={<CTA label="See Example" href="#example-integration" noBottomMargin />}
      scale={0.6}
      swap={getSwapStatus()}
    />
  )
}

export default Integrations