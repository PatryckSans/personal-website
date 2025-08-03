import styled from 'styled-components'
import { colors, fontSizes, breakpoints } from '../../../themes'

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  max-width: 800px;
`

export const Greeting = styled.h2`
  font-size: ${fontSizes.lg};
  color: ${colors.textHighlight};
  font-weight: 300;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fontSizes.md};
  }
`

export const Name = styled.h1`
  font-size: 4rem;
  color: ${colors.text};
  font-weight: 700;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`



export const Description = styled.p`
  font-size: 1.2rem;
  text-align: left;
  color: ${colors.text};
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`
