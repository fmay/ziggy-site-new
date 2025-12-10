import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import ProcessItems from '@/app/(home)/ProcessItems'
import Intro from '@/components/ui/intro/Intro'

interface ImproveProcessesProps {}

const ImproveProcesses: FC<ImproveProcessesProps> = ({}) => {
  return (
    <div>
      <SimplePair
        title="Processes we can help with"
        subtitle="Ziggy can help you move data from A to B in almost any scenario and between almost any platform, database, API, files etc."
        imageCopy=""
        image="/home/processes.webp"
        scale={0.6}
      />
      <ProcessItems />
      <CTA label="Learn More" href="platform" />
    </div>
  )
}

export default ImproveProcesses
