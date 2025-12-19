import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ClusterProps {}

const Cluster: FC<ClusterProps> = ({}) => {
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
        title="Single Instance or Ziggy Cluster"
        subtitle="Simple Docker installation on any infrastructure whether you need something single of scalability and high availability."
        imageCopy={<ImageContent />}
        image="/platform/cluster.webp"
        cta={<CTA label="Learn More" href="cluster" noBottomMargin />}
        scale={0.7}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default Cluster
