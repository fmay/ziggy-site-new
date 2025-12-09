import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import Mission from '@/app/about/Mission'
import Hero from '@/app/about/Hero'

export default function About() {
  const sections: Section[] = []

  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero />

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
