import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import QuickBookDemo from '@/app/(forms)/demo/QuickBookDemo'
import PartnerFeatures from '@/app/integration-partners/PartnerFeatures'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import CTA from '@/components/ui/cta/CTA'
import { GiCheckMark } from 'react-icons/gi'
import Hero from '@/components/ui/hero/Hero'
import styles from '@/components/ui/hero/hero.module.scss'
import { createColorCycler } from '@/utils/colorCycler'

export default function IntegrationPartners() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      bgColor: getNextColor(),
      children: <PartnerFeatures />,
    },
    {
      bgColor: getNextColor(),
      children: <QuickBookDemo background="dark" />,
    },
  ]

  return (
    <div className="min-h-screen mx-auto pt-12">
      <Hero
        fromColor="header-footer"
        toColor="gray-50"
        wavyVariant={WavyVariantEnum.Simple}
        image="/hero/customise.webp"
        title="Become an Integration Partner"
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Simple for your customers to integrate and migrate with your platform</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>
                    Provide your customers with your own branded and customised Ziggy Blocks that
                    integrate directly with your platform
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
        cta={<CTA label="Book a demo" href="demo" />}
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
