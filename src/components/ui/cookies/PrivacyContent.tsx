import styles from './PrivacyContent.module.scss';

export default function PrivacyContent() {
  return (
    <div className={styles.privacyPolicy}>
      <section className={styles.section}>
        <p>
          At Ziggy Services, we take your privacy seriously. This Privacy Statement explains how we collect and use your information on our website.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Information We Collect</h2>
        <p>
          We collect Google Analytics data to help us understand how visitors interact with our website. This includes information about:
        </p>
        <ul>
          <li>Your IP address</li>
          <li>Device and browser information</li>
          <li>Pages visited and time spent on the site</li>
          <li>Referring websites and search terms used to find us</li>
        </ul>
        <p>
          This data is used to improve the user experience on our website and optimize our content.
        </p>
      </section>

      <section className={styles.section}>
        <h2>How We Use Your Data</h2>
        <p>
          The information we collect is used solely for website analytics and is not shared with any third parties. We do not sell, trade, or otherwise distribute your information to any external organizations.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Respecting Your Privacy</h2>
        <p>
          We respect your privacy and are committed to safeguarding your personal information. The data we collect through Google Analytics is anonymized and used strictly for understanding website traffic patterns, improving our content, and enhancing your user experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Your Consent</h2>
        <p>
          By continuing to use our website, you consent to the use of cookies for Google Analytics tracking. You can control your cookie preferences in your browser settings, including blocking cookies entirely or clearing your data.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Changes to This Privacy Statement</h2>
        <p>
          We reserve the right to update this Privacy Statement as necessary. Any changes will be posted on this page, and we encourage you to review it periodically.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.contact}>
          <p>
            If you have any questions or concerns about our privacy practices, please contact us at{' '}
            <a href="mailto:info@ziggyservices.com">info@ziggyservices.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
