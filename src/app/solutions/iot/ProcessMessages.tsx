import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ProcessMessagesProps {}

const ProcessMessages: FC<ProcessMessagesProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>
          Ziggy's powerful messaging system supports MQTT (other protocols available). Configure which
          messages to subscribe to that launch Ziggy Flows.
        </p>
        <p>
          Ziggy Flows can perform any require data transformations before passing the data to other
          platforms, databases, APIs or systems.
        </p>
        <p>
          Process any message volume with Ziggy Cluster.
        </p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Message processing"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/solutions/iot/iot-messaging.webp"
        cta={<CTA label="Learn More" href="https://docs.ziggyplatform.com/user-guide/MQTT" noBottomMargin />}
        scale={1}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ProcessMessages
