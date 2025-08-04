import React, { useEffect, useRef, useState } from 'react'
import {
  OuterWrapper,
  Wrapper,
  CatWrapper,
  Cat,
  CatHead,
  Body,
  Tail,
  Legs,
  Leg,
  SVG,
} from './InteractiveCat.styles'
import { InteractiveCatProps } from './InteractiveCat.types'

export const InteractiveCat: React.FC<InteractiveCatProps> = ({
  width = window.innerWidth,
  height = 90,
  backgroundColor = 'transparent',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const catRef = useRef<HTMLDivElement>(null)
  const [faceDirection, setFaceDirection] = useState<
    'left' | 'right' | 'first'
  >('first')
  const [isWalking, setIsWalking] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [headTop, setHeadTop] = useState('-30px')
  const [catPosition, setCatPosition] = useState({ x: 100, y: 0 })
  const posRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      setIsWalking(true)
    }

    const decideTurnDirection = () => {
      if (!catRef.current || !posRef.current.x || !wrapperRef.current) return

      const catRect = catRef.current.getBoundingClientRect()
      const wrapperRect = wrapperRef.current.getBoundingClientRect()
      const relativeX = posRef.current.x - wrapperRect.left
      
      const maxX = width - 90
      const minX = 10
      
      if (catRect.x < posRef.current.x) {
        const newX = Math.min(Math.max(relativeX - 90, minX), maxX)
        setCatPosition({ x: newX, y: 0 })
        setFaceDirection('right')
      } else {
        const newX = Math.min(Math.max(relativeX + 10, minX), maxX)
        setCatPosition({ x: newX, y: 0 })
        setFaceDirection('left')
      }
    }

    const headMotion = () => {
      if (!wrapperRef.current) return
      setHeadTop(
        posRef.current.y > wrapperRef.current.clientHeight - 100
          ? '-15px'
          : '-30px'
      )
    }

    const jump = () => {
      if (!wrapperRef.current) return
      setIsJumping(false)
      if (posRef.current.y < wrapperRef.current.clientHeight - 250) {
        setTimeout(() => setIsJumping(true), 100)
      }
    }

    const decideStop = () => {
      if (!catRef.current) return
      const currentLeft = parseInt(catRef.current.style.left || '100')
      if (
        (faceDirection === 'right' && posRef.current.x - 90 === currentLeft) ||
        (faceDirection === 'left' && posRef.current.x + 10 === currentLeft)
      ) {
        setIsWalking(false)
      }
    }

    const interval1 = setInterval(() => {
      if (!posRef.current.x || !posRef.current.y) return
      decideTurnDirection()
      headMotion()
      decideStop()
    }, 100)

    const interval2 = setInterval(() => {
      if (!posRef.current.x || !posRef.current.y) return
      jump()
    }, 1000)

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [faceDirection])

  return (
    <OuterWrapper
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      <Wrapper ref={wrapperRef}>
        <CatWrapper $isJumping={isJumping}>
          <Cat
            ref={catRef}
            $faceDirection={faceDirection}
            style={{ left: `${catPosition.x}px` }}
          >
            <CatHead $faceDirection={faceDirection} $topPosition={headTop}>
              <SVG viewBox="0 0 76.4 61.2">
                <polygon
                  className="eyes"
                  points="63.8,54.1 50.7,54.1 50.7,59.6 27.1,59.6 27.1,54.1 12.4,54.1 12.4,31.8 63.8,31.8"
                />
                <path d="M15.3,45.9h5.1V35.7h-5.1C15.3,35.7,15.3,45.9,15.3,45.9z M45.8,56.1V51H30.6v5.1H45.8z M61.1,35.7H56v10.2h5.1 V35.7z M10.2,61.2v-5.1H5.1V51H0V25.5h5.1V15.3h5.1V5.1h5.1V0h5.1v5.1h5.1v5.1h5.1v5.1c0,0,15.2,0,15.2,0v-5.1h5.1V5.1H56V0h5.1v5.1 h5.1v10.2h5.1v10.2h5.1l0,25.5h-5.1v5.1h-5.1v5.1H10.2z" />
              </SVG>
            </CatHead>

            <Body $faceDirection={faceDirection}>
              <SVG viewBox="0 0 91.7 40.8">
                <path d="M91.7,40.8H0V10.2h5.1V5.1h5.1V0h66.2v5.1h10.2v5.1h5.1L91.7,40.8z" />
              </SVG>

              <Tail $faceDirection={faceDirection}>
                <SVG viewBox="0 0 25.5 61.1">
                  <polygon points="10.2,56 10.2,50.9 5.1,50.9 5.1,40.7 0,40.7 0,20.4 5.1,20.4 5.1,10.2 10.2,10.2 10.2,5.1 15.3,5.1 15.3,0 25.5,0 25.5,10.2 20.4,10.2 20.4,15.3 15.3,15.3 15.3,20.4 10.2,20.4 10.2,40.7 15.3,40.7 15.3,45.8 20.4,45.8 20.4,50.9 25.5,50.9 25.5,61.1 15.3,61.1 15.3,56" />
                </SVG>
              </Tail>
            </Body>

            <Legs $faceDirection={faceDirection}>
              <Leg
                $position="one"
                $isWalking={isWalking}
                $faceDirection={faceDirection}
              >
                <SVG viewBox="0 0 14 30.5">
                  <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" />
                </SVG>
              </Leg>
              <Leg
                $position="two"
                $isWalking={isWalking}
                $faceDirection={faceDirection}
              >
                <SVG viewBox="0 0 14 30.5">
                  <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" />
                </SVG>
              </Leg>
            </Legs>

            <Legs $isBack $faceDirection={faceDirection}>
              <Leg
                $position="three"
                $isWalking={isWalking}
                $faceDirection={faceDirection}
              >
                <SVG viewBox="0 0 14 30.5">
                  <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" />
                </SVG>
              </Leg>
              <Leg
                $position="four"
                $isWalking={isWalking}
                $faceDirection={faceDirection}
              >
                <SVG viewBox="0 0 14 30.5">
                  <polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" />
                </SVG>
              </Leg>
            </Legs>
          </Cat>
        </CatWrapper>
      </Wrapper>
    </OuterWrapper>
  )
}
