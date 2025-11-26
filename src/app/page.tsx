import Hero from '@/components/Hero'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />

      <div className="page-section bg-gray-50">
        <div>
          <p className="section-title">HubSpot Blocks</p>
          <p className="section-title-text">
            This is our collection of HubSpot blocks. Removes all the pain of working with the API,
            respects rate-limits, full batching support. Each block does just one thing and does it
            beautifully.
          </p>
        </div>
        <HubspotBlockCollection />
      </div>

      {/* Additional Content Section */}
      {/*<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">*/}
      {/*  <div className="max-w-7xl mx-auto">*/}
      {/*    <div className="grid md:grid-cols-3 gap-12">*/}
      {/*      <div className="text-center">*/}
      {/*        <div className="w-16 h-16 bg-stripe-purple rounded-full flex items-center justify-center mx-auto mb-4">*/}
      {/*          <svg*/}
      {/*            className="w-8 h-8 text-white"*/}
      {/*            fill="none"*/}
      {/*            stroke="currentColor"*/}
      {/*            viewBox="0 0 24 24">*/}
      {/*            <path*/}
      {/*              strokeLinecap="round"*/}
      {/*              strokeLinejoin="round"*/}
      {/*              strokeWidth={2}*/}
      {/*              d="M13 10V3L4 14h7v7l9-11h-7z"*/}
      {/*            />*/}
      {/*          </svg>*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold text-stripe-navy mb-2">Fast Integration</h3>*/}
      {/*        <p className="text-stripe-gray">*/}
      {/*          Get up and running quickly with our comprehensive documentation and modern APIs.*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="text-center">*/}
      {/*        <div className="w-16 h-16 bg-stripe-purple rounded-full flex items-center justify-center mx-auto mb-4">*/}
      {/*          <svg*/}
      {/*            className="w-8 h-8 text-white"*/}
      {/*            fill="none"*/}
      {/*            stroke="currentColor"*/}
      {/*            viewBox="0 0 24 24">*/}
      {/*            <path*/}
      {/*              strokeLinecap="round"*/}
      {/*              strokeLinejoin="round"*/}
      {/*              strokeWidth={2}*/}
      {/*              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"*/}
      {/*            />*/}
      {/*          </svg>*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold text-stripe-navy mb-2">Secure & Reliable</h3>*/}
      {/*        <p className="text-stripe-gray">*/}
      {/*          Built with security in mind, ensuring your data and transactions are protected.*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="text-center">*/}
      {/*        <div className="w-16 h-16 bg-stripe-purple rounded-full flex items-center justify-center mx-auto mb-4">*/}
      {/*          <svg*/}
      {/*            className="w-8 h-8 text-white"*/}
      {/*            fill="none"*/}
      {/*            stroke="currentColor"*/}
      {/*            viewBox="0 0 24 24">*/}
      {/*            <path*/}
      {/*              strokeLinecap="round"*/}
      {/*              strokeLinejoin="round"*/}
      {/*              strokeWidth={2}*/}
      {/*              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"*/}
      {/*            />*/}
      {/*          </svg>*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold text-stripe-navy mb-2">Global Scale</h3>*/}
      {/*        <p className="text-stripe-gray">*/}
      {/*          Designed to scale with your business, from startup to enterprise.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  )
}
