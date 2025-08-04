import styled, { keyframes } from 'styled-components'
import { colors } from '../../../themes'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const levelColors = {
  bronze: '#CD7F32',
  silver: '#C0C0C0',
  gold: '#FFD700'
}

export const BadgeContainer = styled.div<{ level: 'bronze' | 'silver' | 'gold'; delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  border: 2px solid ${props => levelColors[props.level]};
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out ${props => props.delay}ms both;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(${props => {
      const color = levelColors[props.level]
      const hex = color.replace('#', '')
      const r = parseInt(hex.substr(0, 2), 16)
      const g = parseInt(hex.substr(2, 2), 16)
      const b = parseInt(hex.substr(4, 2), 16)
      return `${r}, ${g}, ${b}`
    }}, 0.3);
  }
`

export const BadgeIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
  object-fit: contain;
`

export const BadgeName = styled.span`
  color: ${colors.text};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
`

export const BadgeLevel = styled.div<{ level: 'bronze' | 'silver' | 'gold' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => levelColors[props.level]};
  box-shadow: 0 0 10px ${props => levelColors[props.level]};
`