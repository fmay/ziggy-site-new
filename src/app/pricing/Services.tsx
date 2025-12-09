import { FC } from 'react'
import Intro from '@/components/ui/intro/Intro'

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <div id="services">
      <Intro
        title="Professional Services"
        description={
          <>
            <p>
              Ziggy is easier to use than anything else, so you won't need much in the way of
              services. We think that training is a real benefit.
            </p>
            <p>
              But you'll be reassured to know that if want help building flows, custom blocks or
              anything else, we're here to help.
            </p>{' '}
          </>
        }
      />
    </div>
  )
}

export default Services
