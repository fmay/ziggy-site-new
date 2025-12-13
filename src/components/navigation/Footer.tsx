import Link from 'next/link'
import styles from './Footer.module.scss'
import Image from 'next/image'

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

        {/* Integration Partners */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Developers</h4>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/integration-partners" className={styles.link}>
                Become a Partner
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/integration-partners#nocoding" className={styles.link}>
                Customization
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
                About us
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/demo" className={styles.link}>
                Book a demo
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Resources</h4>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="https://docs.ziggyservices.com" target="__blank" className={styles.link}>
                Documentation
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="" className={styles.link}>
                Guides
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*Bottom Section*/}
      <div className={styles.bottomSection}>
        <Image src="/ziggy-logo-dark-bg.webp" alt="Logo" width={100} height={0}/>
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
