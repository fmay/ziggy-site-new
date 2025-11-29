import PageLayout from '@/components/ui/layout/page-layout/PageLayout'
import Carousel from '@/components/ui/carousel/Carousel'

export default function Products() {
  return (
    <PageLayout
      title="Products"
      description="Explore our suite of products designed to power your business growth.">
      <Carousel slidesToShow={2}>
        <div className="mx-2">
          <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-stripe-navy mb-3">Product One</h3>
            <p className="text-stripe-gray mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt.
            </p>
            <a href="#" className="text-stripe-purple hover:underline font-semibold">
              Learn more →
            </a>
          </div>
        </div>

        <div className="mx-2">
          <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-stripe-navy mb-3">Product Two</h3>
            <p className="text-stripe-gray mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt.
            </p>
            <a href="#" className="text-stripe-purple hover:underline font-semibold">
              Learn more →
            </a>
          </div>
        </div>

        <div className="mx-2">
          <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-stripe-navy mb-3">Product Three</h3>
            <p className="text-stripe-gray mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt.
            </p>
            <a href="#" className="text-stripe-purple hover:underline font-semibold">
              Learn more →
            </a>
          </div>
        </div>
      </Carousel>
    </PageLayout>
  )
}
