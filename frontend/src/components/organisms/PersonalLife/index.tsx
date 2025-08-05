import React from 'react'
import { useTranslation } from 'react-i18next'
import { HoverCard } from '@components/atoms/HoverCard'
import {
  PersonalLifeContainer,
  PersonalLifeHeader,
  Title,
  CardsSection,
} from './PersonalLife.styles'

export const PersonalLife: React.FC = () => {
  const { t } = useTranslation()

  const hobbies = [
    {
      image: '/images/hobby/bike-hobby.jpg',
      title: t('personalLife.hobbies.cycling.title'),
      content: t('personalLife.hobbies.cycling.content'),
    },
    {
      image: '/images/hobby/sail-hobby.jpg',
      title: t('personalLife.hobbies.sailing.title'),
      content: t('personalLife.hobbies.sailing.content'),
    },
    {
      image: '/images/hobby/food-hobby.png',
      title: t('personalLife.hobbies.gastronomy.title'),
      content: t('personalLife.hobbies.gastronomy.content'),
    },
    {
      image: '/images/hobby/cat-hobby.png',
      title: t('personalLife.hobbies.pets.title'),
      content: t('personalLife.hobbies.pets.content'),
    },
    {
      image: '/images/hobby/event-hobby.png',
      title: t('personalLife.hobbies.events.title'),
      content: t('personalLife.hobbies.events.content'),
    },
  ]

  return (
    <PersonalLifeContainer>
      <PersonalLifeHeader>
        <Title>{t('personalLife.title')}</Title>
      </PersonalLifeHeader>

      <CardsSection>
        {hobbies.map((hobby, index) => (
          <HoverCard
            key={index}
            image={hobby.image}
            title={hobby.title}
            content={hobby.content}
          />
        ))}
      </CardsSection>
    </PersonalLifeContainer>
  )
}
