import styles from './PricingCalculator.module.scss'

interface ServicesProps {
  serviceAmount: number
  serviceUnit: string
  onServiceAmountChange: (amount: number) => void
  onServiceUnitChange: (unit: string) => void
}

export default function Services({
  serviceAmount,
  serviceUnit,
  onServiceAmountChange,
  onServiceUnitChange
}: ServicesProps) {
  return (
    <div className={styles.servicesColumn}>
      <div className={`${styles.sectionText}`}>
        <h3>Professional Services</h3>
        <p>
          Ad-hoc Support, training, flow development, custom block development and general consultancy.
        </p>
      </div>

      <div className={`${styles.servicesRow}`}>
        <div className={styles.servicesInputContainer}>
          <input
            type="number"
            id="serviceAmount"
            min="0"
            max="100"
            value={serviceAmount}
            onChange={e =>
              onServiceAmountChange(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))
            }
            className={styles.numericInput}
          />
        </div>
        <div className={styles.servicesDropdownContainer}>
          <select
            id="serviceUnit"
            value={serviceUnit}
            onChange={e => onServiceUnitChange(e.target.value)}
            className={styles.dropdown}>
            <option value="Hours">Hours</option>
            <option value="Days">Days</option>
            <option value="Weeks">Weeks</option>
            <option value="Months">Months</option>
          </select>
        </div>
      </div>
    </div>
  )
}
