import { FC } from 'react'

interface BlockCollectionsProps {
}

const BlockCollections:FC<BlockCollectionsProps> = ({}) => {
 return (
   <div className="section-intro">
     <h2>Block Collections</h2>
     <p>
       Sheer user friendliness is our goal. So we never have overloaded dialogs that require
       hours of training or reading to understand
     </p>
     <p>
       Instead, each platform comes with a collection of blocks, each of which does one thing
       and one thing only.
     </p>
     <p>
       Scroll through our HubSpot collection to see how each block does one thing and makes it
       easy.
     </p>
   </div>
 )
}

export default BlockCollections