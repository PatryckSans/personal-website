import styled, { keyframes } from 'styled-components'

const generateBoxShadow = (n: number): string => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
    Math.random() * 2000
  )}px #FFF`
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
      Math.random() * 2000
    )}px #FFF`
  }
  return value
}

const shadowsSmall = generateBoxShadow(700)
const shadowsMedium = generateBoxShadow(200)
const shadowsBig = generateBoxShadow(100)

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`

export const StarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); */
  overflow: hidden;
`

export const Stars = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: transparent;
  box-shadow: ${(props) =>
    props.size === 1
      ? shadowsSmall
      : props.size === 2
        ? shadowsMedium
        : shadowsBig};
  animation: ${animStar}
    ${(props) =>
      props.size === 1 ? '50s' : props.size === 2 ? '100s' : '150s'}
    linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background: transparent;
    box-shadow: ${(props) =>
      props.size === 1
        ? shadowsSmall
        : props.size === 2
          ? shadowsMedium
          : shadowsBig};
  }
`
