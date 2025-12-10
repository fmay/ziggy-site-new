/**
 * Breakpoint values matching Tailwind CSS configuration.
 * Keep these values in sync with tailwind.config.ts
 *
 * @see tailwind.config.ts
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 990,    // Custom override in Tailwind config
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export type BreakpointKey = keyof typeof BREAKPOINTS

/**
 * Get pixel value for a specific breakpoint
 */
export function getBreakpointValue(key: BreakpointKey): number {
  return BREAKPOINTS[key]
}

/**
 * Generate a min-width media query string for a breakpoint.
 * Matches Tailwind's mobile-first approach.
 *
 * @param key - The breakpoint key (sm, md, lg, xl, 2xl)
 * @returns Media query string like "(min-width: 640px)"
 *
 * @example
 * ```typescript
 * const smQuery = getBreakpointQuery('sm')
 * // Returns: "(min-width: 640px)"
 * ```
 */
export function getBreakpointQuery(key: BreakpointKey): string {
  return `(min-width: ${BREAKPOINTS[key]}px)`
}
