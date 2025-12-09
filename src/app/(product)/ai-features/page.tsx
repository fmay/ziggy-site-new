'use client'

import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import EdgeAssistant from '@/app/(product)/ai-features/EdgeAssistant'
import AIJavascript from '@/app/(product)/ai-features/AIJavascript'
import AIFlowExplain from '@/app/(product)/ai-features/AIFlowExplain'
import ComingSoon from '@/app/(product)/ai-features/ComingSoon'
import AIGenerate from '@/app/(product)/ai-features/AIGenerate'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { createColorCycler } from '@/utils/colorCycler'

export default function Platform() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: <EdgeAssistant />,
    },
    {
      bgColor: getNextColor(),
      children: <AIJavascript />,
    },
    {
      bgColor: getNextColor(),
      children: <AIGenerate />,
    },
    {
      bgColor: getNextColor(),
      children: <AIFlowExplain />,
    },
    {
      bgColor: getNextColor(),
      children: <ComingSoon />,
    },
    {
      bgColor: getNextColor(),
      children: <QuickBookDemo />,
    },
  ]

  return (
    <div>
      <Hero
        fromColor="header-footer"
        toColor="gray-50"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/ai-features.webp"
        title="Ziggy's AI Features"
        subtitle={
          <div>
            Ziggy uses AI extensively and more AI features are being released all the time. Be assured, AI never touches your data during flow execution
          </div>
        }
        cta={<CTA label="See More Features" href="features" />}
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

    </div>
  )
}
