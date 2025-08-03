import styled from 'styled-components'
import { colors, breakpoints } from '../../../themes'

export const SkillsContainer = styled.section`
  padding: 5rem 2rem;
`

export const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 3rem;
  color: ${colors.text};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const SkillItem = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(107, 70, 193, 0.3);
`

export const SkillIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`

export const SkillName = styled.span`
  color: ${colors.text};
  font-size: 1.1rem;
  font-weight: 500;
`
