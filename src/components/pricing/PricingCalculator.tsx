'use client'

import { useState, useCallback } from 'react'
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

const sliderConfigs: SliderConfig[] = [
  {
    id: 'servers',
    label: 'Production Servers',
    description: 'How many servers will you run in production?',
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 2,
    labels: ['1', '2', '3', '4', '5+'],
  },
]

export default function PricingCalculator() {
  const [servers, setServers] = useState(1)
  const [serviceAmount, setServiceAmount] = useState(0)
  const [serviceUnit, setServiceUnit] = useState('Hours')
  const [supportHours, setSupportHours] = useState(0)

  const BasePrice = 7000

  const calculateServerPrice = useCallback(() => {
    let price = 0
    if (servers === 1) price = BasePrice
    else if (servers === 2) price = BasePrice + BasePrice * 0.75
    else price = BasePrice + BasePrice * 0.75 + BasePrice * (servers - 2) * 0.6

    return price
  }, [servers])

  const calculateSupport = useCallback(() => {
    if (supportHours === 0) return 0
    return supportHours * 100 * 12
  }, [supportHours])

  const calculateServices = useCallback(() => {
    if (serviceAmount === 0) return 0

    const hourlyRate = 150
    let totalHours = serviceAmount

    // Convert units to hours
    if (serviceUnit === 'Days') {
      totalHours = serviceAmount * 8 * 0.8
    } else if (serviceUnit === 'Weeks') {
      totalHours = serviceAmount * 40 * 0.75
    } else if (serviceUnit === 'Months') {
      totalHours = serviceAmount * 160 * 0.7
    }

    return totalHours * hourlyRate
  }, [serviceAmount, serviceUnit])

  const calculatePrice = useCallback(() => {
    const basePrice = calculateServerPrice()
    return basePrice
  }, [calculateServerPrice])

  const calculateTotal = useCallback(() => {
    return calculatePrice() + calculateSupport() + calculateServices()
  }, [calculatePrice, calculateSupport, calculateServices])

  const getDescription = useCallback(() => {
    if (servers === 1) {
      return 'For normal uses-cases where you accept that is the server fails, Ziggy will be unavailable until it is brought up again. Many integration scenarios will work just fine with a cheap 2GB server.'
    } else if (servers === 2) {
      return 'Ziggy Cluster. Fault tolerant and increased performance in line with your instance sizes. For proper fault tolerance, the database and redis server should run on clustered servers, usually managed services. '
    } else {
      return 'Ziggy Cluster, Enterprise-grade fault tolerant configuration capable of high loads. You should configure the database and redis server on clustered servers, usually managed services.'
    }
  }, [servers])

  const getIncludes = () => {
    let inc = ''
    if (servers === 1)
      inc = `${servers} production server, ${servers} staging server, ${servers} development server.`
    else
      inc = `${servers} production servers, ${servers} staging servers, ${servers} development servers.`

    inc += ` One year of upgrades.`
    return inc
  }

  const handleSliderChange = (id: string, value: number) => {
    switch (id) {
      case 'servers':
        setServers(value)
        break
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getSliderValue = (id: string) => {
    switch (id) {
      case 'servers':
        return servers
      default:
        return 1
    }
  }

  const calculateLabelPosition = (index: number, totalLabels: number) => {
    if (totalLabels <= 1) return '0%'
    const percentage = (index / (totalLabels - 1)) * 100
    return `calc(${percentage}% + ${25 - percentage * 0.24}px)`
  }

  return (
    <div className={styles.calc} id="calculator">
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/*SLIDER AND SUPPORT ROW*/}
          <div className={styles.sliderSupportRow}>
            {/*SLIDER*/}
            {sliderConfigs.map((config, idx) => (
              <div key={config.id} className={`${styles.slider} ${styles[`slider${idx + 1}`]}`}>
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
                    value={getSliderValue(config.id)}
                    onChange={e => handleSliderChange(config.id, parseInt(e.target.value))}
                    className={styles.rangeInput}
                  />
                  <div className={styles.rangeLabels}>
                    {config.labels.map((label, index) => (
                      <span
                        key={index}
                        className={styles.rangeLabel}
                        style={{ left: calculateLabelPosition(index, config.labels.length) }}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <p>{getDescription()}</p>
              </div>
            ))}
          </div>

          {/*SUPPORT AND SERVICES ROW*/}
          <div className={styles.supportServicesRow}>
            {/*SUPPORT*/}
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
                    onChange={e => setSupportHours(parseInt(e.target.value))}
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

            {/*SERVICES*/}
            <div className={styles.servicesColumn}>
              <div className={`${styles.sectionText}`}>
                <h3>Professional Services</h3>
                <p>
                  Support, training, flow development, custom block development and general consultancy.
                </p>
              </div>

              <div className={`${styles.servicesRow} !mt-[30px]`}>
                <div className={styles.servicesInputContainer}>
                  <input
                    type="number"
                    id="serviceAmount"
                    min="0"
                    max="100"
                    value={serviceAmount}
                    onChange={e =>
                      setServiceAmount(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))
                    }
                    className={styles.numericInput}
                  />
                </div>
                <div className={styles.servicesDropdownContainer}>
                  <select
                    id="serviceUnit"
                    value={serviceUnit}
                    onChange={e => setServiceUnit(e.target.value)}
                    className={styles.dropdown}>
                    <option value="Hours">Hours</option>
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                    <option value="Months">Months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/*COST*/}
          <div className={styles.estimateContainer}>
            <div className={styles.resultContainer}>
              {/*SUBSCRIPTION*/}
              <div className={styles.resultHeading}>Subscription Price</div>
              <div className={styles.resultResult}>
                <span>{formatPrice(calculatePrice())}</span>
                <span className="font-light text-base"> /year</span>
              </div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.resultDescription}>
                  <p>
                    <span className="font-semibold">Includes</span> : <span>{getIncludes()}</span>
                  </p>
                </div>
              </div>

              {/*SUPPORT*/}
              <div className={styles.resultHeading}>Support</div>
              <div className={styles.resultResult}>
                <span>{formatPrice(calculateSupport())}</span>
                <span className="font-light text-base"> /year</span>
              </div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.resultDescription}>
                  {supportHours === 0 ? (
                    <p>
                      4 hours of support or training is available free of charge
                    </p>
                  ) : (
                    <p>
                      <span className="font-semibold">Includes</span> : {supportHours} hours per month of support
                    </p>
                  )}
                </div>
              </div>

              {/*SERVICES*/}
              <div className={styles.resultHeading}>Professional Services</div>
              <div className={styles.resultResult}>
                <span>{formatPrice(calculateServices())}</span>
                <span className="font-light text-base"></span>
              </div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.resultDescription}>
                  {serviceAmount > 0 ? (
                    <p>
                      <span className="font-semibold">Includes</span> : {serviceAmount} {serviceUnit.toLowerCase()} of professional services
                    </p>
                  ) : (
                    <p>
                      Professional services available on request
                    </p>
                  )}
                </div>
              </div>

              {/*TOTAL*/}
              <div className={styles.totalSection}>
                <div className={styles.resultHeading}>Total in Year 1</div>
                <div className={styles.resultResult}>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>
              </div>

              <div className={styles.descriptionWrapper}>
                <button className={styles.button}>
                  <a href="/contact">Let's talk</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
