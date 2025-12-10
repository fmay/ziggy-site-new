'use client'

import { FC, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import styles from './QuickBookDemo.module.scss'
import { LuCalendarDays } from 'react-icons/lu'

interface QuickBookDemoProps {
  background?: 'dark' | 'light'
}

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
}

const PUBLIC_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'mail.com',
  'protonmail.com',
  'zoho.com',
  'yandex.com',
  'gmx.com',
  'live.com',
  'me.com',
  'msn.com',
]

const CALENDLY_HEIGHT = 920

const QuickBookDemo: FC<QuickBookDemoProps> = ({ background = 'dark' }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
  })
  const [emailError, setEmailError] = useState<string>('')
  const [showCalendly, setShowCalendly] = useState<boolean>(false)

  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return ''
    }

    // Check if valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }

    // Extract domain from email
    const domain = email.split('@')[1]?.toLowerCase()

    // Check if it's a public domain
    if (PUBLIC_EMAIL_DOMAINS.includes(domain)) {
      return 'Please use your company email address'
    }

    return ''
  }

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      // formData.lastName.trim() !== '' &&
      // formData.company.trim() !== '' &&
      formData.email.trim() !== '' &&
      emailError === ''
    )
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))

    // Validate email on change
    if (field === 'email') {
      const error = validateEmail(value)
      setEmailError(error)
    }
  }

  const handleSubmit = () => {
    // Placeholder function - add your logic here
    console.log('Form submitted:', formData)

    // Show Calendly widget inline
    setShowCalendly(true)

    // Scroll to Calendly widget
    setTimeout(() => {
      document.getElementById('calendly-inline-widget')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }, 100)
  }

  // Calendly prefill configuration
  const calendlyPrefill = {
    name: formData.firstName,
    email: formData.email,
  }

  // Calendly page settings for theme support
  const calendlyPageSettings = {
    backgroundColor: background === 'dark' ? 'ffffff' : '0a2540',
    primaryColor: '635bff',
    textColor: background === 'dark' ? '0a2540' : 'ffffff',
  }

  const handleBack = () => {
    setShowCalendly(false)
  }

  return (
    <div className={`${styles.container} ${background === 'dark' ? styles.bgDark : styles.bgLight}`}>
      <div className={styles.heading}>
        <LuCalendarDays className="mt-[-25px]" />
        <h2>Book a demo</h2>
      </div>

      {!showCalendly && <div className={styles.formColumn}>
        <div className={styles.formField}>
          <label htmlFor="firstName" className={styles.label}>
            Your name
          </label>
          <input
            id="Your name"
            type="text"
            value={formData.firstName}
            onChange={e => handleInputChange('firstName', e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={e => handleInputChange('email', e.target.value)}
            className={styles.input}
          />
          {emailError && <p className={styles.error}>{emailError}</p>}
        </div>

        <div className={styles.buttonWrapper}>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`${styles.button} ${
              isFormValid() ? styles.buttonEnabled : styles.buttonDisabled
            }`}>
            Schedule a time
          </button>
        </div>
      </div>}

      {showCalendly && (
        <div className={styles.calendlyWrapper}>
          <button onClick={handleBack} className={styles.backButton}>
            ← Back
          </button>
          <div id="calendly-inline-widget" className={styles.calendlyContainer}>
            <InlineWidget
              url="https://calendly.com/freddy-may-ziggyservices/30-minute-meeting-clone"
              prefill={calendlyPrefill}
              pageSettings={calendlyPageSettings}
              styles={{ height: `${CALENDLY_HEIGHT}px`, width: '100%' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default QuickBookDemo
