import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Mission from '@/app/about/Mission'
import Hero from '@/components/ui/hero/Hero'
import { DefaultColorCycle } from '@/constants/default-colors'
import { WavyVariantEnum } from '@/types/wavy'
import CTA from '@/components/ui/cta/CTA'

export default function About() {
  const sections: Section[] = [{ bgColor: 'header-footer', children: <Mission /> }]

  console.log('About page - WavyVariantEnum.None:', WavyVariantEnum.None)

  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero
        minimal
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.None}
        image="/hero/about.webp"
        title="About Us"
        subtitle={
          <>
            <p className="text-lg font-[100]">
              Ziggy was born from an obsession for total project cost efficiency and a recognition
              that data automation and integration and the ETL space was in serious need of
              technology and resourcing innovation.
            </p>
            <p className="text-lg">
              Existing ETL technology providers are cumbersome, complex and expensive. Cloud
              platforms (like Make and Zapier) don't give users control over security and
              performance and visibility over cost.
            </p>
            <p>
              Inappropriate technologies makes staff resourcing for data automation projects very
              challenging with substantial cost implications. Traditional data automation tasks
              demand an over-reliance on suitable developer level staff who are often scarce
              resources within a business.
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
    </div>
  )
}
