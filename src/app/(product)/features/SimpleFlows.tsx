import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'

interface SimpleFlowsProps {
}

const SimpleFlows:FC<SimpleFlowsProps> = ({}) => {
 return (
   <SimplePair
     title="Simple flows can do complex things"
     subtitle=""
     image="/home/simple-flow.webp"
     imageCopy={
       <div>
         <p>
           This Ziggy flow looks simple enough. In reality, it does the following with just two
           blocks.
         </p>
         <ul>
           <li>Gets exchanges rates from an API</li>
           <li>
             Extracts rates from within the returned data into a flat format (the AI icon does
             this)
           </li>
           <li>Updates all exchange rates in HubSpot with the latest rates.</li>
         </ul>
       </div>
     }
   />
 )
}

export default SimpleFlows