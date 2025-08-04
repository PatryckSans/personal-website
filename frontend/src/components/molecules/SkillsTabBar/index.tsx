import React, { useState } from 'react'
import { SkillBadge } from '@components/atoms'
import {
  TabContainer,
  TabButton,
  TabContent,
  BadgesGrid,
} from './SkillsTabBar.styles'

const skillsData = {
  'Front-End': [
    {
      name: 'React',
      icon: '/images/logos/react-logo.png',
      level: 'gold' as const,
    },
    {
      name: 'TypeScript',
      icon: '/images/logos/typescript-logo.png',
      level: 'gold' as const,
    },
    {
      name: 'JavaScript',
      icon: '/images/logos/javascript-logo.png',
      level: 'gold' as const,
    },
    {
      name: 'CSS',
      icon: '/images/logos/css-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'HTML',
      icon: '/images/logos/html-logo.png',
      level: 'gold' as const,
    },
    {
      name: 'Styled Components',
      icon: '/images/logos/styledcomponentes-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'Vue',
      icon: '/images/logos/vue-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'Vite',
      icon: '/images/logos/vite-logo.png',
      level: 'gold' as const,
    },
    {
      name: 'Redux',
      icon: '/images/logos/redux-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'Figma',
      icon: '/images/logos/figma-logo.png',
      level: 'gold' as const,
    },
    {
      name: 'Git',
      icon: '/images/logos/git-logo.png',
      level: 'gold' as const,
    },
  ],
  'Back-End': [
    {
      name: 'Node.js',
      icon: '/images/logos/node-logo.png',
      level: 'gold' as const,
    },
    {
      name: 'Python',
      icon: '/images/logos/python-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'PostgreSQL',
      icon: '/images/logos/postgressql-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'MongoDB',
      icon: '/images/logos/mongodb-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'Express',
      icon: '/images/logos/express-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'Docker',
      icon: '/images/logos/docker-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'Git',
      icon: '/images/logos/git-logo.png',
      level: 'gold' as const,
    },
  ],
  AWS: [
    {
      name: 'Lambda',
      icon: '/images/logos/lambda-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'DynamoDB',
      icon: '/images/logos/dynamodb-logo.png',
      level: 'bronze' as const,
    },
    { name: 'S3', icon: '/images/logos/s3-logo.png', level: 'bronze' as const },
    {
      name: 'API Gateway',
      icon: '/images/logos/apigateway-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'CloudFormation',
      icon: '/images/logos/cloudformation-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'EC2',
      icon: '/images/logos/ec2-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'ECS',
      icon: '/images/logos/ecs-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'ECR',
      icon: '/images/logos/ecr-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'IAM',
      icon: '/images/logos/iam-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'Cognito',
      icon: '/images/logos/cognito-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'Secret Manager',
      icon: '/images/logos/secretmanager-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'KMS',
      icon: '/images/logos/kms-logo.png',
      level: 'bronze' as const,
    },
    {
      name: 'CloudWatch',
      icon: '/images/logos/cloudwatch-logo.png',
      level: 'silver' as const,
    },
    {
      name: 'CloudTrail',
      icon: '/images/logos/cloudtrail-logo.png',
      level: 'bronze' as const,
    },
  ],
}

export const SkillsTabBar: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof skillsData>('Front-End')

  return (
    <TabContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        {Object.keys(skillsData).map((tab) => (
          <TabButton
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab as keyof typeof skillsData)}
          >
            {tab}
          </TabButton>
        ))}
      </div>

      <TabContent key={activeTab}>
        <BadgesGrid>
          {skillsData[activeTab].map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              delay={index * 100}
            />
          ))}
        </BadgesGrid>
      </TabContent>
    </TabContainer>
  )
}
