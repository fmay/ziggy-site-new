'use client'

import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import MadeEasy from '@/app/(product)/platform/MadeEasy'
import Extensible from '@/app/(product)/platform/Extensible'
import Cluster from '@/app/(product)/platform/Cluster'
import Pricing from '@/app/(product)/platform/Pricing'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import Hero from '@/components/ui/hero/Hero'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'
import SimpleFlows from '@/app/(product)/features/SimpleFlows'
import ComplexFlows from '@/app/(product)/platform/ComplexFlows'
import AllFeatures from '@/app/(product)/platform/AllFeatures'
import { resetSwapStatus } from '@/utils/swapStatus'
import AI from '@/app/(home)/AI'

export default function Platform() {
  const getNextColor = createColorCycler()
  resetSwapStatus()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: <SimpleFlows />,
    },
    {
      bgColor: getNextColor(),
      children: <AI />,
    },
    {
      bgColor: getNextColor(),
      children: <ComplexFlows />,
    },
    {
      bgColor: getNextColor(),
      children: <AllFeatures />,
    },
    {
      bgColor: getNextColor(),
      children: <Extensible />,
    },
    {
      bgColor: getNextColor(),
      children: <Cluster />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Standard}
        image="/hero/platform-hero.webp"
        imageNudge={90}
        title="Simplify your Integration and Automation chaos"
        subtitle={
          <>
            <p>
              In house teams use Ziggy for all their data automation and integration requirements.
            </p>
            <p>
              AI features reduce your reliance on Developer resources.
            </p>
            <p>Any data source can be accessed, regardless of where it sits.</p>
            <p>Automation and integration projects are completed using Ziggy Blocks and Flows.</p>
          </>
        }
        cta={<CTA label="Learn More" href="features" />}
        scale={0.8}
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          color={section.color}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </>
  )
}
