import Hero from '@/app/(home)/Hero'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import CTA from '@/components/ui/cta/CTA'
import WhosItFor from '@/app/(home)/WhosItFor'
import BusinessFunctions from '@/app/(home)/BusinessFunctions'
import ImproveProcesses from '@/app/(home)/ImproveProcesses'
import IntegrationPartner from '@/app/(home)/IntegrationPartner'
import ExampleAutomations from '@/app/(home)/ExampleAutomations'
import AI from '@/app/(home)/AI'
import Pricing from '@/app/(home)/Pricing'

export default function HomePage() {
  const sections: Section[] = [
    {
      bgColor: 'gray-100',
      children: <WhosItFor />,
    },
    {
      bgColor: 'pale-blue',
      children: <BusinessFunctions />,
    },
    {
      bgColor: 'bg-white',
      children: <ExampleAutomations />,
    },
    {
      bgColor: 'bg-gray-50',
      waveInvert: true,
      children: <AI />,
    },
    {
      bgColor: 'pale-blue',
      children: <IntegrationPartner />,
    },
    {
      bgColor: 'white',
      children: <Pricing />,
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
