import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import DocsLink from '@/components/ui/docs-link/DocsLink'
import CTA from '@/components/ui/cta/CTA'

interface IntroScrollProps {}

const IntroScroll: FC<IntroScrollProps> = ({}) => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2>Easy to use for Data Specialists and Developers</h2>
          <p>
            We designed Ziggy to be easy to use, making your total cost of ownership even lower.
          </p>
          <p>But it's still packed with all the features your automations and integrations need.</p>
          <CTA label="About Ziggy Flows and Blocks" href="flows" noBottomMargin />
        </div>
      ),
      image: '/home/flows-blocks.webp',
      contentNudge: -70,
    },
    {
      content: (
        <div>
          <h2>Runs on YOUR servers</h2>
          <p>
            Ziggy runs on even very small instances and laptops, stand-alone or clustered, anywhere
            that runs Docker.
          </p>
          <p>As a result, you have total control over security and performance.</p>
          <CTA label="Installation and Ziggy Cluster" href="cluster" noBottomMargin />
        </div>
      ),
      image: '/misc/docker2.webp',
      scale: 0.5,
      contentNudge: 90,
    },
    {
      content: (
        <div>
          <h2>Fully customizable</h2>
          <p>Ziggy has a plugin architecture that lets you build your own Ziggy blocks.</p>
          <p>
            You can build blocks that talk to your own systems or any other system, removing the
            needs APIs.
          </p>
          <CTA label="How to Customize Ziggy" href="extend" />
        </div>
      ),
      image: '/integration-partners/no-code.webp',
      contentNudge: 0,
    },
    {
      content: (
        <div>
          <h2>Priced differently</h2>
          <p>Ziggy's pricing is far below other systems when run at scale.</p>
          <p>
            There's no usage-based pricing, so you have total visibility for budgeting. Combined
            faster development times and simple maintenance, Ziggy's total cost of ownership is
            substantially lower.
          </p>
          <CTA label="Ziggy Pricing" href="pricing" noBottomMargin />
        </div>
      ),
      image: '/home/pricing-home.webp',
      scale: 0.7,
      contentNudge: 0,
    },
    {
      content: (
        <div>
          <h2>AI enabled</h2>
          <p>Ziggy makes extensive use of AI but it can't hallucinate with pipeline data.</p>
          <p>
            For any data transformations, AI generates testable code that, once approved, remains
            static.
          </p>
          <p>There is also a Generative AI block that is allowed to operate at execution time.</p>
          <CTA label="AI Features" href="ai-features" noBottomMargin />
        </div>
      ),
      image: '/home/ai-features.webp',
      scale: 0.75,
      contentNudge: 0,
    },
    {
      content: (
        <div>
          <h2>Code when and where you need to</h2>
          <p>
            Ziggy has a powerful Javascript block that lets you write code wherever required or
            wanted.
          </p>
          <p>
            It has context aware support that's like Claude Code for Ziggy, allowing non-developers
            to deal with complex data challenges.
          </p>
          <CTA label="Javascript Block" href="/features#javascript" noBottomMargin />
        </div>
      ),
      image: '/home/javascript-home.webp',
      scale: 0.7,
      contentNudge: -20,
    },
  ]
  return (
    <>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default IntroScroll
