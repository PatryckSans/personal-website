import React, { useEffect, useRef } from 'react'
import { Carousel3DProps } from './Carousel3D.types'
import {
  Container,
  DragContainer,
  SpinContainer,
  ItemContainer,
  ItemImage,
  ItemVideo,
  Ground,
  ItemCaption,
} from './Carousel3D.styles'

export const Carousel3D: React.FC<Carousel3DProps> = ({
  items,
  radius = 180,
  autoRotate = true,
  rotateSpeed = -60,
  itemWidth = 120,
  itemHeight = 170,
  height = 600,
}) => {
  const dragRef = useRef<HTMLDivElement>(null)
  const spinRef = useRef<HTMLDivElement>(null)
  const tX = useRef(0)
  // const tY = useRef(10)

  useEffect(() => {
    const init = () => {
      if (!spinRef.current) return

      const containers = spinRef.current.querySelectorAll(
        '[data-item-container]'
      )
      containers.forEach((el, i) => {
        const element = el as HTMLElement
        element.style.transform = `rotateY(${
          i * (360 / containers.length)
        }deg) translateZ(${radius}px)`
        element.style.transition = 'transform 1s'
        element.style.transitionDelay = `${(containers.length - i) / 4}s`
      })
    }

    const applyTransform = (obj: HTMLElement) => {
      obj.style.transform = `rotateY(${tX.current}deg)`
    }

    const playSpin = (yes: boolean) => {
      if (spinRef.current) {
        spinRef.current.style.animationPlayState = yes ? 'running' : 'paused'
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      if (!dragRef.current) return

      const timer = dragRef.current as any
      clearInterval(timer.timer)

      const sX = e.clientX
      // const sY = e.clientY

      const handlePointerMove = (e: PointerEvent) => {
        const nX = e.clientX
        const desX = nX - sX
        tX.current += desX * 0.1
        if (dragRef.current) applyTransform(dragRef.current)
      }

      const handlePointerUp = () => {
        if (!dragRef.current) return

        const timer = dragRef.current as any
        timer.timer = setInterval(() => {
          tX.current *= 0.95
          if (dragRef.current) applyTransform(dragRef.current)
          playSpin(false)
          if (Math.abs(tX.current) < 0.5) {
            clearInterval(timer.timer)
            playSpin(true)
          }
        }, 17)

        document.removeEventListener('pointermove', handlePointerMove)
        document.removeEventListener('pointerup', handlePointerUp)
      }

      document.addEventListener('pointermove', handlePointerMove)
      document.addEventListener('pointerup', handlePointerUp)
      e.preventDefault()
    }

    setTimeout(init, 1000)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [items, radius])

  return (
    <Container height={height}>
      <DragContainer ref={dragRef}>
        <SpinContainer
          ref={spinRef}
          width={itemWidth}
          height={itemHeight}
          autoRotate={autoRotate}
          rotateSpeed={rotateSpeed}
        >
          {items.map((item, index) => (
            <ItemContainer key={index} data-item-container>
              {item.type === 'video' ? (
                <ItemVideo autoPlay loop muted>
                  <source src={item.src} type="video/mp4" />
                </ItemVideo>
              ) : (
                <ItemImage src={item.src} alt={item.alt || ''} />
              )}
              {item.caption && <ItemCaption>{item.caption}</ItemCaption>}
            </ItemContainer>
          ))}
        </SpinContainer>
        <Ground radius={radius} />
      </DragContainer>
    </Container>
  )
}
