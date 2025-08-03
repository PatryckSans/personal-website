import styled from 'styled-components'

export const PopupContainer = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  perspective: 800px;
`

export const PopupWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transform-style: preserve-3d;
`

export const PopupContent = styled.div`
  padding: 20px;
  box-sizing: border-box;
`

export const PopupText = styled.div`
  color: white;
  font-family: 'JetBrains Mono', monospace;
  font-size: 20px;
  line-height: 30px;
  font-weight: 100;
  text-align: center;
  transform: translateZ(15px);

  b {
    color: coral;
    font-weight: 300;
  }
`