import { FC } from 'react'
import styles from './ContactForm.module.scss'
import CTA from '@/components/ui/cta/CTA'

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <CTA label="I'd prefer a demo" href="demo" />
      </div>

      <form className={styles.form}>
        <div className={styles.formFields}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name
            </label>
            <input type="text" id="name" className={styles.input} placeholder="John Doe" />
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
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="company" className={styles.label}>
              Company
            </label>
            <input type="text" id="company" className={styles.input} placeholder="Acme Inc." />
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
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
