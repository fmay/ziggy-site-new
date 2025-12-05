import { FC } from 'react'
import ScrollContentImagePairs from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import DocsLink from '@/components/ui/docs-link/DocsLink'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'

const AIJavascript: FC = () => {
  const contentImagePairs = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Example flow</h2>
          <p className="text-lg text-gray-600 mb-4">
            Here's a flow that reads data from your CRM. We also have some extra data. We want to
            perform some custom operations to transform the data
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#ai-assistant">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/ai-features/js-ai/jsai-flow.webp',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Perform the magic</h2>
          <p className="text-lg text-gray-600 mb-4">
            Now enter your instructions. Ziggy handles the data context by passing in the edge data.
            You can see the generated code.
          </p>
          <p>And, of course, you can now edit the Javascript code.</p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#ai-assistant">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/ai-features/js-ai/jsai-prompt.webp',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Help! What does it do?</h2>
          <p className="text-lg text-gray-600 mb-4">
            If you have some Javascript code already present, you can enter <strong>Explain</strong>{' '}
            in the prompt and it will do just that.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/block-types/core/Javascript#ai-assistant">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/ai-features/js-ai/jsai-explain.webp',
    },
  ]

  return (
    <div className="">
      <Intro
        right
        title="Javascript Block Assistant"
        description={
          <div className="">
            <p>
              The Javascript block is the ideal <strong>do anything</strong> block. With Ziggy's AI Assistant,
              non-developers can get the job done, too!
            </p>
          </div>
        }
        imageScale={0.5}
      />
      <div className="py-16">
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      </div>
      {/* Other page content below */}
    </div>
  )
}

export default AIJavascript
