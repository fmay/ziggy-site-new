import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import ServicesList from '@/app/services/ServicesList'

export default function Services() {
  const sections: Section[] = [
    {
      bgColor: 'white',
      children: <ServicesList />
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="white"
        wavyVariant={WavyVariantEnum.Standard}
        image="/services/services-hero.webp"
        scale={0.8}
        imageNudge={-100}
        title="Professional Services"
        subtitle={
          <>
            <p>We offer a full range of services for integrations, automations and migrations.</p>
          </>
        }
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </>
  )
}
