import styled from 'styled-components'
import { colors, fontSizes, breakpoints } from '../../../themes'

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem;
    justify-content: center;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 1000px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    text-align: left;
    max-width: calc(100vw - 1rem);
    width: calc(100vw - 1rem);
  }
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
  word-wrap: break-word;
  hyphens: auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
`

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: left;
  color: ${colors.text};
  line-height: 1.6;
  opacity: 0.9;
  margin-top: 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    text-align: left;
    margin-top: 1.5rem;
  }
`
