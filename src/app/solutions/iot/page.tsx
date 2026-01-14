import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import styles from '@/components/ui/hero/hero.module.scss'
import { createColorCycler } from '@/utils/colorCycler'
import Hero from '@/components/ui/hero/Hero'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import { WavyVariantEnum } from '@/types/wavy'
import { GiCheckMark } from 'react-icons/gi'
import CTA from '@/components/ui/cta/CTA'

export default function CRMSolutions() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: 'hubspot',
      bgColor: getNextColor(),
      children: (
        <>
          <HubspotBlockCollection />
        </>
      ),
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor="header-footer"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/integration-partners.webp"
        scale={0.7}
        imageNudge={60}
        title="Internet of Things"
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Full support for MQTT and other messaging protocols</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Process any volume of messages in Ziggy Flows</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Event driven or manual messages to IoT devices</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Complete control over data security and performance - runs on your preferred infrastructure</span>
            </li>
          </ul>
        }
        cta={
          <div
            className="flex flex-col gap-0 items-center
            lg:flex-row lg:gap-8 lg:items-start">
            <CTA label="Become a Partner" href="contact" noBottomMargin />
          </div>
        }
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          id={section.id}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}>
          {section.children}
        </PageSection>
      ))}
    </>
  )
}
