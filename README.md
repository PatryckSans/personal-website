# Personal Portfolio Website - Patryck Sans

Site pessoal de portfólio de Patryck Sans, Desenvolvedor Full Stack com foco em Front-end. O projeto apresenta uma arquitetura moderna separada entre frontend React e backend serverless na AWS.

## 👨‍💻 Sobre o Desenvolvedor

**Patryck Sans** - Desenvolvedor Full Stack com foco em Front-end, grande apreciador da programação desde os 15 anos. Atualmente trabalha como Analista de Desenvolvimento na ST IT Cloud, focando em soluções de UX Design e Front-end Web.

### Formação
- **Análise e Desenvolvimento de Sistemas** - Centro Universitário Senac Santo Amaro (2022-2025)
- **Técnico em Automação Industrial** - Tecnólogo Takashi Morita (2018-2020)

### Experiência
- **Analista de Desenvolvimento** na ST IT Cloud (2021 - Presente)
- Especialização em React, UX/UI Design e desenvolvimento web
- Projetos de IoT incluindo a criação de uma "Harpa Laser"

## 🏗️ Arquitetura

### Frontend
- **React 18** com TypeScript
- **Vite** como bundler e ferramenta de desenvolvimento
- **Ant Design** como biblioteca de UI
- **Styled Components** para estilização
- **React i18next** para internacionalização
- Seguindo princípios do **Atomic Design**
- Componentes reutilizáveis e responsivos

### Backend (Serverless)
- **AWS Lambda** para funções serverless
- **API Gateway** para endpoints REST
- **DynamoDB** para banco de dados
- **Infrastructure as Code** com Terraform
- **CloudFormation** para deploy automatizado

## 📁 Estrutura do Projeto

```
personal-website/
├── frontend/           # Aplicação React
│   ├── src/
│   │   ├── components/ # Atomic Design (atoms, molecules, organisms)
│   │   ├── pages/      # Páginas da aplicação
│   │   ├── hooks/      # Custom hooks
│   │   ├── services/   # APIs e serviços
│   │   ├── i18n/       # Internacionalização (PT/EN)
│   │   ├── config/     # Configurações e dados pessoais
│   │   ├── themes/     # Temas e estilos
│   │   └── styles/     # Estilos globais
│   ├── public/         # Assets estáticos e imagens
│   └── package.json    # Dependências do frontend
├── backend/            # Funções serverless AWS
│   ├── src/
│   │   └── functions/  # Funções Lambda (contato)
│   ├── template.yaml   # SAM template
│   └── deploy.sh       # Script de deploy
└── infrastructure/     # Infrastructure as Code
    ├── modules/        # Módulos Terraform
    ├── environments/   # Configurações por ambiente
    └── main.tf         # Configuração principal
```

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+
- pnpm (gerenciador de pacotes)
- AWS CLI configurado (para deploy)

### Frontend

```bash
# Clone o repositório
git clone <repository-url>
cd personal-website

# Entre na pasta do frontend
cd frontend

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

### Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
pnpm install

# Deploy das funções Lambda
./deploy.sh
```

### Infrastructure

```bash
# Entre na pasta de infraestrutura
cd infrastructure

# Inicialize o Terraform
terraform init

# Planeje as mudanças
terraform plan

# Aplique a infraestrutura
terraform apply
```

## 🎆 Funcionalidades

- **Design Responsivo** - Adapta-se a diferentes tamanhos de tela
- **Animações Interativas** - Efeitos visuais e transições suaves
- **Internacionalização** - Suporte a múltiplos idiomas (PT/EN)
- **Tema Escuro/Claro** - Alternancia entre temas
- **Formulário de Contato** - Integrado com backend serverless
- **SEO Otimizado** - Meta tags e estrutura semântica
- **Performance** - Carregamento rápido e otimizado

## 🚀 Deploy

### Frontend
- Build estático deployável em qualquer CDN
- Configurado para **Vercel** e **Netlify**
- Otimizações automáticas de performance

### Backend
- Deploy serverless na **AWS**
- **Infrastructure as Code** com Terraform
- **CI/CD** automatizado via GitHub Actions
- Monitoramento com CloudWatch

## 📊 Tecnologias Utilizadas

### Frontend
- React 18, TypeScript, Vite
- Styled Components, Ant Design
- React i18next, React Hook Form
- Framer Motion (animações)

### Backend
- AWS Lambda, API Gateway
- DynamoDB, CloudFormation
- Node.js, TypeScript

### DevOps
- Terraform, GitHub Actions
- AWS CloudWatch, AWS CloudTrail
- Docker (desenvolvimento local)

## 📁 Estrutura de Dados

O projeto utiliza uma estrutura centralizada de dados pessoais em `frontend/src/config/personalData.ts`, facilitando a manutenção e atualização das informações.

## 💬 Contato

- **Email**: [patrycksans@gmail.com](mailto:patrycksans@gmail.com)
- **LinkedIn**: [linkedin.com/in/patryck-sans](https://linkedin.com/in/patryck-sans)
- **GitHub**: [github.com/patryck-sans](https://github.com/patryck-sans)

## 📋 Licença

Este projeto é pessoal e está disponível sob a licença MIT.

---

**Desenvolvido com ❤️ por Patryck Sans**