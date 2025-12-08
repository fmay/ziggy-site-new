import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import BusinessFunctions from '@/app/(home)/BusinessFunctions'
import Hero from '@/app/integration-partners/Hero'
import PartnerFeatures from '@/app/integration-partners/PartnerFeatures'

export default function IntegrationPartners() {
  const sections: Section[] = [
    {
      bgColor: 'white',
      children: <PartnerFeatures />,
    },
    {
      bgColor: 'pale-blue',
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
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </div>
  )
}
