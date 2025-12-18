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
import SimplePair from '@/components/ui/simple-pair/SimplePair'

export default function Cluster() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: (
        <>
          <SimplePair
            title="Simple Docker installation"
            subtitle=""
            imageCopy={
              <div className="">
                <p>Ziggy runs in a simple Docker container on the machine or infrastructure of your choice.</p>
                <ul>
                  <li>Laptop</li>
                  <li>Single Server</li>
                  <li>Cluster</li>
                </ul>
                <p>
                  For fault tolerance with normal loads you can use small (2GB) instances. For
                  performance, just add larger instances to your cluster.
                </p>
              </div>
            }
            image="/product/cluster/machines.webp"
            scale={0.8}
            cta={
              <CTA
                label="Overview"
                href="https://docs.ziggyservices.com/user-guide/cluster/overview"
              />
            }
          />
        </>
      ),
    },
    {
      bgColor: getNextColor(),
      children: (
        <>
          <SimplePair
            title="What size server do I need?"
            subtitle=""
            imageCopy={
              <div className="">
                <p>In typical integration scenarios, Ziggy will run on a $12 a month 2GB server.</p>
                <p>
                  But when you need more performance, simply upgrade your servers - we won't charge a penny more when you do.
                </p>
              </div>
            }
            image="/product/cluster/server-size.webp"
            scale={0.7}
            cta={
              <CTA
                label="Overview"
                href="https://docs.ziggyservices.com/user-guide/cluster/overview"
              />
            }
          />
        </>
      ),
    },
    {
      bgColor: getNextColor(),
      children: <ClusterFeatures />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Standard}
        image="/hero/cluster.webp"
        imageNudge={60}
        scale={0.5}
        title={<>Install anywhere - Laptop, Single Instance or Cluster.</>}
        subtitle={
          <div>
            <p>If a machine can run Docker, it can run Ziggy.</p>
            <p>Ziggy Cluster supports extremely high loads and is fully fault tolerant.</p>
            <p>And because its on your servers, your control all aspects of security and performance,</p>
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
          waveInvert={section.waveInvert}
          waveVariant={WavyVariantEnum.Standard}>
          {section.children}
        </PageSection>
      ))}
    </>
  )
}
