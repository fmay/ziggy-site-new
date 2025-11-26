'use client'

import React, { ReactNode } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import styles from './StackCard.module.scss'

interface StackCardProps {
  /** Primary gradient color (e.g., '#FFA500') */
  primaryColor?: string
  /** Secondary gradient color (e.g., '#FFD848') */
  secondaryColor?: string
  /** Icon to display in the badge */
  icon?: ReactNode
  /** Badge label text */
  badgeLabel?: string
  /** Main heading text */
  title: string
  /** Description text */
  description: string
  /** CTA link text */
  ctaText: string
  /** CTA link href */
  ctaHref: string
  /** Open CTA link in new tab (reuses existing tab if domain matches) */
  ctaNewTab?: boolean
  /** Path to image in public folder (e.g., '/images/dashboard.png') */
  graphic?: string
  /** Alt text for the graphic image */
  graphicAlt?: string
  /** Optional className for additional styling */
  className?: string
}

const StackCard: FC<StackCardProps> = ({
  primaryColor = '#FFA500',
  secondaryColor = '#FFD848',
  icon,
  badgeLabel,
  title,
  description,
  ctaText,
  ctaHref,
  ctaNewTab = false,
  graphic,
  graphicAlt = '',
  className = ''
}) => {
  return (
    <div
      className={`${styles.stackCard} ${className}`}
      style={{
        ['--productFeaturePrimaryAccentColor' as string]: primaryColor,
        ['--productFeatureSecondaryAccentColor' as string]: secondaryColor,
      }}
    >

      {/* Graphic layer */}
      {graphic && (
        <div className={styles.graphicLayer}>
          <div className={styles.graphicContainer}>
            {/* Gradient overlay - only visible on hover */}
            <div
              className={styles.gradientOverlay}
              style={{
                background: `radial-gradient(circle at 50% 50%, ${primaryColor}15 0%, ${secondaryColor}15 50%, transparent 100%)`
              }}
            />
            <Image
              src={graphic}
              alt={graphicAlt}
              width={800}
              height={500}
              className={styles.graphicImage}
            />
          </div>
        </div>
      )}

      {/* Content layer */}
      <div className={styles.contentLayer}>
        {/* Product Badge */}
        {badgeLabel && (
          <div className={styles.badge}>
            {icon && (
              <div className={styles.badgeIcon}>
                {icon}
              </div>
            )}
            <div className={styles.badgeLabel}>
              <span>{badgeLabel}</span>
            </div>
          </div>
        )}

        {/* Title */}
        <h2 className={styles.title}>
          {title}
        </h2>

        {/* Description */}
        <p className={styles.description}>
          {description}
        </p>

        {/* CTA Link - Fixed height, hidden by default */}
        <div className={styles.ctaWrapper}>
          <a
            href={ctaHref}
            className={styles.ctaLink}
            {...(ctaNewTab && {
              target: '_blank',
              rel: 'noopener noreferrer'
            })}
          >
            {ctaText} {'>'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default StackCard
