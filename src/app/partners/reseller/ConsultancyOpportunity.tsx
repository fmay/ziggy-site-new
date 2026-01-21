import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ConsultancyOpportunityProps {}

const ConsultancyOpportunity: FC<ConsultancyOpportunityProps> = ({}) => {
  const ImageContent = () => {
    return (
      <div className="">
        <p>Professional Services opportunities for Ziggy customers</p>
        <ul>
          <li>
            <strong>Flow Building</strong> - your clients may want you to design some or all or their integration
            Flows.
          </li>
          <li>
            <strong>Migrations</strong> - clients do not normally want to run migrations. Ziggy is great at running
            simple or complex migrations at any scale.
          </li>
          <li>
            <strong>Training</strong> - if you have sold a Ziggy system into a client or if we refer a client of ours
            to you.
          </li>
          <li>
            <strong>Support</strong> - clients running a Ziggy installation often want ongoing retained support.
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="Consultancy revenue opportunities."
        subtitle=""
        imageCopy={<ImageContent />}
        image="/solutions/crm/crm-consultancy.webp"
        cta={<CTA label="Ziggy Platform" href="/platform" noBottomMargin />}
        scale={0.6}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ConsultancyOpportunity
