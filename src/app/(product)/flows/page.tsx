'use client'

import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import FlowFeatures from '@/app/(product)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(product)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Intro from '@/components/ui/intro/Intro'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'

export default function Products() {
  const sections: Section[] = [
    {
      bgColor: 'bg-gray-50',
      children: (
        <>
          <Intro
            title="Ziggy Flows"
            description={
              <div>
                <p>
                  A Ziggy flow is a canvas based pipeline for performing operations on data. There
                  is a large number of blocks you can use to read, write, transform, map data as it
                  flows through the pipeline.
                </p>
                <CTA label="Features overview" href="/features" className="mb-0" />
              </div>
            }
            // image="/placeholder.svg"
            imageScale={0.5}
            right
          />
          <FlowFeatures />
        </>
      ),
    },
    {
      id: 'hubspot',
      bgColor: 'pale-blue',
      children: (
        <>
          <BlockCollections />
          <HubspotBlockCollection />
        </>
      ),
    },
    {
      id: 'javascript',
      bgColor: 'bg-gray-50',
      children: <JavascriptFeatures />,
    },
    {
      bgColor: 'bg-gray-300',
      children: <QuickBookDemo />,
    },
  ]

  return (
    <PageLayout
      title="Ziggy Flows"
      style={LayoutStyleEnum.Feature}
      description="Build simple or highly complex data pipelines using Ziggy Blocks and run them at any scale."
      image="/images/customise/home/flows-list.webp"
      waveToColor={sections[0].bgColor}>
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
    </PageLayout>
  )
}
