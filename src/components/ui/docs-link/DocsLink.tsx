'use client'

import { FC, ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { LuBookText } from 'react-icons/lu'
import DocPopup from '../doc-popup/DocPopup'
import styles from './docslink.module.scss'

interface DocsLinkProps {
  href: string
  children?: ReactNode
  style?: 'primary' | 'secondary'
  className?: string
}

const DocsLink: FC<DocsLinkProps> = ({ href, children, style, className = '' }) => {
  const [styleClassName, setStyleClassName] = useState(styles.primaryDocsLink)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    switch (style) {
      case 'primary':
        setStyleClassName(styles.primaryDocsLink)
        break
      case 'secondary':
        setStyleClassName(styles.secondaryDocsLink)
        break
      default:
        setStyleClassName(styles.primaryDocsLink)
        break
    }
  }, [style])

  return (
    <>
      {href?.includes('http') ? (
        <>
          <button
            onClick={() => setIsPopupOpen(true)}
            className={`${styleClassName} ${styles.link} ${className} !px-4 !py-2 `}
          >
            <LuBookText />
            <span>{children || 'Learn more'}</span>
          </button>
          <DocPopup
            url={href}
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        </>
      ) : (
        <Link
          href={href || '#'}
          className={`${styleClassName} ${styles.link} ${className}`}
        >
          <LuBookText />
          <span>{children}</span>
        </Link>
      )}
    </>
  )
}

export default DocsLink
