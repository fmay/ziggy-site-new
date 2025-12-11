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
              Ziggy is easier to use than anything else, so you won’t need much in the way of
              services but we’re always here if you need us.
            </p>
            <p>
              We think training offers a real benefit and be reassured that if you want help
              building Ziggy Blocks , Ziggy Flows or anything else, we’re here to help.
            </p>{' '}
          </>
        }
      />
    </div>
  )
}

export default Services
