'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './cta.module.scss'

interface CTAProps {
  label: string
  style?: 'primary' | 'secondary'
  href: string
  className?: string
  noBottomMargin?: boolean
  icon?: React.ReactNode
}

const CTA: FC<CTAProps> = ({ label, style, href, className = '', noBottomMargin, icon }) => {
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

  return (
    <>
      {href?.includes('http') ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styleClassName} ${styles.button} my-12 ${noBottomMargin ? 'mb-0' : ''} ${className} ${icon ? '!inline-flex items-center gap-2' : ''}`}
        >
          {icon && icon}
          {label}
        </a>
      ) : (
        <Link
          href={href || '#'}
          className={`${styleClassName} ${styles.button} my-12 ${noBottomMargin ? 'mb-0' : ''} ${className} ${icon ? '!inline-flex items-center gap-2' : ''}`}
        >
          {icon && icon}
          {label}
        </Link>
      )}
    </>
  )
}

export default CTA
