import { FC } from 'react'
import SimplePair from '@/components/ui/simple-pair/SimplePair'
import CTA from '@/components/ui/cta/CTA'
import { getSwapStatus } from '@/utils/swapStatus'

interface AboutZiggyProps {}

const AboutZiggy: FC<AboutZiggyProps> = ({}) => {
  const Content = () => {
    return (
      <div className="flex flex-row gap-8">
        <div className="flex flex-col mt-[-20px]">
          <CTA
            className="!w-[220px] text-center "
            label="Platform Overview"
            href="/platform"
            noBottomMargin
          />
          <CTA
            className="!w-[220px] text-center mt-[20px]"
            label="Feature Overview"
            href="/features"
            noBottomMargin
          />
        </div>
        <div className="flex flex-col mt-[-20px]">
          <CTA
            className="!w-[220px] text-center"
            label="Documentation"
            href="https://docs.ziggyplatform.com"
            noBottomMargin
          />
          <CTA
            className="!w-[220px] text-center  mt-[20px]"
            label="Ziggy Cluster"
            href="/cluster"
            noBottomMargin
          />
        </div>
      </div>
    )
  }

  return (
    <div className="pb-[100px]">
      <SimplePair
        title="About the Ziggy platform"
        subtitle=""
        imageCopy={<Content />}
        image="/ziggy-z-light-bg.svg"
        // cta={<CTA label="Contact Us" href="/contact" noBottomMargin />}
        scale={0.3}
        swap={getSwapStatus()}
      />
    </div>
  )
}

export default AboutZiggy
