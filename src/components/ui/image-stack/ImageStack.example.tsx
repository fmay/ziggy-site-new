import ImageStack from './ImageStack'

export default function ImageStackExample() {
  // Example with 4 items (as shown in reference image)
  const items = [
    <div key="1" className="bg-gray-100 p-8 rounded-lg h-64 flex items-center justify-center">
      <span className="text-2xl font-semibold">Item 1</span>
    </div>,
    <div key="2" className="bg-blue-100 p-8 rounded-lg h-80 flex items-center justify-center">
      <span className="text-2xl font-semibold">Item 2</span>
    </div>,
    <div key="3" className="bg-purple-100 p-8 rounded-lg h-72 flex items-center justify-center">
      <span className="text-2xl font-semibold">Item 3</span>
    </div>,
    <div key="4" className="bg-green-100 p-8 rounded-lg h-64 flex items-center justify-center">
      <span className="text-2xl font-semibold">Item 4</span>
    </div>,
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">ImageStack Examples</h2>

      {/* Default usage */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Default (4 items)</h3>
        <ImageStack items={items} />
      </section>

      {/* Custom gap */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Custom Gap (gap-4)</h3>
        <ImageStack items={items} gap="gap-4" />
      </section>

      {/* Custom offset */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Custom Offset (lg:mt-[200px])</h3>
        <ImageStack items={items} offset="lg:mt-[200px]" />
      </section>

      {/* Variable item count - 5 items */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-4">5 Items</h3>
        <ImageStack
          items={[
            ...items,
            <div key="5" className="bg-yellow-100 p-8 rounded-lg h-64 flex items-center justify-center">
              <span className="text-2xl font-semibold">Item 5</span>
            </div>,
          ]}
        />
      </section>

      {/* Variable item count - 3 items */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-4">3 Items</h3>
        <ImageStack items={items.slice(0, 3)} />
      </section>
    </div>
  )
}
