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
            Flow Building - your clients may want you to design some or all or their integration
            Flows.
          </li>
          <li>
            Migrations - clients do not normally want to run migrations. Ziggy is great at running
            simple or complex migrations at any scale.
          </li>
          <li>
            Training - if you have sold a Ziggy system into a client or if we refer a client of ours
            to you.
          </li>
          <li>
            Support - clients running a Ziggy installation often want ongoing retained support.
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
        image="/hero/whats-an-automation.webp"
        cta={<CTA label="Learn More" href="what-are-automations" noBottomMargin />}
        scale={0.7}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default ConsultancyOpportunity
