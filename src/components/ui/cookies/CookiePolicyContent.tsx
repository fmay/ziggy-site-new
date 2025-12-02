import styles from './CookiePolicyContent.module.scss';

export default function CookiePolicyContent() {
  return (
    <div className={styles.cookiePolicy}>
      <section className={styles.section}>
        <p>
          This Cookie Policy explains how we use cookies and similar technologies on our website.
          By using our website, you agree that we may store and access cookies as described in this policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They help the site function properly,
          improve your browsing experience, and provide analytical information to the website owner.
        </p>
        <p>Cookies can be:</p>
        <ul>
          <li><strong>Session cookies</strong>: deleted when you close your browser</li>
          <li><strong>Persistent cookies</strong>: remain on your device for a set period</li>
          <li><strong>First-party cookies</strong>: set by us</li>
          <li><strong>Third-party cookies</strong>: set by external services (e.g., analytics providers)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>2. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>

        <h3>Essential Cookies</h3>
        <p>
          These cookies are required for the site to function. They enable features such as page navigation, secure login,
          and form submissions. You cannot opt out of essential cookies.
        </p>

        <h3>Analytics &amp; Performance Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our site—for example, which pages are visited most frequently.
          We use this information to improve our website.
        </p>

        <h3>Functional Cookies</h3>
        <p>
          These cookies allow the website to remember choices you make, such as language preferences, and provide enhanced features.
        </p>

        <h3>Advertising Cookies (if applicable)</h3>
        <p>
          These cookies may be used to deliver personalized ads based on your browsing activity. They may also measure the effectiveness
          of advertising campaigns.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Third-Party Cookies</h2>
        <p>
          We may use third-party services—such as analytics tools or embedded media—that place cookies on your device.
          These providers have their own privacy and cookie policies, which we recommend reviewing.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Most browsers allow you to:
        </p>
        <ul>
          <li>View existing cookies</li>
          <li>Block cookies from specific websites</li>
          <li>Block all cookies</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        <p>
          Please note that blocking cookies may affect your user experience or prevent certain features from working correctly.
        </p>
        <p className={styles.meta}>For instructions, visit your browser&apos;s help pages (Chrome, Safari, Firefox, Edge).</p>
      </section>

      <section className={styles.section}>
        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. The &quot;Last updated&quot; date at the top will reflect the latest revision.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Contact Us</h2>
        <div className={styles.contact}>
          <p>If you have questions about our cookie use, please contact us at:</p>
          <p><strong>Email:</strong> <a href="mailto:info@ziggyservice.com">info@ziggyservice.com</a></p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} [Your Company]. All rights reserved.</p>
      </footer>
    </div>
  );
}
