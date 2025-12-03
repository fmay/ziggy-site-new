'use client'

import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import CustomizationStack from '@/app/(product)/extend/CustomizationStack'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import CollectionsExtendIntro from '@/app/(product)/extend/CollectionsExtendIntro'

export default function Extend() {
  const sections: Section[] = [
    {
      bgColor: 'bg-gray-50',
      children: (
        <Intro
          title="Become an Integration Partner"
          description={
            <div className="section-intro">
              <p>
                Do you want to give your customers the ability to pull data from your platform and
                push data into it?
              </p>
              <p>
                You can see how to extend Ziggy with plugin blocks so they can effortlessly do
                things with your data that gives them all the flexibility they need and avoids the
                complexities.
              </p>
              <CTA
                label="Integration Partner Info"
                href="https://docs.ziggyservices.com/user-guide/plugin/overview"
              />
            </div>
          }
          image="/placeholder.svg"
          imageScale={0.5}
        />
      ),
    },
    {
      bgColor: 'bg-gray-50',
      children: <CustomizationStack />,
    },
    {
      id: 'hubspot',
      bgColor: 'pale-blue',
      children: (
        <>
          <CollectionsExtendIntro />
          <HubspotBlockCollection />
        </>
      ),
    },
    {
      bgColor: 'bg-gray-800',
      children: <QuickBookDemo background="dark" />,
    },
  ]

  return (
    <PageLayout
      title="Extend Ziggy with plugins"
      style={LayoutStyleEnum.Feature}
      description="Extend Ziggy by building your own custom blocks that can connect your platform with any others."
      image="/hero/extend.webp"
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
