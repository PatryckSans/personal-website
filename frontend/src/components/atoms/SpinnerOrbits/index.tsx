import React from 'react';
import { Container } from './SpinnerOrbits.styles';

export const SpinnerOrbits: React.FC = () => {
  return (
    <Container>
      <div className="blue-orbit leo" />
      <div className="green-orbit leo" />
      <div className="red-orbit leo" />
      <div className="white-orbit w1 leo" />
      <div className="white-orbit w2 leo" />
      <div className="white-orbit w3 leo" />
    </Container>
  );
};