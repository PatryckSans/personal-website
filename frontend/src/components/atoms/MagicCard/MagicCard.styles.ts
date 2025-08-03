import styled, { keyframes } from 'styled-components'

const borderAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 400% 0%;
  }
`

export const StyledMagicCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  width: 100%;
  height: auto;
  min-height: 200px;
  position: relative;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 3px solid transparent;
  background-clip: padding-box;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 8px;
    padding: 4px;
    background: linear-gradient(
      90deg,
      #6b46c1,
      #3b82f6,
      #10b981,
      #f59e0b,
      #ef4444,
      #8b5cf6,
      #ec4899,
      #06b6d4,
      #84cc16,
      #6b46c1
    );
    background-size: 400% 100%;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    z-index: -1;
    animation: ${borderAnimation} 6s linear infinite;
  }
`
