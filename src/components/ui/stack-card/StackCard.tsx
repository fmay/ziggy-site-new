'use client'

import React, { ReactNode } from 'react'
import type { FC } from 'react'
import Image from 'next/image'

interface StackCardProps {
  /** Primary gradient color (e.g., '#FFA500') */
  primaryColor?: string
  /** Secondary gradient color (e.g., '#FFD848') */
  secondaryColor?: string
  /** Icon to display in the badge */
  icon?: ReactNode
  /** Badge label text */
  badgeLabel: string
  /** Main heading text */
  title: string
  /** Description text */
  description: string
  /** CTA link text */
  ctaText: string
  /** CTA link href */
  ctaHref: string
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
  graphic,
  graphicAlt = '',
  className = ''
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg shadow-md bg-white ${className}`}
      style={{
        ['--productFeaturePrimaryAccentColor' as string]: primaryColor,
        ['--productFeatureSecondaryAccentColor' as string]: secondaryColor,
      }}
    >

      {/* Graphic layer */}
      {graphic && (
        <div className="relative z-10 px-8 pt-8">
          <div className="relative h-[300px] overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 group-hover:h-[240px]">
            {/* Gradient overlay - only visible on hover */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${primaryColor}15 0%, ${secondaryColor}15 50%, transparent 100%)`
              }}
            />
            <Image
              src={graphic}
              alt={graphicAlt}
              width={800}
              height={500}
              className="relative h-full w-full object-cover object-top"
            />
          </div>
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-20 p-8">
        {/* Product Badge */}
        <div className="mb-4 flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 shadow-sm">
              {icon}
            </div>
          )}
          <div className="rounded-md bg-white/90 px-3 py-1.5 shadow-sm">
            <span className="text-sm font-medium text-slate-800">{badgeLabel}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-3xl font-semibold text-slate-900 lg:text-4xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mb-0 text-lg text-slate-700 lg:text-xl">
          {description}
        </p>

        {/* CTA Link - Fixed height, hidden by default */}
        <div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-[60px]">
          <a
            href={ctaHref}
            className="mt-4 inline-flex items-center gap-2 text-base font-medium text-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:gap-3 lg:text-lg"
          >
            {ctaText}
            <svg
              className="transition-transform duration-300"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <g fillRule="evenodd">
                <path d="M0 5h7" />
                <path d="M1 1l4 4-4 4" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default StackCard
