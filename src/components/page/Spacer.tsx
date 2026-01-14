import { FC } from 'react'

interface SpacerProps {
  height?: number
}

const Spacer: FC<SpacerProps> = ({ height = 40 }) => {
  return <div style={{ marginBottom: `${height}px` }} />
}


export default Spacer