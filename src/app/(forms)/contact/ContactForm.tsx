'use client'

import { FC, useState } from 'react'
import styles from './ContactForm.module.scss'
import CTA from '@/components/ui/cta/CTA'

interface ContactFormProps {}

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
  'mac.com',
  'msn.com',
]

const ContactForm: FC<ContactFormProps> = ({}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })
  const [emailError, setEmailError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState<string>('')

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))

    // Validate email on change
    if (id === 'email') {
      const error = validateEmail(value)
      setEmailError(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
        })
        setEmailError('')
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.firstName.trim() !== '' &&
                       formData.lastName.trim() !== '' &&
                       formData.email.trim() !== '' &&
                       formData.company.trim() !== '' &&
                       emailError === ''

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          {submitStatus === 'success' && (
            <div className={styles.successMessage}>{submitMessage}</div>
          )}
          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>{submitMessage}</div>
          )}

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroupHalf}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className={styles.input}
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.fieldGroupHalf}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className={styles.input}
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {emailError && <p className={styles.error}>{emailError}</p>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="company" className={styles.label}>
              Company
            </label>
            <input
              type="text"
              id="company"
              className={styles.input}
              placeholder="Acme Inc."
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={styles.textarea}
              placeholder="Tell us about your needs..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
