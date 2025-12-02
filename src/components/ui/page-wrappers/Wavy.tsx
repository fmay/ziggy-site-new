import { FC, ReactNode } from 'react'
import { tailwindClassToHex } from '@/utils/tailwindColors'

interface WavyProps {
  children: ReactNode
  fromColor: string
  toColor: string
  waveInvert?: boolean
}

const Wavy: FC<WavyProps> = ({ fromColor, toColor, children, waveInvert }) => {
  // Convert Tailwind classes to hex if needed
  let fromCol = fromColor
  let toCol = toColor

  if (!fromColor.includes('#') && !fromColor.includes('rgb')) fromCol = tailwindClassToHex(fromCol)
  if (!toColor.includes('#') && !toColor.includes('rgb')) toCol = tailwindClassToHex(toColor)

  return (
    <div className={`w-full flex flex-col`} style={{ backgroundColor: fromCol }}>
      {children}
      <svg
        className="w-full mt-[-7vw]"
        viewBox="0 0 1440 300"
        style={{ transform: waveInvert ? 'scaleX(-1)' : undefined }}
      >
        <path
          fill={toCol}
          d="M0,192L120,186.7C240,181,480,171,720,181.3C960,192,1200,224,1320,240L1440,256V320H0Z"></path>
      </svg>
    </div>
  )
}

export default Wavy
