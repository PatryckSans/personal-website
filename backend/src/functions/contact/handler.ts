import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const sesClient = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' })

interface ContactFormData {
  name: string
  email: string
  message: string
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
}

const sanitizeInput = (input: string): string => {
  return input.replace(/[<>"'&]/g, (match) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;'
    }
    return entities[match] || match
  })
}

const validateContactData = (data: ContactFormData): string | null => {
  if (!data.name || !data.email || !data.message) {
    return 'Todos os campos são obrigatórios'
  }
  return null
}

const createEmailParams = (data: ContactFormData) => {
  const sanitizedName = sanitizeInput(data.name)
  const sanitizedEmail = sanitizeInput(data.email)
  const sanitizedMessage = sanitizeInput(data.message)

  return {
    Source: process.env.FROM_EMAIL!,
    Destination: {
      ToAddresses: [process.env.TO_EMAIL!],
    },
    Message: {
      Subject: {
        Data: `Contato do site - ${sanitizedName}`,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: `
            <h2>Nova mensagem de contato</h2>
            <p><strong>Nome:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${sanitizedMessage.replace(/\n/g, '&lt;br&gt;')}</p>
          `,
          Charset: 'UTF-8',
        },
      },
    },
  }
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' }
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Body é obrigatório' }),
      }
    }

    const contactData: ContactFormData = JSON.parse(event.body)
    const validationError = validateContactData(contactData)
    
    if (validationError) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: validationError }),
      }
    }

    const emailParams = createEmailParams(contactData)
    await sesClient.send(new SendEmailCommand(emailParams))

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: 'Email enviado com sucesso!' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Erro interno do servidor' }),
    }
  }
}