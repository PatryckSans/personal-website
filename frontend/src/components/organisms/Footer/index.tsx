import { useTranslation } from 'react-i18next'
import { Row, Col } from 'antd'
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  SocialLinks,
  SocialLink,
  Copyright,
  StyledFooter,
} from './Footer.styles'

export const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <FooterSection>
                <FooterTitle>Patryck Sans</FooterTitle>
                <FooterText>{t('hero.role')}</FooterText>
                <FooterText>{t('hero.description')}</FooterText>
              </FooterSection>
            </Col>
            <Col xs={24} md={8}>
              <FooterSection>
                <FooterTitle>{t('contact')}</FooterTitle>
                <FooterText>patrycksans@gmail.com</FooterText>
                <FooterText>São Paulo, Brasil</FooterText>
              </FooterSection>
            </Col>
            <Col xs={24} md={8}>
              <FooterSection>
                <FooterTitle>Redes Sociais</FooterTitle>
                <SocialLinks>
                  <SocialLink
                    href="https://linkedin.com/in/patrycksans"
                    target="_blank"
                  >
                    <LinkedinOutlined /> LinkedIn
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/patrycksans"
                    target="_blank"
                  >
                    <GithubOutlined /> GitHub
                  </SocialLink>
                  <SocialLink href="mailto:patrycksans@gmail.com">
                    <MailOutlined /> Email
                  </SocialLink>
                </SocialLinks>
              </FooterSection>
            </Col>
          </Row>
          <Copyright>
            © {currentYear} Patryck Sans. {t('footer.rights')}
          </Copyright>
        </FooterContent>
      </FooterContainer>
    </StyledFooter>
  )
}
