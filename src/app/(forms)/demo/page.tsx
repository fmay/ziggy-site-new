import PageLayout, { LayoutStyleEnum } from '@/components/ui/page-wrappers/page-layout/PageLayout'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import ContactForm from '@/app/(forms)/contact/ContactForm'
import CTA from '@/components/ui/cta/CTA'

export default function BookDemoPage() {
  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="header-footer"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/demo.webp"
        title="Book Demo"
        subtitle={
          <>
            <div className="mt-[80px]">
              <p>
                Book a 30 minute demo with a product expert who will answer all your questions,
                however technical.
              </p>
            </div>
          </>
        }
        beneath={<QuickBookDemo />}
      />
    </>
  )
}
