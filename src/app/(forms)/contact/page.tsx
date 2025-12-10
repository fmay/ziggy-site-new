import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import ContactForm from '@/app/(forms)/contact/ContactForm'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import CTA from '@/components/ui/cta/CTA'

export default function Contact() {
  const sections: Section[] = [
    {
      bgColor: "header-footer",
      children: <ContactForm />,
    },
  ]
  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="header-footer"
        wavyVariant={WavyVariantEnum.Standard}
        image="/hero/contact.webp"
        scale={0.5}
        title="Contact Us"
        subtitle={
          <div className="lg:mt-[-0px]">
            <p>
              Please let us know how we can help. Or book a demo if you prefer.
            </p>
          </div>
        }
        minimal
        contentNudge={0}
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </>
  )
}
