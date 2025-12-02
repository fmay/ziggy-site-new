import { FC } from 'react'
import ScrollContentImagePairs, {
  ContentImagePair,
} from '@/components/ui/scroll-pairs/ScrollContentImagePairs'
import CTA from '@/components/ui/cta/CTA'

const ScrollListEdge: FC = () => {
  const HP_Pairs: ContentImagePair[] = [
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Edge inspection</h2>
          <p className="text-lg text-gray-600 mb-4">
            Edges are the lines that join blocks. Just click on an edge bubble to view the data when
            debugging.
          </p>
          <CTA className="mt-20" label="Learn more" href="cluster" />
        </div>
      ),
      image: '/placeholder.svg',
    },
    {
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Validate, Transform, Map</h2>
          <p className="text-lg text-gray-600 mb-4">The Edge popup dialog also lets you</p>
          <ul>
            <li>
              <strong>Validate</strong> - ensure that data flowing into the edge confirms to your
              rules
            </li>
            <li>
              <strong>Transform</strong> - perform data mappings of recalculations using Javascript
              snippets
            </li>
            <li>
              <strong>Map</strong> - use an AI supported mapping dialog to perform simple field
              mappings
            </li>
            <li>You can also perform all of the above using the AI supprted Javascript block</li>
          </ul>
          <CTA className="mt-20" label="Learn more" href="cluster" />
        </div>
      ),
      image: '/placeholder.svg',
    },
  ]
  return (
    <>
      <div id="javascript" className="section-intro">
        <h2>Edges</h2>
        <p>
          Edges are the lines that connect the blocks in your flow. Data flows along these then the
          flow executes.
        </p>
      </div>
      <ScrollContentImagePairs contentImagePairs={HP_Pairs} />
    </>
  )
}

export default ScrollListEdge
