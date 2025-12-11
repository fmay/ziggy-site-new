'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { tailwindClassToHex } from '@/utils/tailwindColors'
import { WavyVariantEnum } from '@/types/wavy'

export { WavyVariantEnum }

interface WavyProps {
  children: ReactNode
  fromColor?: string
  toColor?: string
  waveInvert?: boolean
  variant?: WavyVariantEnum
}

interface WaveSvgProps {
  fill: string
  className: string
  style?: React.CSSProperties
  svgPath: string
  viewBoxHeight?: number
}

const WaveSvg: FC<WaveSvgProps> = ({ fill, className, style, svgPath, viewBoxHeight }) => {
  const [svgContent, setSvgContent] = useState<string>('')

  useEffect(() => {
    fetch(svgPath)
      .then(res => res.text())
      .then(svg => {
        // Parse the SVG and extract viewBox and path
        const parser = new DOMParser()
        const doc = parser.parseFromString(svg, 'image/svg+xml')
        const svgElement = doc.querySelector('svg')
        const pathElement = doc.querySelector('path')

        if (svgElement && pathElement) {
          const viewBox = svgElement.getAttribute('viewBox') || ''
          const d = pathElement.getAttribute('d') || ''
          setSvgContent(JSON.stringify({ viewBox, d }))
        }
      })
  }, [svgPath])

  if (!svgContent) return null

  const { viewBox, d } = JSON.parse(svgContent)

  // Override the last parameter (height) of viewBox if provided
  let finalViewBox = viewBox
  if (viewBoxHeight !== undefined) {
    const parts = viewBox.split(' ')
    if (parts.length === 4) {
      parts[3] = viewBoxHeight.toString()
      finalViewBox = parts.join(' ')
    }
  }

  return (
    <svg className={className} viewBox={finalViewBox} style={style}>
      <path fill={fill} d={d} />
    </svg>
  )
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
  console.log(variant)


  if (fromColor && toColor) {
    if (!fromColor.includes('#') && !fromColor.includes('rgb'))
      fromCol = tailwindClassToHex(fromColor)
    if (!toColor.includes('#') && !toColor.includes('rgb')) toCol = tailwindClassToHex(toColor)
  }

  let svgPath: string
  let className: string
  let viewBoxHeight: number | undefined

  switch (variant) {
    case 'simple':
      svgPath = '/waves/wave-simple.svg'
      className = 'w-full mt-[-2vw]'
      viewBoxHeight = 95 // Can be changed to adjust wave height
      break
    case 'standard':
      svgPath = '/waves/standard.svg'
      className = 'w-full mt-[-7vw]'
      viewBoxHeight = 300 // Can be changed to adjust wave height
      break
    default:
      svgPath = '/waves/standard.svg'
      className = 'w-full mt-[-7vw]'
      viewBoxHeight = 0
      break
  }

  const style = variant === 'standard' && waveInvert ? { transform: 'scaleX(-1)' } : undefined

  // console.log(variant, svgPath)

  return (
    <div className={`w-full flex flex-col`} style={{ backgroundColor: fromCol }}>
      {children}
      {fromCol && toCol && (
        <WaveSvg
          fill={toCol}
          className={className}
          style={style}
          svgPath={svgPath}
          viewBoxHeight={viewBoxHeight}
        />
      )}
    </div>
  )
}

export default Wavy
