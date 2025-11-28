'use client'

import { FC, useMemo, useRef } from 'react'
import CanvasScene, { SceneDefinition } from '../../components/canvas/CanvasScene'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import LineDraw, { LineDrawHandle } from '@/components/canvas/LineDraw'
import ImageMorph, { ImageMorphHandle } from '@/components/canvas/ImageMorph'
import { parseScene } from '@/components/canvas/sceneParser'

interface HomeSceneClientProps {
  sceneYAML: any
}

const HomeSceneClient: FC<HomeSceneClientProps> = ({ sceneYAML }) => {
  const CardFast = useRef<ImageFlipHandle>(null)
  const CardOneInstance = useRef<ImageFlipHandle>(null)
  const CardCluster = useRef<ImageFlipHandle>(null)

  const MorphCRMLeft = useRef<ImageMorphHandle>(null)
  const MorphERPLeft = useRef<ImageMorphHandle>(null)

  const LineDBLeft = useRef<LineDrawHandle>(null)
  const LineCRMLeft = useRef<LineDrawHandle>(null)
  const LineERPLeft = useRef<LineDrawHandle>(null)

  const DiffY = 60
  const NumCards = 3

  // Parse the YAML scene definition
  const sceneDefinition: SceneDefinition = useMemo(() => {
    const refMap = {
      CardFast,
      CardOneInstance,
      CardCluster,
      MorphCRMLeft,
      MorphERPLeft,
      LineDBLeft,
      LineCRMLeft,
      LineERPLeft,
    }
    return parseScene(sceneYAML, refMap)
  }, [sceneYAML])

  return (
    <CanvasScene scene={sceneDefinition}>
      {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}

      {/*FAST & FRIENDLY*/}
      <ImageFlip
        ref={CardFast}
        x={200}
        y={0}
        zIndex={0}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/fast-friendly.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*ONE INSTANCE*/}
      <ImageFlip
        ref={CardOneInstance}
        x={200}
        y={DiffY}
        zIndex={1}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/one-instance.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*CLUSTER*/}
      <ImageFlip
        ref={CardCluster}
        x={200}
        y={2 * DiffY}
        zIndex={2}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/cluster.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      <LineDraw
        ref={LineCRMLeft}
        x={50}
        y={120}
        endX={200}
        endY={260}
        stroke={2}
        color={'#ff0000'}
        duration={600}
        deleteDelay={2000}
      />

      <LineDraw
        ref={LineDBLeft}
        x={50}
        y={120}
        endX={280}
        endY={260}
        stroke={2}
        color={'#ff0000'}
        duration={600}
        deleteDelay={2000}
      />

      <LineDraw
        ref={LineERPLeft}
        x={50}
        y={420}
        endX={200}
        endY={320}
        stroke={2}
        color={'#ff0000'}
        duration={600}
        deleteDelay={2000}
      />

      <ImageMorph
        ref={MorphCRMLeft}
        x={30}
        y={80}
        scale={0.8}
        image1={'/canvas/icons/crm.gray.png'}
        image2={'/canvas/icons/crm.color.png'}
        duration={1000}
        morphBackAfter={1000}
      />

      <ImageMorph
        ref={MorphERPLeft}
        x={30}
        y={420}
        scale={0.8}
        image1={'/canvas/icons/erp.gray.png'}
        image2={'/canvas/icons/erp.color.png'}
        duration={1000}
        morphBackAfter={1000}
      />
    </CanvasScene>
  )
}

export default HomeSceneClient
