import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import ScrollListCore from '@/app/(product)/features/ScrollList_Core'
import ScrollListEdge from '@/app/(product)/features/ScrollList_Edge'
import ScrollListExtra1 from '@/app/(product)/features/ScrollList_Extra1'
import ScrollListExtra2 from '@/app/(product)/features/ScrollList_Extra2'
import PerformanceFeatures from '@/app/(product)/features/PerformanceFeatures'
import { ReactNode } from 'react'
import { Section } from '@/app/page'

export default function Features() {
  const sections: Section[] = [
    {
      bgColor: 'pale-blue',
      children: <ScrollListCore />,
    },
    {
      bgColor: 'white',
      children: <ScrollListEdge />,
    },
    {
      id: 'javascript',
      bgColor: 'pale-blue',
      children: <JavascriptFeatures />,
    },
    {
      id: 'extra1',
      bgColor: 'white',
      children: <ScrollListExtra1 />,
    },
    {
      bgColor: 'bg-gray-200',
      children: <ScrollListExtra2 />,
    },
    {
      bgColor: 'bg-gray-50',
      children: <PerformanceFeatures />,
    },
  ]

  return (
    <PageLayout
      title="Ziggy Features"
      style="feature"
      description="Some of Ziggy's out-of-the-box features."
      image="/placeholder.svg">

      {sections.map((section, index) => (
        <PageSection
          key={index}
          id={section.id}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}
        >
          {section.children}
        </PageSection>
      ))}

    </PageLayout>
  )
}
