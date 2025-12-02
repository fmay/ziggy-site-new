import styles from './PageLayout.module.scss'
import PageSection from '@/components/ui/page-wrappers/PageSection'

interface PageLayoutProps {
  title: string
  description: string
  children?: React.ReactNode
  image?: string
  video?: string
  style?: 'default' | 'feature' | 'test' | 'pricing'
  bgColor?: string
  color?: string
}

const styleConfig = {
  default: { bgColor: 'bg-white', textColor: 'text-dark-gray' },
  feature: { bgColor: 'bg-gray-800', textColor: 'text-white' },
  pricing: { bgColor: 'bg-dark-gray', textColor: 'text-white' },
  test: { bgColor: 'bg-red-700', textColor: 'text-white' },
}

const PageLayout = ({
  title,
  description,
  children,
  image,
  video,
  style = 'default',
  bgColor,
  color,
}: PageLayoutProps) => {
  const config = styleConfig[style]
  const finalBgColor = bgColor || config.bgColor
  if (image) {
    return (
      <>
        <PageSection bgColor={finalBgColor}>
          <div className={`${style ? styles[style] : ''} ${config.textColor}`}>
            <div className={styles.headerWithImage}>
              <div className={styles.textSection}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
              </div>
              {image && (
                <div className={styles.imageSection} style={{ backgroundImage: `url(${image})` }} />
              )}
            </div>
          </div>
        </PageSection>
        {children}
      </>
    )
  }

  return (
    <>
      <PageSection bgColor={finalBgColor}>
        <div className={`${styles.pageContainer} ${config.textColor}`}>
          <div
            className={styles.contentWrapper}>
            <div className={styles.headerCentered}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.descriptionCentered}>{description}</p>
            </div>
          </div>
        </div>
      </PageSection>
      {children}
    </>
  )
}

export default PageLayout
