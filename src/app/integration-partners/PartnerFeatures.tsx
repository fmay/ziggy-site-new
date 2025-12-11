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
        image="/integration-partners/partners-intro.webp"
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
          <h2>No code. No API.</h2>
          <p>
            Delight your customers by letting them get data out of and into your platform without writing code.
          </p>
          <p>Your platform doesn't even need a public API,</p>
          <CTA label="Build Custom Blocks" href="/extend" className="mb-3" />
        </div>
      ),
      image: '/integration-partners/no-code.webp',
    },
    {
      content: (
        <div>
          <h2>It's done using Custom Blocks</h2>
          <p className="text-lg text-gray-600 mb-4">
            Custom Blocks are what make it so easy for your customers to access your platform's
            data. Our CLI and SDK make it easy for TypeScript developers.
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
        {/*<div className="min-h-[30vh]"></div>*/}
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      </div>
      {/* Other page content below */}
    </div>
  )
}

export default PartnerFeatures
