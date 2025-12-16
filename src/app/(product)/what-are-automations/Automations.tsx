'use client'

import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface AutomationsProps {}
const swap = getSwapStatus()

const Automations: FC<AutomationsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          An Ziggy flow that is triggered by ...
        </p>
        <ul>
          <li>An incoming Email, WhatsApp, SMS, Social Media post</li>
          <li>an event in a messaging system such as Internet of Things/MQTT,
            AWS SQS/SNS, Kafka, Redis Event Streams/PubSub etc.</li>
          <li>Ziggy's Scheduler</li>
        </ul>
      </>
    )
  }

  return (
    <SimplePair
      title="What's an Automation?"
      subtitle=""
      imageCopy={<ImageContent />}
      image="/product/what-are-automations/automation.webp"
      cta={<CTA label="See Example" href="#example-automation" noBottomMargin />}
      scale={0.6}
      swap={swap}
    />
  )
}

export default Automations
