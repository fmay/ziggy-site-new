import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'

interface ComplexFlowsProps {
}

const ComplexFlows:FC<ComplexFlowsProps> = ({}) => {
 return (
   <SimplePair
     swap
     title="Ziggy does complex just as well"
     subtitle=""
     image="/platform/complex-flow.webp"
     imageCopy={
       <div>
         <p>
           Flows can get complex, too. Create reusable subflows to keep things neat and tidy.
         </p>
       </div>
     }
   />
 )
}

export default ComplexFlows