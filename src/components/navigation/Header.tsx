'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { navigationConfig, NavItemWithDropdown } from '@/components/navigation/navigation'
import DesktopNavItem from './DesktopNavItem'
import MobileNavItem from './MobileNavItem'
import DesktopDropdownContainer from './DesktopDropdownContainer'
import styles from './Header.module.scss'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownContent, setDropdownContent] = useState<NavItemWithDropdown | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null)
  const [dropdownPosition, setDropdownPosition] = useState<number>(0)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (label: string, item: NavItemWithDropdown, element: HTMLElement) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    // Calculate position of the menu item
    const rect = element.getBoundingClientRect()
    const navContainer = element.closest('nav')
    if (navContainer) {
      const navRect = navContainer.getBoundingClientRect()
      // Offset slightly left to account for the chevron icon (~8px for icon + 4px for margin)
      setDropdownPosition(rect.left - navRect.left + rect.width / 2 - 40)
    }

    const isSwitch = activeDropdown && activeDropdown !== label && dropdownContent

    if (isSwitch) {
      // Switching between dropdowns - crossfade content
      setIsTransitioning(true)

      // Wait for old content to fade out completely
      setTimeout(() => {
        setDropdownContent(item)
        setActiveDropdown(label)
        // Small delay before fading in new content
        setTimeout(() => {
          setIsTransitioning(false)
        }, 20)
      }, 100)
    } else {
      // Opening fresh or staying on same dropdown
      setActiveDropdown(label)
      setDropdownContent(item)
      setIsTransitioning(false)
    }
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setDropdownContent(null)
    }, 150)
  }

  const handleClearDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDropdown(null)
    setDropdownContent(null)
  }

  const toggleMobileItem = (label: string) => {
    setMobileExpandedItem(mobileExpandedItem === label ? null : label)
  }

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    },
    [],
  )

  return (
    <>
      {/* Overlay backdrop when dropdown is open */}
      {activeDropdown && <div className={styles.overlay} onMouseEnter={handleMouseLeave} />}

      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navContent}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}></Link>
            </div>

            {/* Desktop Navigation */}
            <div className={styles.desktopNav} onMouseLeave={handleMouseLeave}>
              {navigationConfig.items.map((item, index) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  index={index}
                  activeDropdown={activeDropdown}
                  onMouseEnter={handleMouseEnter}
                  onClearDropdown={handleClearDropdown}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <Link href={navigationConfig.cta.contact.href} className={styles.ctaButton}>
                {navigationConfig.cta.contact.label}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className={styles.mobileMenuButton}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={styles.menuToggle}
                aria-label="Toggle menu">
                {mobileMenuOpen ? (
                  <svg
                    className={styles.menuIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                    xf
                  </svg>
                ) : (
                  <svg
                    className={styles.menuIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Shared Dropdown Container */}
          <DesktopDropdownContainer
            activeDropdown={activeDropdown}
            dropdownContent={dropdownContent}
            isTransitioning={isTransitioning}
            dropdownPosition={dropdownPosition}
            closeTimeoutRef={closeTimeoutRef}
            onMouseLeave={handleMouseLeave}
          />

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={styles.mobileNav}>
              <div className={styles.mobileNavContent}>
                {navigationConfig.items.map(item => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    mobileExpandedItem={mobileExpandedItem}
                    toggleMobileItem={toggleMobileItem}
                    setMobileMenuOpen={setMobileMenuOpen}
                  />
                ))}
                <Link
                  href={navigationConfig.cta.bookDemo!.href}
                  className={styles.mobileCtaButton}
                  onClick={() => setMobileMenuOpen(false)}>
                  {navigationConfig.cta.bookDemo!.label}
                </Link>
                <Link
                  href={navigationConfig.cta.contact.href}
                  className={styles.mobileCtaButton}
                  onClick={() => setMobileMenuOpen(false)}>
                  {navigationConfig.cta.contact.label}
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header
