import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { ContactContainer, ContactContent, Title, FormSection, SocialSection, SocialButton } from './Contact.styles'

const { TextArea } = Input

export const Contact: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Form values:', values)
    // Implementar envio do formulário
  }

  return (
    <ContactContainer>
      <ContactContent>
        <Title>Contato</Title>
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <FormSection>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="name"
                  label="Nome"
                  rules={[{ required: true, message: 'Por favor, insira seu nome' }]}
                >
                  <Input placeholder="Seu nome" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Por favor, insira seu email' },
                    { type: 'email', message: 'Email inválido' }
                  ]}
                >
                  <Input placeholder="seu@email.com" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Mensagem"
                  rules={[{ required: true, message: 'Por favor, insira sua mensagem' }]}
                >
                  <TextArea rows={4} placeholder="Sua mensagem..." />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Enviar Mensagem
                  </Button>
                </Form.Item>
              </Form>
            </FormSection>
          </Col>
          <Col xs={24} lg={12}>
            <SocialSection>
              <h3>Conecte-se comigo</h3>
              <div>
                <SocialButton 
                  type="primary" 
                  icon={<LinkedinOutlined />}
                  href="https://linkedin.com/in/patryck-sans"
                  target="_blank"
                >
                  LinkedIn
                </SocialButton>
                <SocialButton 
                  type="default" 
                  icon={<GithubOutlined />}
                  href="https://github.com/patryck-sans"
                  target="_blank"
                >
                  GitHub
                </SocialButton>
                <SocialButton 
                  type="primary" 
                  icon={<MailOutlined />}
                  href="mailto:patryck@email.com"
                >
                  Email
                </SocialButton>
              </div>
            </SocialSection>
          </Col>
        </Row>
      </ContactContent>
    </ContactContainer>
  )
}