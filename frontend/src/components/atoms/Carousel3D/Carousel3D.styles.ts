import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
`;

const spinRevert = keyframes`
  from { transform: rotateY(360deg); }
  to { transform: rotateY(0deg); }
`;

export const Container = styled.div<{ height: number }>`
  overflow: hidden;
  display: flex;
  height: ${props => props.height}px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const DragContainer = styled.div`
  position: relative;
  display: flex;
  margin: 3rem auto;
  transform-style: preserve-3d;
  transform: rotateX(0deg);
`;

export const SpinContainer = styled.div<{ 
  width: number; 
  height: number; 
  autoRotate: boolean; 
  rotateSpeed: number; 
}>`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  animation: ${props => props.autoRotate ? 
    (props.rotateSpeed > 0 ? spin : spinRevert) : 'none'} 
    ${props => Math.abs(props.rotateSpeed)}s infinite linear;
`;

export const ItemLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

export const ItemImage = styled.img`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  -webkit-box-reflect: below 20px linear-gradient(transparent, transparent, #0005);
  transition: transform 1s;

  &:hover {
    box-shadow: 0 0 15px #333;
    -webkit-box-reflect: below 20px linear-gradient(transparent, transparent, #0007);
  }
`;

export const ItemVideo = styled.video`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  -webkit-box-reflect: below 20px linear-gradient(transparent, transparent, #0005);
  transition: transform 1s;

  &:hover {
    box-shadow: 0 0 15px #333;
    -webkit-box-reflect: below 20px linear-gradient(transparent, transparent, #0007);
  }
`;

export const Ground = styled.div<{ radius: number }>`
  width: ${props => props.radius * 3}px;
  height: ${props => props.radius * 3}px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  background: radial-gradient(center center, farthest-side, #9993, transparent);
`;