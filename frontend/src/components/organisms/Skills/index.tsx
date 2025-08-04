import React from 'react'
import { useTranslation } from 'react-i18next'
import { SkillsTabBar } from '@components/molecules'
import { SkillsContainer, SkillsContent, Title } from './Skills.styles'

export const Skills: React.FC = () => {
  const { t } = useTranslation()

  return (
    <SkillsContainer>
      <SkillsContent>
        <Title>{t('skills')}</Title>
        <SkillsTabBar />
      </SkillsContent>
    </SkillsContainer>
  )
}