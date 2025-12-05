'use client'

import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import FlowFeatures from '@/app/(product)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(product)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Intro from '@/components/ui/intro/Intro'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import EdgeAssistant from '@/app/(product)/ai-features/EdgeAssistant'
import AIJavascript from '@/app/(product)/ai-features/AIJavascript'
import AIFlowExplain from '@/app/(product)/ai-features/AIFlowExplain'
import ComingSoon from '@/app/(product)/ai-features/ComingSoon'

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
      bgColor: 'bg-white',
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
    <PageLayout
      title="Ziggy's AI Features"
      style={LayoutStyleEnum.Feature}
      description="Ziggy uses AI extensively and more AI features are being released all the time."
      image="/placeholder.svg"
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
