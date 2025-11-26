import { FC } from 'react'
import Carousel from '@/components/ui/Carousel'
import CarouselItem from '@/components/ui/Carouseltem'

interface HubspotBlockCollectionProps {}

const HubspotBlockCollection: FC<HubspotBlockCollectionProps> = ({}) => {
  return (
    <div>
      <Carousel slidesToShow={3}>
        {/*Read*/}
        <CarouselItem
          title="Read"
          imageAlt="Hubspot Read"
          imageUrl="/hubspot-blocks/read-batch.png"
          linkText="Learn more"
          linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-read">
          <div>
            <p>Read anything from HubSpot with batching, filtering, property selection</p>
          </div>
        </CarouselItem>

        {/*Write*/}
        <CarouselItem
          title="Write"
          imageAlt="Hubspot Read"
          imageUrl="/hubspot-blocks/write-upsert.png"
          linkText="Learn more"
          linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-write">
          <div>
            <p>
              Update, upsert to any object. Validation, batching, specify properties you want to
              update
            </p>
          </div>
        </CarouselItem>

        {/*Read*/}
        <CarouselItem
          title="Read"
          imageAlt="Hubspot Read"
          imageUrl="/hubspot-blocks/read-batch.png"
          linkText="Learn more"
          linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-read">
          <div>
            <p>Read anything from HubSpot with batching, filtering, property selection</p>
          </div>
        </CarouselItem>

        {/*Write*/}
        <CarouselItem
          title="Write"
          imageAlt="Hubspot Read"
          imageUrl="/hubspot-blocks/write-upsert.png"
          linkText="Learn more"
          linkUrl="https://docs.ziggyservices.com/user-guide/block-types/hubspot/hs-write">
          <div>
            <p>
              Update, upsert to any object. Validation, batching, specify properties you want to
              update
            </p>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default HubspotBlockCollection
