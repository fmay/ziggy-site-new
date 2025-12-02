'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-dark-text border p-8 pt-12 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base">
          We use cookies to ensure you get the best experience on our website.{' '}
          <a href="/cookies" className="underline hover:text-gray-300">
            Learn more
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-header-footer text-white px-6 py-2 rounded hover:bg-gray-100 transition-colors whitespace-nowrap font-medium"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
