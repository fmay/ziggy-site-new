import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'

interface ScrollIntroProps {}

const ScrollIntro: FC<ScrollIntroProps> = ({}) => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2>Easy customer integrations can increase your platform's value proposition.</h2>
          <p>
            In today's B2B world, integrating your platform with your customers' platforms and
            systems is not just a nice-to-have. Ziggy makes it fast, easy and means your customers
            can avoid having to work with just an API.
          </p>
        </div>
      ),
      image: '/home/home-pip.webp',
      scale: 0.7,
      contentNudge: -30,
    },
    {
      content: (
        <div>
          <h2>Ziggy integrations means stickier customers</h2>
          <p>Using Ziggy to simplify and speed up integrations will make your platform more sticky.</p>
        </div>
      ),
      image: '/integration-partners/stickiness.webp',
      scale: 0.7,
      contentNudge: 0,
    },
    {
      content: (
        <div>
          <h2>API and code free integration for your customers</h2>
          <p>
            Delight your customers by letting them use Ziggy to get data out of and into your
            platform without having to code.
          </p>
        </div>
      ),
      image: '/integration-partners/no-code.webp',
      scale: 0.7,
      contentNudge: 0,
    },
    {
      content: (
        <div>
          <h2>Extend Ziggy with custom block plugins for your platform.</h2>
          <p>Custom block plugins are what makes it so easy for your customer to integrate with your platform. Read on to see how it's done.</p>
          <CTA label="How to Customize Ziggy" href="#how-its-done" />
        </div>
      ),
      image: '/integration-partners/plugin.webp',
      contentNudge: 0,
      scale: 0.7
    },
    {
      content: (
        <div>
          <h2>Keep your developers focused on your platform</h2>
          <p>
            Dragging developers off your product to deal with customer integrations usually
            negatively impacts your product. And you have to maintain, not just build.
          </p>
        </div>
      ),
      image: '/integration-partners/developer.webp',
      scale: 0.7,
      contentNudge: 30,
    },
  ]
  return (
    <>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollIntro
