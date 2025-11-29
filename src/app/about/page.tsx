import PageLayout from '@/components/ui/layout/page-layout/PageLayout'

export default function About() {
  return (
    <PageLayout
      title="About Us"
      description="Learn more about our mission and the team behind the platform.">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-3xl font-semibold text-stripe-navy mb-4">Our Mission</h2>
          <p className="text-stripe-gray text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="bg-stripe-light-bg p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-stripe-navy mb-4">Our Story</h2>
          <p className="text-stripe-gray text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
