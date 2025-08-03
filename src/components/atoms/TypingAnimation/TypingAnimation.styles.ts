import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from {
    width: 0;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const TypingContainer = styled.div<{
  $textLength: number;
  $speed: number;
  $blinkSpeed: number;
  $fontSize: string;
  $color: string;
  $fontFamily: string;
}>`
  width: ${({ $textLength }) => $textLength}ch;
  animation: ${typing} ${({ $speed }) => $speed}s steps(${({ $textLength }) => $textLength}),
             ${blink} ${({ $blinkSpeed }) => $blinkSpeed}s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $color }) => $color};
`;