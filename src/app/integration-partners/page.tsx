import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import PartnerFeatures from '@/app/integration-partners/PartnerFeatures'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import { GiCheckMark } from 'react-icons/gi'
import Hero from '@/components/ui/hero/Hero'
import styles from '@/components/ui/hero/hero.module.scss'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'
import PlatformIntro from '@/app/integration-partners/PlatformIntro'
import NoCoding from '@/app/integration-partners/NoCoding'
import HowItsDone from '@/app/integration-partners/HowItsDone'

export default function IntegrationPartners() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: <PlatformIntro />,
    },
    {
      bgColor: getNextColor(),
      children: <NoCoding />,
    },
    {
      bgColor: getNextColor(),
      children: <HowItsDone />,
    },
    // {
    //   bgColor: getNextColor(),
    //   children: <PartnerFeatures />,
    // },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/customise.webp"
        title="Become an Integration Partner"
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Make it simple for your customers to integrate with your platform</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>
                Provide your customers with your own branded and customised Ziggy Blocks and Ziggy
                Flows to represent your specific platform requirements.
              </span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Open up new customer revenue streams for your business</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Keep performance & security 100% under your control</span>
            </li>
          </ul>
        }
        cta={<CTA label="Become a Partner" href="contact" />}
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
