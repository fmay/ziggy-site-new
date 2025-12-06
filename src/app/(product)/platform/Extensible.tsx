import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface ExtensibleProps {}

const Extensible: FC<ExtensibleProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Backed by a CLI and SDK, TypeScript developer can build custom blocks that plugin straight into Ziggy</p>
        <CTA label="Learn More" href="extend" noBottomMargin />
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Extend and customize"
        subtitle="Extend, customise Ziggy using our plugin system and integrate with your platform"
        imageCopy={<ImageContent />}
        image="/platform/plugin.webp"
        scale={0.7}
      />
    </div>
  )
}

export default Extensible
