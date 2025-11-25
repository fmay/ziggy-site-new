import PageLayout from '@/components/PageLayout'

export default function Careers() {
  return (
    <PageLayout
      title="Careers"
      description="Join our team and help us build the future of online business.">
      <div className="space-y-6">
        {[1, 2, 3].map(item => (
          <div
            key={item}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-stripe-navy mb-2">
                  Position Title {item}
                </h3>
                <p className="text-stripe-gray mb-4 md:mb-0">Location • Full-time • Engineering</p>
              </div>
              <a
                href="#"
                className="text-stripe-purple hover:underline font-semibold whitespace-nowrap">
                Apply now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
