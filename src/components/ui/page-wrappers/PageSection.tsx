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
  bgColor = 'bg-green-50',
}) => {
  return (
    <div
      className={`w-full ${bgColor}`}>
      <div className="w-full max-w-[1200px] bg-transparent mx-auto">
        {children}
      </div>
    </div>
  )
}

export default PageSection
