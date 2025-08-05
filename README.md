# Personal Portfolio Website - Patryck Sans

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://github.com/patryck-sans/personal-website)
[![Frontend](https://img.shields.io/badge/frontend-React%2018-61dafb)](./frontend)
[![Backend](https://img.shields.io/badge/backend-AWS%20Lambda-ff9900)](./backend)
[![Infrastructure](https://img.shields.io/badge/infrastructure-Terraform-623ce4)](./infrastructure)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Site pessoal de portfólio moderno com arquitetura serverless, desenvolvido com React 18, TypeScript e AWS. Apresenta design responsivo, animações interativas e suporte a múltiplos idiomas.

## 🚀 Demo

**[Ver Site Ao Vivo](https://patrycksans.dev)** | **[Documentação da API](./backend/README.md)**

## 👨💻 Sobre o Desenvolvedor

**Patryck Sans** - Desenvolvedor Full Stack especializado em Front-end, com paixão pela programação desde os 15 anos. Atualmente Analista de Desenvolvimento na ST IT Cloud, focando em soluções de UX Design e desenvolvimento web moderno.

### 🎓 Formação
- **Análise e Desenvolvimento de Sistemas** - Centro Universitário Senac Santo Amaro (2022-2025)
- **Técnico em Automação Industrial** - Tecnólogo Takashi Morita (2018-2020)

### 💼 Experiência
- **Analista de Desenvolvimento** na ST IT Cloud (2021 - Presente)
- Especialização em React, TypeScript, UX/UI Design
- Projetos inovadores incluindo IoT e "Harpa Laser"

## 🏗️ Arquitetura

### 🎨 Frontend ([Documentação](./frontend/README.md))
- **React 18** com TypeScript para type safety
- **Vite** como bundler moderno e rápido
- **Ant Design** + **Styled Components** para UI consistente
- **Framer Motion** para animações fluidas
- **React i18next** para internacionalização (PT/EN/ES)
- **Atomic Design** para organização de componentes
- **Vitest** + **React Testing Library** para testes
- **ESLint** + **Prettier** + **Husky** para qualidade de código

### ⚡ Backend ([Documentação](./backend/README.md))
- **AWS Lambda** com Node.js e TypeScript
- **API Gateway** para endpoints REST seguros
- **Amazon SES** para envio de emails
- **AWS SAM** para deploy e gerenciamento
- **CORS** configurado para segurança

### 🏗️ Infrastructure ([Documentação](./infrastructure/README.md))
- **Terraform** para Infrastructure as Code
- **AWS S3** + **CloudFront** para hospedagem e CDN
- **Route 53** para gerenciamento de domínio
- **AWS Certificate Manager** para SSL/TLS
- **CloudWatch** para monitoramento e logs
- Ambientes separados (dev/prod)

## 📁 Estrutura do Projeto

```
personal-website/
├── 🎨 frontend/                    # Aplicação React
│   ├── src/
│   │   ├── components/            # Atomic Design
│   │   │   ├── atoms/            # Componentes básicos
│   │   │   ├── molecules/        # Combinações de atoms
│   │   │   └── organisms/        # Componentes complexos
│   │   ├── pages/                # Páginas da aplicação
│   │   ├── hooks/                # Custom hooks React
│   │   ├── services/api/         # Configuração Axios
│   │   ├── i18n/locales/         # Traduções (PT/EN/ES)
│   │   ├── config/               # Dados pessoais centralizados
│   │   ├── themes/               # Configuração de temas
│   │   ├── styles/               # Estilos globais
│   │   ├── types/                # Definições TypeScript
│   │   └── utils/                # Funções utilitárias
│   ├── public/                   # Assets estáticos
│   │   ├── images/               # Imagens do portfólio
│   │   └── assets/               # Outros recursos
│   ├── .env.example              # Variáveis de ambiente
│   └── README.md                 # Documentação frontend
├── ⚡ backend/                     # Funções serverless
│   ├── src/functions/contact/    # Função Lambda de contato
│   ├── template.yaml             # AWS SAM template
│   ├── deploy.sh                 # Script de deploy
│   └── README.md                 # Documentação backend
├── 🏗️ infrastructure/              # Infrastructure as Code
│   ├── modules/                  # Módulos Terraform reutilizáveis
│   │   ├── backend/              # Recursos Lambda + API Gateway
│   │   └── frontend/             # Recursos S3 + CloudFront
│   ├── environments/             # Configurações por ambiente
│   │   ├── dev/                  # Variáveis de desenvolvimento
│   │   └── prod/                 # Variáveis de produção
│   ├── main.tf                   # Configuração principal
│   └── README.md                 # Documentação infraestrutura
├── 🔧 .husky/                      # Git hooks
├── 📦 package.json                # Workspace configuration
├── 🚀 deploy.sh                   # Script de deploy completo
└── 📖 README.md                   # Este arquivo
```

## 🛠️ Desenvolvimento

### 📋 Pré-requisitos

| Ferramenta | Versão | Descrição |
|------------|--------|-----------|
| **Node.js** | 18+ | Runtime JavaScript |
| **pnpm** | 8+ | Gerenciador de pacotes |
| **AWS CLI** | 2+ | Interface de linha de comando AWS |
| **Terraform** | 1.0+ | Infrastructure as Code |
| **Git** | 2.30+ | Controle de versão |

### 🚀 Início Rápido

```bash
# 1. Clone o repositório
git clone https://github.com/patryck-sans/personal-website.git
cd personal-website

# 2. Instale as dependências (workspace)
pnpm install

# 3. Configure as variáveis de ambiente
cp frontend/.env.example frontend/.env

# 4. Inicie o desenvolvimento
pnpm dev
```

### 🎯 Scripts Principais

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento
pnpm build            # Build de produção
pnpm preview          # Preview do build
pnpm test             # Executa testes
pnpm lint             # Verifica qualidade do código
pnpm format           # Formata código

# Deploy
./deploy.sh dev       # Deploy completo (desenvolvimento)
./deploy.sh prod      # Deploy completo (produção)
```

### 📚 Desenvolvimento por Módulo

#### Frontend
```bash
cd frontend
pnpm install          # Instalar dependências
pnpm dev              # Servidor de desenvolvimento (http://localhost:5173)
pnpm build            # Build para produção
pnpm test             # Executar testes
```

#### Backend
```bash
cd backend
npm install           # Instalar dependências
npm run build         # Compilar TypeScript
npm run local         # Executar localmente com SAM
./deploy.sh           # Deploy para AWS
```

#### Infrastructure
```bash
cd infrastructure
terraform init        # Inicializar Terraform
terraform plan        # Planejar mudanças
terraform apply       # Aplicar infraestrutura
```

## ✨ Funcionalidades

### 🎨 Interface e UX
- ✅ **Design Responsivo** - Mobile-first, adapta-se a todos os dispositivos
- ✅ **Animações Interativas** - Framer Motion para transições fluidas
- ✅ **Tema Escuro/Claro** - Alternância dinâmica de temas
- ✅ **Componentes Reutilizáveis** - Atomic Design para consistência
- ✅ **Carregamento Otimizado** - Lazy loading e code splitting

### 🌍 Internacionalização
- ✅ **Múltiplos Idiomas** - Português, Inglês e Espanhol
- ✅ **Detecção Automática** - Baseada no navegador do usuário
- ✅ **Fallback Inteligente** - Português como idioma padrão

### 📧 Comunicação
- ✅ **Formulário de Contato** - Integrado com AWS SES
- ✅ **Validação Robusta** - Validação client-side e server-side
- ✅ **Feedback Visual** - Estados de loading e sucesso/erro

### 🔍 SEO e Performance
- ✅ **SEO Otimizado** - Meta tags dinâmicas e estrutura semântica
- ✅ **Sitemap XML** - Indexação otimizada para motores de busca
- ✅ **Performance Score 90+** - Otimizações de carregamento
- ✅ **PWA Ready** - Service worker e manifest configurados

### 🛡️ Segurança
- ✅ **HTTPS Obrigatório** - SSL/TLS em todos os ambientes
- ✅ **CORS Configurado** - Proteção contra requisições maliciosas
- ✅ **Sanitização de Dados** - Validação e limpeza de inputs
- ✅ **Rate Limiting** - Proteção contra spam no formulário

## 🚀 Deploy

### 🎯 Deploy Automatizado

```bash
# Deploy completo (recomendado)
./deploy.sh dev     # Ambiente de desenvolvimento
./deploy.sh prod    # Ambiente de produção
```

### 📋 Processo de Deploy

1. **Backend**: Compila e faz deploy das funções Lambda
2. **Infrastructure**: Provisiona recursos AWS com Terraform
3. **Frontend**: Build e upload para S3 + invalidação CloudFront
4. **Verificação**: Testa endpoints e conectividade

### 🌐 Ambientes

| Ambiente | URL | Descrição |
|----------|-----|-----------|
| **Desenvolvimento** | `dev.patrycksans.dev` | Testes e desenvolvimento |
| **Produção** | `patrycksans.dev` | Site oficial |

### 📊 Monitoramento

- **CloudWatch Logs** - Logs das funções Lambda
- **CloudWatch Metrics** - Métricas de performance
- **AWS X-Ray** - Tracing distribuído
- **CloudFront Analytics** - Estatísticas de CDN

## 🛠️ Stack Tecnológico

### 🎨 Frontend
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 18.2+ | Framework principal |
| **TypeScript** | 5.2+ | Type safety |
| **Vite** | 5.0+ | Build tool e dev server |
| **Ant Design** | 5.12+ | Biblioteca de componentes |
| **Styled Components** | 6.1+ | CSS-in-JS |
| **Framer Motion** | 12.23+ | Animações |
| **React i18next** | 13.5+ | Internacionalização |
| **Axios** | 1.6+ | Cliente HTTP |
| **React Helmet** | 2.0+ | SEO e meta tags |

### ⚡ Backend
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **AWS Lambda** | Node.js 18 | Funções serverless |
| **API Gateway** | v2 | Endpoints REST |
| **Amazon SES** | v3 | Envio de emails |
| **AWS SAM** | 1.0+ | Deploy e gerenciamento |
| **TypeScript** | 5.0+ | Type safety |

### 🏗️ Infrastructure
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Terraform** | 1.0+ | Infrastructure as Code |
| **AWS S3** | - | Hospedagem estática |
| **CloudFront** | - | CDN global |
| **Route 53** | - | DNS e domínio |
| **Certificate Manager** | - | SSL/TLS |
| **CloudWatch** | - | Monitoramento |

### 🔧 DevOps & Qualidade
| Ferramenta | Uso |
|------------|-----|
| **ESLint** | Linting de código |
| **Prettier** | Formatação de código |
| **Husky** | Git hooks |
| **Vitest** | Testes unitários |
| **GitHub Actions** | CI/CD |
| **pnpm** | Gerenciamento de pacotes |

## 📊 Estrutura de Dados

### 🗂️ Configuração Centralizada

Todos os dados pessoais estão centralizados em [`frontend/src/config/personalData.ts`](./frontend/src/config/personalData.ts):

```typescript
export const personalData = {
  profile: { /* Informações pessoais */ },
  experience: [ /* Experiências profissionais */ ],
  education: [ /* Formação acadêmica */ ],
  skills: { /* Habilidades técnicas */ },
  projects: [ /* Projetos desenvolvidos */ ],
  contact: { /* Informações de contato */ }
};
```

### 🔄 Vantagens da Centralização
- ✅ **Manutenção Simplificada** - Um único local para atualizações
- ✅ **Consistência** - Dados sincronizados em toda aplicação
- ✅ **Type Safety** - Tipagem TypeScript para todos os dados
- ✅ **Reutilização** - Fácil acesso em qualquer componente

### 🌐 Internacionalização
As traduções estão organizadas em [`frontend/src/i18n/locales/`](./frontend/src/i18n/locales/):
- `pt.json` - Português (padrão)
- `en.json` - Inglês
- `es.json` - Espanhol

## 🤝 Contribuição

Este é um projeto pessoal, mas sugestões e feedback são sempre bem-vindos!

### 📝 Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 🐛 Reportar Bugs
Encontrou um bug? [Abra uma issue](https://github.com/patryck-sans/personal-website/issues) com:
- Descrição detalhada do problema
- Passos para reproduzir
- Screenshots (se aplicável)
- Informações do ambiente (browser, OS, etc.)

## 📞 Contato

| Canal | Link | Descrição |
|-------|------|-----------|
| 📧 **Email** | [patrycksans@gmail.com](mailto:patrycksans@gmail.com) | Contato direto |
| 💼 **LinkedIn** | [linkedin.com/in/patryck-sans](https://linkedin.com/in/patrycksans) | Perfil profissional |
| 🐙 **GitHub** | [github.com/patryck-sans](https://github.com/patrycksans) | Repositórios |
| 🌐 **Website** | [patrycksans.dev](https://patrycksans.dev) | Portfólio online |

## 📋 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- **React Team** - Pelo framework incrível
- **AWS** - Pela infraestrutura serverless
- **Ant Design** - Pelos componentes elegantes
- **Vercel** - Pela plataforma de deploy
- **Comunidade Open Source** - Por todas as bibliotecas utilizadas

---

<div align="center">
  <strong>Desenvolvido com ❤️ por Patryck Sans</strong>
  <br>
  <sub>Feito no Brasil 🇧🇷</sub>
</div>