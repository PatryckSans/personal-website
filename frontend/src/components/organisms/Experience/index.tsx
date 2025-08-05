import React from 'react'
import { useTranslation } from 'react-i18next'
import { MagicCard } from '@components/atoms'
import {
  ExperienceContainer,
  ExperienceContent,
  Title,
  TimelineWrapper,
  TimelineItem,
  TimelineMarker,
  ItemTitle,
  ItemCompany,
  ItemPeriod,
  ItemDescription,
} from './Experience.styles'

export const Experience: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ExperienceContainer id="experience">
      <ExperienceContent>
        <Title>{t('experienceTitle')}</Title>
        <TimelineWrapper>
          <TimelineItem>
            <TimelineMarker />
            <MagicCard>
              <ItemTitle>{t('experienceItems.analystTitle')}</ItemTitle>
              <ItemCompany>ST IT Cloud</ItemCompany>
              <ItemPeriod>2021 - Presente</ItemPeriod>
              <ItemDescription>{t('experienceItems.analystDescription')}</ItemDescription>
            </MagicCard>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <MagicCard>
              <ItemTitle>{t('experienceItems.systemsTitle')}</ItemTitle>
              <ItemCompany>Centro Universitário Senac Santo Amaro</ItemCompany>
              <ItemPeriod>2022 - 2025</ItemPeriod>
              <ItemDescription>{t('experienceItems.systemsDescription')}</ItemDescription>
            </MagicCard>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <MagicCard>
              <ItemTitle>{t('experienceItems.automationTitle')}</ItemTitle>
              <ItemCompany>Tecnólogo Takashi Morita</ItemCompany>
              <ItemPeriod>2018 - 2020</ItemPeriod>
              <ItemDescription>{t('experienceItems.automationDescription')}</ItemDescription>
            </MagicCard>
          </TimelineItem>
        </TimelineWrapper>
      </ExperienceContent>
    </ExperienceContainer>
  )
}
