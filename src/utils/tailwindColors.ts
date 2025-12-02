import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

/**
 * Converts a Tailwind color class (e.g., 'bg-red-50' or 'red-50') to its hex value
 * @param colorClass - Tailwind color class like 'bg-red-50', 'text-blue-500', 'red-50', or custom color name
 * @returns Hex color value or the original string if not found
 */
export function tailwindClassToHex(colorClass: string): string {
  // Handle direct color-shade format (e.g., 'red-50')
  const directMatch = colorClass.match(/^(\w+)-(\d+)$/)
  if (directMatch) {
    const [, color, shade] = directMatch
    const colorValue = (fullConfig.theme?.colors as any)?.[color]?.[shade]
    if (colorValue) return colorValue
  }

  // Handle bg-* classes with shade
  const bgMatch = colorClass.match(/^bg-(\w+)-(\d+)$/)
  if (bgMatch) {
    const [, color, shade] = bgMatch
    const colorValue = (fullConfig.theme?.colors as any)?.[color]?.[shade]
    if (colorValue) return colorValue
  }

  // Handle bg-* classes without shade (custom colors)
  const bgCustomMatch = colorClass.match(/^bg-(.+)$/)
  if (bgCustomMatch) {
    const [, color] = bgCustomMatch
    const colorValue = (fullConfig.theme?.colors as any)?.[color]
    if (typeof colorValue === 'string') return colorValue
  }

  // Handle text-* classes with shade
  const textMatch = colorClass.match(/^text-(\w+)-(\d+)$/)
  if (textMatch) {
    const [, color, shade] = textMatch
    const colorValue = (fullConfig.theme?.colors as any)?.[color]?.[shade]
    if (colorValue) return colorValue
  }

  // Handle text-* classes without shade (custom colors)
  const textCustomMatch = colorClass.match(/^text-(.+)$/)
  if (textCustomMatch) {
    const [, color] = textCustomMatch
    const colorValue = (fullConfig.theme?.colors as any)?.[color]
    if (typeof colorValue === 'string') return colorValue
  }

  // Handle direct custom color name (e.g., 'stripe-navy')
  const customColorValue = (fullConfig.theme?.colors as any)?.[colorClass]
  if (typeof customColorValue === 'string') return customColorValue

  // If it's already a hex/rgb value, return as-is
  return colorClass
}
