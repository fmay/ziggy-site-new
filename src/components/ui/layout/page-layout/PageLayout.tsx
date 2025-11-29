import styles from './PageLayout.module.scss'
import PLVideo from '@/components/ui/layout/page-layout/PLVideo'
import PLImage from '@/components/ui/layout/page-layout/PLImage'
import Image from 'next/image'
import PageSection from '@/components/ui/page-wrappers/PageSection'

interface PageLayoutProps {
  title: string
  description: string
  children?: React.ReactNode
  image?: string
  video?: string
  style?: 'default' | 'feature'
}

const PageLayout = ({ title, description, children, image, video }: PageLayoutProps) => {
  if (image) {
    return (
      <PageSection>
        <div className={styles.pageContainer}>
          <div className={styles.contentWrapper}>
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stripe-navy mb-6">
                  {title}
                </h1>
                <p className="text-xl text-stripe-gray">{description}</p>
              </div>
              <div className="w-full lg:w-1/2 brightness-75 shadow-md">
                <Image src={image} alt="Help image" width={100} height={100} />
              </div>
            </div>
            {children}
          </div>
        </div>
      </PageSection>
    )
  }

  return (
    <PageSection>
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.headerCentered}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.descriptionCentered}>{description}</p>
        </div>
        {children}
      </div>
    </div>
    </PageSection>
  )
}

export default PageLayout
