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
            title="AI Stuff"
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
          {/*<FlowFeatures />*/}
        </>
      ),
    },
    {
      bgColor: 'bg-gray-50',
      children: <QuickBookDemo />,
    },
  ]

  return (
    <PageLayout
      title="Ziggy's AI Features"
      style={LayoutStyleEnum.Feature}
      description="AI Blah"
      image="/placeholder.svg"
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
