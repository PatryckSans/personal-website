import React from 'react'
import { useTranslation } from 'react-i18next'
import { InteractivePopup } from '@components/atoms'
import { useIsMobile } from '@hooks/useIsMobile'
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
} from './About.styles'
import { PersonalLife } from '../PersonalLife'

export const About: React.FC = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  const profileContent = (
    <ProfileSection>
      <ProfileImage src="/images/profile.jpg" alt={t('profileAlt')} />
    </ProfileSection>
  )

  return (
    <AboutContainer id="about">
      <AboutHeader>
        <Title>{t('about.title')}</Title>
        <Subtitle>{t('about.subtitle')}</Subtitle>
      </AboutHeader>

      <AboutContent>
        {isMobile ? (
          profileContent
        ) : (
          <InteractivePopup>{profileContent}</InteractivePopup>
        )}

        <InfoSection>
          <InfoTitle>{t('about.role')}</InfoTitle>
          <InfoDescription>{t('about.description')}</InfoDescription>
          <PersonalLife />
        </InfoSection>
      </AboutContent>
    </AboutContainer>
  )
}
