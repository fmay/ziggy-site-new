import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ServicesListProps {
}

const ServicesList:FC<ServicesListProps> = ({}) => {

  const ImageContent = () => {
    return (
      <>
        <p>
          We offer a full range of services for integrations, automations and migrations.
        </p>
        <ul>
          <li><strong>Training</strong> - 8 hours included with Ziggy Enterprise and Ziggy Integration Partner.</li>
          <li><strong>End-to-end Solutions</strong> - we can design, build and implement complete solutions.</li>
          <li><strong>Support </strong> - we offer tailored support for all requirements</li>
          <li><strong>Hosting </strong> - Ziggy can be installed on any infrastructure but we can also configure and maintain this for you.</li>
          <li><strong>DevOps Support</strong> - Ziggy is easy to install and run, but we can assist with advice, configuration and maintenance if required.</li>
        </ul>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Services"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/services/services-in-page.webp"
        cta={<CTA label="Learn more" href="/platform" noBottomMargin />}
        scale={0.6}
        contentNudge={0}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ServicesList