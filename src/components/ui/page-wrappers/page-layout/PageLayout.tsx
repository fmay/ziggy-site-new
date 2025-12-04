'use client'

import styles from './PageLayout.module.scss'
import PageSection from '@/components/ui/page-wrappers/PageSection'
import { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'

export enum LayoutStyleEnum {
  Default = 'default',
  Feature = 'feature',
  Test = 'test',
  Pricing = 'pricing',
}

interface PageLayoutProps {
  title: string
  description: string
  children?: React.ReactNode
  image?: string
  video?: string
  style?: LayoutStyleEnum
  bgColor?: string
  color?: string
  waveToColor?: string
}

interface StyleConfig {
  bgColor: string
  textColor: string
  waveVariant: WavyVariantEnum
}

type StyleConfigMap = Record<LayoutStyleEnum, StyleConfig>

const styleConfig: StyleConfigMap = {
  default: {
    bgColor: 'bg-header-footer',
    textColor: 'text-white',
    waveVariant: WavyVariantEnum.Standard,
  },
  feature: {
    bgColor: 'bg-header-footer',
    textColor: 'text-white',
    waveVariant: WavyVariantEnum.Simple },
  pricing: {
    bgColor: 'bg-dark-gray',
    textColor: 'text-white',
    waveVariant: WavyVariantEnum.Standard,
  },
  test: { bgColor: 'bg-red-700', textColor: 'text-white', waveVariant: WavyVariantEnum.Simple },
}

const PageLayout = ({
  title,
  description,
  children,
  image,
  video,
  style = LayoutStyleEnum.Default,
  bgColor,
  color,
  waveToColor,
}: PageLayoutProps) => {
  const config = styleConfig[style]
  const finalBgColor = bgColor || config.bgColor

  return (
    <>
      <PageSection
        bgColor={finalBgColor}
        waveToColor={waveToColor}
        waveVariant={config.waveVariant as WavyVariantEnum}>
        <div className={`${style ? styles[style] : ''} ${config.textColor}`}>
          <div className={styles.headerWithImage}>
            <div className={styles.textSection}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
            {image && (
              <div className={styles.imageSection} style={{ backgroundImage: `url(${image})` }} />
            )}
          </div>
        </div>
      </PageSection>
      {children}
    </>
  )
}

export default PageLayout
