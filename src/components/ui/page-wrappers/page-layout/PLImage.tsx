import { FC, ReactNode } from 'react'
import styles from '@/components/ui/page-wrappers/page-layout/PageLayout.module.scss'
import Image from 'next/image'

interface PLImageProps {
  title: string
  description: string
  children: ReactNode
  image: string
}

const PLImage: FC<PLImageProps> = ({ title, description, children, image }) => {
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
          <div>
            <Image src={image} alt={'Hero image'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PLImage
