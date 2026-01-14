'use client'

import { FC, useState, useEffect, useRef } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { Feature, ColumnConfig } from './pricing-table'
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
      <table className={styles.pricingTable}>
        <thead>
          <tr>
            <th className={styles.featureHeader}>Features</th>
            {columns.map((column) => (
              <th key={column.title} className={styles.columnHeader}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.name} className={styles.featureRow}>
              <td className={styles.featureCell}>
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
              </td>
              {columns.map((column) => (
                <td key={`${feature.name}-${column.title}`} className={styles.valueCell}>
                  {column.values[feature.name] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className={styles.footerCell}></td>
            {columns.map((column) => (
              <td key={`cta-${column.title}`} className={styles.ctaCell}>
                <Link href={column.contactLink || '/contact'} className={styles.ctaButton}>
                  Contact Us
                </Link>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>

      {tooltip && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
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
            maxWidth: 400,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  )
}

export default PricingTableDesktop
