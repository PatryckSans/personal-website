import React from 'react';
import { StyledMagicCard } from './MagicCard.styles';
import { MagicCardProps } from './MagicCard.types';

const MagicCard: React.FC<MagicCardProps> = ({ children, ...props }) => {
  return <StyledMagicCard {...props}>{children}</StyledMagicCard>;
};

export default MagicCard;