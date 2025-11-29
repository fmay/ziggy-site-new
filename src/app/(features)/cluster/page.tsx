import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import ClusterFeatures from '@/app/(features)/cluster/ClusterFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'

export default function Cluster() {
  return (
    <PageLayout
      title="Ziggy Cluster"
      description="Throw any load at Ziggy. Sleep well at night thanks to full fault tolerance."
      image="/canvas/home/cards/cluster.card.svg">
      <PageSection bgColor="bg-gray">
        <Intro
          title="Just Docker"
          description={
            <div className="section-intro">
              <p>
                Ziggy is a quick and simple installation. It runs in a Docker container on the
                infrastructure of your choice.
              </p>
              <p>
                If it's just fault tolerance you're after, you can use very small instances. For
                performance, use larger instance sizes.
              </p>
            </div>
          }
          image="/misc/docker.svg"
          imageScale={0.5}
        />
        <ClusterFeatures />
      </PageSection>

      <PageSection>HELLO</PageSection>
    </PageLayout>
  )
}
