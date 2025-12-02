import styles from './PricingCalculator.module.scss'

interface SliderConfig {
  id: string
  label: string
  description: string
  min: number
  max: number
  step: number
  defaultValue: number
  labels: string[]
}

interface SliderProps {
  config: SliderConfig
  value: number
  onChange: (id: string, value: number) => void
  description: string
  index: number
}

export default function Servers({ config, value, onChange, description, index }: SliderProps) {
  const calculateLabelPosition = (labelIndex: number, totalLabels: number) => {
    if (totalLabels <= 1) return '0%'
    const percentage = (labelIndex / (totalLabels - 1)) * 100
    return `calc(${percentage}% + ${25 - percentage * 0.24}px)`
  }

  return (
    <div className={`${styles.slider} ${styles[`slider${index + 1}`]}`}>
      <div className={styles.sliderHeading}>
        <label htmlFor={config.id}>{config.label}</label>
        <p>{config.description}</p>
      </div>
      <div className={styles.rangeWrapper}>
        <input
          type="range"
          id={config.id}
          name={config.id}
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={e => onChange(config.id, parseInt(e.target.value))}
          className={styles.rangeInput}
        />
        <div className={styles.rangeLabels}>
          {config.labels.map((label, labelIndex) => (
            <span
              key={labelIndex}
              className={styles.rangeLabel}
              style={{ left: calculateLabelPosition(labelIndex, config.labels.length) }}>
              {label}
            </span>
          ))}
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}
