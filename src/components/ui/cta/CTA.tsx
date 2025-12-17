'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.includes('#')) {
      e.preventDefault()
      const [path, hash] = href.split('#')

      router.push(href)

      const scrollToElement = () => {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }

      // Wait for route change and page render
      setTimeout(() => {
        // Try scrolling immediately
        scrollToElement()

        // Then wait for images and layout to settle, and scroll again
        setTimeout(() => {
          scrollToElement()
        }, 500)
      }, 100)
    }
  }

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
          onClick={handleClick}
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
