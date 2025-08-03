import styled from 'styled-components'
import { colors } from '@themes/index'

export const FixedBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.background};
  z-index: -1;
  pointer-events: none;
`