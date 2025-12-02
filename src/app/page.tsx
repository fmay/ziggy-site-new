import Hero from '@/app/(home)/Hero'
import HomeScrollList from '@/app/(home)/HomeScrollList'
import HomePricing from '@/app/(home)/HomePricing'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import HomeScene from '@/app/(home)/HomeScene'
import CustomizationHome from '@/app/(home)/CustomizationHome'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import CTA from '@/components/ui/cta/CTA'

export default function Home() {
  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero />

      <PageSection bgColor="gray-100" waveToColor="pale-blue">
        <HomeScrollList />
      </PageSection>

      <PageSection bgColor="pale-blue" waveToColor="white">
        <CustomizationHome />
      </PageSection>

      <PageSection bgColor="white" waveToColor="pale-blue">
        <HomePricing />
      </PageSection>

      {/*Professional Services*/}
      <PageSection bgColor="pale-blue" waveToColor="gray-100">
        <div className="section-intro-2-col">
          <div>
            <h2>Professional Services</h2>
            <p>
              Whether you want us train, build flows, develop custom Ziggy Blocks or just hand-hold,
              we're here to provide expert support when you need it.
            </p>
          </div>
          <div>
            <CTA label="Contact Us" href="/contact" />
          </div>
        </div>
      </PageSection>

      <PageSection bgColor="gray-100">
        <QuickBookDemo background="dark" />
      </PageSection>
    </div>
  )
}
