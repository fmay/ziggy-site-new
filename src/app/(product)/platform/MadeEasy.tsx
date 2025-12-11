import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface MadeEasyProps {}

const swap = getSwapStatus()

const MadeEasy: FC<MadeEasyProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          Ziggy is designed from the ground up to be easy to use whether you are a developer or not.
        </p>
        <p>Its AI features lets you do things that normally only a developer could do.</p>
        <p>
          It avoids the complexities of ETL platforms and coding while providing everything you need
          to operate at scale.
        </p>
        <p>Each Ziggy Block does one simple thing only.</p>
        <p>All data pipelines are built on a visual canvas.</p>
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
        scale={0.6}
        cta={<CTA label="Learn More" href="features" noBottomMargin />}
        swap={swap}
      />
    </div>
  )
}

export default MadeEasy
