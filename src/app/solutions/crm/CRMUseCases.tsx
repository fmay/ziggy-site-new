import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface CRMUseCasesProps {
}

const CRMUseCases:FC<CRMUseCasesProps> = ({}) => {

  const ImageContent = () => {
    return (
      <div className="">
        <p>
          You can do almost anything with Ziggy and your CRM system. Here are some common use cases.
        </p>
        <ul>
          <li>Propagate data changes in real time - when data changes in your CRM or in other systems, keep them in sync.</li>
          <li>Migrations - pull in data from any other system on a scheduled basis.</li>
          <li>Reporting - aggregate data from your CRM and other systems into a unified reporting database or warehouse.</li>
          <li>Currency updates - get exchange rate information as often as required and keep CRM currencies in sync.</li>
          <li>Data cleansing - run highly customised data quality checks, flag up errors</li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <SimplePair
        title="What sort of things can I automate with Ziggy?"
        subtitle=""
        imageCopy={<ImageContent />}
        image="/solutions/crm/crm-use-cases.webp"
        cta={<CTA label="Learn more" href="/platform" noBottomMargin />}
        scale={0.8}
        contentNudge={0}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default CRMUseCases