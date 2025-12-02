import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import FlowFeatures from '@/app/(product)/flows/FlowFeatures'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import BlockCollections from '@/app/(product)/flows/BlockCollections'
import JavascriptFeatures from '@/app/(product)/flows/JavascriptFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import CTA from '@/components/ui/cta/CTA'
import Intro from '@/components/ui/intro/Intro'
import ScrollListCore from '@/app/(product)/features/ScrollList_Core'
import ScrollListEdge from '@/app/(product)/features/ScrollList_Edge'
import ScrollListExtra1 from '@/app/(product)/features/ScrollList_Extra1'
import ScrollListExtra2 from '@/app/(product)/features/ScrollList_Extra2'
import PerformanceFeatures from '@/app/(product)/features/PerformanceFeatures'

export default function Features() {
  return (
    <PageLayout
      title="Ziggy Features"
      style="feature"
      description="Some of Ziggy's out-of-the-box features."
      image="/placeholder.svg">

      {/*FLOWS, BLOCKS, DEBUGGER*/}
      <PageSection bgColor="bg-pale-blue">
        <ScrollListCore />
      </PageSection>

      <PageSection bgColor="">
        <ScrollListEdge />
      </PageSection>

      {/*JAVASCRIPT*/}
      <PageSection id="javascript" bgColor="bg-gray-50">
        <JavascriptFeatures />
      </PageSection>

      {/*EXTRA 1*/}
      <PageSection id="extra1" bgColor="">
        <ScrollListExtra1 />
      </PageSection>

      {/*EXTRA 1*/}
      <PageSection id="extra1" bgColor="bg-pale-blue">
        <ScrollListExtra2 />
      </PageSection>

      {/*CLUSTER*/}
      <PageSection id="javascript" bgColor="bg-gray-50">
        <PerformanceFeatures />
      </PageSection>

    </PageLayout>
  )
}
