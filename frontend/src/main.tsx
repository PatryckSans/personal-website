import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { HelmetProvider } from 'react-helmet-async'
import App from '@/App'
import { theme } from '@themes/index'
import '@i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ConfigProvider theme={theme}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)