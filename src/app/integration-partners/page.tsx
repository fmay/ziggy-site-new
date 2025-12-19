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
import CustomizationStack from '@/app/(product)/extend/CustomizationStack'
import CollectionsExtendIntro from '@/app/(product)/extend/CollectionsExtendIntro'
import HubspotBlockCollection from '@/components/content/hubspot/HubspotBlockCollection'
import ScrollIntro from '@/app/integration-partners/ScrollIntro'

export default function IntegrationPartners() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    // {
    //   bgColor: getNextColor(),
    //   children: <PlatformIntro />,
    // },
    // {
    //   id: "nocoding",
    //   bgColor: getNextColor(),
    //   children: <NoCoding />,
    // },
    {
      bgColor: getNextColor(),
      children: <ScrollIntro />,
    },
    {
      id: "how-its-done",
      bgColor: getNextColor(),
      children: <CustomizationStack />,
    },
    {
      id: 'hubspot',
      bgColor: getNextColor(),
      children: (
        <>
          <CollectionsExtendIntro />
          <HubspotBlockCollection />
        </>
      ),
    },
    // {
    //   bgColor: getNextColor(),
    //   children: <HowItsDone />,
    // },
    // {
    //   bgColor: getNextColor(),
    //   children: <PartnerFeatures />,
    // },
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
