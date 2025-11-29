'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './cta.module.scss'

interface CTAProps {
  label: string
  style?: 'primary' | 'secondary'
  href: string
  className?: string
}

const CTA: FC<CTAProps> = ({ label, style, href, className = '' }) => {
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
    <div className={`${styles.button} className`}>
      {href?.includes('http') ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styleClassName}
        >
          {label}
        </a>
      ) : (
        <Link href={href || '#'} className={styleClassName}>
          {label}
        </Link>
      )}
    </div>
  )
}

export default CTA
