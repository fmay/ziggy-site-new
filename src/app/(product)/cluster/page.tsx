import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import ClusterFeatures from '@/app/(product)/cluster/ClusterFeatures'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import Intro from '@/components/ui/intro/Intro'
import CTA from '@/components/ui/cta/CTA'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'

export default function Cluster() {
  return (
    <PageLayout
      title="Ziggy Cluster"
      style="feature"
      description="Ziggy Cluster supports extremely high loads and is fully fault tolerant"
      image="/placeholder.svg"
      waveToColor="bg-gray">
      <PageSection bgColor="bg-gray">
        <Intro
          title="Just Docker"
          description={
            <div className="section-intro">
              <p>
                Installing Ziggy is simple. It runs in a single Docker container on the
                infrastructure of your choice.
              </p>
              <p>
                For fault tolerance and normal loads you can use small (2GB) instances. For
                performance, just add larger instances to your cluster.
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
        <QuickBookDemo background="dark" />
      </PageSection>
    </PageLayout>
  )
}
