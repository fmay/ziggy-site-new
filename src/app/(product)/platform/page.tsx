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
import WhosItFor from '@/app/(home)/WhosItFor'
import Hero from '@/app/(product)/platform/Hero'

export default function Platform() {
  const sections: Section[] = [
    {
      bgColor: 'gray-100',
      children: <WhosItFor />,
    },
    {
      bgColor: 'pale-blue',
      children: (
        <div className="section-intro-2-col">
          <div>
            <h2>Professional Services</h2>
            <p>
              Whether you want us train, build flows, develop custom Ziggy Blocks or just hand-hold,
              we're here to provide expert support when you need it.
            </p>
          </div>
          <div>
            <CTA label="Contact Us" href="/contact" />
          </div>
        </div>
      ),
    },
    {
      bgColor: 'gray-100',
      children: <QuickBookDemo background="dark" />,
    },
  ]

  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}
        >
          {section.children}
        </PageSection>
      ))}
    </div>
  )
}
