import React from 'react'
import { BadgeContainer, BadgeIcon, BadgeName, BadgeLevel } from './SkillBadge.styles'

export interface SkillBadgeProps {
  name: string
  icon: string
  level: 'bronze' | 'silver' | 'gold'
  delay?: number
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, level, delay = 0 }) => {
  return (
    <BadgeContainer level={level} delay={delay}>
      <BadgeIcon src={icon} alt={name} />
      <BadgeName>{name}</BadgeName>
      <BadgeLevel level={level} />
    </BadgeContainer>
  )
}