import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import CookiePolicyContent from '@/components/ui/cookies/CookiePolicyContent'

export default function Cookies() {
  return (
    <PageLayout title="Cookie Policy" description="How we use cookies and similar technologies.">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <p className="text-stripe-gray mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <CookiePolicyContent />
        </div>
      </div>
    </PageLayout>
  )
}
