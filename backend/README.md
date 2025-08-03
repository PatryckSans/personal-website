# Backend Serverless

Backend serverless para o site de portfólio pessoal.

## 🚀 Tecnologias (Planejadas)

- **AWS Lambda** para funções serverless
- **API Gateway** para endpoints REST
- **DynamoDB** para banco de dados NoSQL
- **S3** para armazenamento de arquivos
- **CloudFormation/CDK** para Infrastructure as Code
- **Node.js/TypeScript** para desenvolvimento

## 📁 Estrutura (Planejada)

```
backend/
├── src/
│   ├── functions/          # Funções Lambda
│   ├── models/            # Modelos de dados
│   ├── services/          # Lógica de negócio
│   ├── utils/             # Utilitários
│   └── types/             # Tipos TypeScript
├── infrastructure/        # IaC (CloudFormation/CDK)
├── tests/                # Testes unitários
└── docs/                 # Documentação da API
```

## 🔧 Funcionalidades (Planejadas)

- API para contato/formulários
- Gerenciamento de conteúdo
- Analytics básicos
- Autenticação (se necessário)

## 🚀 Deploy (Planejado)

- Deploy automatizado via CI/CD
- Ambientes: dev, staging, prod
- Monitoramento com CloudWatch