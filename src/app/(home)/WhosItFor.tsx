import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'

interface WhosItForProps {}

const WhosItFor: FC<WhosItForProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Data specialists and developers will love Ziggy.</p>
        <ul>
          <li>It's easier, faster and cheaper than ETL tools.</li>
          <li>
            You have total control over performance, security and cost.
          </li>
          <li>AI features help non-developers accomplish things that would normally require developers.</li>
        </ul>
        <CTA label="Learn More" href="platform" noBottomMargin />
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Who is Ziggy for?"
        subtitle="Ziggy is for anyone who works with data and is considering ETL tools, Make.com or Zapier and wants to get the job done quicker and for less."
        imageCopy={<ImageContent />}
        image="/home/who-for.webp"
        swap
        scale={0.8}
      />
    </div>
  )
}

export default WhosItFor
