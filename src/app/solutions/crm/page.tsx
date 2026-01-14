import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import styles from '@/components/ui/hero/hero.module.scss'
import { createColorCycler } from '@/utils/colorCycler'
import Hero from '@/components/ui/hero/Hero'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import { WavyVariantEnum } from '@/types/wavy'
import { GiCheckMark } from 'react-icons/gi'
import CTA from '@/components/ui/cta/CTA'
import ExampleBlocks from '@/app/solutions/crm/ExampleBlocks'
import Spacer from '@/components/page/Spacer'
import AboutIntegrations from '@/app/solutions/crm/AboutIntegrations'
import Hosting from '@/app/solutions/crm/Hosting'
import Services from '@/app/solutions/crm/Services'

export default function CRMSolutions() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: 'about',
      bgColor: getNextColor(),
      children: (
        <>
          <AboutIntegrations />
        </>
      ),
    },
    {
      id: 'control',
      bgColor: getNextColor(),
      children: (
        <>
          <Hosting />
        </>
      ),
    },
    {
      id: 'hubspot',
      bgColor: getNextColor(),
      children: (
        <>
          <ExampleBlocks />
          <Spacer height={100} />
          <HubspotBlockCollection />
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
        toColor="header-footer"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/integration-partners.webp"
        scale={0.7}
        imageNudge={60}
        title="Integrations, Automations and Migration for your CRM platform"
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Integrate your CRM with other platforms, databases, APIs and systems</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Automate processes triggered by events in your CRM or other systems</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Generate revenues from Ziggy centric professional services</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Use for customer migrations</span>
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
