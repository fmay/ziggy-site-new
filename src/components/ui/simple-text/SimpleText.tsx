import { FC, ReactNode } from 'react'
import styles from './SimpleText.module.scss'

interface SimpleTextProps {
  title: string
  subtitle: string | ReactNode
  extra?: ReactNode
  swap?: boolean
  centerExtra?: boolean
}

const SimpleText: FC<SimpleTextProps> = ({ title, subtitle, extra, swap = false, centerExtra = false }) => {
  return (
    <div className={styles.container}>
      <div className={swap ? styles.columnSwapped : styles.column}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.subtitle}>
            {typeof subtitle === 'string' ? <p>{subtitle}</p> : subtitle}
          </div>
        </div>
        {extra && <div className={centerExtra ? styles.extraCentered : styles.extra}>{extra}</div>}
      </div>
    </div>
  )
}

export default SimpleText