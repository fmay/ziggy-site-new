import { FC } from 'react'
import Intro from '@/components/ui/intro/Intro'

interface BlockCollectionsProps {}

const CollectionsIntro: FC<BlockCollectionsProps> = ({}) => {
  return (
    <>
      <Intro
        title="Block collections"
        description={
          <div>
            <p>
              A collection is a set of blocks that all address the same CRM, API, ERP, Database etc,
            </p>
            <p>Below is the HubSpot collection.</p>
          </div>
        }
      />
    </>
  )
}

export default CollectionsIntro
