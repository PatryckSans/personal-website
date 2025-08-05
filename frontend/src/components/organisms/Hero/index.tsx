import React from 'react'
import { useTranslation } from 'react-i18next'
import { TypingAnimation } from '@components/atoms'
import { colors } from '@themes/index'
import {
  HeroContainer,
  HeroContent,
  Greeting,
  Name,
  Description,
} from './Hero.styles'

export const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <HeroContainer>
      <HeroContent>
        <Greeting>{t('hero.greeting')}</Greeting>
        <Name>{t('hero.name')}</Name>
        <TypingAnimation
          text={t('hero.role')}
          speed={2.5}
          fontSize="1.8rem"
          color={colors.secondary}
          fontFamily="JetBrains Mono"
          style={{ 
            fontSize: 'clamp(1rem, 4vw, 1.8rem)',
            maxWidth: 'calc(100vw - 2rem)',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        />
        <Description>
          {t('hero.description')}
        </Description>
      </HeroContent>
    </HeroContainer>
  )
}