import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, Tabs, Button, Tag, Typography, Collapse } from 'antd'
import {
  GithubOutlined,
  FolderOutlined,
  CodeOutlined,
  CloudOutlined,
  ExpandAltOutlined,
} from '@ant-design/icons'
import {
  ShowcaseContainer,
  CodeBlock,
  TechStack,
  ArchCard,
} from './ProjectShowcase.styles'
import {
  ProjectShowcaseProps,
  TechStack as TechStackType,
} from './ProjectShowcase.types'

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
const { Panel } = Collapse

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ className }) => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('architecture')

  const folderStructure = `personal-website/
├── frontend/           # React 18 + TypeScript + Vite
│   ├── src/
│   │   ├── components/ # Atomic Design Pattern
│   │   │   ├── atoms/     # MagicCard, StarField, TypingAnimation
│   │   │   ├── molecules/ # Compostos reutilizáveis
│   │   │   └── organisms/ # Seções complexas
│   │   ├── hooks/      # Custom hooks (useIsMobile)
│   │   ├── i18n/       # Internacionalização (PT/EN/ES)
│   │   ├── config/     # Dados centralizados
│   │   └── themes/     # Sistema de temas
├── backend/            # AWS Serverless
│   ├── src/functions/  # Lambda functions
│   └── template.yaml   # SAM template
└── infrastructure/     # Terraform IaC
    ├── modules/        # Módulos reutilizáveis
    └── environments/   # Dev/Prod configs`

  const techStacks: TechStackType = {
    frontend: [
      'React 18',
      'TypeScript',
      'Vite',
      'Styled Components',
      'Ant Design',
      'i18next',
    ],
    backend: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Node.js', 'SAM'],
    devops: ['Terraform', 'GitHub Actions', 'Husky', 'ESLint', 'Prettier'],
    architecture: ['Atomic Design', 'Serverless', 'IaC', 'Monorepo', 'i18n'],
  }

  return (
    <ShowcaseContainer id="projects" className={className}>
      <Collapse
        ghost
        expandIcon={({ isActive }) => (
          <ExpandAltOutlined
            rotate={isActive ? 90 : 0}
            style={{ fontSize: 18 }}
          />
        )}
        expandIconPosition="end"
        style={{ background: 'transparent' }}
      >
        <Panel
          header={
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <CodeOutlined style={{ color: '#1890ff' }} />
              <div>
                <Title level={4} style={{ color: '#fff', margin: 0 }}>
                  {t('projectShowcase.title')}
                </Title>
                <Text style={{ color: '#888', fontSize: 12 }}>
                  {t('projectShowcase.subtitle')}
                </Text>
                <br />
                <Text
                  style={{ color: '#666', fontSize: 11, fontStyle: 'italic' }}
                >
                  {t('projectShowcase.expandText')}
                </Text>
              </div>
            </div>
          }
          key="1"
          style={{
            background: '#111',
            border: '1px solid #333',
            borderRadius: 8,
          }}
        >
          <div style={{ padding: '16px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <Button
                type="primary"
                icon={<GithubOutlined />}
                href="https://github.com/patrycksans/personal-website"
                target="_blank"
              >
                {t('projectShowcase.viewGithub')}
              </Button>
            </div>

            <Tabs activeKey={activeTab} onChange={setActiveTab}>
              <TabPane
                tab={
                  <>
                    <FolderOutlined /> {t('projectShowcase.tabs.structure')}
                  </>
                }
                key="architecture"
              >
                <ArchCard title={t('projectShowcase.sections.projectOrganization')} size="small">
                  <CodeBlock>{folderStructure}</CodeBlock>
                  <Paragraph>
                    <strong>Atomic Design:</strong> {t('projectShowcase.descriptions.atomicDesign')}
                    <br />
                    <strong>Monorepo:</strong> {t('projectShowcase.descriptions.monorepo')}
                  </Paragraph>
                </ArchCard>
              </TabPane>

              <TabPane
                tab={
                  <>
                    <CodeOutlined /> {t('projectShowcase.tabs.code')}
                  </>
                }
                key="code"
              >
                <ArchCard title={t('projectShowcase.sections.customHook')} size="small">
                  <CodeBlock>
                    <span className="keyword">export</span>{' '}
                    <span className="keyword">const</span>{' '}
                    <span className="function">useIsMobile</span> = (breakpoint:{' '}
                    <span className="keyword">number</span> ={' '}
                    <span className="string">768</span>):{' '}
                    <span className="keyword">boolean</span>{' '}
                    {`=> {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [breakpoint])

  return isMobile
}`}
                  </CodeBlock>
                </ArchCard>

                <ArchCard title={t('projectShowcase.sections.viteConfig')} size="small">
                  <CodeBlock>
                    <span className="keyword">export default</span>{' '}
                    <span className="function">defineConfig</span>(
                    {`{
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
}`}
                  </CodeBlock>
                </ArchCard>
              </TabPane>

              <TabPane
                tab={
                  <>
                    <CloudOutlined /> {t('projectShowcase.tabs.infrastructure')}
                  </>
                }
                key="infrastructure"
              >
                <ArchCard
                  title={t('projectShowcase.sections.terraform')}
                  size="small"
                >
                  <CodeBlock>
                    <span className="keyword">module</span>{' '}
                    <span className="string">"backend"</span>{' '}
                    {`{
  source = "./modules/backend"
  
  environment = var.environment
  from_email  = var.from_email
  to_email    = var.to_email
}

`}
                    <span className="keyword">module</span>{' '}
                    <span className="string">"frontend"</span>{' '}
                    {`{
  source = "./modules/frontend"
  
  environment    = var.environment
  domain_name    = var.domain_name
  api_gateway_url = module.backend.api_gateway_url
}`}
                  </CodeBlock>
                  <Paragraph>
                    <strong>Serverless:</strong> {t('projectShowcase.descriptions.serverless')}
                    <br />
                    <strong>Modular:</strong> {t('projectShowcase.descriptions.modular')}
                  </Paragraph>
                </ArchCard>
              </TabPane>
            </Tabs>

            <div style={{ marginTop: 20 }}>
              <Title level={4} style={{ color: '#fff', margin: '0 0 12px 0' }}>
                {t('projectShowcase.sections.techStack')}
              </Title>

              <div style={{ marginBottom: 10 }}>
                <Text strong style={{ color: '#fff' }}>
                  {t('projectShowcase.techCategories.frontend')}
                </Text>
                <TechStack>
                  {techStacks.frontend.map((tech) => (
                    <Tag key={tech} color="blue">
                      {tech}
                    </Tag>
                  ))}
                </TechStack>
              </div>

              <div style={{ marginBottom: 10 }}>
                <Text strong style={{ color: '#fff' }}>
                  {t('projectShowcase.techCategories.backend')}
                </Text>
                <TechStack>
                  {techStacks.backend.map((tech) => (
                    <Tag key={tech} color="orange">
                      {tech}
                    </Tag>
                  ))}
                </TechStack>
              </div>

              <div style={{ marginBottom: 10 }}>
                <Text strong style={{ color: '#fff' }}>
                  {t('projectShowcase.techCategories.devops')}
                </Text>
                <TechStack>
                  {techStacks.devops.map((tech) => (
                    <Tag key={tech} color="green">
                      {tech}
                    </Tag>
                  ))}
                </TechStack>
              </div>

              <div>
                <Text strong style={{ color: '#fff' }}>
                  {t('projectShowcase.techCategories.architecture')}
                </Text>
                <TechStack>
                  {techStacks.architecture.map((tech) => (
                    <Tag key={tech} color="purple">
                      {tech}
                    </Tag>
                  ))}
                </TechStack>
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                padding: 12,
                background: '#1a1a1a',
                borderRadius: 6,
                border: '1px solid #333',
              }}
            >
              <Title level={5} style={{ color: '#fff', margin: '0 0 8px 0' }}>
                {t('projectShowcase.sections.highlights')}
              </Title>
              <ul style={{ margin: 0, paddingLeft: 16, color: '#ccc' }}>
                <li>
                  <strong>Performance:</strong> {t('projectShowcase.highlights.performance')}
                </li>
                <li>
                  <strong>Escalabilidade:</strong> {t('projectShowcase.highlights.scalability')}
                </li>
                <li>
                  <strong>Manutenibilidade:</strong> {t('projectShowcase.highlights.maintainability')}
                </li>
                <li>
                  <strong>Internacionalização:</strong> {t('projectShowcase.highlights.i18n')}
                </li>
                <li>
                  <strong>Design System:</strong> {t('projectShowcase.highlights.designSystem')}
                </li>
              </ul>
            </div>
          </div>
        </Panel>
      </Collapse>
    </ShowcaseContainer>
  )
}

export default ProjectShowcase
