import { createGlobalStyle } from 'styled-components'
import { colors } from '@themes/index'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'JetBrains Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.text};
    background: ${colors.background} !important;
    background-attachment: fixed !important;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  .ant-layout {
    background: transparent !important;
  }

  .ant-layout-content {
    background: transparent !important;
  }

  /* Scrollbar moderna */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, ${colors.accent}, ${colors.secondary});
    transform: scale(1.1);
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${colors.secondary} rgba(0, 0, 0, 0.2);
  }

  /* Estilos para dropdown do Select */
  .ant-select-dropdown {
    background: rgba(0, 0, 0, 0.9) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    backdrop-filter: blur(10px) !important;

    .ant-select-item {
      color: ${colors.text} !important;
    }

    .ant-select-item-option-selected {
      background-color: ${colors.primary} !important;
      color: ${colors.text} !important;
    }

    .ant-select-item-option-active {
      background-color: rgba(59, 130, 246, 0.3) !important;
      color: ${colors.text} !important;
    }

    .ant-select-item-option:hover {
      background-color: rgba(59, 130, 246, 0.3) !important;
      color: ${colors.text} !important;
    }
  }
`
