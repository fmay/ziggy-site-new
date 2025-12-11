import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'

export default function BookDemoPage() {
  const sections: Section[] = [
    {
      bgColor: "header-footer",
      children: <QuickBookDemo />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="header-footer"
        wavyVariant={WavyVariantEnum.None}
        image="/hero/demo.webp"
        title="Book a Demo"
        minimal
        scale={0.5}
        subtitle={
          <>
            <p>
              Book a 30 minute demo with a product expert who will answer all your questions,
              however technical.
            </p>
          </>
        }
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
