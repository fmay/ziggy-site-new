import { FC, ReactNode } from 'react'
import styles from '@/components/ui/page-wrappers/page-layout/PageLayout.module.scss'

interface PLVideoProps {
  title: string
  description: string
  children: ReactNode
  video: string
}

const PLVideo: FC<PLVideoProps> = ({ title, description, children, video }) => {
  return (
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
            <video autoPlay loop muted playsInline className="w-full h-auto rounded-lg">
              <source src={video} type="video/mp4" />
            </video>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PLVideo
