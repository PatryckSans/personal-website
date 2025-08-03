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
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <FooterSection>
                <FooterTitle>Patryck Sans</FooterTitle>
                <FooterText>Desenvolvedor Full Stack</FooterText>
                <FooterText>Criando soluções web inovadoras</FooterText>
              </FooterSection>
            </Col>
            <Col xs={24} md={8}>
              <FooterSection>
                <FooterTitle>Contato</FooterTitle>
                <FooterText>patryck@email.com</FooterText>
                <FooterText>São Paulo, Brasil</FooterText>
              </FooterSection>
            </Col>
            <Col xs={24} md={8}>
              <FooterSection>
                <FooterTitle>Redes Sociais</FooterTitle>
                <SocialLinks>
                  <SocialLink
                    href="https://linkedin.com/in/patryck-sans"
                    target="_blank"
                  >
                    <LinkedinOutlined /> LinkedIn
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/patryck-sans"
                    target="_blank"
                  >
                    <GithubOutlined /> GitHub
                  </SocialLink>
                  <SocialLink href="mailto:patryck@email.com">
                    <MailOutlined /> Email
                  </SocialLink>
                </SocialLinks>
              </FooterSection>
            </Col>
          </Row>
          <Copyright>
            © {currentYear} Patryck Sans. Todos os direitos reservados.
          </Copyright>
        </FooterContent>
      </FooterContainer>
    </StyledFooter>
  )
}
