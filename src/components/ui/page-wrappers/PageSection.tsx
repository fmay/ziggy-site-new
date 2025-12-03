import { FC, ReactNode } from 'react'
import Image from 'next/image'
import styles from './PageSection.module.scss'
import Wavy from '@/components/ui/page-wrappers/Wavy'
import { tailwindClassToHex } from '@/utils/tailwindColors'

interface PageSectionProps {
  children: ReactNode
  paddingY?: number
  paddingX?: number
  bgColor?: string
  image?: string
  alt?: string
  id?: string
  waveToColor?: string
  waveInvert?: boolean
}

const PageSection: FC<PageSectionProps> = ({
  children,
  paddingY = 100,
  paddingX = 40,
  bgColor = 'transparent',
  image,
  alt,
  id,
  waveToColor,
  waveInvert,
}) => {
  if (image) {
    return (
      <Wavy fromColor={bgColor} toColor={waveToColor} waveInvert={waveInvert}>
        <div className={styles.pageSectionWithImage}>
          <div className={styles.container}>
            <div className={styles.flexContainer}>
              <div className={styles.contentColumn}>{children}</div>
              <div className={styles.imageColumn}>
                <Image src={image} alt={alt || 'Section image'} width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </Wavy>
    )
  }

  // Convert bgColor to hex for inline style when there's no wave
  const bgColorHex =
    !waveToColor && bgColor !== 'transparent' ? tailwindClassToHex(bgColor) : undefined

  return (
    <div
      id={id || ''}
      className={`${styles.pageSection} ${bgColor}`}
      style={bgColorHex ? { backgroundColor: bgColorHex } : undefined}>
      <Wavy fromColor={bgColor} toColor={waveToColor} waveInvert={waveInvert}>
        <div className={styles.container}>{children}</div>
      </Wavy>
    </div>
  )
}

export default PageSection
