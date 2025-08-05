import React, { useState, useEffect } from 'react'
import { TypingContainer } from './TypingAnimation.styles'
import { TypingAnimationProps } from './TypingAnimation.types'

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 2,
  blinkSpeed = 0.5,
  fontSize = '2em',
  color = 'inherit',
  fontFamily = 'monospace',
  style
}) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, (speed * 1000) / text.length)

    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, blinkSpeed * 1000)

    return () => clearInterval(cursorInterval)
  }, [blinkSpeed])

  return (
    <TypingContainer
      $fontSize={fontSize}
      $color={color}
      $fontFamily={fontFamily}
      style={style}
    >
      {displayText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </TypingContainer>
  )
}