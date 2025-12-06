import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface ImproveProcessesProps {}

const ImproveProcesses: FC<ImproveProcessesProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Copy?</p>
        <CTA label="Learn More" href="platform" noBottomMargin/>

      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Automation and integration processes we improve"
        subtitle="Subtitle copy?"
        imageCopy={<ImageContent />}
        image="/placeholder.svg"
        swap
      />
    </div>
  )
}

export default ImproveProcesses
