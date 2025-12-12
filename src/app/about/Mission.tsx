import { FC } from 'react'
import CTA from '@/components/ui/cta/CTA'
interface MissionProps {}

const Mission: FC<MissionProps> = ({}) => {
  return (
    <div className="max-w-7xl w-full px-0 mt-[-120px]">
      <div className="w-full text-white">
        <div>
          <p className="text-[1.8rem]">So our mission is simple…</p>
          <p className="text-[1.25rem] tracking-wide">
            To make it easy, for any business to automate and integrate data across their
            own systems and with third party systems, where security, customization, technical
            resource flexibility and cost effectiveness are paramount.
          </p>
        </div>
        <CTA label="Contact Us" href="contact" />
      </div>
    </div>
  )
}

export default Mission
