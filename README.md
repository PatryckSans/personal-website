# Personal Portfolio Website

Um site pessoal de portfólio com arquitetura separada entre frontend e backend serverless.

## 🏗️ Arquitetura

### Frontend
- **React 18** com TypeScript
- **Vite** como bundler
- **Ant Design** como biblioteca de UI
- **Styled Components** para estilização
- Seguindo princípios do Atomic Design

### Backend (Serverless)
- **AWS Lambda** para funções serverless
- **API Gateway** para endpoints REST
- **DynamoDB** para banco de dados
- **Infrastructure as Code** (CloudFormation/CDK)

## 📁 Estrutura do Projeto

```
personal-website/
├── frontend/           # Aplicação React
│   ├── src/
│   │   ├── components/ # Atomic Design (atoms, molecules, organisms)
│   │   ├── pages/      # Páginas da aplicação
│   │   ├── hooks/      # Custom hooks
│   │   ├── services/   # APIs e serviços
│   │   ├── i18n/       # Internacionalização
│   │   └── styles/     # Estilos globais
│   ├── public/         # Assets estáticos
│   └── package.json    # Dependências do frontend
└── backend/            # Funções serverless (planejado)
    ├── src/
    │   ├── functions/  # Funções Lambda
    │   ├── models/     # Modelos de dados
    │   └── services/   # Lógica de negócio
    └── infrastructure/ # IaC templates
```

## 🛠️ Desenvolvimento

### Frontend

```bash
# Entre na pasta do frontend
cd frontend

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

### Backend (Planejado)

```bash
# Entre na pasta do backend
cd backend

# Deploy das funções Lambda
# (comandos serão definidos quando implementado)
```

## 🚀 Deploy

### Frontend
- Build estático deployável em qualquer CDN
- Configurado para Vercel/Netlify

### Backend
- Deploy serverless na AWS
- Infrastructure as Code
- CI/CD automatizado

## 📄 Licença

Este projeto é pessoal e está disponível sob a licença MIT.