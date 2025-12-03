import { FC, ReactNode } from 'react'
import styles from './PageSection.module.scss'
import Wavy, { WavyVariantEnum } from '@/components/ui/page-wrappers/Wavy'
import { tailwindClassToHex } from '@/utils/tailwindColors'

export interface Section {
  bgColor: string
  children: ReactNode
  id?: string
  waveInvert?: boolean
  noWave?: boolean
}

interface PageSectionProps {
  children: ReactNode
  paddingY?: number
  paddingX?: number
  bgColor?: string
  alt?: string
  id?: string
  waveToColor?: string
  waveInvert?: boolean
  waveVariant?: WavyVariantEnum
}

const PageSection: FC<PageSectionProps> = ({
  children,
  paddingY = 100,
  paddingX = 40,
  bgColor = 'transparent',
  alt,
  id,
  waveToColor,
  waveInvert,
  waveVariant,
}) => {
  // Convert bgColor to hex for inline style when there's no wave
  const bgColorHex =
    !waveToColor && bgColor !== 'transparent' ? tailwindClassToHex(bgColor) : undefined


  return (
    <div
      id={id || ''}
      className={`${styles.pageSection} ${bgColor}`}
      style={bgColorHex ? { backgroundColor: bgColorHex } : undefined}>
      <Wavy fromColor={bgColor} toColor={waveToColor} waveInvert={waveInvert}  variant={waveVariant}>
        <div className={styles.container}>{children}</div>
      </Wavy>
    </div>
  )
}

export default PageSection
