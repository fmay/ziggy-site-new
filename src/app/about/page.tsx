'use client'

import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Mission from '@/app/about/Mission'
import Hero from '@/components/ui/hero/Hero'
import { DefaultColorCycle } from '@/constants/default-colors'
import { WavyVariantEnum } from '@/types/wavy'
import { useScreenSize } from '@/hooks/useScreenSize'

export default function About() {
  const sections: Section[] = [{ bgColor: 'header-footer', children: <Mission /> }]
  const { isLg } = useScreenSize()
  return (
    <div>
      <Hero
        minimal
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.None}
        image="/hero/about.webp"
        title="Our Mission"
        subtitle={
          <>
            <p className="text-lg font-[100]">
              Ziggy was born from an obsession with total project cost efficiency and a recognition
              that the Data Automation and Integration space is in need of technology and resourcing
              innovation.
            </p>
            <p className="text-lg">
              Existing ETL technology providers are cumbersome, complex and expensive and cloud
              automation platforms don't give users complete control over security and performance.
            </p>
            <p>
              Inappropriate technology has made staff resourcing challenging for data automation
              projects. Data automation tasks have demanded an over-reliance on developer level
              staff who are scarce and this has created substantial cost implications.
            </p>
          </>
        }
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </div>
  )
}
