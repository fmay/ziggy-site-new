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
        Below is an example collection for the HubSpot platform. Scroll through it to see what the
        blocks do.
      </p>
    </div>
  )
}

export default CollectionsExtendIntro
