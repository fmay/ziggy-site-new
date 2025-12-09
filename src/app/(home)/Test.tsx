import { FC } from 'react'
import SimpleCard from '@/components/ui/simple-card/SimpleCard'
import ProcessImage from '@/components/ui/simple-card/ProcessImage'

interface TestProps {}

const Test: FC<TestProps> = ({}) => {
  return (
    <div className="flex flex-row flex-wrap items-stretch mt-[90px]">
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="ERP" to="CRM" />
          </div>
        }
        content="When a record changes in your ERP, update the corresponding record in your CRM. Or vice-versa. "></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="helpdesk" to="email" />
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
        content="When a record changes in your CRM perform a task that update something else in the CRM "></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="file" to="database" />
          </div>
        }
        content="Periodically poll an SFTP server for a file, read it and update a database"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="ERP" to="warehouse" />
          </div>
        }
        content="Update a data warehouse when data changes in your ERP"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="CRM" to="database" />
          </div>
        }
        content="Keep your reporting database up to date whenever data changes in your CRM"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="anywhere" to="api" />
          </div>
        }
        content="When a record changes in any system, make an API call"></SimpleCard>
      <SimpleCard
        className="w-[300px]"
        title=""
        imageDiv={
          <div className="">
            <ProcessImage from="anywhere" to="anywhere" />
          </div>
        }
        content="Migrate all your data when moving from one platform to another"></SimpleCard>
    </div>
  )
}

export default Test
