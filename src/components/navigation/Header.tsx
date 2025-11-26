'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { navigationConfig, NavItemWithDropdown } from '@/config/navigation'
import DesktopNavItem from './DesktopNavItem'
import MobileNavItem from './MobileNavItem'
import DropdownNavItem from './DropdownNavItem'

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
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-stripe-navy/5 z-40 transition-opacity duration-[250ms] ease-out"
          onMouseEnter={handleMouseLeave}
        />
      )}

      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stripe-navy">
                Ziggy
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center" onMouseLeave={handleMouseLeave}>
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
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href={navigationConfig.cta.contact.href}
                className="px-5 py-2 rounded-full bg-stripe-purple text-white hover:opacity-90 transition-opacity duration-200">
                {navigationConfig.cta.contact.label}
              </Link>
              {/*<Link*/}
              {/*  href={navigationConfig.cta.signin.href}*/}
              {/*  className="px-5 py-2 rounded-full bg-stripe-purple text-white hover:opacity-90 transition-opacity duration-200"*/}
              {/*>*/}
              {/*  {navigationConfig.cta.signin.label}*/}
              {/*</Link>*/}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stripe-navy p-2"
                aria-label="Toggle menu">
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          {activeDropdown && dropdownContent?.dropdown && (
            <div
              className="hidden md:block absolute left-0 right-0 top-full"
              style={{ paddingTop: '12px' }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = null
                }
              }}
              onMouseLeave={handleMouseLeave}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className="relative bg-white rounded-lg shadow-xl border border-gray-100 py-4 inline-block min-w-[280px] transition-all duration-300 ease-out"
                  style={{
                    marginLeft: `${dropdownPosition}px`,
                    transform: 'translateX(-50%)',
                  }}>
                  {/* Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

                  <div
                    className={`transition-opacity duration-400 relative flex gap-8 ${
                      isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}>
                    {dropdownContent.dropdown.sections.map((section, sectionIdx) => (
                      <div key={sectionIdx} className="flex-shrink-0">
                        {section.title && (
                          <div className="px-4 mb-2">
                            <h3 className="text-xs font-semibold text-stripe-gray uppercase tracking-wide">
                              {section.title}
                            </h3>
                          </div>
                        )}
                        <div className="px-2">
                          {section.items.map(subItem => (
                            <DropdownNavItem key={subItem.label} subItem={subItem} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
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
                  href={navigationConfig.cta.signin.href}
                  className="px-5 py-2 rounded-full bg-stripe-purple text-white hover:opacity-90 transition-opacity duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}>
                  {navigationConfig.cta.signin.label}
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
