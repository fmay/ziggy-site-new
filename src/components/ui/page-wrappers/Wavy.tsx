import { FC, ReactNode } from 'react'
import { tailwindClassToHex } from '@/utils/tailwindColors'

interface WavyProps {
  children: ReactNode
  fromColor: string
  toColor: string
  waveInvert?: boolean
  variant?: 'standard' | 'simple'
}

const Wavy: FC<WavyProps> = ({
  fromColor,
  toColor,
  children,
  waveInvert,
  variant = 'standard',
}) => {
  // Convert Tailwind classes to hex if needed
  let fromCol = fromColor
  let toCol = toColor

  if (!fromColor.includes('#') && !fromColor.includes('rgb')) fromCol = tailwindClassToHex(fromCol)
  if (!toColor.includes('#') && !toColor.includes('rgb')) toCol = tailwindClassToHex(toColor)

  const Standard = (): ReactNode => {
    return (
      <svg
        className="w-full mt-[-7vw]"
        viewBox="0 0 1440 300"
        style={{ transform: waveInvert ? 'scaleX(-1)' : undefined }}>
        <path
          fill={toCol}
          d="M0,192L120,186.7C240,181,480,171,720,181.3C960,192,1200,224,1320,240L1440,256V320H0Z"></path>
      </svg>
    )
  }

  const Simple = (): ReactNode => {
    return (
      <svg className="w-full mt-[-2vw]" viewBox="0 0 1440 95">
        <path
          fill={toCol}
          d="M 265 62.117645 C 689.978027 38.074532 1440 0 1440 0 L 1440 96 L 0 96 C 0 96 25.955353 75.641602 265 62.117645 Z"
        />
      </svg>
    )
  }

  let waveComponent: ReactNode
  switch (variant) {
    case 'simple':
      waveComponent = <Simple />
      break
    default:
      waveComponent = <Standard />
      break
  }

  return (
    <div className={`w-full flex flex-col`} style={{ backgroundColor: fromCol }}>
      {children}

      {waveComponent}
    </div>
  )
}

export default Wavy
