import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'

interface WhosItForProps {}

const WhosItFor: FC<WhosItForProps> = ({}) => {
  const ImageContent = () => {
    return (
      <>
        <p>Why do integration projects always take so long?</p>
        <ul>
          <li>ETL products are expensive and complex.</li>
          <li>
            Developers are a scarce resource and even with AI, coding makes little sense other than
            for the simplest use-cases
          </li>
          <li>Data specialists understand requirements and are best placed to implement solutions - if only it were simple. </li>
        </ul>
        <p>Ziggy solves these issue by letting both developers and non-developers integrate far faster.</p>
      </>
    )
  }

  return (
    <div>
      <SimplePair
        title="Who is Ziggy for?"
        subtitle="Ziggy was designed for non-developers and developers alike with pure ease-of-use in mind.
          Our team has a deep background in integrations and understands the challenges faced by
          companies of all sizes."
        imageCopy={<ImageContent />}
        image="/placeholder.svg"
        swap
      />
    </div>
  )
}

export default WhosItFor
