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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            First Feature Title
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This is the first section of content. The associated image will appear
            fixed on the right side (on desktop) and will fade in when this content
            comes into view.
          </p>
          <p className="text-lg text-gray-600">
            As you scroll down, the image will remain fixed until the next content
            section becomes active, at which point it will fade to the next image.
          </p>
        </div>
      ),
      image: '/images/feature-1.jpg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Second Feature Title
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This is the second section. When this content scrolls into the viewport
            center, the image on the right will fade from the first image to the
            second image.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>Feature point one</li>
            <li>Feature point two</li>
            <li>Feature point three</li>
          </ul>
        </div>
      ),
      image: '/images/feature-2.jpg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Third Feature Title
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This is the third and final section. The image will remain fixed as
            you scroll through this content.
          </p>
          <p className="text-lg text-gray-600">
            When you scroll past this last section, the image will scroll out with
            the content, creating a smooth exit effect.
          </p>
        </div>
      ),
      image: '/images/feature-3.jpg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fourth Feature Title
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            This is the fourth and final section. The image will remain fixed as
            you scroll through this content.
          </p>
          <p className="text-lg text-gray-600">
            When you scroll past this last section, the image will scroll out with
            the content, creating a smooth exit effect.
          </p>
        </div>
      ),
      image: '/images/feature-3.jpg',
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
