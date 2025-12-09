import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface MadeEasyProps {}

const MadeEasy: FC<MadeEasyProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Easy to use whether you're a developer or not.</p>
        <ul>
          <li>Each Ziggy Block does one simple thing only</li>
          <li>All data pipelines are built on a visual canvas</li>
          <li>AI features let you do things only a developer could normally do</li>
          <li>Backed by all the features you need</li>
        </ul>
        <CTA label="Learn More" href="features" noBottomMargin />
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Simplicity at the heart of chaos"
        subtitle="Ziggy is designed from the ground up to be easy to use. It avoids the complexities of ETL platforms and coding while providing everything you need to operate at scale."
        imageCopy={<ImageContent />}
        image="/platform/easy.webp"
        swap
        scale={0.5}
      />
    </div>
  )
}

export default MadeEasy
