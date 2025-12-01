import Hero from '@/app/(home)/Hero'
import HomeScrollList from '@/app/(home)/HomeScrollList'
import HomePricing from '@/app/(home)/HomePricing'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import HomeScene from '@/app/(home)/HomeScene'
import CustomizationHome from '@/app/(home)/CustomizationHome'
import QuickBookDemo from '@/app/(forms)/QuickBookDemo'

export default function Home() {
  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero />

      <PageSection bgColor="bg-gray-100">
        <HomeScrollList />
      </PageSection>

      <PageSection>
        <CustomizationHome />
      </PageSection>

      <PageSection bgColor="bg-gray-50">
        <HomePricing />
      </PageSection>

      {/*Professional Services*/}
      <PageSection>
        <div className="section-intro">
          <h2>Professional Services</h2>
          <p>
            Whether you want us train, build flows, develop custom Ziggy Blocks or just hand-hold,
            we're here to provide expert support when you need it.
          </p>
        </div>
      </PageSection>

      <PageSection bgColor="bg-gray-700">
        <QuickBookDemo background="dark" />
      </PageSection>
    </div>
  )
}
