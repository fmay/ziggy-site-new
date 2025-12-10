'use client'

import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import CustomizationStack from '@/app/(product)/extend/CustomizationStack'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import CollectionsExtendIntro from '@/app/(product)/extend/CollectionsExtendIntro'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'
import SimplePair from '@/components/ui/simple-pair/SimplePair'

export default function Extend() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: (
        <>
          <SimplePair
            title="Become an Integration Partner"
            subtitle=""
            imageCopy={
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
              </div>
            }
            image="/product/extend/become-partner.webp"
            cta={
              <CTA
                label="Integration Partner Info"
                href="https://docs.ziggyservices.com/user-guide/plugin/overview"
              />
            }
            scale={0.9}
          />
        </>
      ),
    },
    {
      bgColor: getNextColor(),
      children: <CustomizationStack />,
    },
    {
      id: 'hubspot',
      bgColor: getNextColor(),
      children: (
        <>
          <CollectionsExtendIntro />
          <HubspotBlockCollection />
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
        image="/hero/customise.webp"
        title="Extend Ziggy with plugins"
        subtitle={
          <>
            <p>
              Extend Ziggy by building your own custom blocks that can connect your platform with
              any others.
            </p>
            <p>
              Now your customer can build their own Ziggy flows for getting data into and out of
              your platform.
            </p>
          </>
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
