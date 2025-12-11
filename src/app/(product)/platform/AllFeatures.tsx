import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface AllFeaturesProps {}

const swap = getSwapStatus()

const AllFeatures: FC<AllFeaturesProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Easy to use whether you're a developer or not.</p>
        <ul>
          <li>Designed for non-developers and developers alike</li>
          <li>Each Ziggy Block does one simple thing only</li>
          <li>All data pipelines are built on a visual canvas</li>
          <li>Backed by all the features you need</li>
        </ul>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Feature overview"
        subtitle="Browse through Ziggy's key features."
        imageCopy=""
        image="/platform/features.webp"
        cta={<CTA label="See Features" href="features" noBottomMargin />}
        scale={0.7}
        swap={swap}
      />
    </div>
  )
}

export default AllFeatures
