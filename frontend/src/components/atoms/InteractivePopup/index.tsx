import React, { useEffect, useRef } from 'react'
import {
  PopupContainer,
  PopupWrapper,
  PopupContent,
  PopupText,
} from './InteractivePopup.styles'
import { InteractivePopupProps } from './InteractivePopup.types'

export const InteractivePopup: React.FC<InteractivePopupProps> = ({
  children,
  moveForce = 10,
  rotateForce = 10,
  width = 300,
  height = 120,
}) => {
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!popupRef.current) return

      const rect = popupRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      const moveX = (deltaX / rect.width) * moveForce
      const moveY = (deltaY / rect.height) * moveForce

      const rotateY = Math.max(
        -30,
        Math.min(30, (deltaX / rect.width) * rotateForce)
      )
      const rotateX = Math.max(
        -30,
        Math.min(30, -(deltaY / rect.height) * rotateForce)
      )

      popupRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [moveForce, rotateForce])

  return (
    <PopupContainer width={width} height={height}>
      <PopupWrapper ref={popupRef}>
        <PopupContent>
          <PopupText>{children}</PopupText>
        </PopupContent>
      </PopupWrapper>
    </PopupContainer>
  )
}
