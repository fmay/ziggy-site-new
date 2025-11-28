'use client'

import { FC, useMemo, useRef } from 'react'
import CanvasScene, { SceneDefinition } from '../../components/canvas/CanvasScene'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import { LineDrawHandle } from '@/components/canvas/LineDraw'
import ImageMorph, { ImageMorphHandle } from '@/components/canvas/ImageMorph'
import { parseScene } from '@/components/canvas/sceneParser'

interface HomeSceneClientProps {
  sceneYAML: any
}

const HomeSceneClient: FC<HomeSceneClientProps> = ({ sceneYAML }) => {
  const cardYCounter = useRef(0)

  const CardFast = useRef<ImageFlipHandle>(null)
  const CardOneInstance = useRef<ImageFlipHandle>(null)
  const CardCluster = useRef<ImageFlipHandle>(null)
  const CardIntegrate = useRef<ImageFlipHandle>(null)

  const MorphCRMLeft = useRef<ImageMorphHandle>(null)
  const MorphCRMRight = useRef<ImageMorphHandle>(null)
  const MorphERPLeft = useRef<ImageMorphHandle>(null)
  const MorphERPRight = useRef<ImageMorphHandle>(null)
  const MorphDBLeft = useRef<ImageMorphHandle>(null)
  const MorphDBRight = useRef<ImageMorphHandle>(null)
  const MorphWarehouseLeft = useRef<ImageMorphHandle>(null)
  const MorphWarehouseRight = useRef<ImageMorphHandle>(null)
  const MorphAPILeft = useRef<ImageMorphHandle>(null)
  const MorphAPIRight = useRef<ImageMorphHandle>(null)

  const LineDBLeft = useRef<LineDrawHandle>(null)
  const LineCRMLeft = useRef<LineDrawHandle>(null)
  const LineERPLeft = useRef<LineDrawHandle>(null)

  const DiffY = 60
  const CardsLeft = 120

  const IconsLeft = 40
  const IconsRight = 500

  const IconTopY = 55
  const IconsDeltaY = 60

  // Parse the YAML scene definition
  const sceneDefinition: SceneDefinition = useMemo(() => {
    const refMap = {
      CardFast,
      CardOneInstance,
      CardCluster,
      CardIntegrate,
      MorphCRMLeft,
      MorphCRMRight,
      MorphERPLeft,
      MorphERPRight,
      MorphDBLeft,
      MorphDBRight,
      MorphWarehouseLeft,
      MorphWarehouseRight,
      MorphAPILeft,
      MorphAPIRight,
      LineDBLeft,
      LineCRMLeft,
      LineERPLeft,
    }
    return parseScene(sceneYAML, refMap)
  }, [sceneYAML])

  const getCardY = () => {
    const currentY = cardYCounter.current * DiffY
    cardYCounter.current += 1
    return currentY
  }

  // Calculate Y positions once to avoid re-render issues
  const cardPositions = useMemo(() => {
    cardYCounter.current = 0 // Reset counter
    return {
      cluster: getCardY(),
      oneInstance: getCardY(),
      integrate: getCardY(),
      fast: getCardY(),
    }
  }, [])

  return (
    <CanvasScene scene={sceneDefinition}>
      {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}

      {/*CLUSTER*/}
      <ImageFlip
        ref={CardCluster}
        x={CardsLeft}
        y={cardPositions.cluster}
        zIndex={2}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/cluster.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*ONE INSTANCE*/}
      <ImageFlip
        ref={CardOneInstance}
        x={CardsLeft}
        y={cardPositions.oneInstance}
        zIndex={1}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/one-instance.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*INTEGRATIONS MIGRATIONS*/}
      <ImageFlip
        ref={CardIntegrate}
        x={CardsLeft}
        y={cardPositions.integrate}
        zIndex={1}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/integrations-migrations.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*FAST & FRIENDLY*/}
      <ImageFlip
        ref={CardFast}
        x={CardsLeft}
        y={cardPositions.fast}
        zIndex={0}
        scale={{ x: 1, y: 1 }}
        image="/canvas/cards/fast-friendly.card.png"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/* ------ MORPHS ---------*/}

      {/*CRM*/}
      <ImageMorph
        ref={MorphCRMLeft}
        x={IconsLeft}
        y={IconTopY + IconsDeltaY * 0}
        scale={0.8}
        image1={'/canvas/icons/crm.gray.png'}
        image2={'/canvas/icons/crm.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />

      <ImageMorph
        ref={MorphCRMRight}
        x={IconsRight}
        y={IconTopY + IconsDeltaY * 0}
        scale={0.8}
        image1={'/canvas/icons/crm.gray.png'}
        image2={'/canvas/icons/crm.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />

      {/*ERP*/}
      <ImageMorph
        ref={MorphERPLeft}
        x={IconsLeft}
        y={IconTopY + IconsDeltaY * 1}
        scale={0.8}
        image1={'/canvas/icons/erp.gray.png'}
        image2={'/canvas/icons/erp.color.png'}
        duration={1000}
        reverseAfter={1000}
      />

      <ImageMorph
        ref={MorphERPRight}
        x={IconsRight}
        y={IconTopY + IconsDeltaY * 1}
        scale={0.8}
        image1={'/canvas/icons/erp.gray.png'}
        image2={'/canvas/icons/erp.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />

      {/*DATABASE*/}
      <ImageMorph
        ref={MorphDBLeft}
        x={IconsLeft}
        y={IconTopY + IconsDeltaY * 2}
        scale={0.8}
        image1={'/canvas/icons/database.gray.png'}
        image2={'/canvas/icons/database.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />

      <ImageMorph
        ref={MorphDBRight}
        x={IconsRight}
        y={IconTopY + IconsDeltaY * 2}
        scale={0.8}
        image1={'/canvas/icons/database.gray.png'}
        image2={'/canvas/icons/database.color.png'}
        duration={1000}
        reverseAfter={2000}
        // repeatDelay={0}
        // morphAfter={1000}
      />

      {/*WAREHOUSE*/}
      <ImageMorph
        ref={MorphWarehouseLeft}
        x={IconsLeft}
        y={IconTopY + IconsDeltaY * 3}
        scale={0.8}
        image1={'/canvas/icons/warehouse.gray.png'}
        image2={'/canvas/icons/warehouse.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />

      <ImageMorph
        ref={MorphWarehouseRight}
        x={IconsRight}
        y={IconTopY + IconsDeltaY * 3}
        scale={0.8}
        image1={'/canvas/icons/warehouse.gray.png'}
        image2={'/canvas/icons/warehouse.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />

      {/*API*/}
      <ImageMorph
        ref={MorphAPILeft}
        x={IconsLeft}
        y={IconTopY + IconsDeltaY * 4}
        scale={0.8}
        image1={'/canvas/icons/api.gray.png'}
        image2={'/canvas/icons/api.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />
      <ImageMorph
        ref={MorphAPIRight}
        x={IconsRight}
        y={IconTopY + IconsDeltaY * 4}
        scale={0.8}
        image1={'/canvas/icons/api.gray.png'}
        image2={'/canvas/icons/api.color.png'}
        duration={1000}
        reverseAfter={2000}
        // morphAfter={1000}
        // repeatDelay={0}
      />
    </CanvasScene>
  )
}

export default HomeSceneClient
