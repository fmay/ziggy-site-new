import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import PricingCalculator from '@/components/pricing/PricingCalculator'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { GiCheckMark } from 'react-icons/gi'
import styles from '@/components/ui/hero/hero.module.scss'
import CTA from '@/components/ui/cta/CTA'
import Hero from '@/components/ui/hero/Hero'
import Services from '@/app/pricing/Services'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'

export default function IntegrationPartners() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: 'calculator',
      bgColor: 'pale-blue',
      children: <PricingCalculator />,
    },
    {
      id: 'services',
      bgColor: 'white',
      children: <Services />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="pale-blue"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/pricing.webp"
        title="Simple, transparent pricing that scales with your business"
        subtitle={
          <p className={styles.subheading}>
            Ziggy has a fixed price subscription model which is the lowest you’ll find and you will
            spend a lot less in staff time and cost too.
          </p>
        }
        cta={<CTA label="Calculator" href="#calculator" />}
        imageNudge={-100}
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
