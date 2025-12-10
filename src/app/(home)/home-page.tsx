import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import WhosItFor from '@/app/(home)/WhosItFor'
import BusinessFunctions from '@/app/(home)/BusinessFunctions'
import IntegrationPartner from '@/app/(home)/IntegrationPartner'
import AI from '@/app/(home)/AI'
import Pricing from '@/app/(home)/Pricing'
import Hero from '@/components/ui/hero/Hero'
import { GiCheckMark } from 'react-icons/gi'
import styles from '@/components/ui/hero/hero.module.scss'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import ImproveProcesses from '@/app/(home)/ImproveProcesses'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'

export default function HomePage() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: <WhosItFor />,
    },
    {
      bgColor: getNextColor(),
      children: <BusinessFunctions />,
    },
    // {
    //   bgColor: getNextColor(),
    //   children: <ImproveProcesses />,
    // },
    // {
    //   bgColor: getNextColor(),
    //   waveInvert: true,
    //   children: <AI />,
    // },
    {
      bgColor: getNextColor(),
      children: <IntegrationPartner />,
    },
    // {
    //   bgColor: getNextColor(),
    //   children: <Pricing />,
    // },
    // {
    //   bgColor: getNextColor(),
    //   children: <QuickBookDemo background="dark" />,
    // },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/home.webp"
        signoff="Ziggy it!"
        cta={<CTA label="Learn More" href="platform" />}
        title="The Automation and Integration Platform that's different."
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>AI enabled</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Runs on your servers for optimal performance and security</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Built for extreme ease of use and access to any data source</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Fully customizable</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Transparent non usage based pricing</span>
            </li>
          </ul>
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
