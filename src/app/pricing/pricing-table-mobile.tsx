'use client'

import { FC } from 'react'
import { Feature, ColumnConfig } from './pricing-table'
import styles from './pricing-table.module.scss'

interface PricingTableMobileProps {
  features: Feature[]
  columns: ColumnConfig[]
}

const PricingTableMobile: FC<PricingTableMobileProps> = ({ features: _features, columns: _columns }) => {
  return (
    <div className={styles.mobilePlaceholder}>
      <p>Mobile pricing table coming soon</p>
    </div>
  )
}

export default PricingTableMobile
