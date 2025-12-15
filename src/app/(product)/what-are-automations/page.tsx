import { FC } from 'react'
import { createColorCycler } from '@/utils/colorCycler'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Hero from '@/components/ui/hero/Hero'
import { DefaultColorCycle } from '@/constants/default-colors'
import { WavyVariantEnum } from '@/types/wavy'
import Automations from '@/app/(product)/what-are-automations/Automations'
import Integrations from '@/app/(product)/what-are-automations/Integrations'

interface WhatAreAutomationsPageProps {}

const WhatAreAutomationsPage: FC<WhatAreAutomationsPageProps> = ({}) => {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: 'example-automation',
      bgColor: getNextColor(),
      children: <Automations />,
    },
    {
      id: 'example-integration',
      bgColor: getNextColor(),
      children: <Integrations />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Standard}
        image="/home/about-automations.webp"
        scale={0.5}
        title="About Automations and Integrations"
        subtitle={
          <div>
            <p>
              Both Automations and Integrations trigger Ziggy Flows. The difference is the type of triggering event.
            </p>
            <p>You'll find and explanation an examples below.</p>
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

export default WhatAreAutomationsPage
