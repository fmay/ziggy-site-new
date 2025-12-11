import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import PageSection from '@/components/ui/page-wrappers/PageSection'

interface FlowFeaturesProps {}

const PartnerFeatures: FC<FlowFeaturesProps> = ({}) => {
  const BillTemp = () => {
    return (
      <SimplePair
        title="What is a Platform Integration Partner?"
        subtitle=""
        imageCopy={
          <>
            <p>
              Platform Integration Partners build their own customised Ziggy blocks to provide
              customers with easy access to their platform without having to use an API.
            </p>
            <p>
              Their customers then build their own Ziggy Flows without having to wait for
              development teams to have availability. No coding, no problem.
            </p>
            <p>
              By doing this Platform Integration Partners open up new revenue streams from
              initiating their customers to use Ziggy blocks.
            </p>
            <p>
              Platform Partners control all aspects of infrastructure, security, performance and
              fault-tolerance.
            </p>
          </>
        }
        image="/placeholder.svg"
      />
    )
  }

  const contentImagePairs: ContentImagePair[] = [
    // {
    //   content: (
    //     <div>
    //       <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner Pricing</h2>
    //       <p className="text-lg text-gray-600 mb-4">
    //         You receive customised pricing that is tailored to your audience profile and is designed
    //         to suit your customers' budgets.
    //       </p>
    //       <CTA label="Contact us for pricing" href="/contact" className="mb-3"/>
    //     </div>
    //   ),
    //   image: '/placeholder.svg',
    //   hasCTA: true,
    // },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">No API? No problem.</h2>
          <p>
            Your platform may not have a public facing API. Using Ziggy's custom blocks this doesn't
            matter.
          </p>
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">No coding for your customers</h2>
          <p>
            Your customers will hug you for letting them access your data without having to use an
            API. And, of course, they can take that data and put it into their other systems - also
            without coding.
          </p>
          <CTA label="Build Custom Blocks" href="/extend" className="mb-3" />
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
          <CTA label="Build Custom Blocks" href="/extend" className="mb-3" />
        </div>
      ),
      image: '/placeholder.svg',
      hasCTA: true,
    },
  ]

  return (
    <div className="bg-white">
      {/* Other page content above */}
      <div className="">
        <PageSection children={<BillTemp />} />
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      </div>
      {/* Other page content below */}
    </div>
  )
}

export default PartnerFeatures
