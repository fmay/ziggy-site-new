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

export default function Products() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: '',
      bgColor: getNextColor(),
      children: (
        <>
          <SimplePair
            title="Simple flows can do complex things"
            subtitle=""
            image="/home/simple-flow.webp"
            imageCopy={
              <div>
                <p>The Ziggy flow below looks simple enough. In reality, it's</p>
                <ul>
                  <li>Getting exchanges rates from an API</li>
                  <li>Extracting rates from within the returned data (the AI icon does this)</li>
                  <li>Updating all exchange rates in HubSpot with the latest rates.</li>
                </ul>
              </div>
            }
          />
        </>
      ),
    },
    {
      bgColor: getNextColor(),
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
      bgColor: getNextColor(),
      children: (
        <>
          <BlockCollections />
          <HubspotBlockCollection />
        </>
      ),
    },
    {
      id: 'javascript',
      bgColor: getNextColor(),
      children: <JavascriptFeatures />,
    },
    {
      bgColor: getNextColor(),
      children: <QuickBookDemo />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="gray-50"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/flows-blocks.webp"
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
