import PageLayout from '@/components/ui/page-wrappers/page-layout/PageLayout'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import ContactForm from '@/app/(forms)/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="header-footer"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/contact.webp"
        title=""
        subtitle={
          <>
            <div className="mt-[80px]">
              <ContactForm />
              <div className="text-center mt-[20px]">
                <CTA label="I'd prefer a demo" href="demo" />
              </div>
            </div>
          </>
        }
      />
    </>
  )
}
