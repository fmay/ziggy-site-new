import Hero from '@/app/(home)/Hero'
import HomeScrollList from '@/app/(home)/HomeScrollList'
import HomePricing from '@/app/(home)/HomePricing'
import PageSection from '@/components/ui/page-wrappers/PageSection'

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />

      <HomeScrollList />

      <HomePricing />

      {/*Professional Services*/}
      <PageSection>
        <div className="section-intro">
          <h2>Professional Services</h2>
          <p>
            Whether you want us train, build flows, develop custom Ziggy Blocks or just hand-hold,
            we're here to provide the expert support you need.
          </p>
        </div>
      </PageSection>
    </div>
  )
}
