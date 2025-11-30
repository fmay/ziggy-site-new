'use client'

import { FC, useMemo, useRef } from 'react'
import CanvasScene, { SceneDefinition } from '@/components/canvas//CanvasScene'
import ImageFlip, { ImageFlipHandle } from '@/components/canvas/ImageFlip'

import { parseScene } from '@/components/canvas/sceneParser'
import { Vector2d } from 'konva/lib/types'

interface HomeSceneClientProps {
  sceneYAML: any
  scale?: number | Vector2d
  bgColor?: string
  width?: number
  height?: number
}

const HomeSceneClient: FC<HomeSceneClientProps> = ({
  sceneYAML,
  scale,
  bgColor,
  width,
  height,
}) => {
  const cardYCounter = useRef(0)

  const CardFlows = useRef<ImageFlipHandle>(null)
  const CardIntegrate = useRef<ImageFlipHandle>(null)
  const CardCluster = useRef<ImageFlipHandle>(null)
  const CardCustom = useRef<ImageFlipHandle>(null)

  const DiffY = 60
  const CardsLeft = 0

  // Parse the YAML scene definition
  const sceneDefinition: SceneDefinition = useMemo(() => {
    const refMap = {
      CardFlows,
      CardIntegrate,
      CardCluster,
      CardCustom,
    }
    return parseScene(sceneYAML, refMap)
  }, [sceneYAML])

  const getCardY = () => {
    const currentY = cardYCounter.current * DiffY
    cardYCounter.current += 1
    return currentY
  }

  // Calculate Y positions once to avoid re-render issues
  // ORDER MATTERS
  const cardPositions = useMemo(() => {
    cardYCounter.current = 0 // Reset counter
    return {
      cluster: getCardY(),
      custom: getCardY(),
      flows: getCardY(),
      integrate: getCardY(),
    }
  }, [])

  return (
    <CanvasScene
      scene={sceneDefinition}
      autoPlay
      scale={scale}
      bgColor={bgColor ?? sceneDefinition.bgColor}
      width={width ?? sceneDefinition.width}
      height={height ?? sceneDefinition.height}>
      {/* Example ImageFlip demonstrating parallel execution of flip, move, and fade */}

      {/*CLUSTER*/}
      <ImageFlip
        ref={CardCluster}
        x={CardsLeft}
        y={cardPositions.cluster}
        zIndex={2}
        scale={{ x: 1.43, y: 1.43 }}
        image="/canvas/home/cards/cluster.card.svg"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*CUSTOM*/}
      <ImageFlip
        ref={CardCustom}
        x={CardsLeft}
        y={cardPositions.custom}
        zIndex={2}
        scale={{ x: 0.5, y: 0.5 }}
        image="/canvas/home/cards/customise.card.svg"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*FLOWS*/}
      <ImageFlip
        ref={CardFlows}
        x={CardsLeft}
        y={cardPositions.flows}
        zIndex={2}
        scale={{ x: 0.5, y: 0.5 }}
        image="/canvas/home/cards/home-flow.card.svg"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />

      {/*INTEGRATE*/}
      <ImageFlip
        ref={CardIntegrate}
        x={CardsLeft}
        y={cardPositions.integrate}
        zIndex={2}
        scale={{ x: 1.43, y: 1.43 }}
        image="/canvas/home/cards/integrations-migrations.card.svg"
        direction="front"
        duration={1500}
        expansionScale={0.5}
      />
    </CanvasScene>
  )
}

export default HomeSceneClient
