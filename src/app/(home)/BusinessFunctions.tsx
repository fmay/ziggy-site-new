'use client'

import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface BusinessFunctionsProps {}
const swap = getSwapStatus()

const BusinessFunctions: FC<BusinessFunctionsProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>
          Ziggy handles automation and integration processes within, from and to every function and
          department in your company.{' '}
        </p>
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
        cta={<CTA label="Learn More" href="demo" noBottomMargin />}
        swap={swap}
      />
    </div>
  )
}

export default BusinessFunctions
