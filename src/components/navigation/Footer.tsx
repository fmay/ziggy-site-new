import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {/* Products */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Products</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/products" className={styles.link}>
                Payments
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/products" className={styles.link}>
                Billing
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/products" className={styles.link}>
                Connect
              </Link>
            </li>
          </ul>
        </div>

        {/* Developers */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Developers</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/developers" className={styles.link}>
                Documentation
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/developers" className={styles.link}>
                API Reference
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/developers" className={styles.link}>
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Company</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/careers" className={styles.link}>
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Resources</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/resources" className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/resources" className={styles.link}>
                Guides
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/resources" className={styles.link}>
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Ziggy Services, All rights reserved.
        </div>
        <div className={styles.bottomLinks}>
          <Link href="/privacy" className={styles.bottomLink}>
            Privacy
          </Link>
          <Link href="/cookies" className={styles.bottomLink}>
            Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
