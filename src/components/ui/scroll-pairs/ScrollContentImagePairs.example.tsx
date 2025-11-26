/**
 * Example usage of ScrollContentImagePairs component
 *
 * This file demonstrates how to use the ScrollContentImagePairs component
 * in your Next.js pages or components.
 */

import ScrollContentImagePairs from './ScrollContentImagePairs'

export default function ExamplePage() {
  // Define your content-image pairs
  const contentImagePairs = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Flow Editor</h2>
          <p className="text-lg text-gray-600 mb-4">
            A drag-and-drop canvas for building your data pipelines.
          </p>
        </div>
      ),
      image: '/images/flows/parallel.png',
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
          <p>Want an example? See the HubSpot blocks to see a complete collection for the HubSpot platform</p>
        </div>
      ),
      image: '/images/flows/parallel.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Debugger</h2>
          <p className="text-lg text-gray-600 mb-4">
            Step through your Flows, inspecting data in the pipeline as you go.
          </p>
        </div>
      ),
      image: '/images/flows/parallel.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Edge Inspection</h2>
          <p className="text-lg text-gray-600 mb-4">
            Click on any edge in the flow to inspect data. Great for debugging.
          </p>
        </div>
      ),
      image: '/images/flows/parallel.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Data Validation and Transformation</h2>
          <p className="text-lg text-gray-600 mb-4">
            Ziggy offers several ways to validate and transform data in a flow
          </p>
          <ul>
            <li>Dialogs for validating and mapping</li>
            <li>The AI supported Javascript block can cover simple cases and absolutely any edge case</li>
          </ul>
        </div>
      ),
      image: '/images/flows/parallel.png',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Subflows</h2>
          <p className="text-lg text-gray-600 mb-4">
            Flows can be called from other flows, ensuring modularity and reusability.
          </p>
        </div>
      ),
      image: '/images/flows/parallel.png',
    },
  ]

  return (
    <div className="bg-white">
      {/* Other page content above */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            A fully integrated suite of features
          </h1>
          <p className="text-xl text-gray-600">
            Scroll down to see the interactive content-image pairs
          </p>
        </div>

        {/* The ScrollContentImagePairs component */}
        <ScrollContentImagePairs contentImagePairs={contentImagePairs} />
      </div>
      {/* Other page content below */}
    </div>
  )
}
