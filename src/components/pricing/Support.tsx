import styles from './PricingCalculator.module.scss'

interface SupportProps {
  supportHours: number
  onSupportHoursChange: (hours: number) => void
}

export default function Support({ supportHours, onSupportHoursChange }: SupportProps) {
  return (
    <div className={styles.supportColumn}>
      <div className={`${styles.sectionText}`}>
        <h3>Support</h3>
        <p>
          Monthly support hours for assistance, troubleshooting, and maintenance.
        </p>
      </div>

      <div className={`${styles.servicesRow} !mt-[30px]`}>
        <div className={styles.servicesDropdownContainer}>
          <select
            id="supportHours"
            value={supportHours}
            onChange={e => onSupportHoursChange(parseInt(e.target.value))}
            className={styles.dropdown}>
            <option value={0}>No support</option>
            <option value={2}>2 hours</option>
            <option value={4}>4 hours</option>
            <option value={8}>8 hours</option>
            <option value={16}>16 hours</option>
          </select>
        </div>
      </div>
    </div>
  )
}
