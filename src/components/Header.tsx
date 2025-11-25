'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navigationConfig } from '@/config/navigation'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-stripe-navy">
              Ziggy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationConfig.desktop.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stripe-navy hover:text-stripe-purple transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={navigationConfig.cta.contact.href}
              className="text-stripe-navy hover:text-stripe-purple transition-colors duration-200"
            >
              {navigationConfig.cta.contact.label}
            </Link>
            <Link
              href={navigationConfig.cta.signin.href}
              className="px-5 py-2 rounded-full bg-stripe-purple text-white hover:opacity-90 transition-opacity duration-200"
            >
              {navigationConfig.cta.signin.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stripe-navy p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navigationConfig.mobile.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-stripe-navy hover:text-stripe-purple transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={navigationConfig.cta.signin.href}
                className="px-5 py-2 rounded-full bg-stripe-purple text-white hover:opacity-90 transition-opacity duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navigationConfig.cta.signin.label}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
