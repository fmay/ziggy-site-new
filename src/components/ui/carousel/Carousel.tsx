'use client'

import React, { useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface CarouselProps {
  children: React.ReactNode
  gap?: number | string
  speed?: number
  dots?: boolean
  slidesToShow?: number
  slidesToScroll?: number
  arrows?: boolean
  autoplaySpeed?: number
  autoplay?: boolean
  easing?: string
  lazyLoad?: 'ondemand' | 'progressive'
  pauseOnHover?: boolean
  rows?: number
  swipeToSlide?: boolean
  touchMove?: boolean
  draggable?: boolean
  centerMode?: boolean
  centerPadding?: string
  infinite?: boolean
  enableTrackpadSwipe?: boolean
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  gap,
  speed,
  dots,
  slidesToShow,
  slidesToScroll,
  arrows,
  autoplaySpeed,
  autoplay,
  easing,
  lazyLoad,
  pauseOnHover,
  rows,
  swipeToSlide,
  touchMove,
  draggable,
  centerMode,
  centerPadding,
  infinite = false,
  enableTrackpadSwipe = false,
}) => {
  const sliderRef = useRef<Slider>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter out undefined values to avoid NaN errors in react-slick
  const settings = Object.fromEntries(
    Object.entries({
      speed,
      dots,
      slidesToShow,
      slidesToScroll,
      arrows,
      autoplaySpeed,
      autoplay,
      easing,
      lazyLoad,
      pauseOnHover,
      rows,
      swipeToSlide,
      touchMove,
      draggable,
      centerMode,
      centerPadding,
      infinite,
    }).filter(([_, value]) => value !== undefined),
  )

  // Setup native wheel event listener with passive: false to allow preventDefault
  useEffect(() => {
    if (!enableTrackpadSwipe || !containerRef.current || !sliderRef.current) return

    const container = containerRef.current
    const slider = sliderRef.current

    const handleWheel = (e: WheelEvent) => {
      // Detect horizontal scroll (trackpad swipe)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()

        if (e.deltaX > 0) {
          slider.slickNext()
        } else {
          slider.slickPrev()
        }
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [enableTrackpadSwipe])

  // Calculate half gap for left/right spacing
  const halfGap = gap ? (typeof gap === 'number' ? `${gap / 2}px` : `calc(${gap} / 2)`) : '0px'

  return (
    <div ref={containerRef} style={{ margin: `0 -${halfGap}` }}>
      <Slider ref={sliderRef} {...settings}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            style={{
              padding: `0 ${halfGap}`,
              boxSizing: 'border-box',
            }}>
            {child}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
