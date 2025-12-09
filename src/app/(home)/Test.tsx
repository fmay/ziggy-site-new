import { FC } from 'react'
import SimpleCard from '@/components/ui/simple-card/SimpleCard'
import ProcessImage from '@/components/ui/simple-card/ProcessImage'

interface TestProps {
}

const Test:FC<TestProps> = ({}) => {
 return (
  <div className="flex flex-row flex-wrap">
    <SimpleCard
      className="w-[300px]"
      title=""
      imageDiv={<div className="w-[120px]"><ProcessImage urlFrom="/home/process-examples/crm.webp" urlTo="/home/process-examples/erp.webp" /></div>}
      content="When a record changes in your ERP, update the corresponding record in your CRM. Or vice-versa. ">
    </SimpleCard>
  </div>
 )
}

export default Test