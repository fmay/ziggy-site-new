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
        className="mb-[40px]"
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
          {/*Read*/}
          <CarouselItem
            title="Read"
            imageAlt="Hubspot Read"
            imageUrl="/hubspot-blocks/read-batch.png"
            linkText="Learn more"
            linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-read"
            height={ItemHeight}>
            <div>
              <p>Read anything from HubSpot with batching, filtering, property selection</p>
            </div>
          </CarouselItem>

          {/*Write*/}
          <CarouselItem
            title="Write"
            imageAlt="Hubspot Write"
            imageUrl="/hubspot-blocks/write-upsert.png"
            linkText="Learn more"
            linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-write"
            height={ItemHeight}>
            <div>
              <p>
                Update, upsert any HubSpot object. Validation, batching, specify properties you want
                to update
              </p>
            </div>
          </CarouselItem>

          {/*Get Associations*/}
          <CarouselItem
            title="Get Associated Object"
            imageAlt="Get Associated Object"
            imageUrl="/hubspot-blocks/get-associations.png"
            linkText="Learn more"
            linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-get-associated"
            height={ItemHeight}>
            <div>
              <p>
                Get associated objects of the require type. Specify the association type and choose
                what properties you require.
              </p>
            </div>
          </CarouselItem>

          {/*Set Association*/}
          <CarouselItem
            title="Set Associations"
            imageAlt="Set Associations"
            imageUrl="/hubspot-blocks/set-associations.png"
            linkText="Learn more"
            linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-create-associations"
            height={ItemHeight}>
            <div>
              <p>Make associations in Hubspot based data passed into the block</p>
            </div>
          </CarouselItem>

          {/*Get Owners*/}
          <CarouselItem
            title="Get Owners"
            imageAlt="Get Owners"
            imageUrl="/hubspot-blocks/get-owners.png"
            linkText="Learn more"
            linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-get-all-owners"
            height={ItemHeight}>
            <div>
              <p>Get a list of Hubspot users and associated metadata</p>
            </div>
          </CarouselItem>

          {/*Owner translate*/}
          <CarouselItem
            title="Translate Owners"
            imageAlt="Translate Owners"
            imageUrl="/hubspot-blocks/owner-translate.png"
            linkText="Learn more"
            linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-owner-translate"
            height={ItemHeight}>
            <div>
              <p>Takes an email address and translates it into a HubSpot owner/user id</p>
            </div>
          </CarouselItem>

          {/*Set Get Currency*/}
          <CarouselItem
            title="Set/Get Currency"
            imageAlt="Set/Get Currency"
            imageUrl="/hubspot-blocks/owner-translate.png"
            linkText="Learn more"
            linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-owner-translate"
            height={ItemHeight}>
            <div>
              <p>Takes an email address and translates it into a HubSpot owner/user id</p>
            </div>
          </CarouselItem>

          {/*Get File attachments*/}
          <CarouselItem
            title="Get File Attachments"
            imageAlt="Get File Attachments"
            imageUrl="/hubspot-blocks/attachments-get.png"
            // linkText="Learn more"
            // linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-owner-translate"
            height={ItemHeight}>
            <div>
              <p>Gets file attachments from HubSpot</p>
            </div>
          </CarouselItem>

          {/*Set File Attachments*/}
          <CarouselItem
            title="Create File Attachments"
            imageAlt="Create File Attachments"
            imageUrl="/hubspot-blocks/file-attachments-set.png"
            // linkText="Learn more"
            // linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-owner-translate"
            height={ItemHeight}>
            <div>
              <p>Create file attachments in HubSpot</p>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  )
}

export default ExampleAutomations
