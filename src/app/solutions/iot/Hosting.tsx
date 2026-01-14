import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface HostingProps {}

const Hosting: FC<HostingProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>
          Ziggy has many benefits for companies who care about having total control over data
          security, performance and cost
        </p>

        <ul>
          <li>
            It runs on any infrastructure - yours or Ziggy managed private instances and clusters.
          </li>
          <li>
            You determine when and where data is persisted on a per Flow basis - never, always or on
            errors
          </li>
          <li>
            You will never worry about usage based cost increases - we charge only for the server.
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Total control over data security, performance and cost"
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

export default Hosting
