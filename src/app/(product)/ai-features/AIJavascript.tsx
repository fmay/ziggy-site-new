import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import DocsLink from '@/components/ui/docs-link/DocsLink'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'

const AIJavascript: FC = () => {
  const contentImagePairs: ContentImagePair[] = [
    {
      title: 'Example flow',
      content: (
        <div>
          <p>
            Here's a flow that reads data from your CRM. We also have some extra data. We want to
            perform some custom operations to transform the data
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/block-types/core/Javascript#ai-assistant">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/ai-features/js-ai/jsai-flow.webp',
    },
    {
      title: 'Perform the magic',
      content: (
        <div>
          <p>
            Now enter your instructions. Ziggy handles the data context by passing in the edge data.
            You can see the generated code.
          </p>
          <p>And, of course, you can now edit the Javascript code.</p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/block-types/core/Javascript#ai-assistant">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/ai-features/js-ai/jsai-prompt.webp',
    },
    {
      title: 'Help! What does it do?',
      content: (
        <div>
          <p>
            If you have some Javascript code already present, you can enter <strong>Explain</strong>{' '}
            in the prompt and it will do just that.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/block-types/core/Javascript#ai-assistant">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/ai-features/js-ai/jsai-explain.webp',
      contentNudge: 80
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
              The Javascript block is the ideal <strong>do anything</strong> block. With Ziggy's AI
              Assistant, non-developers can get the job done, too!
            </p>
          </div>
        }
        imageScale={0.5}
      />
      <div className="">
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      </div>
      {/* Other page content below */}
    </div>
  )
}

export default AIJavascript
