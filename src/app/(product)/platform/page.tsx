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

export default function Platform() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: <SimpleFlows />,
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
        image="/hero/home.webp"
        title="Ziggy - a new Automation and Integration Platform."
        subtitle={
          <>
            <p>
              In house teams use Ziggy for all their data automation and integration requirements.
            </p>
            <p>
              AI features allow projects to be run without an over reliance on Developer resources.
            </p>
            <p>Any data source can be accessed, regardless of where it sits.</p>
            <p>Automation and integration projects are completed using Ziggy Blocks and Flows.</p>
          </>
        }
        cta={<CTA label="Learn More" href="features" />}
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
