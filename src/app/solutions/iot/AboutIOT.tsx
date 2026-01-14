import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface AboutIOTProps {}

const AboutIOT: FC<AboutIOTProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>
          Ziggy can receive any data message sent from any IoT device. It can then perform any data
          transformation you like before putting the data into any 3rd party platform, API, database
          or system.
        </p>
        <p>
          You can also send messages to IoT devices triggered by events happening in other systems
          and platforms.
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
        title="Put Ziggy in the middle of your IoT data flows"
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

export default AboutIOT
