'use client'

import React from 'react'
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
}) => {
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
      infinite: true,
    }).filter(([_, value]) => value !== undefined),
  )

  // Calculate half gap for left/right spacing
  const halfGap = gap ? (typeof gap === 'number' ? `${gap / 2}px` : `calc(${gap} / 2)`) : '0px'

  return (
    <div style={{ margin: `0 -${halfGap}` }}>
      <Slider {...settings}>
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ padding: `0 ${halfGap}`, boxSizing: 'border-box' }}>
            {child}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
