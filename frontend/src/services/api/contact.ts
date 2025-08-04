import { api } from './index'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export const sendContactForm = async (data: ContactFormData) => {
  const response = await api.post('/contact', data)
  return response.data
}