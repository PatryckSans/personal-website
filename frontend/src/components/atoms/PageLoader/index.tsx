import React, { useState, useEffect, useRef } from 'react'
import { SpinnerOrbits, TextScramble, StarField } from '@components/atoms'
import { LoaderContainer, WelcomeContainer } from './PageLoader.styles'

interface PageLoaderProps {
  onComplete: () => void
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [showWelcome, setShowWelcome] = useState(false)
  const [warpOut, setWarpOut] = useState(false)
  const [zoomOut, setZoomOut] = useState(false)
  const starFieldRef = useRef<any>(null)

  const phrases = ['Welcome...', 'Bem vindo...']

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 100)

    const warpTimer = setTimeout(() => {
      setWarpOut(true)
      if (starFieldRef.current) {
        starFieldRef.current.triggerWarp()
      }
    }, 4000)

    const zoomTimer = setTimeout(() => {
      setZoomOut(true)
    }, 4500)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 5500)

    return () => {
      clearTimeout(welcomeTimer)
      clearTimeout(warpTimer)
      clearTimeout(zoomTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <LoaderContainer $zoomOut={zoomOut}>
      <StarField ref={starFieldRef} showWarpButton={false} />
      <SpinnerOrbits />
      {showWelcome && (
        <WelcomeContainer $warpOut={warpOut}>
          <TextScramble random={false} phrases={phrases} delay={700} />
        </WelcomeContainer>
      )}
    </LoaderContainer>
  )
}
