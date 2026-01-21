import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface SendMessagesProps {}

const SendMessages: FC<SendMessagesProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>
          Ziggy Flows can also be triggered by Webhooks and API calls from 3rd party systems. You
          can then use Ziggy Blocks to send individual or broadcast message to devices.
        </p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Send messages to devices"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/solutions/iot/iot-send-message.webp"
        // cta={<CTA label="Learn More" href="what-are-automations" noBottomMargin />}
        scale={0.7}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default SendMessages
