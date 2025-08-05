import styled from 'styled-components'
import { colors, breakpoints } from '../../../themes'

export const PersonalLifeContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const PersonalLifeHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  color: ${colors.text};
  font-weight: 600;
  line-height: 1.4;
  text-align: left;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const CardsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
`
