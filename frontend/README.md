# Frontend - Personal Portfolio Website

Frontend do site pessoal de portfólio desenvolvido com React, TypeScript e Ant Design.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** como bundler
- **Ant Design** como biblioteca de UI
- **Styled Components** para estilização
- **React Router DOM** para roteamento
- **React i18next** para internacionalização
- **Axios** para requisições HTTP
- **Vitest** e **React Testing Library** para testes
- **ESLint** e **Prettier** para qualidade de código
- **Husky** e **lint-staged** para hooks de commit

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes organizados por Atomic Design
│   ├── atoms/          # Componentes básicos
│   ├── molecules/      # Combinações de atoms
│   └── organisms/      # Componentes complexos
├── pages/              # Páginas da aplicação
├── views/              # Views específicas
├── hooks/              # Custom hooks
├── utils/              # Funções utilitárias
├── types/              # Definições de tipos TypeScript
├── themes/             # Configuração de tema
├── config/             # Configurações gerais
├── services/           # Serviços e APIs
│   └── api/           # Instância do Axios
├── i18n/              # Configuração de internacionalização
│   └── locales/       # Arquivos de tradução
└── styles/            # Estilos globais
```

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 18+
- pnpm

### Instalação

```bash
# Entre na pasta do frontend
cd frontend

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview do build
pnpm preview

# Linting
pnpm lint

# Formatação
pnpm format

# Testes
pnpm test
```

## 🌐 Internacionalização

O projeto suporta múltiplos idiomas através do react-i18next:

- **Português** (padrão)
- **Inglês** (fallback)

Os arquivos de tradução estão em `src/i18n/locales/`.

## 🔧 Configuração da API

A instância do Axios está configurada em `src/services/api/index.ts` com:

- Base URL configurável via variável de ambiente
- Interceptadores para tratamento de erros
- Timeout de 10 segundos

### Variáveis de Ambiente

```env
VITE_API_BASE_URL=http://localhost:3001/api
```

## 📱 Responsividade

Breakpoints configurados:
- **Mobile**: até 768px
- **Tablet**: até 1024px
- **Desktop**: acima de 1200px

## 🧪 Testes

Configuração com Vitest e React Testing Library:

```bash
# Executar testes
pnpm test

# Testes em modo watch
pnpm test --watch

# Coverage
pnpm test --coverage
```

## 🚀 Deploy

```bash
# Build de produção
pnpm build

# Os arquivos estarão na pasta dist/
```