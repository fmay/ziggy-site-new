import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {/* Platform */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Platform</h4>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/platform" className={styles.link}>
                Platform
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/pricing" className={styles.link}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Developers */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Developers</h4>
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
          <h4 className={styles.sectionTitle}>Company</h4>
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
          <h4 className={styles.sectionTitle}>Resources</h4>
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
