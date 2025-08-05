# Frontend - Personal Portfolio Website

[![React](https://img.shields.io/badge/React-18.2+-61dafb?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2+-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646cff?logo=vite)](https://vitejs.dev/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5.12+-0170fe?logo=antdesign)](https://ant.design/)

Frontend moderno do portfólio pessoal desenvolvido com React 18, TypeScript e Vite. Implementa Atomic Design, animações interativas e suporte completo à internacionalização.

## 🎯 Visão Geral

Este frontend oferece uma experiência de usuário moderna e responsiva, com foco em performance, acessibilidade e manutenibilidade. Utiliza as melhores práticas de desenvolvimento React e TypeScript.

## 🚀 Tecnologias Principais

### Core
- **React 18.2+** - Framework principal com Concurrent Features
- **TypeScript 5.2+** - Type safety e melhor DX
- **Vite 5.0+** - Build tool ultra-rápido com HMR

### UI & Styling
- **Ant Design 5.12+** - Biblioteca de componentes enterprise
- **Styled Components 6.1+** - CSS-in-JS com theme support
- **Framer Motion 12.23+** - Animações fluidas e interativas

### Estado & Dados
- **React i18next 13.5+** - Internacionalização robusta
- **Axios 1.6+** - Cliente HTTP com interceptors
- **React Helmet Async 2.0+** - SEO e meta tags dinâmicas

### Desenvolvimento & Qualidade
- **Vitest 1.0+** - Framework de testes rápido
- **React Testing Library 14.1+** - Testes focados no usuário
- **ESLint 8.55+** - Linting avançado
- **Prettier 3.1+** - Formatação consistente
- **Husky 8.0+** - Git hooks automatizados

## 📁 Arquitetura do Projeto

```
src/
├── 🧩 components/              # Atomic Design
│   ├── atoms/                 # Componentes básicos
│   │   ├── Carousel3D/        # Carrossel 3D interativo
│   │   ├── MagicCard/         # Cards com efeitos mágicos
│   │   ├── StarField/         # Campo de estrelas animado
│   │   ├── TypingAnimation/   # Animação de digitação
│   │   └── ...
│   ├── molecules/             # Combinações de atoms
│   │   ├── SkillsTabBar/      # Barra de abas de skills
│   │   └── ...
│   └── organisms/             # Componentes complexos
│       ├── Header/            # Cabeçalho com navegação
│       ├── Hero/              # Seção principal
│       ├── About/             # Seção sobre
│       ├── Skills/            # Seção de habilidades
│       ├── Experience/        # Experiência profissional
│       ├── ProjectShowcase/   # Showcase de projetos
│       ├── Contact/           # Formulário de contato
│       └── Footer/            # Rodapé
├── 📄 pages/                  # Páginas da aplicação
│   └── MainPage/              # Página principal
├── 🎣 hooks/                  # Custom hooks
│   ├── useIsMobile.ts         # Detecção de dispositivo móvel
│   └── useScrollAnimation.ts  # Animações baseadas em scroll
├── 🔧 utils/                  # Funções utilitárias
├── 🎨 themes/                 # Configuração de temas
│   └── index.ts               # Tema claro/escuro
├── 📝 types/                  # Definições TypeScript
│   └── index.ts               # Tipos globais
├── ⚙️ config/                 # Configurações
│   └── personalData.ts        # Dados pessoais centralizados
├── 🌐 services/               # Serviços externos
│   └── api/                   # Configuração Axios
│       ├── index.ts           # Instância base
│       └── contact.ts         # API de contato
├── 🌍 i18n/                   # Internacionalização
│   ├── index.ts               # Configuração i18next
│   └── locales/               # Arquivos de tradução
│       ├── pt.json            # Português (padrão)
│       ├── en.json            # Inglês
│       └── es.json            # Espanhol
├── 🎨 styles/                 # Estilos globais
│   └── GlobalStyles.ts        # Reset CSS e estilos base
├── 🧪 test/                   # Configuração de testes
│   └── setup.ts               # Setup do Vitest
├── App.tsx                    # Componente raiz
└── main.tsx                   # Entry point
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- pnpm 8+ (recomendado) ou npm/yarn

### Instalação

```bash
# Clone o repositório (se não fez ainda)
git clone https://github.com/patryck-sans/personal-website.git
cd personal-website/frontend

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Variáveis de Ambiente

```env
# .env
VITE_API_BASE_URL=http://localhost:3001/api  # URL da API backend
VITE_APP_TITLE=Patryck Sans - Portfolio     # Título da aplicação
VITE_APP_DESCRIPTION=Portfolio pessoal      # Descrição para SEO
```

## 🎮 Scripts Disponíveis

```bash
# 🚀 Desenvolvimento
pnpm dev                # Servidor de desenvolvimento (http://localhost:5173)
pnpm dev --host         # Servidor acessível na rede local

# 🏗️ Build
pnpm build              # Build de produção otimizado
pnpm preview            # Preview do build de produção

# 🧪 Testes
pnpm test               # Executar testes
pnpm test:watch         # Testes em modo watch
pnpm test:ui            # Interface gráfica dos testes
pnpm test:coverage      # Relatório de cobertura

# 🔍 Qualidade de Código
pnpm lint               # Verificar problemas de linting
pnpm lint:fix           # Corrigir problemas automaticamente
pnpm format             # Formatar código com Prettier
pnpm type-check         # Verificar tipos TypeScript

# 📊 Análise
pnpm analyze            # Analisar bundle size
pnpm lighthouse         # Audit de performance
```

## 🎨 Sistema de Design

### Atomic Design
O projeto segue os princípios do Atomic Design para organização de componentes:

#### Atoms (Componentes Básicos)
- **Carousel3D** - Carrossel tridimensional para projetos
- **MagicCard** - Cards com efeitos hover mágicos
- **StarField** - Campo de estrelas animado para background
- **TypingAnimation** - Efeito de máquina de escrever
- **SpinnerOrbits** - Loading spinner com órbitas
- **ScrollToTop** - Botão de voltar ao topo

#### Molecules (Combinações)
- **SkillsTabBar** - Navegação por abas de habilidades

#### Organisms (Componentes Complexos)
- **Header** - Navegação principal com menu responsivo
- **Hero** - Seção de apresentação com animações
- **About** - Seção sobre com timeline interativa
- **Skills** - Showcase de habilidades técnicas
- **Experience** - Linha do tempo profissional
- **ProjectShowcase** - Galeria de projetos
- **Contact** - Formulário de contato integrado
- **Footer** - Rodapé com links sociais

### Temas
Sistema de temas dinâmico com suporte a:
- 🌞 **Tema Claro** - Design limpo e profissional
- 🌙 **Tema Escuro** - Experiência noturna confortável
- 🎨 **Cores Personalizadas** - Paleta consistente
- 📱 **Responsividade** - Breakpoints otimizados

## 🌍 Internacionalização

### Idiomas Suportados
- 🇧🇷 **Português** - Idioma padrão
- 🇺🇸 **Inglês** - Tradução completa
- 🇪🇸 **Espanhol** - Tradução completa

### Funcionalidades i18n
- **Detecção Automática** - Baseada no navegador
- **Persistência** - Salva preferência no localStorage
- **Fallback Inteligente** - Português como backup
- **Lazy Loading** - Carregamento sob demanda
- **Pluralização** - Suporte a formas plurais
- **Interpolação** - Variáveis dinâmicas

### Uso da Internacionalização

```typescript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </div>
  );
}
```

## 📱 Responsividade

### Breakpoints
```typescript
const breakpoints = {
  xs: '480px',    // Smartphones pequenos
  sm: '768px',    // Tablets portrait
  md: '1024px',   # Tablets landscape
  lg: '1200px',   # Desktops pequenos
  xl: '1440px',   # Desktops grandes
  xxl: '1920px'   # Monitores ultra-wide
};
```

### Estratégia Mobile-First
- Design inicial para dispositivos móveis
- Progressive enhancement para telas maiores
- Touch-friendly interactions
- Otimização de performance para 3G

## 🧪 Testes

### Estratégia de Testes
- **Unit Tests** - Componentes isolados
- **Integration Tests** - Fluxos de usuário
- **Visual Regression** - Consistência visual
- **Accessibility Tests** - Conformidade WCAG

### Configuração
```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      threshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    }
  }
});
```

## 🚀 Performance

### Otimizações Implementadas
- **Code Splitting** - Divisão automática do bundle
- **Lazy Loading** - Carregamento sob demanda
- **Image Optimization** - WebP com fallback
- **Tree Shaking** - Eliminação de código morto
- **Bundle Analysis** - Monitoramento do tamanho
- **Service Worker** - Cache inteligente

### Métricas Alvo
- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **First Input Delay** < 100ms
- **Lighthouse Score** > 90

## 🔒 Segurança

### Medidas Implementadas
- **Content Security Policy** - Prevenção XSS
- **Input Sanitization** - Limpeza de dados
- **HTTPS Only** - Comunicação segura
- **Dependency Scanning** - Vulnerabilidades conhecidas
- **Environment Variables** - Secrets management

## 📊 Monitoramento

### Analytics
- **Google Analytics 4** - Comportamento do usuário
- **Core Web Vitals** - Métricas de performance
- **Error Tracking** - Monitoramento de erros
- **User Feedback** - Formulário de contato

## 🔧 Configuração de Desenvolvimento

### VS Code Extensions Recomendadas
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Git Hooks (Husky)
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## 🚀 Deploy

### Build de Produção
```bash
# Build otimizado
pnpm build

# Arquivos gerados em dist/
# - HTML minificado
# - CSS otimizado
# - JS com code splitting
# - Assets otimizados
```

### Plataformas Suportadas
- **Vercel** - Deploy automático via Git
- **Netlify** - Build e deploy contínuo
- **AWS S3 + CloudFront** - Hospedagem estática
- **GitHub Pages** - Deploy gratuito

## 📚 Recursos Adicionais

### Documentação
- [React 18 Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [Ant Design Components](https://ant.design/components)

### Ferramentas de Desenvolvimento
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🤝 Contribuição

### Padrões de Código
- **Naming Convention** - camelCase para variáveis, PascalCase para componentes
- **File Structure** - Um componente por arquivo
- **Import Order** - React, libraries, components, utils
- **Component Structure** - Props, hooks, handlers, render

### Pull Request Guidelines
1. Fork o repositório
2. Crie uma branch descritiva
3. Implemente as mudanças
4. Adicione testes se necessário
5. Execute os lints e testes
6. Abra um Pull Request

---

<div align="center">
  <strong>Frontend desenvolvido com ❤️ e ☕</strong>
  <br>
  <sub>Powered by React 18 + TypeScript + Vite</sub>
</div>