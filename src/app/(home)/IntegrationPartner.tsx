import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface IntegrationPartnerProps {}

const IntegrationPartner: FC<IntegrationPartnerProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          Our plugin system lets you customise Ziggy so your platform can exchange data with
          anything else with minimal effort for your customers
        </p>
        <ul>
          <li>Typescript based plugin system</li>
          <li>CLI and SDK for rapid development</li>
          <li>
            Your customer build flows in minutes that work directly with your platform and without
            needing to code or use complex, costly ETL platforms.
          </li>
        </ul>
        <CTA label="Learn More" href="integration-partners" noBottomMargin />
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Become a Platform Integration Partner"
        subtitle="Extend Ziggy so your customers can use Ziggy to effortlessly get data into and out of your platform."
        imageCopy={<ImageContent />}
        image="/home/pip.webp"
        swap
      />
    </div>
  )
}

export default IntegrationPartner
