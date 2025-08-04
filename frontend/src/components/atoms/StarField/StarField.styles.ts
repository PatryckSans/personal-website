import styled from 'styled-components'

export const StarFieldContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 10, 20, 1) url(https://i.imgur.com/r838U7u.jpg) center no-repeat;
  background-size: cover;
  image-rendering: pixelated;
  font-family: sans-serif;
  z-index: 1;

  canvas {
    width: 100%;
    height: 100%;
  }
`

export const WarpButton = styled.a`
  position: absolute;
  z-index: 9;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(209, 255, 255, 1);
  border: 2px solid;
  padding: 1em;
  width: 10em;
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
  display: inline-block;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px #eef, 0 0 12px #a0cdff inset;
    text-shadow: 0 0 12px #489cfa, 0 0 5px #fff;
  }
`