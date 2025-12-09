'use client'

import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import ClusterFeatures from '@/app/(product)/cluster/ClusterFeatures'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import Hero from '@/components/ui/hero/Hero'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'

export default function Cluster() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: (
        <>
          {' '}
          <Intro
            title="Just Docker"
            description={
              <div className="section-intro">
                <p>
                  Installing Ziggy is simple. It runs in a single Docker container on the
                  infrastructure of your choice.
                </p>
                <p>
                  For fault tolerance and normal loads you can use small (2GB) instances. For
                  performance, just add larger instances to your cluster.
                </p>
                <CTA
                  label="Overview"
                  href="https://docs.ziggyservices.com/user-guide/cluster/overview"
                />
              </div>
            }
            image="/misc/docker.svg"
            imageScale={0.5}
          />
          <ClusterFeatures />
        </>
      ),
    },
    {
      bgColor: getNextColor(),
      children: <QuickBookDemo background="dark" />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/cluster.webp"
        title="Ziggy Cluster"
        subtitle={
          <div>
            <p>Ziggy Cluster supports extremely high loads and is fully fault tolerant.</p>
            <p>Installation is simple using Docker.</p>
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
