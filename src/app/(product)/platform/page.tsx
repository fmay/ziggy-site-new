'use client'

import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import MadeEasy from '@/app/(product)/platform/MadeEasy'
import Extensible from '@/app/(product)/platform/Extensible'
import Cluster from '@/app/(product)/platform/Cluster'
import Pricing from '@/app/(product)/platform/Pricing'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import Hero from '@/components/ui/hero/Hero'

export default function Platform() {
  const sections: Section[] = [
    {
      bgColor: 'gray-100',
      children: <MadeEasy />,
    },
    {
      bgColor: 'pale-blue',
      children: <Extensible />,
    },
    {
      bgColor: 'white',
      children: <Cluster />,
    },
    {
      bgColor: '#d78383',
      color: 'text-white',
      children: <Pricing />,
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
      <Hero
        fromColor="header-footer"
        toColor="gray-100"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/home.webp"
        title="Ziggy - a new Automation and Integration Platform."
        subtitle={
          <>
            <p>Automate the movement of data from anywhere to anywhere else!</p>
            <p>
              Runs on <strong>your</strong> servers, giving you full control over security,
              performance and cost. And it's exceptionally easy to use and fully extensible.
            </p>
          </>
        }
        cta={<CTA label="Learn More" href="features" />}
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          color={section.color}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </div>
  )
}
