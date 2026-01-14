import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import styles from '@/components/ui/hero/hero.module.scss'
import { createColorCycler } from '@/utils/colorCycler'
import Hero from '@/components/ui/hero/Hero'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import { WavyVariantEnum } from '@/types/wavy'
import { GiCheckMark } from 'react-icons/gi'
import CTA from '@/components/ui/cta/CTA'
import AboutIOT from '@/app/solutions/iot/AboutIOT'
import Hosting from '@/app/solutions/iot/Hosting'
import { DefaultColorCycle } from '@/constants/default-colors'
import ProcessMessages from '@/app/solutions/iot/ProcessMessages'
import SendMessages from '@/app/solutions/iot/SendMessages'
import Services from '@/app/solutions/iot/Services'

export default function CRMSolutions() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: 'about',
      bgColor: getNextColor(),
      children: (
        <>
          <AboutIOT />
        </>
      ),
    },
    {
      id: 'messaging',
      bgColor: getNextColor(),
      children: (
        <>
          <ProcessMessages />
        </>
      ),
    },
    {
      id: 'send-message',
      bgColor: getNextColor(),
      children: (
        <>
          <SendMessages />
        </>
      ),
    },
    {
      id: 'hosting',
      bgColor: getNextColor(),
      children: (
        <>
          <Hosting />
        </>
      ),
    },
    {
      id: 'services',
      bgColor: getNextColor(),
      children: (
        <>
          <Services />
        </>
      ),
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Standard}
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
