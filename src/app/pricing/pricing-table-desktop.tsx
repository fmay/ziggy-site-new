'use client'

import { FC, useState, useEffect, useRef } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { Feature, ColumnConfig, PricingConfig } from './pricing-table'
import styles from './pricing-table.module.scss'
import Link from 'next/link'

interface PricingTableDesktopProps {
  features: Feature[]
  columns: ColumnConfig[]
}

interface TooltipState {
  name: string
  text: string
  x: number
  y: number
}

// Format price with locale-specific thousand separators
const formatPrice = (amount: number, currency: 'usd' | 'eur' | 'gbp'): string => {
  const localeMap = {
    usd: 'en-US',
    eur: 'de-DE',
    gbp: 'en-GB',
  }
  const symbolMap = {
    usd: '$',
    eur: '€',
    gbp: '£',
  }
  const formatted = amount.toLocaleString(localeMap[currency])
  return `${symbolMap[currency]}${formatted}`
}

const PricingTableDesktop: FC<PricingTableDesktopProps> = ({ features, columns }) => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tooltipRef.current && tooltip) {
      const el = tooltipRef.current
      const computed = window.getComputedStyle(el)
      console.log('=== TOOLTIP DEBUG ===')
      console.log('Text content:', tooltip.text)
      console.log('Text length:', tooltip.text.length)
      console.log('offsetWidth:', el.offsetWidth)
      console.log('clientWidth:', el.clientWidth)
      console.log('computed width:', computed.width)
      console.log('computed maxWidth:', computed.maxWidth)
      console.log('computed display:', computed.display)
      console.log('computed whiteSpace:', computed.whiteSpace)
      console.log('All computed styles:', computed)
    }
  }, [tooltip])

  const handleMouseEnter = (feature: Feature, e: React.MouseEvent) => {
    if (feature.hasInfo) {
      const rect = e.currentTarget.getBoundingClientRect()
      setTooltip({
        name: feature.name,
        text: feature.infoText,
        x: rect.left,
        y: rect.top,
      })
    }
  }

  const handleMouseLeave = () => {
    setTooltip(null)
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.pricingGrid}>
        {/* Header row */}
        <div className={styles.gridRow}>
          <div className={styles.featureHeader}></div>
          {columns.map((column) => (
            <div key={column.title} className={styles.columnHeader}>
              {column.title}
            </div>
          ))}
        </div>

        {/* Feature rows */}
        {features.map((feature) => (
          <div key={feature.name} className={styles.gridRow}>
            <div className={styles.featureCell}>
              <span className={styles.featureName}>{feature.name}</span>
              {feature.hasInfo && (
                <span
                  className={styles.infoIcon}
                  onMouseEnter={(e) => handleMouseEnter(feature, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <IoIosInformationCircleOutline />
                </span>
              )}
            </div>
            {columns.map((column) => (
              <div key={`${feature.name}-${column.title}`} className={styles.valueCell}>
                {column.values[feature.name] || '-'}
              </div>
            ))}
          </div>
        ))}

        {/* Pricing row */}
        <div className={styles.gridRow}>
          <div className={styles.featureCell}>
            <span className={styles.featureName}>Price</span>
          </div>
          {columns.map((column) => (
            <div key={`price-${column.title}`} className={styles.valueCell}>
              <div className={styles.pricingList}>
                <div>{formatPrice(column.pricing.usd, 'usd')}</div>
                <div>{formatPrice(column.pricing.eur, 'eur')}</div>
                <div>{formatPrice(column.pricing.gbp, 'gbp')}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className={styles.gridRow}>
          <div className={styles.footerCell}></div>
          {columns.map((column) => (
            <div key={`cta-${column.title}`} className={styles.ctaCell}>
              <Link href={column.contactLink || '/contact'} className={styles.ctaButton}>
                Contact Us
              </Link>
            </div>
          ))}
        </div>
      </div>

      {tooltip && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
            display: 'inline-block',
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translateY(-100%) translateY(-8px)',
            backgroundColor: '#111827',
            color: 'white',
            fontSize: '0.75rem',
            lineHeight: 1.4,
            borderRadius: '0.5rem',
            padding: '0.5rem 0.75rem',
            zIndex: 50,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            maxWidth: 300,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  )
}

export default PricingTableDesktop
