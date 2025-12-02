'use client'

import { useState, useCallback } from 'react'
import styles from './PricingCalculator.module.scss'
import Servers from './Servers'
import Support from './Support'
import Services from './Services'
import Cost from './Cost'

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
    max: 9,
    step: 1,
    defaultValue: 2,
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
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
      inc = `${servers} production server, ${servers} staging server, ${servers} development server. `
    else
      inc = `${servers} production servers, ${servers} staging servers, ${servers} development servers. `

    if(servers>2)
    inc += 'All in one cluster or separate clusters. '

    inc += `Updates and upgrades.`
    return inc
  }

  const handleSliderChange = (id: string, value: number) => {
    switch (id) {
      case 'servers':
        setServers(value)
        break
    }
  }

  const getSliderValue = (id: string) => {
    switch (id) {
      case 'servers':
        return servers
      default:
        return 1
    }
  }

  return (
    <div className={styles.calc} id="calculator">
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/*COLUMN 1: SLIDER, SUPPORT, SERVICES*/}
          <div className={styles.column1}>
            {/*SERVERS*/}
            {sliderConfigs.map((config, idx) => (
              <Servers
                key={config.id}
                config={config}
                value={getSliderValue(config.id)}
                onChange={handleSliderChange}
                description={getDescription()}
                index={idx}
              />
            ))}

            {/*SUPPORT*/}
            <Support supportHours={supportHours} onSupportHoursChange={setSupportHours} />

            {/*SERVICES*/}
            <Services
              serviceAmount={serviceAmount}
              serviceUnit={serviceUnit}
              onServiceAmountChange={setServiceAmount}
              onServiceUnitChange={setServiceUnit}
            />
          </div>

          {/*COLUMN 2: COST*/}
          <div className={styles.column2}>
            <Cost
              subscriptionPrice={calculatePrice()}
              supportPrice={calculateSupport()}
              servicesPrice={calculateServices()}
              totalPrice={calculateTotal()}
              includes={getIncludes()}
              supportHours={supportHours}
              serviceAmount={serviceAmount}
              serviceUnit={serviceUnit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
