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
          You can perform any required data transformations before putting data anywhere in
          your CRM or 3rd party system.
        </p>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Moving data into and out of your CRM doesn't have to be complicated and messy"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/solutions/crm/crm-messy.webp"
        cta={<CTA label="The Ziggy platform" href="/platform" noBottomMargin />}
        scale={0.7}
        contentNudge={30}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default AboutIntegrations