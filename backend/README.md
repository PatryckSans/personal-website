# Backend - Personal Portfolio Website

[![AWS Lambda](https://img.shields.io/badge/AWS%20Lambda-Node.js%2018-ff9900?logo=awslambda)](https://aws.amazon.com/lambda/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![AWS SAM](https://img.shields.io/badge/AWS%20SAM-1.0+-ff9900?logo=amazonaws)](https://aws.amazon.com/serverless/sam/)
[![Amazon SES](https://img.shields.io/badge/Amazon%20SES-Email-ff9900?logo=amazonaws)](https://aws.amazon.com/ses/)

Backend serverless para o portfólio pessoal, desenvolvido com AWS Lambda, TypeScript e Amazon SES. Fornece APIs seguras e escaláveis para funcionalidades do frontend.

## 🎯 Visão Geral

Este backend implementa uma arquitetura serverless moderna na AWS, oferecendo APIs REST seguras e escaláveis. Utiliza Infrastructure as Code e práticas de DevOps para deploy automatizado e monitoramento.

## ⚡ Arquitetura Serverless

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │───▶│   API Gateway    │───▶│  Lambda Function│
│   (React)       │    │   (REST API)     │    │   (Node.js)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │   CloudWatch     │    │   Amazon SES    │
                       │   (Logs/Metrics) │    │   (Email)       │
                       └──────────────────┘    └─────────────────┘
```

## 🚀 Tecnologias

### Core
- **AWS Lambda** - Funções serverless com Node.js 18
- **API Gateway** - Endpoints REST com CORS configurado
- **TypeScript 5.0+** - Type safety e melhor DX
- **AWS SAM** - Serverless Application Model para deploy

### Serviços AWS
- **Amazon SES** - Envio de emails transacionais
- **CloudWatch** - Logs e monitoramento
- **IAM** - Gerenciamento de permissões
- **X-Ray** - Tracing distribuído (opcional)

### Desenvolvimento
- **AWS CLI** - Interface de linha de comando
- **SAM CLI** - Desenvolvimento e deploy local
- **ESLint** - Linting de código
- **Prettier** - Formatação consistente

## 📁 Estrutura do Projeto

```
backend/
├── 📁 src/
│   └── functions/              # Funções Lambda
│       └── contact/            # Função de contato
│           └── handler.ts      # Handler principal
├── 📄 template.yaml            # AWS SAM template
├── 🚀 deploy.sh               # Script de deploy
├── 📦 package.json            # Dependências Node.js
├── ⚙️ tsconfig.json           # Configuração TypeScript
└── 📖 README.md               # Este arquivo
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

| Ferramenta | Versão | Descrição |
|------------|--------|-----------|
| **Node.js** | 18+ | Runtime JavaScript |
| **AWS CLI** | 2+ | Interface AWS |
| **SAM CLI** | 1.0+ | Serverless Application Model |
| **TypeScript** | 5.0+ | Compilador TypeScript |

### Configuração AWS

```bash
# 1. Configure as credenciais AWS
aws configure
# AWS Access Key ID: [sua-access-key]
# AWS Secret Access Key: [sua-secret-key]
# Default region name: us-east-1
# Default output format: json

# 2. Verifique a configuração
aws sts get-caller-identity
```

### Configuração do Amazon SES

```bash
# 1. Verifique o email remetente no SES
aws ses verify-email-identity --email-address patrycksans@gmail.com

# 2. Verifique o status da verificação
aws ses get-identity-verification-attributes --identities patrycksans@gmail.com

# 3. (Opcional) Saia do sandbox para produção
# Abra um ticket de suporte AWS para aumentar os limites
```

### Instalação Local

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Compile o TypeScript
npm run build
```

## 🎮 Scripts Disponíveis

```bash
# 🏗️ Build
npm run build              # Compilar TypeScript para JavaScript

# 🚀 Deploy
npm run deploy             # Deploy via SAM
./deploy.sh                # Script de deploy completo

# 🧪 Desenvolvimento Local
npm run local              # Executar API localmente (http://localhost:3000)
sam local start-api        # Alternativa direta do SAM

# 🔍 Testes
sam local invoke ContactFunction --event events/contact.json

# 📊 Logs
sam logs -n ContactFunction --stack-name personal-website-backend --tail
```

## 📡 APIs Disponíveis

### POST /contact
Endpoint para envio de mensagens através do formulário de contato.

#### Request
```http
POST /contact
Content-Type: application/json
Origin: https://patrycksans.dev

{
  "name": "João Silva",
  "email": "joao@example.com",
  "subject": "Oportunidade de Trabalho",
  "message": "Olá, gostaria de conversar sobre uma oportunidade..."
}
```

#### Response Success (200)
```json
{
  "success": true,
  "message": "Email enviado com sucesso!",
  "messageId": "0000014a-f4d4-4f89-93b2-1234567890ab-000000"
}
```

#### Response Error (400)
```json
{
  "success": false,
  "message": "Dados inválidos",
  "errors": [
    {
      "field": "email",
      "message": "Email inválido"
    }
  ]
}
```

#### Response Error (500)
```json
{
  "success": false,
  "message": "Erro interno do servidor"
}
```

## 🔒 Segurança

### CORS Configuration
```yaml
# template.yaml
Cors:
  AllowMethods: "'POST, OPTIONS'"
  AllowHeaders: "'Content-Type, X-Amz-Date, Authorization, X-Api-Key'"
  AllowOrigin: "'https://patrycksans.dev'"
  AllowCredentials: false
```

### Validação de Dados
```typescript
// Validação de entrada
const validateContactData = (data: any): ValidationResult => {
  const errors: ValidationError[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Nome deve ter pelo menos 2 caracteres' });
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Email inválido' });
  }
  
  // ... mais validações
  
  return { isValid: errors.length === 0, errors };
};
```

### Rate Limiting
```yaml
# template.yaml
ThrottleConfig:
  BurstLimit: 10      # Máximo 10 requests simultâneas
  RateLimit: 5        # Máximo 5 requests por segundo
```

### Sanitização
```typescript
import DOMPurify from 'isomorphic-dompurify';

const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim());
};
```

## 📧 Configuração de Email

### Template de Email
```typescript
const generateEmailTemplate = (data: ContactData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nova mensagem do portfólio</title>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
        <h2 style="color: #1890ff;">📧 Nova mensagem do portfólio</h2>
        
        <div style="background: white; padding: 20px; border-radius: 4px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Assunto:</strong> ${data.subject}</p>
          
          <div style="margin-top: 20px;">
            <strong>Mensagem:</strong>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <p style="color: #666; font-size: 12px;">
          Enviado em: ${new Date().toLocaleString('pt-BR')}
        </p>
      </div>
    </body>
    </html>
  `;
};
```

### Configuração SES
```typescript
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ 
  region: process.env.AWS_REGION || 'us-east-1' 
});

const sendEmail = async (data: ContactData): Promise<string> => {
  const command = new SendEmailCommand({
    Source: process.env.FROM_EMAIL,
    Destination: {
      ToAddresses: [process.env.TO_EMAIL]
    },
    Message: {
      Subject: {
        Data: `[Portfólio] ${data.subject}`,
        Charset: 'UTF-8'
      },
      Body: {
        Html: {
          Data: generateEmailTemplate(data),
          Charset: 'UTF-8'
        }
      }
    }
  });
  
  const result = await sesClient.send(command);
  return result.MessageId!;
};
```

## 🌍 Variáveis de Ambiente

### Desenvolvimento Local
```bash
# .env (não commitado)
FROM_EMAIL=patrycksans@gmail.com
TO_EMAIL=patrycksans@gmail.com
AWS_REGION=us-east-1
NODE_ENV=development
```

### Produção (SAM Template)
```yaml
# template.yaml
Environment:
  Variables:
    FROM_EMAIL: patrycksans@gmail.com
    TO_EMAIL: patrycksans@gmail.com
    AWS_REGION: us-east-1
    NODE_ENV: production
```

## 🚀 Deploy

### Deploy Automatizado
```bash
# Deploy completo (recomendado)
./deploy.sh

# Ou manualmente
npm run build
sam deploy --guided
```

### Deploy Manual Passo a Passo
```bash
# 1. Build do projeto
npm run build

# 2. Package da aplicação
sam package \
  --template-file template.yaml \
  --s3-bucket your-deployment-bucket \
  --output-template-file packaged-template.yaml

# 3. Deploy da stack
sam deploy \
  --template-file packaged-template.yaml \
  --stack-name personal-website-backend \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides \
    FromEmail=patrycksans@gmail.com \
    ToEmail=patrycksans@gmail.com
```

### Configuração de Ambientes
```bash
# Desenvolvimento
sam deploy --config-env dev

# Produção
sam deploy --config-env prod
```

## 📊 Monitoramento

### CloudWatch Logs
```bash
# Visualizar logs em tempo real
sam logs -n ContactFunction --stack-name personal-website-backend --tail

# Logs específicos por período
aws logs filter-log-events \
  --log-group-name /aws/lambda/ContactFunction \
  --start-time 1640995200000 \
  --end-time 1641081600000
```

### Métricas CloudWatch
- **Invocations** - Número de execuções
- **Duration** - Tempo de execução
- **Errors** - Número de erros
- **Throttles** - Execuções limitadas

### Alertas
```yaml
# CloudWatch Alarms
ErrorAlarm:
  Type: AWS::CloudWatch::Alarm
  Properties:
    AlarmName: ContactFunction-Errors
    MetricName: Errors
    Namespace: AWS/Lambda
    Statistic: Sum
    Period: 300
    EvaluationPeriods: 2
    Threshold: 5
    ComparisonOperator: GreaterThanThreshold
```

## 🧪 Testes

### Testes Locais
```bash
# Teste da função com evento mock
sam local invoke ContactFunction --event events/contact.json

# Teste da API completa
sam local start-api
curl -X POST http://localhost:3000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

### Eventos de Teste
```json
// events/contact.json
{
  "httpMethod": "POST",
  "path": "/contact",
  "headers": {
    "Content-Type": "application/json",
    "Origin": "https://patrycksans.dev"
  },
  "body": "{\"name\":\"João Silva\",\"email\":\"joao@example.com\",\"subject\":\"Teste\",\"message\":\"Mensagem de teste\"}"
}
```

## 🔧 Troubleshooting

### Problemas Comuns

#### Email não verificado no SES
```bash
# Erro: Email address not verified
aws ses verify-email-identity --email-address patrycksans@gmail.com
```

#### Permissões IAM insuficientes
```yaml
# Adicione as políticas necessárias
Policies:
  - SESCrudPolicy:
      IdentityName: patrycksans@gmail.com
  - CloudWatchLogsFullAccess
```

#### CORS não configurado
```yaml
# Verifique a configuração CORS no template.yaml
Cors:
  AllowOrigin: "'https://patrycksans.dev'"
  AllowMethods: "'POST, OPTIONS'"
  AllowHeaders: "'Content-Type'"
```

### Debug
```typescript
// Adicione logs detalhados
console.log('Event:', JSON.stringify(event, null, 2));
console.log('Context:', JSON.stringify(context, null, 2));
```

## 📚 Recursos Adicionais

### Documentação AWS
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/)
- [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/)
- [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/)
- [API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/)

### Ferramentas
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [AWS Toolkit for VS Code](https://aws.amazon.com/visualstudiocode/)
- [Postman Collection](./postman/personal-website-backend.json)

## 🔄 Versionamento

### Semantic Versioning
- **MAJOR** - Mudanças incompatíveis na API
- **MINOR** - Novas funcionalidades compatíveis
- **PATCH** - Correções de bugs

### Tags de Release
```bash
# Criar nova versão
git tag -a v1.2.0 -m "Release version 1.2.0"
git push origin v1.2.0
```

## 🤝 Contribuição

### Padrões de Código
- **Naming Convention** - camelCase para variáveis e funções
- **Error Handling** - Sempre capturar e logar erros
- **Type Safety** - Usar TypeScript rigorosamente
- **Documentation** - JSDoc para funções públicas

### Pull Request Guidelines
1. Fork o repositório
2. Crie uma branch descritiva
3. Implemente as mudanças
4. Adicione testes se necessário
5. Execute os lints e builds
6. Abra um Pull Request

---

<div align="center">
  <strong>Backend serverless desenvolvido com ⚡ e ☁️</strong>
  <br>
  <sub>Powered by AWS Lambda + TypeScript + SES</sub>
</div>