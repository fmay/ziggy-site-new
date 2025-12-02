import styles from './PricingCalculator.module.scss'

interface CostProps {
  subscriptionPrice: number
  supportPrice: number
  servicesPrice: number
  totalPrice: number
  includes: string
  supportHours: number
  serviceAmount: number
  serviceUnit: string
}

export default function Cost({
  subscriptionPrice,
  supportPrice,
  servicesPrice,
  totalPrice,
  includes,
  supportHours,
  serviceAmount,
  serviceUnit
}: CostProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className={styles.estimateContainer}>
      <div className={styles.resultContainer}>
        {/*SUBSCRIPTION*/}
        <div className={styles.resultHeading}>Subscription Price</div>
        <div className={styles.resultResult}>
          <span>{formatPrice(subscriptionPrice)}</span>
          <span className="font-light text-base"> /year</span>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.resultDescription}>
            <p>
              <span className="font-semibold">Includes</span> : <span>{includes}</span>
            </p>
          </div>
        </div>

        {/*SUPPORT*/}
        <div className={styles.resultHeading}>Support</div>
        <div className={styles.resultResult}>
          <span>{formatPrice(supportPrice)}</span>
          <span className="font-light text-base"> /year</span>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.resultDescription}>
            {supportHours === 0 ? (
              <p>
                4 hours of support or training is available free of charge
              </p>
            ) : (
              <p>
                <span className="font-semibold">Includes</span> : {supportHours} hours per month of support
              </p>
            )}
          </div>
        </div>

        {/*SERVICES*/}
        <div className={styles.resultHeading}>Professional Services</div>
        <div className={styles.resultResult}>
          <span>{formatPrice(servicesPrice)}</span>
          <span className="font-light text-base"></span>
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.resultDescription}>
            {serviceAmount > 0 ? (
              <p>
                <span className="font-semibold">Includes</span> : {serviceAmount} {serviceUnit.toLowerCase()} of professional services
              </p>
            ) : (
              <p>
                Professional services available on request
              </p>
            )}
          </div>
        </div>

        {/*TOTAL*/}
        <div className={styles.totalSection}>
          <div className={styles.resultHeading}>Total in Year 1</div>
          <div className={styles.resultResult}>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>

        <div className={styles.descriptionWrapper}>
          <button className={styles.button}>
            <a href="/contact">Let's talk</a>
          </button>
        </div>
      </div>
    </div>
  )
}
