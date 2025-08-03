import React from 'react'
import { Row, Col, Progress } from 'antd'
import { SkillsContainer, SkillsContent, Title, SkillItem, SkillName, SkillIcon } from './Skills.styles'

const skills = [
  { name: 'JavaScript', level: 90, icon: '🟨' },
  { name: 'TypeScript', level: 85, icon: '🔷' },
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'Node.js', level: 80, icon: '🟢' },
  { name: 'Python', level: 75, icon: '🐍' },
  { name: 'AWS', level: 70, icon: '☁️' },
  { name: 'Docker', level: 75, icon: '🐳' },
  { name: 'PostgreSQL', level: 80, icon: '🐘' },
]

export const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <SkillsContent>
        <Title>Habilidades</Title>
        <Row gutter={[24, 24]}>
          {skills.map((skill) => (
            <Col xs={24} sm={12} lg={8} key={skill.name}>
              <SkillItem>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </div>
                <Progress
                  percent={skill.level}
                  strokeColor={{
                    '0%': '#6B46C1',
                    '100%': '#3B82F6',
                  }}
                  trailColor="rgba(255, 255, 255, 0.1)"
                  showInfo={false}
                />
              </SkillItem>
            </Col>
          ))}
        </Row>
      </SkillsContent>
    </SkillsContainer>
  )
}