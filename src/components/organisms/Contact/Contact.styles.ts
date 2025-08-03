import styled from 'styled-components'
import { Button } from 'antd'
import { colors, breakpoints } from '../../../themes'

export const ContactContainer = styled.section`
  padding: 5rem 2rem;
`

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 3rem;
  color: ${colors.text};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const FormSection = styled.div`
  .ant-form-item-label > label {
    color: ${colors.text} !important;
    font-weight: 500;
  }

  .ant-input,
  .ant-input:focus {
    background: rgba(0, 0, 0, 0.5);
    border-color: ${colors.primary};
    color: ${colors.text};
  }

  .ant-btn-primary {
    background: ${colors.primary};
    border-color: ${colors.primary};
    height: 50px;
    font-size: 1.1rem;
    font-weight: 600;
  }
`

export const SocialSection = styled.div`
  h3 {
    color: ${colors.textHighlight};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const SocialButton = styled(Button)`
  height: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &.ant-btn-primary {
    background: ${colors.primary};
    border-color: ${colors.primary};
  }

  &.ant-btn-default {
    background: rgba(0, 0, 0, 0.5);
    border-color: ${colors.text};
    color: ${colors.text};

    &:hover {
      background: ${colors.text};
      color: #000;
    }
  }
`
