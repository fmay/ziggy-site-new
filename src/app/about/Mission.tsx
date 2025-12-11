import { FC } from 'react'
import CTA from '@/components/ui/cta/CTA'
interface MissionProps {}

const Mission: FC<MissionProps> = ({}) => {
  return (
    <div className="max-w-7xl w-full px-0 mt-[-90px]">
      <div className="w-full text-white">
        <div>
          <p className="text-[1.25rem]">We have an obsession with total project cost efficiency, so our mission is simple…</p>
          <p className="text-[1.25rem] font-semibold tracking-wide">
            To make it extremely easy, for any business to automate and integrate data, across their
            own systems, and to and from third party systems, where security, customization,
            technical resource flexibility, auditability and cost effectiveness are paramount.
          </p>
        </div>
        <CTA label="Contact Us" href="contact" />
      </div>
    </div>
  )
}

export default Mission
