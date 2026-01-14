import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>If you need help with anything, we're here to help.</p>
        <ul>
          <li>End to end flow design</li>
          <li>Training</li>
          <li>Support</li>
          <li>Adding new messaging protocols</li>
          <li>Adding custom IoT related Ziggy Blocks</li>
          <li>Hosting and DevOps support</li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Ziggy Services"
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

export default Services
