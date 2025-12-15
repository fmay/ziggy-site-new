'use client'

import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface ExtensibleProps {}

const swap = getSwapStatus()

const Extensible: FC<ExtensibleProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          Backed by a CLI and SDK, TypeScript developer can build custom blocks that plugin straight
          into Ziggy
        </p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Extend and customize"
        subtitle="Extend, customise Ziggy using our plugin system and integrate with your platform"
        imageCopy={<ImageContent />}
        image="/home/home-customise.webp"
        scale={0.7}
        cta={<CTA label="Learn More" href="extend" noBottomMargin />}
        swap={swap}
      />
    </div>
  )
}

export default Extensible
