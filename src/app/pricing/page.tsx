import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import PricingCalculator from '@/components/pricing/PricingCalculator'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { GiCheckMark } from 'react-icons/gi'
import styles from '@/components/ui/hero/hero.module.scss'
import CTA from '@/components/ui/cta/CTA'
import Hero from '@/components/ui/hero/Hero'
import Services from '@/app/pricing/Services'

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
      children: <Services />
    },
    {
      bgColor: 'bg-gray-50',
      children: <QuickBookDemo background="light" />,
    },
  ]

  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero
        fromColor="header-footer"
        toColor="pale-blue"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/pricing.webp"
        title="Pricing"
        subtitle={
          <p className={styles.subheading}>
            Our subscription prices are the lowest you'll find. But you will spend a lot less in
            staff time and cost, too.
          </p>
        }
        cta={<CTA label="Calculator" href="#calculator" />}
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
    </div>
  )
}
