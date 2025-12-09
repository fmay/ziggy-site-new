import { FC } from 'react'
import SimpleCard from '@/components/ui/simple-card/SimpleCard'
import ProcessImage from '@/components/ui/simple-card/ProcessImage'

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  return (
    <div className="flex flex-row flex-wrap">
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="ERP" />
          </div>
        }
        content="When a record changes in your ERP, update the corresponding record in your CRM. Or vice-versa. "></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="CRM" />
          </div>
        }
        content="When a record changes in your CRM perform a task that update something else in the CRM "></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="file" />
          </div>
        }
        content="When a support ticket is created, create a summary using AI then email the result"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="CRM" />
          </div>
        }
        content="Periodically poll an SFTP server for a file, read it and update a database"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="CRM" />
          </div>
        }
        content="Update a data warehouse when data changes in your ERP"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="CRM" />
          </div>
        }
        content="Keep your reporting data base up to date whenever data changes in your CRM"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="anywhere" />
          </div>
        }
        content="When a record changes in any system, make an API call"></SimpleCard>
    </div>
  )
}

export default Test
