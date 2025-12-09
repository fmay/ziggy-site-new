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

export default function Platform() {
  const sections: Section[] = [
    {
      bgColor: 'bg-gray-50',
      children: <EdgeAssistant />,
    },
    {
      bgColor: 'bg-pale-blue',
      children: <AIJavascript />,
    },
    {
      bgColor: 'white',
      children: <AIGenerate />,
    },
    {
      bgColor: 'bg-gray-100',
      children: <AIFlowExplain />,
    },
    {
      bgColor: 'bg-pale-blue',
      children: <ComingSoon />,
    },
    {
      bgColor: 'bg-gray-50',
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
