import { FC } from 'react'
import ScrollContentImagePairs from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import DocsLink from '@/components/ui/docs-link/DocsLink'

interface FlowFeaturesProps {}

const FlowFeatures: FC<FlowFeaturesProps> = ({}) => {
  const contentImagePairs = [
    {
      content: (
        <div>
          <h3>Flow Editor & Debugger</h3>
          <p className="text-lg text-gray-600 mb-4">
            The drag-and-drop canvas for building your data pipelines. Everything can be visually
            debugged, including Javscript code in Javascript blocks.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/editor/Debugging">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/debugger.webp',
    },
    {
      content: (
        <div>
          <h3>Edge Inspection</h3>
          <p className="text-lg text-gray-600 mb-4">
            Click on any edge in the flow to inspect data. Great for debugging.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/editor/edge-inspection">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/flows/edge-click.webp',
    },
    {
      content: (
        <div>
          <h3>Data Validation and Transformation</h3>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy offers several AI and dialog driven ways to validate and transform data in a flow
          </p>
          <ul>
            <li>AI Edge Transform</li>
            <li>Dialogs for reusable validations and mappings</li>
            <li>
              The AI supported Javascript block can cover simple cases and absolutely any edge case
            </li>
          </ul>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/Structures-and-mapping">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/ai-features/edge-assistant/aie-assistant.webp',
    },
    {
      content: (
        <div>
          <h3>Subflows</h3>
          <p className="text-lg text-gray-600 mb-4">
            Flows can be called from other flows, ensuring modularity and reusability.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/block-types/core/Subflow">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/subflow.webp',
    },
    {
      content: (
        <div>
          <h3>Development / Production</h3>
          <p className="text-lg text-gray-600 mb-4">
            You can switch between development and production modes to address sandbox or test
            configurations when testing flows.
          </p>
          <DocsLink href="https://docs.ziggyplatform.com/user-guide/Dev-Prod-Modes">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/features/dev-prod.webp',
    },
  ]

  return (
    <div className="">
      {/* Other page content above */}
      <div className="py-16">
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      </div>
      {/* Other page content below */}
    </div>
  )
}

export default FlowFeatures
