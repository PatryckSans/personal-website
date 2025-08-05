import styled from 'styled-components'
import { Button, Card } from 'antd'
import { colors, breakpoints } from '../../../themes'

export const ContactContainer = styled.section`
  padding: 3rem 2rem;
`

export const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 1rem;
  color: ${colors.text};
  text-align: left;
  margin-bottom: 1rem;
  font-weight: 300;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const StyledCard = styled(Card)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);

  .ant-card-body {
    padding: 1.5rem;
  }

  .ant-form-item {
    margin-bottom: 1rem;
  }

  .ant-input,
  .ant-input:focus {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: ${colors.text};
    border-radius: 4px;
    height: 36px;
  }

  .ant-btn-primary {
    background: ${colors.primary};
    border-color: ${colors.primary};
    height: 36px;
    padding: 0 1.5rem;
    border-radius: 4px;
  }
`

export const SocialButton = styled(Button)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${colors.text};
  padding: 0;
  flex-shrink: 0;

  &:hover {
    background: ${colors.primary};
    border-color: ${colors.primary};
    color: white;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`
