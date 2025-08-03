import React from 'react';
import { WavesContainer, WavesSvg } from './Waves.styles';
import { WavesProps } from './Waves.types';

const Waves: React.FC<WavesProps> = ({ 
  colors = ['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.3)', '#fff'],
  height = '15vh',
  minHeight = '100px',
  maxHeight = '150px'
}) => {
  return (
    <WavesContainer height={height} minHeight={minHeight} maxHeight={maxHeight}>
      <WavesSvg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill={colors[0]} />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill={colors[1]} />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill={colors[2]} />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill={colors[3]} />
        </g>
      </WavesSvg>
    </WavesContainer>
  );
};

export default Waves;