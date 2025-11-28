'use client'

import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { ImageFlipHandle } from '@/components/canvas/ImageFlip'
import { LineDrawHandle } from '@/components/canvas/LineDraw'
import { ImageMorphHandle } from '@/components/canvas/ImageMorph'

// Scene Management Types
export interface FlipAction {
  type: 'flip'
  direction: 'front' | 'back'
  duration?: number
}

export interface UnflipAction {
  type: 'unflip'
  duration?: number
}

export interface MoveAction {
  type: 'move'
  x?: number
  y?: number
  duration?: number
}

export interface MoveRelativeAction {
  type: 'moveRelative'
  x?: number
  y?: number
  duration?: number
}

export interface FadeAction {
  type: 'fade'
  opacity: number
  duration?: number
}

export interface BrightnessAction {
  type: 'brightness'
  value: number
  duration?: number
}

export interface GrayscaleAction {
  type: 'grayscale'
  duration?: number
}

export interface MorphAction {
  type: 'morph'
  duration?: number
}

export interface ResetMorphAction {
  type: 'reset'
  duration?: number
}

export interface DrawAction {
  type: 'draw'
}

export interface RestoreAction {
  type: 'restore'
}

export interface ZIndexAction {
  type: 'zIndex'
  value: number
}

// Separate action types per component type
export interface ImageFlipActions {
  target: React.RefObject<ImageFlipHandle | null>
  actions: (
    | FlipAction
    | UnflipAction
    | MoveAction
    | MoveRelativeAction
    | FadeAction
    | BrightnessAction
    | GrayscaleAction
    | ZIndexAction
  )[]
}

export interface ImageMorphActions {
  target: React.RefObject<ImageMorphHandle | null>
  actions: (MorphAction | ResetMorphAction)[]
}

export interface LineDrawActions {
  target: React.RefObject<LineDrawHandle | null>
  actions: (DrawAction | RestoreAction | ZIndexAction)[]
}

export type ImageActions = ImageFlipActions | ImageMorphActions | LineDrawActions

export interface SceneStep {
  delay: number // milliseconds after previous step completes
  duration: number // how long this step takes to complete
  imageActions: ImageActions[]
  isRepeating?: boolean // marks if this step is part of a repeating sequence
}

export interface SceneDefinition {
  steps: SceneStep[]
  repeatStartIndex?: number // index where repeating steps start (deprecated)
  repeatSections?: SceneStep[][] // array of repeat sections to run in parallel
}

interface TestProps {
  children: ReactNode
  scene: SceneDefinition
  autoPlay?: boolean
}

const CanvasScene: FC<TestProps> = ({ children, scene, autoPlay = false }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [canvasKey, setCanvasKey] = useState(0)
  const timeoutsRef = useRef<number[]>([])

  // Clear all active timeouts
  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(id => clearTimeout(id))
    timeoutsRef.current = []
  }

  // Reset canvas by forcing remount
  const resetCanvas = () => {
    clearAllTimeouts()
    setCanvasKey(prev => prev + 1)
  }

  // Scene execution function
  const executeScene = () => {
    // Clear any existing animations before starting new ones
    clearAllTimeouts()
    const { steps, repeatStartIndex, repeatSections } = scene

    // Execute a single step
    const executeStep = (step: SceneStep, time: number) => {
      const timeoutId = window.setTimeout(() => {
        step.imageActions.forEach(imageAction => {
          imageAction.actions.forEach(action => {
            executeAction(imageAction.target, action)
          })
        })
      }, time)
      timeoutsRef.current.push(timeoutId)
    }

    // Execute each repeat section in parallel
    if (repeatSections && repeatSections.length > 0) {
      repeatSections.forEach(sectionSteps => {
        const executeRepeatingCycle = (cycleNumber: number) => {
          let cycleTime = 0

          sectionSteps.forEach(step => {
            cycleTime += step.delay
            executeStep(step, cycleTime)
            cycleTime += step.duration
          })

          // Calculate total cycle duration and schedule next cycle
          const cycleDuration = sectionSteps.reduce(
            (total, step) => total + step.delay + step.duration,
            0
          )
          const timeoutId = window.setTimeout(() => executeRepeatingCycle(cycleNumber + 1), cycleDuration)
          timeoutsRef.current.push(timeoutId)
        }

        executeRepeatingCycle(0)
      })
    } else {
      // Fallback to old behavior for backwards compatibility
      const repeatingSteps = repeatStartIndex !== undefined
        ? steps.slice(repeatStartIndex)
        : steps.filter(s => s.isRepeating)

      if (repeatingSteps.length > 0) {
        const executeRepeatingCycle = (cycleNumber: number) => {
          let cycleTime = 0

          repeatingSteps.forEach(step => {
            cycleTime += step.delay
            executeStep(step, cycleTime)
            cycleTime += step.duration
          })

          const cycleDuration = repeatingSteps.reduce(
            (total, step) => total + step.delay + step.duration,
            0
          )
          const timeoutId = window.setTimeout(() => executeRepeatingCycle(cycleNumber + 1), cycleDuration)
          timeoutsRef.current.push(timeoutId)
        }

        executeRepeatingCycle(0)
      }
    }

    // Execute non-repeating steps
    const nonRepeatingSteps = repeatStartIndex !== undefined
      ? steps.slice(0, repeatStartIndex)
      : steps.filter(s => !s.isRepeating)

    if (nonRepeatingSteps.length > 0) {
      let cumulativeTime = 0

      nonRepeatingSteps.forEach(step => {
        cumulativeTime += step.delay
        executeStep(step, cumulativeTime)
        cumulativeTime += step.duration
      })
    }
  }

  // Execute individual action
  const executeAction = (
    ref:
      | React.RefObject<ImageFlipHandle | null>
      | React.RefObject<ImageMorphHandle | null>
      | React.RefObject<LineDrawHandle | null>,
    action:
      | FlipAction
      | UnflipAction
      | MoveAction
      | MoveRelativeAction
      | FadeAction
      | BrightnessAction
      | GrayscaleAction
      | MorphAction
      | ResetMorphAction
      | DrawAction
      | RestoreAction
      | ZIndexAction,
  ) => {
    if (!ref.current) return

    switch (action.type) {
      case 'flip':
        if ('flip' in ref.current) {
          ref.current.flip(action.direction, action.duration)
        }
        break
      case 'unflip':
        if ('unflip' in ref.current) {
          ref.current.unflip(action.duration)
        }
        break
      case 'move':
        if ('move' in ref.current) {
          ref.current.move(action.x, action.y, action.duration)
        }
        break
      case 'moveRelative':
        if ('moveRelative' in ref.current) {
          ref.current.moveRelative(action.x, action.y, action.duration)
        }
        break
      case 'fade':
        if ('fade' in ref.current) {
          ref.current.fade(action.opacity, action.duration)
        }
        break
      case 'brightness':
        if ('brightness' in ref.current) {
          ref.current.brightness(action.value, action.duration)
        }
        break
      case 'grayscale':
        if ('grayscale' in ref.current) {
          ref.current.grayscale(action.duration)
        }
        break
      case 'morph':
        if ('morph' in ref.current) {
          ref.current.morph(action.duration)
        }
        break
      case 'reset':
        if ('reset' in ref.current) {
          ref.current.reset(action.duration)
        }
        break
      case 'draw':
        if ('draw' in ref.current) {
          ref.current.draw()
        }
        break
      case 'restore':
        if ('restore' in ref.current) {
          ref.current.restore()
        }
        break
      case 'zIndex':
        if ('zIndex' in ref.current) {
          ref.current.zIndex(action.value)
        }
        break
    }
  }

  // Auto-play effect - runs when component mounts or canvasKey changes
  useEffect(() => {
    if (autoPlay) {
      // Small delay to ensure canvas is fully rendered before starting animations
      const timeoutId = window.setTimeout(() => {
        executeScene()
      }, 50)
      return () => clearTimeout(timeoutId)
    }
  }, [autoPlay, canvasKey])

  // Intersection Observer to detect when canvas enters/exits viewport
  useEffect(() => {
    const container = containerRef.current
    if (!container || !autoPlay) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible
        setIsVisible(entry.isIntersecting)

        // When canvas becomes visible after being invisible, reset and restart
        if (entry.isIntersecting && !wasVisible) {
          resetCanvas()
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of canvas is visible
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      clearAllTimeouts()
    }
  }, [autoPlay, isVisible])

  // Handle tab visibility changes
  useEffect(() => {
    if (!autoPlay) return

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isVisible) {
        // Tab became visible and canvas is in viewport, reset and restart animations
        resetCanvas()
      }
    }

    const handleFocus = () => {
      if (isVisible) {
        // Window received focus and canvas is in viewport, reset and restart animations
        resetCanvas()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('focus', handleFocus)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('focus', handleFocus)
    }
  }, [isVisible, autoPlay])

  const handleCanvasClick = () => {
    executeScene()
  }

  return (
    <div ref={containerRef}>
      <Stage
        key={canvasKey}
        width={700}
        height={450}
        scale={{x:1.2, y: 1.2}}
        className="bg-gray-50"
        onClick={handleCanvasClick}
      >
        <Layer>{children}</Layer>
      </Stage>
    </div>
  )
}

export default CanvasScene
