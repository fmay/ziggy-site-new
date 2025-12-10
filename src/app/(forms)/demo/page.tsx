import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'

export default function BookDemoPage() {
  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="header-footer"
        wavyVariant={WavyVariantEnum.Standard}
        image="/hero/demo.webp"
        title="Book Demo"
        subtitle={
          <>
            <p>
              Book a 30 minute demo with a product expert who will answer all your questions,
              however technical.
            </p>
          </>
        }
        beneath={
          <div className="lg:mt-[50px]">
            <QuickBookDemo />
          </div>
        }
      />
    </>
  )
}
