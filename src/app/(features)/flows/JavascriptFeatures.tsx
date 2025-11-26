import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'

interface JavascriptFeaturesProps {
}

const JavascriptFeatures:FC<JavascriptFeaturesProps> = ({}) => {

  const items: ReactNode[] = [
    <div>Hello</div>,
    <div>World</div>
  ]

 return (
  <div>
   <ImageStack items={items} />
  </div>
 )
}

export default JavascriptFeatures