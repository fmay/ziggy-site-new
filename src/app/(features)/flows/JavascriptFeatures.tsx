import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/stack-card'

interface JavascriptFeaturesProps {}

const JavascriptFeatures: FC<JavascriptFeaturesProps> = ({}) => {
  const items: ReactNode[] = [
    <StackCard
      title="Do anything"
      description="For quick and easy data transformations"
      badgeLabel="Badge label"
      ctaText="aaa"
      ctaHref="https://google.com"
      graphic="/images/flows/parallel.png"
    />,
    <StackCard
      title="Do anything"
      description="For quick and easy data transformations"
      badgeLabel="Badge label"
      ctaText="aaa"
      ctaHref="https://google.com"
      graphic="/images/flows/parallel.png"
    />,
    <StackCard
      title="Do anything"
      description="For quick and easy data transformations"
      badgeLabel="Badge label"
      ctaText="aaa"
      ctaHref="https://google.com"
      graphic="/images/flows/parallel.png"
    />,
    <StackCard
      title="Do anything"
      description="For quick and easy data transformations"
      badgeLabel="Badge label"
      ctaText="aaa"
      ctaHref="https://google.com"
      graphic="/images/flows/parallel.png"
    />,
  ]

  return (
    <div>
      <ImageStack items={items} />
    </div>
  )
}

export default JavascriptFeatures
