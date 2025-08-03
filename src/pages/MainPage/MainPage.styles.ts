import styled from 'styled-components'
import { colors, fontSizes, breakpoints } from '@themes/index'

export const MainPageContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`

export const MainPageTitle = styled.h1`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  text-align: center;
  font-family: 'JetBrains Mono', monospace;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${fontSizes.md};
  }
`