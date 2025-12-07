import { FC } from 'react'
import Carousel from '@/components/ui/carousel/Carousel'
import CarouselItem from '@/components/ui/carousel/Carouseltem'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'

interface ExampleAutomationsProps {
  height?: string
}

const ExampleAutomations: FC<ExampleAutomationsProps> = ({ height }) => {
  const ItemHeight = '630px'
  return (
    <>
      <Intro
        className="mb-[20px]"
        title="Automation and integration processes"
        description={
          <div>
            <p>
              The list is endless. Ziggy can help you move data from A to B in almost any scenario
              and between almost any platform, database, API, files etc.
            </p>
            <CTA label="Features overview" href="/features" className="" />
          </div>
        }
        // image="/placeholder.svg"
        imageScale={0.5}
      />
      <div
        style={{
          ...(height && {
            height,
            display: 'flex',
            flexDirection: 'column',
          }),
        }}>
        <Carousel
          slidesToShow={3.3}
          slidesToScroll={1}
          swipeToSlide={true}
          infinite={false}
          enableTrackpadSwipe={true}>

          {/*ERP <-> CRM*/}
          <CarouselItem
            title="CRM ⟷ ERP"
            imageAlt="CRM to ERP"
            imageUrl="/placeholder.svg"
            // linkText="Learn more"
            // linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-read"
            height={ItemHeight}>
            <div>
              <p>When a record changes in your ERP, update the corresponding record in your CRM. Or vice-versa.</p>
            </div>
          </CarouselItem>

          {/*ERP <-> AI*/}
          <CarouselItem
            title="CRM ⟶ AI"
            imageAlt="CRM ⟷ ERP"
            imageUrl="/placeholder.svg"
            // linkText="Learn more"
            // linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-read"
            height={ItemHeight}>
            <div>
              <p>When a record change in your CRM, generate an AI summary and save it or send it.</p>
            </div>
          </CarouselItem>

          {/*ERP <-> TABLEAU*/}
          <CarouselItem
            title="Reporting"
            imageAlt="reporting"
            imageUrl="/placeholder.svg"
            // linkText="Learn more"
            // linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-read"
            height={ItemHeight}>
            <div>
              <p>When data changes in your ERP, CRM or anywhere else, update a data warehouse or database so your reporting is updated</p>
            </div>
          </CarouselItem>

          {/*SFTP Loading*/}
          <CarouselItem
            title="SFTP Loading"
            imageAlt="sftp loading"
            imageUrl="/placeholder.svg"
            // linkText="Learn more"
            // linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-read"
            height={ItemHeight}>
            <div>
              <p>Schedule a periodic load of data from a CSV/JSON file on an SFTP server and load it into any system.</p>
            </div>
          </CarouselItem>


        </Carousel>
      </div>
    </>
  )
}

export default ExampleAutomations
