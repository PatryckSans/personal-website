import styled, { keyframes } from 'styled-components'
import { colors, breakpoints } from '../../../themes'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const TabContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const TabButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? colors.primary : 'transparent'};
  color: ${colors.text};
  border: 2px solid ${colors.primary};
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(107, 70, 193, 0.4);
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    margin: 0 0.25rem;
  }
`

export const TabContent = styled.div`
  animation: ${slideIn} 0.5s ease-out;
`

export const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
`