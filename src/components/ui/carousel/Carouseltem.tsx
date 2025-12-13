'use client'

import { FC } from 'react'
import Image from 'next/image'
import CTA from '@/components/ui/cta/CTA'
import styles from './CarouselItem.module.scss'
import { LuBookText } from 'react-icons/lu'

interface CarouselItemProps {
  children: React.ReactNode
  imageUrl?: string
  imageAlt?: string
  title: string
  linkText?: string
  linkUrl?: string
  height?: string
  linkStyle?: 'primary' | 'secondary'
}

const CarouselItem: FC<CarouselItemProps> = ({
  children,
  title,
  imageAlt,
  imageUrl,
  linkText,
  linkUrl,
  height,
  linkStyle = 'primary',
}) => {
  return (
    <div className={styles.wrapper} style={height ? { height } : undefined}>
      <div
        className={styles.card}
        style={
          height
            ? { width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }
            : undefined
        }>
        {imageUrl && imageAlt && (
          <Image
            className={styles.image}
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={0}
            // style={{ width: 'auto', height: 'auto' }}
          />
        )}
        <div
          className={styles.lowerContent}
          style={
            height
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }
              : undefined
          }>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.content}>{children}</div>
          </div>
          {linkText && linkUrl && (
            <CTA
              label={linkText}
              href={linkUrl}
              style={linkStyle}
              noBottomMargin
              className="!my-0 !px-4 !py-2"
              icon={<LuBookText />}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default CarouselItem
