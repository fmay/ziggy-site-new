import { FC, ReactNode } from 'react'
import ImageStack from '@/components/ui/image-stack/ImageStack'
import StackCard from '@/components/ui/image-stack/StackCard'
import Intro from '@/components/ui/intro/Intro'

interface JavascriptFeaturesProps {}

const ComingSoon: FC<JavascriptFeaturesProps> = ({}) => {
  return (
    <div>
      <Intro
        title="Coming soon"
        description={
          <div className="mb-[80px]">
            <p>
              Agentic Flow building is under active development and will be available soon.
            </p>
          </div>
        }
        imageScale={0.5}
      />

      {/*<ImageStack items={items} />*/}
    </div>
  )
}

export default ComingSoon
