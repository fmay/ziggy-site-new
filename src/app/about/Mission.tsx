import { FC } from 'react'
import CTA from '@/components/ui/cta/CTA'

interface MissionProps {}

const Mission: FC<MissionProps> = ({}) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <p className="text-lg">
          Existing technology service providers are either cumbersome, inflexible and expensive or
          they have cloud based platforms where security can’t be controlled.
        </p>
        <p className="text-lg">
          Also, because of the technology providers current offerings, resourcing data automation
          projects with the right people is challenging. The tasks required demand an over-reliance
          on ‘developer level’ technical resources. These are scarce resources for most businesses
          and can be costly to deploy.
        </p>
        <CTA label="Book a demo" href="demo" />
      </div>
      <div  className="w-1/2">
        <p className="text-3xl text-white">So our mission is simple...</p>
        <p className="text-2xl text-white font-extralight">
          To make it extremely easy, for any business to automate and integrate data, across their
          own systems, and to and from third party systems, where security, customization, technical
          resource flexibility, auditability and cost effectiveness are paramount.
        </p>
      </div>
    </div>
  )
}

export default Mission
