import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import ClusterFeatures from '@/app/(features)/cluster/ClusterFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/QuickBookDemo'

export default function Cluster() {
  return (
    <PageLayout
      title="Ziggy Cluster"
      style="feature"
      description="Ziggy Cluster supports extremely high loads and is fully fault tolerant"
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
                For fault tolerance and normal loads you can use small (2GB) instances. For
                performance, use larger instance sizes and add instances to your cluster.
              </p>
              <CTA
                label="Overview"
                href="https://docs.ziggyservices.com/user-guide/cluster/overview"
              />
            </div>
          }
          image="/misc/docker.svg"
          imageScale={0.5}
        />
        <ClusterFeatures />
      </PageSection>

      <PageSection bgColor="bg-gray-800">
        <QuickBookDemo />
      </PageSection>
    </PageLayout>
  )
}
