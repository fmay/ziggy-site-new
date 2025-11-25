import PageLayout from '@/components/PageLayout'

export default function Solutions() {
  return (
    <PageLayout
      title="Solutions"
      description="Tailored solutions for every business model and industry."
    >
      <div className="prose max-w-none">
        <div className="bg-stripe-light-bg p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-semibold text-stripe-navy mb-4">Enterprise Solutions</h2>
          <p className="text-stripe-gray text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-stripe-navy mb-4">Startup Solutions</h2>
          <p className="text-stripe-gray text-lg mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
