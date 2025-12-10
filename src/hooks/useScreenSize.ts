'use client'

import { useState, useEffect } from 'react'
import { getBreakpointQuery } from '@/constants/breakpoints'

/**
 * Return type for useScreenSize hook
 */
export interface ScreenSize {
  /**
   * True when viewport width is >= 640px (sm breakpoint).
   * Matches Tailwind's sm: prefix behavior.
   */
  isSm: boolean

  /**
   * True when viewport width is >= 1024px (lg breakpoint).
   * Matches Tailwind's lg: prefix behavior.
   */
  isLg: boolean
}

/**
 * React hook to detect if the current viewport matches Tailwind breakpoints.
 *
 * Returns boolean flags for sm (640px) and lg (1024px) breakpoints using
 * mobile-first approach (min-width queries) to match Tailwind CSS behavior.
 *
 * @returns {ScreenSize} Object with isSm and isLg boolean flags
 *
 * @example
 * ```tsx
 * function ResponsiveComponent() {
 *   const { isSm, isLg } = useScreenSize()
 *
 *   return (
 *     <div>
 *       {!isLg && <MobileLayout />}
 *       {isLg && <DesktopLayout />}
 *     </div>
 *   )
 * }
 * ```
 *
 * @remarks
 * - SSR-safe: Returns false values during server render and initial client render
 * - Uses matchMedia API for accurate, native breakpoint detection
 * - Resize events are throttled with requestAnimationFrame for optimal performance
 * - Automatically cleans up event listeners on component unmount
 * - Matches Tailwind's mobile-first min-width media query approach
 */
export function useScreenSize(): ScreenSize {
  // SSR-safe initial state: assume mobile/false for all breakpoints
  // This prevents hydration mismatches since server and client start with same values
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isSm: false,
    isLg: false,
  })

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      return
    }

    // Create media query matchers using native matchMedia API
    const smQuery = window.matchMedia(getBreakpointQuery('sm'))
    const lgQuery = window.matchMedia(getBreakpointQuery('lg'))

    // Function to update state based on current viewport
    const updateScreenSize = () => {
      setScreenSize({
        isSm: smQuery.matches,
        isLg: lgQuery.matches,
      })
    }

    // Set initial values after mount (hydration-safe)
    updateScreenSize()

    // Throttle resize events with requestAnimationFrame for performance
    let rafId: number | null = null

    const handleResize = () => {
      // Cancel any pending animation frame
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }

      // Schedule update on next animation frame (~60fps)
      rafId = requestAnimationFrame(() => {
        updateScreenSize()
        rafId = null
      })
    }

    // Listen to resize events with passive flag for better scroll performance
    window.addEventListener('resize', handleResize, { passive: true })

    // Cleanup function
    return () => {
      // Cancel any pending animation frame to prevent memory leaks
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }

      // Remove event listener
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array - only run once on mount

  return screenSize
}
