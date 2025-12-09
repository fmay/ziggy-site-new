import { FC } from 'react'
import Image from 'next/image'
import styles from '@/components/ui/simple-card/SimpleCard.module.scss'

interface ProcessImageProps {
  urlFrom: string
  urlTo: string
}

const ProcessImage:FC<ProcessImageProps> = ({urlFrom, urlTo}) => {
 return (
  <div className="flex flex-row place-items-center">
    <Image
      className={styles.image}
      src={urlFrom}
      alt={"pair"}
      width={500}
      height={0}
    />
    <div className="font-semibold mt-[-7px] mx-1">⟷</div>
    <Image
      className={styles.image}
      src={urlTo}
      alt={"pair"}
      width={500}
      height={0}
    />
  </div>
 )
}

export default ProcessImage