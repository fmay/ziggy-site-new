import PageLayout from '@/components/ui/layout/page-layout/PageLayout'

export default function Developers() {
  return (
    <PageLayout
      title="Developers"
      description="Everything you need to build and integrate with our platform.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-stripe-navy text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Documentation</h3>
          <p className="mb-6 opacity-90">
            Comprehensive guides and API references to help you get started quickly and build with
            confidence.
          </p>
          <button className="px-6 py-3 bg-white text-stripe-navy rounded-full font-semibold hover:opacity-90 transition-opacity">
            View Docs
          </button>
        </div>

        <div className="bg-stripe-light-bg p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-stripe-navy mb-4">API Reference</h3>
          <p className="text-stripe-gray mb-6">
            Complete API documentation with examples in multiple programming languages.
          </p>
          <button className="px-6 py-3 border-2 border-stripe-navy text-stripe-navy rounded-full font-semibold hover:bg-stripe-navy hover:text-white transition-all">
            Explore API
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
