import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface WhosItForProps {}

const WhosItFor: FC<WhosItForProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Ziggy is built for anyone who works with data.</p>
        <p>
          It is designed by a team with extensive automation and integration experience and an
          obsession for total project cost efficiency
        </p>
        <p>Its AI features let you to accomplish tasks that normally require developers.</p>
        <p>It’s simply easier and faster to use than other automation tools and platforms.</p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Extend with Custom Blocks"
        subtitle=""
        imageCopy={
          <>
            {' '}
            <p className="text-lg text-gray-600 mb-4">
              Custom Blocks are what make it so easy for your customers to access your platform's
              data. Our CLI and SDK make it easy for TypeScript developers.
            </p>
            <p>Your platform doesn't even need an API.</p>
          </>
        }
        image="/integration-partners/custom-block.webp"
        cta={<CTA label="Build Custom Blocks" href="extend" className="mb-3" />}
        scale={1}
      />
    </div>
  )
}

export default WhosItFor
