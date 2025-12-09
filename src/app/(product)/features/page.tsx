'use client'

import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import ScrollListCore from '@/app/(product)/features/ScrollList_Core'
import ScrollListEdge from '@/app/(product)/features/ScrollList_Edge'
import ScrollListExtra1 from '@/app/(product)/features/ScrollList_Extra1'
import ScrollListExtra2 from '@/app/(product)/features/ScrollList_Extra2'
import PerformanceFeatures from '@/app/(product)/features/PerformanceFeatures'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import EdgeAssistant from '@/app/(product)/ai-features/EdgeAssistant'

export default function Features() {
  const sections: Section[] = [
    {
      bgColor: 'pale-blue',
      children: (
        <SimplePair
          title="Simple flows can do complex things"
          subtitle=""
          image="/home/simple-flow.webp"
          imageCopy={
            <div>
              <p>
                This Ziggy flow looks simple enough. In reality, it does the following with just two
                blocks.
              </p>
              <ul>
                <li>Gets exchanges rates from an API</li>
                <li>
                  Extracts rates from within the returned data into a flat format (the AI icon does
                  this)
                </li>
                <li>Updates all exchange rates in HubSpot with the latest rates.</li>
              </ul>
            </div>
          }
        />
      ),
    },
    {
      bgColor: 'pale-blue',
      children: <ScrollListCore />,
    },
    {
      bgColor: 'gray-50',
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
      bgColor: 'white',
      children: <EdgeAssistant />,
    },
    {
      id: 'javascript',
      bgColor: 'pale-blue',
      children: <JavascriptFeatures />,
    },
    {
      id: 'extra1',
      bgColor: 'white',
      children: <ScrollListExtra1 />,
    },
    {
      bgColor: 'bg-gray-200',
      children: <ScrollListExtra2 />,
    },
    {
      bgColor: 'bg-gray-50',
      children: <PerformanceFeatures />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="gray-50"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/feature-overview.webp"
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
