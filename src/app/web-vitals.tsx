'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }

    // PLACEHOLDER: Send to analytics in production
    // Example integrations:
    // - Google Analytics: gtag('event', metric.name, { value: metric.value })
    // - Vercel Analytics: import { sendMetric } from '@vercel/analytics'
    // - Custom endpoint: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(metric) })
  })

  return null
}
