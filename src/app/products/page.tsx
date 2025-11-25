import PageLayout from '@/components/PageLayout'

export default function Products() {
  return (
    <PageLayout
      title="Products"
      description="Explore our suite of products designed to power your business growth."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-2xl font-semibold text-stripe-navy mb-3">Product One</h3>
          <p className="text-stripe-gray mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
          <a href="#" className="text-stripe-purple hover:underline font-semibold">
            Learn more →
          </a>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-2xl font-semibold text-stripe-navy mb-3">Product Two</h3>
          <p className="text-stripe-gray mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
          <a href="#" className="text-stripe-purple hover:underline font-semibold">
            Learn more →
          </a>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-2xl font-semibold text-stripe-navy mb-3">Product Three</h3>
          <p className="text-stripe-gray mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
          <a href="#" className="text-stripe-purple hover:underline font-semibold">
            Learn more →
          </a>
        </div>
      </div>
    </PageLayout>
  )
}
