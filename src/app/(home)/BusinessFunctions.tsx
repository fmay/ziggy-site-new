import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface BusinessFunctionsProps {}

const BusinessFunctions: FC<BusinessFunctionsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Ziggy is your invisible facilitator for ensuring that things happen seamlessly, securely and quickly. </p>
        <CTA label="Learn More" href="platform" noBottomMargin/>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Business functions we help"
        subtitle="Ziggy and help automate process in every department in your company with normal data operations and Generative AI processes."
        imageCopy={<ImageContent />}
        image="/home/business-functions.svg"
        scale={0.9}
        swap
      />
    </div>
  )
}

export default BusinessFunctions
