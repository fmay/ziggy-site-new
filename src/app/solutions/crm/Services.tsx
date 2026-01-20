import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>If you need us to assist, our services team is here to help.</p>
        <ul>
          <li>End to end flow design</li>
          <li>Training</li>
          <li>Support</li>
          <li>Consultancy</li>
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
        image="/solutions/crm/crm-services.webp"
        cta={<CTA label="Contact us" href="/contact" noBottomMargin />}
        scale={0.7}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default Services
