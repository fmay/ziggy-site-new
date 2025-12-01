import { FC } from 'react'
import ScrollContentImagePairs, { ContentImagePair } from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'

interface FlowFeaturesProps {}

const PartnerFeatures: FC<FlowFeaturesProps> = ({}) => {
  const contentImagePairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner Pricing</h2>
          <p className="text-lg text-gray-600 mb-4">
            You receive customised pricing that is tailored to your audience profile and is designed
            to suit the budgets of your smaller and larger clients.
          </p>
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">No API? No problem.</h2>
          <p>
            You may not have a public facing API. Using Ziggy's custom blocks, you can access your
            platform data in any way you choose.
          </p>
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">No coding.</h2>
          <p>
            Your customers may hug you for letting them access your data without having to use an
            API. And, of course, they can take that data and put it into their other systems - also
            without coding.
          </p>
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom blocks for your platform</h2>
          <p className="text-lg text-gray-600 mb-4">
            Custom Blocks are what make it so easy for your customers to access your platform's
            data.
          </p>
          <p>
            Once you've built your plugins, your customers are ready to build their flows without
            having to wait for there development teams to have some availability.
          </p>
          <CTA label="Build Custom Blocks" href="/extend" />
        </div>
      ),
      image: '/placeholder.svg',
      hasCTA: true
    },
  ]

  return (
    <div className="bg-white">
      {/* Other page content above */}
      <div className="py-16">
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      </div>
      {/* Other page content below */}
    </div>
  )
}

export default PartnerFeatures
