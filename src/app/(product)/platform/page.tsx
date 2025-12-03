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

export default function Platform() {
  const sections: Section[] = [
    {
      bgColor: 'bg-gray-50',
      children: (
        <>
          <Intro
            title="The Ziggy Platform"
            description={
              <div className="section-intro">
                <p>
                  This is the intro text
                </p>
                <CTA label="Features overview" href="/features" className="mb-0" />
              </div>
            }
            // image="/placeholder.svg"
            imageScale={0.5}
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
      title="The Ziggy Platform"
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
