'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './cta.module.scss'

interface CTAProps {
  label: string
  style?: 'primary' | 'secondary'
  href: string
  className?: string
  marginY?: number
}

const CTA: FC<CTAProps> = ({ label, style, href, className = '', marginY }) => {
  const [styleClassName, setStyleClassName] = useState(styles.primaryCTAButton)

  useEffect(() => {
    switch (style) {
      case 'primary':
        setStyleClassName(styles.primaryCTAButton)
        break
      case 'secondary':
        setStyleClassName(styles.secondaryCTAButton)
        break
      default:
        setStyleClassName(styles.primaryCTAButton)
        break
    }
  }, [style])

  const marginStyle = marginY !== undefined ? { marginTop: `${marginY}rem`, marginBottom: `${marginY}rem` } : {}

  return (
    <>
      {href?.includes('http') ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styleClassName} ${marginY === undefined ? styles.button : ''} ${className}`}
          style={marginStyle}
        >
          {label}
        </a>
      ) : (
        <Link
          href={href || '#'}
          className={`${styleClassName} ${marginY === undefined ? styles.button : ''} ${className}`}
          style={marginStyle}
        >
          {label}
        </Link>
      )}
    </>
  )
}

export default CTA
