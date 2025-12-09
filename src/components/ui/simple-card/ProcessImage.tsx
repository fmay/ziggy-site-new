import { FC } from 'react'
import Image from 'next/image'
import styles from '@/components/ui/simple-card/SimpleCard.module.scss'

interface ProcessImageProps {
  from: string
  to: string
}

const ProcessImage:FC<ProcessImageProps> = ({from, to}) => {
 return (
  <div className="flex flex-row place-items-center">
    <Image
      className={styles.image}
      src={`/home/process-examples/${from}.webp`}
      alt={"pair"}
      width={500}
      height={0}
    />
    <div className="font-semibold text-2xl mt-[-7px] mx-1">⟷</div>
    <Image
      className={styles.image}
      src={`/home/process-examples/${to}.webp`}
      alt={"pair"}
      width={500}
      height={0}
    />
  </div>
 )
}

export default ProcessImage