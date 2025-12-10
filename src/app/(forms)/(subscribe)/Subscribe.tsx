import { FC } from 'react'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'

interface SubscribeProps {}

const Subscribe: FC<SubscribeProps> = ({}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 ">
        <h2>Subscribe to updates</h2>
        <p>Be the first to hear about the latest Ziggy product releases, industry news, and insights into the data automation and integration space.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <QuickBookDemo subscribe />
      </div>
    </div>
  )
}

export default Subscribe
