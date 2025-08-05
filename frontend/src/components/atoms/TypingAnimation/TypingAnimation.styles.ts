import styled from 'styled-components';

export const TypingContainer = styled.div<{
  $fontSize: string;
  $color: string;
  $fontFamily: string;
}>`
  max-width: calc(100vw - 2rem);
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $color }) => $color};
  box-sizing: border-box;
  line-height: 1.2;
`;