import { FC, ReactNode } from 'react'

interface PageSectionProps {
  children: ReactNode
  paddingY?: number
  paddingX?: number
  bgColor?: string
}

const PageSection: FC<PageSectionProps> = ({
  children,
  paddingY = 100,
  paddingX = 40,
  bgColor = 'white',
}) => {
  return (
    <div
      className={`bg-${bgColor}`}
      style={{
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
      }}>
      {children}
    </div>
  )
}

export default PageSection
