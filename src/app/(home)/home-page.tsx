import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import WhosItFor from '@/app/(home)/WhosItFor'
import BusinessFunctions from '@/app/(home)/BusinessFunctions'
import IntegrationPartner from '@/app/(home)/IntegrationPartner'
import Hero from '@/components/ui/hero/Hero'
import { GiCheckMark } from 'react-icons/gi'
import styles from '@/components/ui/hero/hero.module.scss'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import { createColorCycler } from '@/utils/colorCycler'
import { DefaultColorCycle } from '@/constants/default-colors'
import Subscribe from '@/app/(forms)/(subscribe)/Subscribe'
import PlatformOverview from '@/app/(home)/PlatformOverview'
import WhatIntegrationAutomation from '@/app/(home)/WhatIntegrationAutomation'
import IntroScroll from '@/app/(home)/IntroScroll'

export default function HomePage() {
  const getNextColor = createColorCycler()
  const heroWaveVariant = WavyVariantEnum.Simple
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: (
        <>
          <IntroScroll />
        </>
      ),
    },
    {
      bgColor: getNextColor(),
      children: <WhatIntegrationAutomation />,
    },
    {
      bgColor: getNextColor(),
      children: <BusinessFunctions />,
    },
    // {
    //   bgColor: getNextColor(),
    //   children: <PlatformOverview />,
    // },
    {
      bgColor: getNextColor(),
      children: <IntegrationPartner />,
    },
    {
      bgColor: getNextColor(),
      children: <Subscribe />,
    },
  ]

  return (
    <>
      <Hero
        fromColor="header-footer"
        toColor={DefaultColorCycle[0]}
        wavyVariant={heroWaveVariant}
        image="/hero/home.webp"
        imageNudge={80}
        scale={0.7}
        signoff="Ziggy it!"
        cta={<CTA label="Learn More" href="platform" />}
        title={<div><h1>Ziggy.</h1> The Automation and Integration Platform that's different.</div>}
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Built for extreme ease of use and access to any data source</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Runs on your servers for optimal performance and security</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Fully customizable</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>A different approach to pricing</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>AI enabled</span>
            </li>
          </ul>
        }
      />

      {sections.map((section, index) => (
        <PageSection
          key={index}
          bgColor={section.bgColor}
          waveToColor={sections[index + 1]?.bgColor}
          waveInvert={section.waveInvert}
          waveVariant={heroWaveVariant}>
          {section.children}
        </PageSection>
      ))}
    </>
  )
}
