'use client'

import React from 'react'
import type { FC, ReactNode } from 'react'

interface ImageStackProps {
  items: ReactNode[]
  gap?: string
  offset?: string
  className?: string
}

const ImageStack: FC<ImageStackProps> = ({
  items,
  gap = 'gap-8',
  offset = 'lg:mt-[130px]',
  className = ''
}) => {
  // Split items into odd and even indices
  const leftColumn = items.filter((_, index) => index % 2 === 0) // indices: 0, 2, 4...
  const rightColumn = items.filter((_, index) => index % 2 !== 0) // indices: 1, 3, 5...

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${gap} ${className}`}>
      {/* Left column - offset on desktop */}
      <div className={`flex flex-col ${gap} ${offset}`}>
        {leftColumn}
      </div>

      {/* Right column */}
      <div className={`flex flex-col ${gap}`}>
        {rightColumn}
      </div>
    </div>
  )
}

export default ImageStack
