import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Input, Button, Row, Col, message } from 'antd'
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'
import {
  ContactContainer,
  ContactContent,
  Title,
  StyledCard,
  SocialButton,
} from './Contact.styles'
import { InteractiveCat } from '@/components/atoms'
import { sendContactForm } from '@/services/api/contact'

const { TextArea } = Input

export const Contact: React.FC = () => {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      await sendContactForm(values)
      message.success(t('form.sendSuccess'))
      form.resetFields()
    } catch (error) {
      message.error(t('form.sendError'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContactContainer>
      <ContactContent>
        <InteractiveCat width={600} height={90} />
        <StyledCard>
          <Title>{t('contact')}</Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="middle"
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: t('form.nameRequired') }]}
                  >
                    <Input placeholder={t('form.name')} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: t('form.emailRequired') },
                      { type: 'email', message: t('form.emailInvalid') },
                    ]}
                  >
                    <Input placeholder={t('form.email')} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="message"
                rules={[{ required: true, message: t('form.messageRequired') }]}
              >
                <TextArea rows={3} placeholder={t('form.message')} />
              </Form.Item>

              <Row justify="space-between" align="middle">
                <Col>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <SocialButton
                      icon={<LinkedinOutlined />}
                      href="https://linkedin.com/in/patrycksans"
                      target="_blank"
                    />
                    <SocialButton
                      icon={<GithubOutlined />}
                      href="https://github.com/patrycksans"
                      target="_blank"
                    />
                    <SocialButton
                      icon={<MailOutlined />}
                      href="mailto:patrycksans@gmail.com"
                    />
                  </div>
                </Col>
                <Col>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    {t('form.send')}
                  </Button>
                </Col>
              </Row>
            </Form>
          </StyledCard>
      </ContactContent>
    </ContactContainer>
  )
}
