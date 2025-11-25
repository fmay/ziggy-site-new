import PageLayout from '@/components/PageLayout'

export default function Cookies() {
  return (
    <PageLayout title="Cookie Policy" description="How we use cookies and similar technologies.">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <p className="text-stripe-gray mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="text-stripe-gray text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
