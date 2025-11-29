import PageLayout from '@/components/ui/layout/page-layout/PageLayout'

export default function Pricing() {
  return (
    <PageLayout
      title="Pricing"
      description="Simple, transparent pricing that scales with your business.">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-stripe-purple transition-colors duration-200">
          <h3 className="text-2xl font-semibold text-stripe-navy mb-2">Starter</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-stripe-navy">$29</span>
            <span className="text-stripe-gray">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-stripe-purple mr-2">✓</span>
              <span className="text-stripe-gray">Feature one</span>
            </li>
            <li className="flex items-start">
              <span className="text-stripe-purple mr-2">✓</span>
              <span className="text-stripe-gray">Feature two</span>
            </li>
            <li className="flex items-start">
              <span className="text-stripe-purple mr-2">✓</span>
              <span className="text-stripe-gray">Feature three</span>
            </li>
          </ul>
          <button className="w-full px-6 py-3 border-2 border-stripe-navy text-stripe-navy rounded-full font-semibold hover:bg-stripe-navy hover:text-white transition-all">
            Get Started
          </button>
        </div>

        <div className="bg-stripe-purple p-8 rounded-lg transform md:scale-105 shadow-xl">
          <h3 className="text-2xl font-semibold text-white mb-2">Professional</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$99</span>
            <span className="text-white opacity-90">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white opacity-90">Everything in Starter</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white opacity-90">Advanced features</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white opacity-90">Priority support</span>
            </li>
          </ul>
          <button className="w-full px-6 py-3 bg-white text-stripe-purple rounded-full font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-stripe-purple transition-colors duration-200">
          <h3 className="text-2xl font-semibold text-stripe-navy mb-2">Enterprise</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-stripe-navy">Custom</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-stripe-purple mr-2">✓</span>
              <span className="text-stripe-gray">Everything in Professional</span>
            </li>
            <li className="flex items-start">
              <span className="text-stripe-purple mr-2">✓</span>
              <span className="text-stripe-gray">Custom integrations</span>
            </li>
            <li className="flex items-start">
              <span className="text-stripe-purple mr-2">✓</span>
              <span className="text-stripe-gray">Dedicated support</span>
            </li>
          </ul>
          <button className="w-full px-6 py-3 border-2 border-stripe-navy text-stripe-navy rounded-full font-semibold hover:bg-stripe-navy hover:text-white transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </PageLayout>
  )
}
