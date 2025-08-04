import styled, { keyframes } from 'styled-components'

const warpZoom = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  /* 20% {
    transform: scale(1.2);
    opacity: 0.8;
  } */
  100% {
    transform: scale(20);
    opacity: 0;
  }
`

const textFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
`

export const LoaderContainer = styled.div<{ $zoomOut: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${(props) => (props.$zoomOut ? warpZoom : 'none')} 1.5s ease-in-out
    forwards;
`

export const WelcomeContainer = styled.div<{ $warpOut: boolean }>`
  position: absolute;
  bottom: 30%;
  z-index: 10;
  animation: ${(props) => (props.$warpOut ? textFadeOut : 'none')} 0.8s ease-out
    forwards;
`
