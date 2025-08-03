import React from 'react'
import { StarsContainer, Stars } from './StarryBackground.styles'

export const StarryBackground: React.FC = () => {
  return (
    <StarsContainer>
      <Stars id="stars" size={1} />
      <Stars id="stars2" size={2} />
      <Stars id="stars3" size={3} />
    </StarsContainer>
  )
}