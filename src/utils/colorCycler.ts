import { DefaultColorCycle } from '@/constants/default-colors'

/**
 * Creates a color cycling function that cycles through an array of colors
 * @param colors - Array of color strings to cycle through (defaults to DefaultColorCycle)
 * @returns A function that returns the next color in the cycle each time it's called
 */
export function createColorCycler(colors: string[] = DefaultColorCycle) {
  let index = 0

  return function getNextColor(): string {
    const color = colors[index % colors.length]
    index++
    return color
  }
}
