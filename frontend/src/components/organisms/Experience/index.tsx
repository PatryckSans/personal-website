import React from 'react'
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
import MagicCard from '../../atoms/MagicCard'

const experiences = [
  {
    title: 'Desenvolvedor Full Stack',
    company: 'Tech Company',
    period: '2022 - Presente',
    description:
      'Desenvolvimento de aplicações web com React, Node.js e AWS. Liderança técnica em projetos de grande escala.',
  },
  {
    title: 'Desenvolvedor Frontend',
    company: 'Startup Inovadora',
    period: '2021 - 2022',
    description:
      'Criação de interfaces modernas com React e TypeScript. Implementação de design systems.',
  },
  {
    title: 'Bacharelado em Ciência da Computação',
    company: 'Universidade Federal',
    period: '2018 - 2022',
    description:
      'Formação sólida em algoritmos, estruturas de dados e engenharia de software.',
  },
  {
    title: 'Curso Técnico em Informática',
    company: 'Instituto Técnico',
    period: '2016 - 2018',
    description:
      'Fundamentos de programação, banco de dados e desenvolvimento web.',
  },
]

export const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <ExperienceContent>
        <Title>Experiência & Formação</Title>
        <TimelineWrapper>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineMarker />
              <MagicCard>
                <ItemTitle>{exp.title}</ItemTitle>
                <ItemCompany>{exp.company}</ItemCompany>
                <ItemPeriod>{exp.period}</ItemPeriod>
                <ItemDescription>{exp.description}</ItemDescription>
              </MagicCard>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </ExperienceContent>
    </ExperienceContainer>
  )
}
