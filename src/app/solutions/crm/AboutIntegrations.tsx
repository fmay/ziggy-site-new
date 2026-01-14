import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface AboutIntegrationsProps {
}

const AboutIntegrations:FC<AboutIntegrationsProps> = ({}) => {

  const ImageContent = () => {
    return (
      <div className="">
        <p>
          Integrations and Automations can dramatically streamline the way data is moved in and out
          of your CRM.
        </p>
        <p>
          You can perform any required data transformations before putting data into any object in
          your CRM or into any 3rd party system.
        </p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Integrations, Automations and Migrations for any CRM"
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

export default AboutIntegrations