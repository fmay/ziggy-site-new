import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import FlowFeatures from '@/app/(product)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(product)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Intro from '@/components/ui/intro/Intro'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import { Section } from '@/app/page'

export default function Products() {
  const sections: Section[] = [
    {
      bgColor: 'bg-gray-50',
      children: (
        <Intro
          title="Ziggy Flows"
          description={
            <div className="section-intro">
              <p>
                A Ziggy flow is a canvas based pipeline for performing operations on data. There is
                a large number of blocks you can use to read, write, transform, map data as it flows
                through the pipeline.
              </p>
              <CTA label="Platform features" href="/features" />
            </div>
          }
          image="/placeholder.svg"
          imageScale={0.5}
        />
      ),
    },
    {
      bgColor: 'bg-gray-50',
      children: <FlowFeatures />,
    },
    {
      id: 'hubspot',
      bgColor: '',
      children: (
        <>
          <BlockCollections />
          <HubspotBlockCollection />
        </>
      ),
    },
    {
      id: 'javascript',
      bgColor: 'bg-gray-50',
      children: <JavascriptFeatures />,
    },
    {
      bgColor: 'bg-gray-300',
      children: <QuickBookDemo />,
    },
  ]

  return (
    <PageLayout
      title="Ziggy Flows"
      style="feature"
      description="Build simple or highly complex data pipelines using Ziggy Blocks and run them at any scale."
      video="https://nxucrsk2vrk61vtm.public.blob.vercel-storage.com/website-videos/flow-animated.mov"
      image="/placeholder.svg"
      waveToColor={sections[0].bgColor}
    >

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
