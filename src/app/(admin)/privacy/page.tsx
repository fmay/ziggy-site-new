import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PrivacyContent from '@/components/ui/cookies/PrivacyContent'

export default function Privacy() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your information.">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <p className="text-stripe-gray mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <PrivacyContent />
        </div>
      </div>
    </PageLayout>
  )
}
