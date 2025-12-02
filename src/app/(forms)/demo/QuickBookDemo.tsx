'use client'

import { FC, useState } from 'react'
import CTA from '@/components/ui/cta/CTA'
import styles from './QuickBookDemo.module.scss'

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

const QuickBookDemo: FC<QuickBookDemoProps> = ({ background = 'dark' }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
  })
  const [emailError, setEmailError] = useState<string>('')

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

    // Open Calendly link
    window.open('https://calendly.com/freddy-may-ziggyservices/30-minute-meeting-clone', '_blank')
  }

  return (
    <div className={`${styles.container} ${background === 'dark' ? styles.bgDark : styles.bgLight}`}>
      <div className={styles.heading}>
        <h2>Book a demo</h2>
      </div>

      <div className={styles.formColumn}>
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

        {/*<div className={styles.formField}>*/}
        {/*  <label htmlFor="lastName" className={styles.label}>*/}
        {/*    Last name*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    id="lastName"*/}
        {/*    type="text"*/}
        {/*    value={formData.lastName}*/}
        {/*    onChange={e => handleInputChange('lastName', e.target.value)}*/}
        {/*    className={styles.input}*/}
        {/*  />*/}
        {/*</div>*/}

        {/*<div className={styles.formField}>*/}
        {/*  <label htmlFor="company" className={styles.label}>*/}
        {/*    Company*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    id="company"*/}
        {/*    type="text"*/}
        {/*    value={formData.company}*/}
        {/*    onChange={e => handleInputChange('company', e.target.value)}*/}
        {/*    className={styles.input}*/}
        {/*  />*/}
        {/*</div>*/}

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
      </div>
    </div>
  )
}

export default QuickBookDemo
