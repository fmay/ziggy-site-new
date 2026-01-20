import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface PlatformIntroProps {}

const PlatformIntro: FC<PlatformIntroProps> = ({}) => {
  return (
    <div>
      <SimplePair
        title="What is a Platform Integration Partner?"
        subtitle=""
        imageCopy={
          <>
            <p>
              Platform Integration Partners build their own customised Ziggy blocks to provide
              customers with easy access to their platform without having to use an API.
            </p>
            <p>
              Their customers then build their own Ziggy Flows without having to wait for
              development teams to have availability. No coding, no problem.
            </p>
            <p>
              By doing this Platform Integration Partners open up new revenue streams from
              initiating their customers to use Ziggy blocks.
            </p>
            <p>
              Platform Partners control all aspects of infrastructure, security, performance and
              fault-tolerance.
            </p>
          </>
        }
        image="/integration-partners/partners-intro.webp"
        cta={<CTA label="Become a Partner" href="contact" />}
      />
    </div>
  )
}

export default PlatformIntro
