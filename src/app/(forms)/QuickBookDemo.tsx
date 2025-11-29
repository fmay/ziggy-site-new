'use client'

import { FC, useState } from 'react'
import CTA from '@/components/ui/cta/CTA'
import styles from './QuickBookDemo.module.scss'

interface QuickBookDemoProps {}

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
}

const QuickBookDemo: FC<QuickBookDemoProps> = ({}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
  })

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.company.trim() !== '' &&
      formData.email.trim() !== ''
    )
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    // Placeholder function - add your logic here
    console.log('Form submitted:', formData)

    // Open Calendly link
    window.open(
      'https://calendly.com/freddy-may-ziggyservices/30-minute-meeting-clone',
      '_blank'
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Book a demo</h2>
      </div>

      <div className={styles.formColumn}>
        <div className={styles.formField}>
          <label htmlFor="firstName" className={styles.label}>
            First name
          </label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="lastName" className={styles.label}>
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="company" className={styles.label}>
            Company
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
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
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`${styles.button} ${
              isFormValid() ? styles.buttonEnabled : styles.buttonDisabled
            }`}
          >
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickBookDemo
