import { ThemeConfig } from 'antd'

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#80c7f9',
    colorBgBase: '#000000',
    colorTextBase: '#FFFFFF',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 16,
  },
  components: {
    Layout: {
      bodyBg: 'linear-gradient(135deg, #6B46C1 0%, #000000 100%)',
      headerBg: 'transparent',
    },
  },
}

export const colors = {
  primary: '#6B46C1',
  secondary: '#80c7f9',
  accent: '#10B981',
  background: 'linear-gradient(180deg,#430559,#65177a 57%,#000)',
  cardBg: '#1F2937',
  text: '#FFFFFF',
  textSubtitle: '#E5E7EB',
  textMuted: '#9CA3AF',
  textHighlight: '#80c7f9',
  waves: [
    'rgba(37, 21, 37, 0.356)',
    'rgba(37, 21, 37, 0.397)',
    'rgba(37, 21, 37, 0.596)',
    'rgba(37, 21, 37, 0.801)',
  ],
}

export const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '20px',
}

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
}
