import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface NoCodingProps {}

const NoCoding: FC<NoCodingProps> = ({}) => {
  return (
    <div>
      <SimplePair
        title="No code. No API."
        subtitle=""
        imageCopy={
          <>
            {' '}
            <p>
              Delight your customers by letting them get data out of and into your platform without
              writing code.
            </p>
          </>
        }
        image="/integration-partners/no-code.webp"
        cta={<CTA label="Learn More" href="extend" noBottomMargin />}
        scale={1}
        swap
      />
    </div>
  )
}

export default NoCoding
