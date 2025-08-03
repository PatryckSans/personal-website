import React from 'react'
import {
  HeroContainer,
  HeroContent,
  Greeting,
  Name,
  Description,
} from './Hero.styles'
import { TypingAnimation } from '../../atoms/TypingAnimation'

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Greeting>Olá, eu sou</Greeting>
        <Name>Patryck Sans</Name>
        <TypingAnimation 
          text="Desenvolvedor Full Stack"
          speed={2.5}
          fontSize="1.8rem"
          color="#3B82F6"
          fontFamily="JetBrains Mono"
        />
        <Description>
          Criando experiências digitais inovadoras e soluções web de alta
          qualidade.
        </Description>
      </HeroContent>
    </HeroContainer>
  )
}
