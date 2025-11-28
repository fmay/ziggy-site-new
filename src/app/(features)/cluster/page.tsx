import PageLayout from '@/components/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Hero from '@/app/(features)/cluster/Hero'
import ClusterFeatures from '@/app/(features)/cluster/ClusterFeatures'

export default function Cluster() {
  return (
    <PageLayout
      title="Ziggy Cluster"
      description="Throw any load at Ziggy. Sleep well at night thanks to full fault tolerance.">


      <ClusterFeatures />
    </PageLayout>
  )
}
