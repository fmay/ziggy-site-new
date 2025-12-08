'use client'

import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import ClusterFeatures from '@/app/(product)/cluster/ClusterFeatures'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'

export default function Cluster() {
  const sections: Section[] = [
    {
      bgColor: 'bg-gray-50',
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
      bgColor: 'bg-gray-800',
      children: <QuickBookDemo background="dark" />,
    },
  ]

  return (
    <PageLayout
      title="Ziggy Cluster"
      style={LayoutStyleEnum.Feature}
      description="Ziggy Cluster supports extremely high loads and is fully fault tolerant"
      image="/hero/cluster.webp"
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
