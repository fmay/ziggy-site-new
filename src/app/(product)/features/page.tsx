'use client'

import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import ScrollListCore from '@/app/(product)/features/ScrollList_Core'
import ScrollListExtra1 from '@/app/(product)/features/ScrollList_Extra1'
import ScrollListExtra2 from '@/app/(product)/features/ScrollList_Extra2'
import PerformanceFeatures from '@/app/(product)/features/PerformanceFeatures'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import EdgeAssistant from '@/app/(product)/ai-features/EdgeAssistant'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'
import SimpleFlows from '@/app/(product)/features/SimpleFlows'
import { getSwapStatus } from '@/utils/swapStatus'
import ComplexFlows from '@/app/(product)/platform/ComplexFlows'
import AI from '@/app/(home)/AI'

const swap = getSwapStatus()


export default function Features() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: <SimpleFlows />
    },
    {
      bgColor: getNextColor(),
      children: <ComplexFlows />
    },
    {
      bgColor: getNextColor(),
      children: <ScrollListCore />,
    },
    {
      bgColor: getNextColor(),
      children: <AI />,
    },
    {
      bgColor: getNextColor(),
      children: (
        <SimplePair
          title="Extend Ziggy with Custom Blocks"
          subtitle=""
          imageCopy={
            <div>
              <p>
                Ziggy's plugins allow you to build your own block collection that do everything you
                need to connect to any system, including your own platform.
              </p>
              <CTA label="Learn More" href="extend"/>
            </div>
          }
          image="/home/home-customise.webp"
        />
      ),
    },
    {
      id: 'javascript',
      bgColor: getNextColor(),
      children: <JavascriptFeatures />,
    },
    {
      id: 'extra1',
      bgColor: getNextColor(),
      children: <ScrollListExtra1 />,
    },
    {
      bgColor: getNextColor(),
      children: <ScrollListExtra2 />,
    },
    {
      bgColor: getNextColor(),
      children: <PerformanceFeatures />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Standard}
        image="/hero/feature-overview.webp"
        imageNudge={-50}
        scale={0.8}
        title="Ziggy Feature Overview"
        subtitle={
          <div>
            Ziggy comes with a lot of features for building, debugging, secrets, rate limiting, flow
            execution history and much more.
          </div>
        }
        cta={<CTA label="Book a demo" href="demo" />}
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          id={section.id}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </>
  )
}
