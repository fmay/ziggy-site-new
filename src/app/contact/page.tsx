import PageLayout from '@/components/PageLayout'

export default function Contact() {
  return (
    <PageLayout
      title="Contact Sales"
      description="Get in touch with our team to learn more about how we can help your business."
    >
      <div className="max-w-2xl mx-auto">
        <form className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-stripe-navy mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stripe-purple focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stripe-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stripe-purple focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-stripe-navy mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stripe-purple focus:border-transparent"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-stripe-navy mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stripe-purple focus:border-transparent"
                placeholder="Tell us about your needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-stripe-purple text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  )
}
