'use client'

import { FC, useEffect, useState } from 'react'
import PricingTableDesktop from './pricing-table-desktop'
import PricingTableMobile from './pricing-table-mobile'

// Types for feature configuration
export interface FeatureWithInfo {
  name: string
  hasInfo: true
  infoText: string
}

export interface FeatureWithoutInfo {
  name: string
  hasInfo: false
}

export type Feature = FeatureWithInfo | FeatureWithoutInfo

// Type for column configuration
export interface ColumnConfig {
  title: string
  values: Record<string, string>
  contactLink?: string
}

// Features configuration
export const features: Feature[] = [
  { name: 'Users', hasInfo: false },
  { name: 'Flows', hasInfo: false },
  { name: 'Hosting', hasInfo: true, infoText: 'Ziggy always runs in a private instance. For Enterprise and Integration Partner, you have the choice between Ziggy managed infrastructure or your own.' },
  { name: 'Organizations', hasInfo: true, infoText: 'Only the Integration Partners supports multiple organizations' },
  { name: 'Multi-tenant', hasInfo: false },
  { name: 'Price', hasInfo: false },
]

// Column configurations
export const columns: ColumnConfig[] = [
  {
    title: 'Starter',
    values: {
      Users: '1',
      Flows: 'Up to 3',
      Hosting: 'Private Ziggy managed',
      Organizations: '1',
      'Multi-tenant': 'No',
      Price: '3000',
    },
    contactLink: '/contact',
  },
  {
    title: 'Enterprise',
    values: {
      Users: 'Unlimited',
      Flows: 'Unlimited',
      Hosting: 'Private managed or your own Infrastructure',
      Organizations: '1',
      'Multi-tenant': 'No',
      Price: '12000',
    },
    contactLink: '/contact',
  },
  {
    title: 'Integration Partner',
    values: {
      Users: '3 per Organization',
      Flows: '5 per Organization',
      Hosting: 'Private managed or your own Infrastructure',
      Organizations: '10 included',
      'Multi-tenant': 'Yes',
      Price: '6000',
    },
    contactLink: '/contact',
  },
]

interface PricingTableProps {}

const PricingTable: FC<PricingTableProps> = ({}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return <PricingTableMobile features={features} columns={columns} />
  }

  return <PricingTableDesktop features={features} columns={columns} />
}

export default PricingTable
