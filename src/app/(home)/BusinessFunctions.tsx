import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface BusinessFunctionsProps {}

const BusinessFunctions: FC<BusinessFunctionsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Ziggy handles automation and integration processes within, from and to every function and department in your company. </p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Business functions we help"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/home/business-functions.webp"
        scale={0.9}
        cta={<CTA label="Learn More" href="platform" noBottomMargin/>}
        swap
      />
    </div>
  )
}

export default BusinessFunctions
