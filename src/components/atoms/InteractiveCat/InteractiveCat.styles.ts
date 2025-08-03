import styled, { keyframes, css } from 'styled-components'

const tailMotion = keyframes`
  0%, 100% { 
    left: -5px;
    transform: rotate(0deg) scale(1); 
  }
  50% { 
    left: -10px;
    transform: rotate(-50deg) scale(-1, 1); 
  }
`

const tailMotionAlt = keyframes`
  0%, 100% { 
    left: 45px;
    transform: rotate(0deg) scale(1); 
  }
  50% { 
    left: 40px;
    transform: rotate(50deg) scale(-1, 1); 
  }
`

const walk = keyframes`
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
`

const walkAlt = keyframes`
  0%, 100% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
`

const jump = keyframes`
  0%, 100% { bottom: 0px; }
  50% { bottom: 200px; }
`

const turnBodyLeft = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.5, 1); }
`

const turnBodyRight = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.5, 1); }
`

export const OuterWrapper = styled.div<{
  width: number
  height: number
  backgroundColor: string
}>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
`

export const Wrapper = styled.div`
  position: absolute;
  height: calc(100% - 15px);
  width: 100%;
  top: 0;
`

export const Ground = styled.div<{ groundColor: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0px;
  background-color: ${(props) => props.groundColor};
`

export const CatWrapper = styled.div<{ $isJumping: boolean }>`
  position: absolute;
  bottom: 0;

  ${(props) =>
    props.$isJumping &&
    css`
      animation: ${jump} forwards 1s;
    `}
`

export const Cat = styled.div<{ $faceDirection: 'left' | 'right' | 'first' }>`
  position: absolute;
  bottom: 0px;
  left: 100px;
  height: 30px;
  width: 60px;
  transition: 1.5s;
  transform-origin: center;
  background-color: transparent;
`

export const CatHead = styled.div<{
  $faceDirection: 'left' | 'right' | 'first'
  $topPosition: string
}>`
  position: absolute;
  height: 40px;
  width: 48px;
  right: -10px;
  top: ${(props) => props.$topPosition};
  transition: 0.5s;
  z-index: 50;

  ${(props) =>
    (props.$faceDirection === 'first' || props.$faceDirection === 'left') &&
    css`
      right: 22px;
    `}
`

export const Body = styled.div<{ $faceDirection: 'left' | 'right' | 'first' }>`
  position: absolute;
  height: 30px;
  width: 60px;

  ${(props) =>
    props.$faceDirection === 'left' &&
    css`
      animation: ${turnBodyLeft} forwards 0.5s;
    `}

  ${(props) =>
    props.$faceDirection === 'right' &&
    css`
      animation: ${turnBodyRight} forwards 0.5s;
    `}
`

export const Tail = styled.div<{ $faceDirection: 'left' | 'right' | 'first' }>`
  position: absolute;
  top: -25px;
  height: 36px;
  width: 15px;
  animation: ${tailMotion} forwards 2s;
  transform-origin: bottom right;

  ${(props) =>
    (props.$faceDirection === 'first' || props.$faceDirection === 'left') &&
    css`
      left: 45px;
      animation: ${tailMotionAlt} forwards 2s;
    `}
`

export const Legs = styled.div<{
  $isBack?: boolean
  $faceDirection: 'left' | 'right' | 'first'
}>`
  position: absolute;
  height: 30px;
  transition: 0.7s;

  ${(props) =>
    props.$isBack
      ? css`
          width: 25px;
          left: 0;

          ${props.$faceDirection === 'first' || props.$faceDirection === 'left'
            ? css`
                left: 35px;
              `
            : css`
                left: 0;
              `}
        `
      : css`
          width: 30px;
          right: 0;

          ${props.$faceDirection === 'first' || props.$faceDirection === 'left'
            ? css`
                right: 30px;
              `
            : css`
                right: 0;
              `}
        `}
`

export const Leg = styled.div<{
  $position: 'one' | 'two' | 'three' | 'four'
  $isWalking: boolean
  $faceDirection: 'left' | 'right' | 'first'
}>`
  position: absolute;
  height: 20px;
  width: 10px;
  transform-origin: top center;
  bottom: -15px;

  ${(props) =>
    props.$position === 'one' || props.$position === 'three'
      ? css`
          right: 0;
        `
      : css`
          left: 0px;
        `}

  ${(props) =>
    props.$isWalking &&
    css`
      ${props.$position === 'one' || props.$position === 'three'
        ? css`
            animation: infinite 0.3s ${walk};
          `
        : css`
            animation: infinite 0.3s ${walkAlt};
          `}
    `}
  
  svg {
    ${(props) =>
      props.$faceDirection === 'left' &&
      css`
        transform: scale(-1, 1);
      `}
  }
`

export const SVG = styled.svg`
  height: 100%;
  width: 100%;

  polygon.eyes {
    fill: rgb(1, 143, 96);
  }

  polygon,
  path {
    fill: black;
  }
`
