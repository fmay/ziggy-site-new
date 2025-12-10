'use client'

import React from 'react'
import type { FC, ReactNode, CSSProperties } from 'react'
import styles from './ImageStack.module.scss'

interface ImageStackProps {
  items: ReactNode[]
  gap?: string
  offset?: string
  className?: string
}

const ImageStack: FC<ImageStackProps> = ({
  items,
  gap = '2rem',
  offset = '130px',
  className = ''
}) => {
  // Split items into odd and even indices
  const leftColumn = items.filter((_, index) => index % 2 === 0) // indices: 0, 2, 4...
  const rightColumn = items.filter((_, index) => index % 2 !== 0) // indices: 1, 3, 5...

  const cssVars = {
    '--gap': gap,
    '--offset': offset
  } as CSSProperties

  return (
    <div className={`${styles.container} ${className}`} style={cssVars}>
      {/* Left column - offset on desktop */}
      <div className={styles.columnLeft}>
        {leftColumn.map((item, index) => (
          <React.Fragment key={index * 2}>{item}</React.Fragment>
        ))}
      </div>

      {/* Right column */}
      <div className={styles.column}>
        {rightColumn.map((item, index) => (
          <React.Fragment key={index * 2 + 1}>{item}</React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ImageStack
