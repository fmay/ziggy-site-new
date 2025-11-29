import PageLayout from '@/components/ui/layout/page-layout/PageLayout'
import ClusterFeatures from '@/app/(features)/cluster/ClusterFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'

export default function Cluster() {
  return (
    <PageLayout
      title="Ziggy Cluster"
      description="Throw any load at Ziggy. Sleep well at night thanks to full fault tolerance."
      image="/canvas/home/cards/cluster.card.svg">
      <PageSection bgColor="bg-blue-50">
        <ClusterFeatures />
      </PageSection>

      <PageSection>HELLO</PageSection>
    </PageLayout>
  )
}
