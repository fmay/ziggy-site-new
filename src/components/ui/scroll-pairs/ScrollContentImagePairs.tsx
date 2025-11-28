'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import styles from './ScrollContentImagePairs.module.scss'

export interface ContentImagePair {
  content: ReactNode
  image?: string
  scene?: ReactNode
  bgColor?: string
  scaleToFit?: boolean
}

interface ScrollContentImagePairsProps {
  contentImagePairs: ContentImagePair[]
}

const ScrollContentImagePairs = ({ contentImagePairs }: ScrollContentImagePairsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imagePosition, setImagePosition] = useState<'scrolling' | 'fixed' | 'scrolling-out'>(
    'scrolling',
  )
  const [fixedImageLeft, setFixedImageLeft] = useState(0)
  const [fixedImageWidth, setFixedImageWidth] = useState(0)
  const [scrollOutTop, setScrollOutTop] = useState(0)
  const [imageHeights, setImageHeights] = useState<number[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = contentRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setActiveIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    contentRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [contentImagePairs.length])

  useEffect(() => {
    const loadImageHeights = () => {
      const heights: number[] = []
      const containerWidth = rightColumnRef.current?.clientWidth || 0

      contentImagePairs.forEach((pair, index) => {
        if (pair.image && imageRefs.current[index]) {
          const img = imageRefs.current[index]
          if (img && img.complete && img.naturalWidth > 0) {
            const aspectRatio = img.naturalHeight / img.naturalWidth
            const calculatedHeight = containerWidth * aspectRatio
            heights[index] = calculatedHeight
          }
        }
      })

      if (heights.length > 0) {
        setImageHeights(heights)
      }
    }

    loadImageHeights()

    const handleResize = () => {
      loadImageHeights()
    }

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [contentImagePairs])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageContainerRef.current || !rightColumnRef.current) return

      const imageContainerRect = imageContainerRef.current.getBoundingClientRect()
      const firstContentRect = contentRefs.current[0]?.getBoundingClientRect()
      const lastContentRect =
        contentRefs.current[contentImagePairs.length - 1]?.getBoundingClientRect()
      const rightColumnRect = rightColumnRef.current.getBoundingClientRect()

      const viewportCenter = window.innerHeight / 2
      const imageCenter = imageContainerRect.top + imageContainerRect.height / 2

      // Store the position and width of the right column for fixed positioning
      setFixedImageLeft(rightColumnRect.left)
      setFixedImageWidth(rightColumnRect.width)

      // Determine the state based on scroll position with clear priority order
      let newPosition: 'scrolling' | 'fixed' | 'scrolling-out' = 'fixed'

      // PRIORITY 1: Check if we should be scrolling with the FIRST item
      // This handles both scrolling down initially and scrolling back up
      if (firstContentRect) {
        const firstContentCenter = firstContentRect.top + firstContentRect.height / 2

        // Scrolling mode if: first content center is below viewport center OR image hasn't reached center
        if (firstContentCenter > viewportCenter || imageCenter > viewportCenter) {
          newPosition = 'scrolling'
        }
      } else if (imageCenter > viewportCenter) {
        // Fallback if first content ref doesn't exist yet
        newPosition = 'scrolling'
      }

      // PRIORITY 2: Only check for scrolling out with LAST item if we're NOT scrolling with first item
      if (newPosition !== 'scrolling' && lastContentRect) {
        const lastContentCenter = lastContentRect.top + lastContentRect.height / 2

        // Add a small threshold to prevent flickering when transitioning between states
        const threshold = 20

        // Scrolling-out mode if: last content center has risen above viewport center (with threshold)
        if (lastContentCenter < viewportCenter - threshold) {
          newPosition = 'scrolling-out'

          // Calculate where the image should be positioned relative to the right column
          // when it transitions from fixed to scrolling out (only on first transition)
          if (imagePosition !== 'scrolling-out') {
            const rightColumnTop = rightColumnRect.top
            const currentImageTop = imageContainerRect.top
            const topRelativeToColumn = currentImageTop - rightColumnTop
            setScrollOutTop(topRelativeToColumn)
          }
        }
        // When scrolling back up, stay in scrolling-out until clearly back in fixed range
        else if (
          imagePosition === 'scrolling-out' &&
          lastContentCenter < viewportCenter + threshold
        ) {
          newPosition = 'scrolling-out'
        }
      }

      // PRIORITY 3: Default is 'fixed' (already set above)

      setImagePosition(newPosition)
    }

    const handleResize = () => {
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [contentImagePairs.length])

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Desktop Layout */}
      <div className={styles.desktopLayout}>
        {/* Left Column - Scrolling Content */}
        <div className={styles.leftColumn}>
          {contentImagePairs.map((pair, index) => (
            <div
              key={index}
              ref={el => {
                contentRefs.current[index] = el
              }}
              className={styles.contentItem}>
              <div className={styles.contentWrapper}>{pair.content}</div>
            </div>
          ))}
        </div>

        {/* Right Column - Fixed Images with Transitions */}
        <div ref={rightColumnRef} className={styles.rightColumn}>
          <div
            ref={imageContainerRef}
            className={`${styles.imageContainer} ${
              imagePosition === 'scrolling'
                ? styles.imageContainerScrolling
                : imagePosition === 'scrolling-out'
                  ? styles.imageContainerScrollingOut
                  : styles.imageContainerFixed
            }`}
            style={
              imagePosition === 'fixed'
                ? {
                    left: `${fixedImageLeft}px`,
                    width: `${fixedImageWidth}px`,
                  }
                : imagePosition === 'scrolling-out'
                  ? {
                      top: `${scrollOutTop}px`,
                    }
                  : {}
            }>
            <div
              className={styles.imageWrapper}
              style={
                imageHeights[activeIndex] && contentImagePairs[activeIndex]?.image
                  ? { height: `${imageHeights[activeIndex]}px` }
                  : undefined
              }>
              {contentImagePairs.map((pair, index) => (
                <div
                  key={index}
                  className={`${styles.imageSlide} ${
                    index === activeIndex ? styles.imageSlideActive : styles.imageSlideInactive
                  }`}
                  style={pair.bgColor ? { backgroundColor: pair.bgColor } : undefined}>
                  {pair.scene ? (
                    <div className={pair.scaleToFit ? styles.sceneScaleToFit : undefined}>
                      {pair.scene}
                    </div>
                  ) : pair.image ? (
                    <img
                      ref={el => {
                        imageRefs.current[index] = el
                      }}
                      src={pair.image}
                      alt={`Content ${index + 1}`}
                      className={styles.image}
                      onLoad={() => {
                        const heights = [...imageHeights]
                        const containerWidth = rightColumnRef.current?.clientWidth || 0
                        const img = imageRefs.current[index]
                        if (img && img.naturalWidth > 0) {
                          const aspectRatio = img.naturalHeight / img.naturalWidth
                          heights[index] = containerWidth * aspectRatio
                          setImageHeights(heights)
                        }
                      }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked content and images */}
      <div className={styles.mobileLayout}>
        {contentImagePairs.map((pair, index) => (
          <div key={index} className={styles.mobilePair}>
            <div className={`prose ${styles.mobileContent}`}>{pair.content}</div>
            <div
              className={styles.mobileImageWrapper}
              style={pair.bgColor ? { backgroundColor: pair.bgColor } : undefined}>
              {pair.scene ? (
                <div className={pair.scaleToFit ? styles.sceneScaleToFit : undefined}>
                  {pair.scene}
                </div>
              ) : pair.image ? (
                <img src={pair.image} alt={`Content ${index + 1}`} className={styles.mobileImage} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollContentImagePairs
