import { FC } from 'react'
import CTA from '@/components/ui/cta/CTA'

interface MissionProps {}

const Mission: FC<MissionProps> = ({}) => {
  return (
    <div className="max-w-7xl w-full px-0 flex flex-row gap-[100px]">
      <div className="w-full text-white">
        <h3>We have an obsession with total project cost efficiency - so our mission is simple…</h3>
        <h4 className="">
          To make it extremely easy, for any business to automate and integrate data, across their
          own systems, and to and from third party systems, where security, customization, technical
          resource flexibility, auditability and cost effectiveness are paramount.
        </h4>
        <CTA label="Contact Us" href="contact" />
      </div>
    </div>
  )
}

export default Mission
