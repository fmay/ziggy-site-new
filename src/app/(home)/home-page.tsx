import Hero from '@/app/(home)/Hero'
import HomeScrollList from '@/app/(home)/HomeScrollList'
import HomePricing from '@/app/(home)/HomePricing'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CustomizationHome from '@/app/(home)/CustomizationHome'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import CTA from '@/components/ui/cta/CTA'

export default function HomePage() {
  const sections: Section[] = [
    {
      bgColor: 'gray-100',
      children: <HomeScrollList />,
    },
    {
      bgColor: 'pale-blue',
      children: <CustomizationHome />,
    },
    {
      bgColor: 'white',
      children: <HomePricing />,
      waveInvert: true,
    },
    {
      bgColor: 'pale-blue',
      children: (
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
      ),
    },
    {
      bgColor: 'gray-100',
      children: <QuickBookDemo background="dark" />,
    },
  ]

  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}
        >
          {section.children}
        </PageSection>
      ))}
    </div>
  )
}
