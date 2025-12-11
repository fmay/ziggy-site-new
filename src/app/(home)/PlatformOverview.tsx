import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface PlatformOverviewProps {}

const PlatformOverview: FC<PlatformOverviewProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          Ziggy is not only easy to use, it's packed with a raft of features.
        </p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Easy to use, yet feature packed"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/home/business-functions.webp"
        scale={0.9}
        cta={<CTA label="Learn More" href="platform" noBottomMargin />}
      />
    </div>
  )
}

export default PlatformOverview
