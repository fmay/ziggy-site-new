'use client'

import FlowFeatures from '@/app/(product)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(product)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Intro from '@/components/ui/intro/Intro'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'
import FlowsIntro from '@/app/(product)/flows/FlowsIntro'
import BlockOverview from '@/app/(product)/flows/BlockOverview'
import CollectionsExtendIntro from '@/app/(product)/extend/CollectionsExtendIntro'
import CollectionsIntro from '@/app/(product)/flows/CollectionsIntro'
import FlowFeatureIntro from '@/app/(product)/flows/FlowFeatureIntro'
import AI from '@/app/(home)/AI'

export default function Products() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: '',
      bgColor: getNextColor(),
      children: <FlowsIntro />,
    },
    {
      id: '',
      bgColor: getNextColor(),
      children: <BlockOverview />,
    },
    {
      id: 'hubspot',
      bgColor: getNextColor(),
      children: (
        <>
          <CollectionsIntro />
          <HubspotBlockCollection />
        </>
      ),
    },
    {
      id: '',
      bgColor: getNextColor(),
      children: (
        <>
          <FlowFeatureIntro />
          <FlowFeatures />
        </>
      ),
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Standard}
        image="/hero/flows-blocks.webp"
        imageNudge={-80}
        title="Ziggy Flows and Blocks"
        subtitle={
          <div>
            Build simple or highly complex data pipelines using Ziggy Blocks and run them at any
            scale.
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
