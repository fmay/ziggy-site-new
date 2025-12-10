import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface IntegrationPartnerProps {}

const IntegrationPartner: FC<IntegrationPartnerProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          If you are a platform business that wants to make it easier for your customers to integrate data with your platform you can become one of our Platform Integration Partners and use
          using your own customised Ziggy Blocks
        </p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Become a Platform Integration Partner"
        subtitle="Extend Ziggy so your customers can use Ziggy to effortlessly get data into and out of your platform."
        imageCopy={<ImageContent />}
        image="/home/home-pip.webp"
        scale={0.75}
        cta={<CTA label="Learn More" href="integration-partners" noBottomMargin />}
      />
    </div>
  )
}

export default IntegrationPartner
