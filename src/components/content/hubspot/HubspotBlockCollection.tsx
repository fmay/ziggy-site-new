import { FC } from 'react'
import Carousel from '@/components/ui/Carousel'
import CarouselItem from '@/components/ui/Carouseltem'

interface HubspotBlockCollectionProps {}

const HubspotBlockCollection: FC<HubspotBlockCollectionProps> = ({}) => {
  return (
    <div className="page-section py-[40px]">
      <div>
        <Carousel slidesToShow={3}>
          {/*Read*/}
          <CarouselItem
            title="Read"
            imageAlt="Hubspot Read"
            imageUrl="/hubspot-blocks/read-batch.png">
            <div>
              <p>Read anything from HubSpot with batching, filtering, property selection</p>
            </div>
          </CarouselItem>

          {/*Write*/}
          <CarouselItem
            title="Write"
            imageAlt="Hubspot Read"
            imageUrl="/hubspot-blocks/write-upsert.png">
            <div>
              <p>Update, upsert, validation with full batching support</p>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  )
}

export default HubspotBlockCollection
