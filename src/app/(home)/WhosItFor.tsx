'use client'

import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface WhosItForProps {}
const swap = getSwapStatus()

const WhosItFor: FC<WhosItForProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Ziggy is built for anyone who works with data.</p>
        <p>
          It is designed by a team with extensive automation and integration experience and an
          obsession for total project cost efficiency
        </p>
        <p>
          Its AI features let you to accomplish tasks that normally require developers.
        </p>
        <p>It’s simply easier and faster to use than other automation tools
          and platforms.</p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Who is Ziggy for?"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/home/who-for.webp"
        cta={<CTA label="Learn More" href="platform" noBottomMargin />}
        scale={0.6}
        swap={swap}
      />
    </div>
  )
}

export default WhosItFor
