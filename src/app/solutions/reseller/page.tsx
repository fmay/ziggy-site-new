import PageSection, { Section } from '@/components/ui/page-wrappers/PageSection'
import styles from '@/components/ui/hero/hero.module.scss'
import { createColorCycler } from '@/utils/colorCycler'
import Hero from '@/components/ui/hero/Hero'
import { WavyVariantEnum } from '@/types/wavy'
import { GiCheckMark } from 'react-icons/gi'
import CTA from '@/components/ui/cta/CTA'
import { DefaultColorCycle } from '@/constants/default-colors'
import ConsultancyOpportunity from '@/app/solutions/reseller/ConsultancyOpportunity'
import ResaleOpportunity from '@/app/solutions/reseller/ResaleOpportunity'
import Discounts from '@/app/solutions/reseller/Discounts'

export default function CRMSolutions() {
  const getNextColor = createColorCycler()
  const sections: Section[] = [
    {
      id: 'consultancy',
      bgColor: getNextColor(),
      children: (
        <>
          <ConsultancyOpportunity />
        </>
      ),
    },
    {
      id: 'resale',
      bgColor: getNextColor(),
      children: (
        <>
          <ResaleOpportunity />
        </>
      ),
    },
    {
      id: 'discount',
      bgColor: getNextColor(),
      children: (
        <>
          <Discounts />
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
        title="Generate revenue streams from Ziggy centric services and platform sales"
        subtitle={
          <ul>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Generate revenues from Ziggy centric professional services</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Use Ziggy for customer migrations with total control over data security and performance</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Create complex integrations and automations for your customers</span>
            </li>
            <li>
              <GiCheckMark className={styles.checkIcon} />
              <span>Meet the most stringent security requirements of your customers by running on private, scalable infrastructure</span>
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
