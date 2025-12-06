import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'

interface BusinessFunctionsProps {}

const BusinessFunctions: FC<BusinessFunctionsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Copy needed?</p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Business functions we help"
        subtitle="Blah"
        imageCopy={<ImageContent />}
        image="/placeholder.svg"
      />
    </div>
  )
}

export default BusinessFunctions
