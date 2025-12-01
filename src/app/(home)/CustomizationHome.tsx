import { FC } from 'react'
import CTA from '@/components/ui/cta/CTA'

interface JavascriptFeaturesProps {}

const CustomizationHome: FC<JavascriptFeaturesProps> = ({}) => {
  return (
    <div>
      <div className="section-intro-2-col">
        <div>
          <h2>
            Integrate Ziggy with <strong>your</strong> platform for <strong>your</strong> customers.
          </h2>
          <p>
            Become an Integration Partner and delight your customer with the ability to get data in
            and out of your platform using Ziggy.
          </p>
          <p>
            Ziggy still runs in your Infrastructure to meet any security, performance and fault
            tolerance requirements.
          </p>
          <p>We also provide discounted pricing for your customer for all Ziggy subscriptions. </p>
        </div>
        <div>
          <div className="flex flex-col place-items-center">
            <CTA label="About Integration Partners" href="#"/>
            <CTA label="Extend with custom block plugins" href="#" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomizationHome
