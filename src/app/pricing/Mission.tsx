import { FC } from 'react'
import CTA from '@/components/ui/cta/CTA'

interface MissionProps {}

const Mission: FC<MissionProps> = ({}) => {
  return (
    <div>
      <p  className="text-3xl text-white">So our mission is simple...</p>
      <p  className="text-2xl text-white font-extralight">
        To make it extremely easy, for any business to automate and integrate data, across their own
        systems, and to and from third party systems, where security, customization, technical
        resource flexibility, auditability and cost effectiveness are paramount.
      </p>
      <CTA label="Book a demo" href="demo"/>
    </div>
  )
}

export default Mission
