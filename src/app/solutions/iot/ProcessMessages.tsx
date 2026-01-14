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
          Ziggy's powerful messaging system supports MQTT (others coming soon). Configure which
          messages to listen to and process, then launch a Zigy Flow to process it.
        </p>
        <p>
          Ziggy Flows can perform any require data transformations before passing the data to other
          platforms, databases, APIs or systems.
        </p>
        <p>
          Ziggy can start small and low cost but then scale to deal with extremely large amounts of
          data using Ziggy Cluster.
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
        image="/hero/whats-an-automation.webp"
        cta={<CTA label="Learn More" href="what-are-automations" noBottomMargin />}
        scale={0.7}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ProcessMessages
