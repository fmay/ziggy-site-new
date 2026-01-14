import { FC } from 'react'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div id="services">
      <Intro
        title="Professional Services"
        description={
          <>
            <p>
              Ziggy offers a range of services that cover training, support, consultancy, custom
              block building and flow design. We're here if you need us.
            </p>
            <p>
              We include a day of training to ensure you get off to the best possible start. This
              training is tailored to suit your needs and can be split into multiple sessions.
            </p>
            <CTA label="Contact Us" href="contact" />
          </>
        }
        hasCTA
      />
    </div>
  )
}

export default Services
