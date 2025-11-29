import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'

export default function Resources() {
  return (
    <PageLayout
      title="Resources"
      description="Insights, guides, and best practices to help you succeed.">
      <div className="space-y-6">
        {[1, 2, 3, 4].map(item => (
          <div
            key={item}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-stripe-navy mb-2">
                  Resource Article {item}
                </h3>
                <p className="text-stripe-gray mb-4 md:mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore.
                </p>
              </div>
              <a
                href="#"
                className="text-stripe-purple hover:underline font-semibold whitespace-nowrap">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
