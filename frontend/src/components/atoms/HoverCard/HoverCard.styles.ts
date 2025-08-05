import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

export const CardBg = styled.div<{ image: string }>`
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
`

export const CardInfo = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgb(0, 0, 0) 10px 9px 9px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    line-height: 1.5em;
    margin-top: 10px;
    font-weight: 400;
    font-size: 0.5rem;
    /* -webkit-text-stroke: 0.1px rgb(0, 0, 0); */
    text-emphasis: 0.5em black;
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
    margin: 0;
  }
`

export const CardContainer = styled.div<{ width: number; height: number }>`
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  &:hover {
    ${CardInfo} {
      transform: translateY(0);

      p {
        opacity: 1;
      }

      &,
      p {
        transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }

      &:after {
        transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
        opacity: 1;
        transform: translateY(0);
      }
    }

    ${CardBg} {
      transition:
        0.6s cubic-bezier(0.23, 1, 0.32, 1),
        opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0.8;
    }

    ${Card} {
      transition:
        0.6s cubic-bezier(0.23, 1, 0.32, 1),
        box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow:
        rgba(255, 255, 255, 0.2) 0 0 40px 5px,
        rgba(255, 255, 255, 1) 0 0 0 1px,
        rgba(0, 0, 0, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
`
