import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface ImproveProcessesProps {}

const ImproveProcesses: FC<ImproveProcessesProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Below are some example process. Scroll through the list to get some ideas.</p>
        <CTA label="Learn More" href="platform" noBottomMargin />
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Automation and integration processes"
        subtitle="The list is endless. Ziggy can help you move data from A to B in almost any scenario and between almost any platform, database, API, files etc."
        imageCopy={<ImageContent />}
        image="/placeholder.svg"
        swap
      />
    </div>
  )
}

export default ImproveProcesses
