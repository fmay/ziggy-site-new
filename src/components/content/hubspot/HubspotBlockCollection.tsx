'use client'

import { FC } from 'react'
import Carousel from '@/components/ui/carousel/Carousel'
import CarouselItem from '@/components/ui/carousel/Carouseltem'
import { useScreenSize } from '@/hooks/useScreenSize'

interface HubspotBlockCollectionProps {
  height?: string
}

const HubspotBlockCollection: FC<HubspotBlockCollectionProps> = ({ height }) => {
  const { isLg } = useScreenSize()

  const ItemHeight = isLg ? '530px' : '590px'
  return (
    <div
      style={{
        ...(height && {
          height,
          display: 'flex',
          flexDirection: 'column',
        }),
      }}>
      <Carousel
        slidesToShow={isLg ? 4.3 : 1.2}
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
          imageUrl="/hubspot-blocks/currency.webp"
          linkText="Learn more"
          linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-currency"
          height={ItemHeight}>
          <div>
            <p>Takes an email address and translates it into a HubSpot owner/user id</p>
          </div>
        </CarouselItem>

        {/*Search*/}
        <CarouselItem
          title="Search"
          imageAlt="Search on any HubSpot object."
          imageUrl="/hubspot-blocks/search.webp"
          linkText="Learn more"
          linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-search"
          height={ItemHeight}>
          <div>
            <p>Search on any HubSpot object.</p>
          </div>
        </CarouselItem>

        {/*Get/Set File attachments*/}
        <CarouselItem
          title="Get File Attachments"
          imageAlt="Get File Attachments"
          imageUrl="/hubspot-blocks/attachments-get.png"
          // linkText="Learn more"
          // linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-owner-translate"
          height={ItemHeight}>
          <div>
            <p>Get/set file attachments</p>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default HubspotBlockCollection
