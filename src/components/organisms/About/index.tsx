import React from 'react'
import {
  AboutContainer,
  AboutHeader,
  Title,
  Subtitle,
  AboutContent,
  ProfileSection,
  ProfileImage,
  InfoSection,
  InfoTitle,
  InfoDescription,
  SkillsList,
  SkillItem,
  SkillInfo,
  SkillName,
  SkillLevel,
  ProgressBar,
  ProgressFill,
} from './About.styles'
import { InteractivePopup } from '@components/atoms/InteractivePopup'
import { useIsMobile } from '../../../hooks/useIsMobile'

const skills = [
  { name: 'TypeScript', level: 90, expertise: 'Especialista' },
  { name: 'React', level: 95, expertise: 'Especialista' },
  { name: 'HTML5', level: 98, expertise: 'Especialista' },
  { name: 'JavaScript', level: 92, expertise: 'Especialista' },
  { name: 'CSS3', level: 88, expertise: 'Avançado' },
]

export const About: React.FC = () => {
  const isMobile = useIsMobile()

  const profileContent = (
    <ProfileSection>
      <ProfileImage src="/images/profile.jpg" alt="Foto de perfil" />
    </ProfileSection>
  )

  return (
    <AboutContainer>
      <AboutHeader>
        <Title>Sobre Mim</Title>
        <Subtitle>Conheça um pouco da minha trajetória e habilidades</Subtitle>
      </AboutHeader>

      <AboutContent>
        {isMobile ? profileContent : <InteractivePopup>{profileContent}</InteractivePopup>}

        <InfoSection>
          <InfoTitle>Desenvolvedor Full Stack</InfoTitle>
          <InfoDescription>
            Com mais de 5 anos de experiência no desenvolvimento de aplicações
            web, tenho uma paixão genuína por resolver problemas complexos
            através do código. Ao longo da minha carreira, liderei diversos
            projetos, desde aplicações front-end modernas até sistemas back-end
            robustos, sempre focando em entregar soluções de alta qualidade e
            performance.
          </InfoDescription>

          <SkillsList>
            {skills.map((skill) => (
              <SkillItem key={skill.name}>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.expertise}</SkillLevel>
                </SkillInfo>
                <ProgressBar>
                  <ProgressFill level={skill.level} />
                </ProgressBar>
              </SkillItem>
            ))}
          </SkillsList>
        </InfoSection>
      </AboutContent>
    </AboutContainer>
  )
}
