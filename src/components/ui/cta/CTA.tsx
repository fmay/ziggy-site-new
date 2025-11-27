'use client'

import { FC, useState, useEffect } from 'react'
import styles from './cta.module.scss'

interface CTAProps {
  label: string
  style?: 'primary' | 'secondary'
  className?: string
}

const CTA: FC<CTAProps> = ({ label, style, className = '' }) => {
  const [styleClassName, setStyleClassName] = useState(styles.primaryButton)

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
    <div>
      <button className={`${styleClassName} ${className}`}>{label}</button>
    </div>
  )
}

export default CTA
