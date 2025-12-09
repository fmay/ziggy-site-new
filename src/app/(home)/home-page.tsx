import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import WhosItFor from '@/app/(home)/WhosItFor'
import BusinessFunctions from '@/app/(home)/BusinessFunctions'
import IntegrationPartner from '@/app/(home)/IntegrationPartner'
import ExampleAutomations from '@/app/(home)/ExampleAutomations'
import AI from '@/app/(home)/AI'
import Pricing from '@/app/(home)/Pricing'
import Hero from '@/components/ui/hero/Hero'
import { GiCheckMark } from 'react-icons/gi'
import styles from '@/components/ui/hero/hero.module.scss'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import Test from '@/app/(home)/Test'

export default function HomePage() {
  const sections: Section[] = [
    {
      bgColor: 'gray-100',
      children: <WhosItFor />,
    },
    {
      bgColor: 'pale-blue',
      children: <BusinessFunctions />,
    },
    {
      bgColor: 'bg-white',
      children: <Test />,
    },
    {
      bgColor: 'bg-gray-50',
      waveInvert: true,
      children: <AI />,
    },
    {
      bgColor: 'pale-blue',
      children: <IntegrationPartner />,
    },
    {
      bgColor: 'white',
      children: <Pricing />,
    },
    {
      bgColor: 'gray-100',
      children: <QuickBookDemo background="dark" />,
    },
  ]

  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero
        fromColor="header-footer"
        toColor="gray-100"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/home.webp"
        signoff="Ziggy it!"
        cta={<CTA label="Learn More" href="platform" />}
        title="The Automation and Integration Platform. New and Different."
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Runs on your servers</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Wonderfully easy to use</span>
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
    </div>
  )
}
