import { FC } from 'react'

interface BlockCollectionsProps {}

const CollectionsExtendIntro: FC<BlockCollectionsProps> = ({}) => {
  return (
    <div className="section-intro">
      <h2>Your platform's block collections</h2>
      <p>
        In Ziggy, each block should perform one simple action. A typical implementation will have a
        collection of blocks.
      </p>
      <p>
        Below is an example for the HubSpot platform. You'll build your own collection that suits your customers' needs.
      </p>
    </div>
  )
}

export default CollectionsExtendIntro
