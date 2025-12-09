import { FC } from 'react'
import CTA from '@/components/ui/cta/CTA'

interface MissionProps {}

const Mission: FC<MissionProps> = ({}) => {
  return (
    <div className="mx-auto max-w-7xl w-full px-4 lg:px-8 flex flex-row gap-[100px]">
      <div className="w-1/2">
        <p className="text-lg">
          Also, because of the technology providers current offerings, resourcing data automation
          projects with the right people is challenging. The tasks required demand an over-reliance
          on ‘developer level’ technical resources. These are scarce resources for most businesses
          and can be costly to deploy.
        </p>
        <CTA label="Book a demo" href="demo" />
      </div>

    </div>
  )
}

export default Mission
