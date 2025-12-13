'use client'

import { FC, ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { LuBookText } from 'react-icons/lu'
import styles from './docslink.module.scss'

interface DocsLinkProps {
  href: string
  children: ReactNode
  style?: 'primary' | 'secondary'
  className?: string
}

const DocsLink: FC<DocsLinkProps> = ({ href, children, style, className = '' }) => {
  const [styleClassName, setStyleClassName] = useState(styles.primaryDocsLink)

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
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styleClassName} ${styles.link} ${className} !px-4 !py-2 `}
        >
          <LuBookText />
          <span>{children}</span>
        </a>
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
