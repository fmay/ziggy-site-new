import { FC } from 'react'
import ScrollContentImagePairs from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import DocsLink from '@/components/ui/docs-link/DocsLink'

interface FlowFeaturesProps {}

const FlowFeatures: FC<FlowFeaturesProps> = ({}) => {
  const contentImagePairs = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Flow Editor</h2>
          <p className="text-lg text-gray-600 mb-4">
            A drag-and-drop canvas for building your data pipelines. These can be very simple but
            complex flows are no problem, too.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/editor/Flow-Editor-Layout">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/flows/editor.webp',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Blocks</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy Blocks are designed to be incredibly friendly and easy to use. Each block does one
            thing and one thing only. No more highly complex dialogs. Dropdowns are dynamically
            populated from the underlying platform.
          </p>
          <p>
            Want an example? See the <a href="/flows/#hubspot">HubSpot blocks</a> to see a complete
            collection for the HubSpot platform
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/editor/Flow-Editor-Layout">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/flows/block.webp',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Debugger</h2>
          <p className="text-lg text-gray-600 mb-4">
            Step through your Flows, inspecting data in the pipeline as you go. You can also debug within the <a href="/flows#javascript">Javascript block</a> with stepping and variable inspection.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/editor/Debugging">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/flows/debugger.webp',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Edge Inspection</h2>
          <p className="text-lg text-gray-600 mb-4">
            Click on any edge in the flow to inspect data. Great for debugging.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/editor/edge-inspection">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/flows/inspect-edge-data.webp',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Data Validation and Transformation
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy offers several ways to validate and transform data in a flow
          </p>
          <ul>
            <li>AI Edge Transform</li>
            <li>Dialogs for reusable validations and mappings</li>
            <li>
              The AI supported Javascript block can cover simple cases and absolutely any edge case
            </li>
          </ul>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/Structures-and-mapping">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Subflows</h2>
          <p className="text-lg text-gray-600 mb-4">
            Flows can be called from other flows, ensuring modularity and reusability.
          </p>
          <DocsLink href="https://docs.ziggyservices.com/user-guide/block-types/core/Subflow">
            Learn more
          </DocsLink>
        </div>
      ),
      image: '/product/flows/subflow.webp',
    },
  ]

  return (
    <div className="">
      {/* Other page content above */}
      <div className="py-16">
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} imagesLeft/>
      </div>
      {/* Other page content below */}
    </div>
  )
}

export default FlowFeatures
