import styled from 'styled-components'
import { colors, fontSizes } from '@/themes'
import { Layout } from 'antd'

export const StyledFooter = styled(Layout)`
  background-color: rgb(37, 21, 37);
`

export const FooterContainer = styled.div`
  background: rgb(37, 21, 37);
  border-top: 1px solid #3a2f3f;
  padding: 40px 20px 20px;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const FooterSection = styled.div`
  margin-bottom: 24px;
`

export const FooterTitle = styled.h4`
  color: ${colors.text};
  font-size: ${fontSizes.md};
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 0;
`

export const FooterText = styled.p`
  color: ${colors.textSubtitle};
  font-size: ${fontSizes.sm};
  margin: 8px 0;
  line-height: 1.5;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SocialLink = styled.a`
  color: ${colors.textSubtitle};
  font-size: ${fontSizes.sm};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`

export const Copyright = styled.div`
  text-align: center;
  color: ${colors.textSubtitle};
  font-size: ${fontSizes.sm};
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`
