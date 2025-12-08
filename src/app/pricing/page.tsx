import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import PricingCalculator from '@/components/pricing/PricingCalculator'
import Hero from '@/app/pricing/Hero'

export default function IntegrationPartners() {
  const sections: Section[] = [
    {
      id: 'calculator',
      bgColor: 'pale-blue',
      children: <PricingCalculator />,
    },
    {
      id: 'services',
      bgColor: 'white',
      children: <><div>SERVICES</div></>
    },
    {
      bgColor: 'bg-gray-50',
      children: <QuickBookDemo background="light" />,
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
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </div>
  )
}
