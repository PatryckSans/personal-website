import React from 'react'
import { TypingContainer } from './TypingAnimation.styles'
import { TypingAnimationProps } from './TypingAnimation.types'

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 2,
  blinkSpeed = 0.5,
  fontSize = '2em',
  color = 'inherit',
  fontFamily = 'monospace'
}) => {
  return (
    <TypingContainer
      $textLength={text.length}
      $speed={speed}
      $blinkSpeed={blinkSpeed}
      $fontSize={fontSize}
      $color={color}
      $fontFamily={fontFamily}
    >
      {text}
    </TypingContainer>
  )
}