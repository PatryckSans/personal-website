import styled from 'styled-components'
import { Menu, Select, Switch, Button, Avatar } from 'antd'
import { colors, breakpoints } from '@themes/index'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  /* background: rgba(255, 255, 255, 0.05); */
  background: transparent;
  backdrop-filter: blur(1px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 64px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${colors.text};
  font-weight: 600;
  font-size: 18px;
`

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const MobileMenuButton = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const DrawerControlsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ThemeSectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledMenu = styled(Menu)`
  background: transparent !important;
  border: none !important;
  color: ${colors.text} !important;
  flex: none !important;
  width: auto !important;
  min-width: 0 !important;

  &.ant-menu-horizontal {
    line-height: 46px !important;
    border-bottom: none !important;
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow: visible !important;

    .ant-menu-overflow {
      display: none !important;
    }

    .ant-menu-overflow-item {
      display: none !important;
    }

    > .ant-menu-item,
    > .ant-menu-submenu {
      position: static !important;
      display: inline-block !important;
      vertical-align: top !important;
      flex-shrink: 0 !important;
    }
  }

  .ant-menu-item {
    color: ${colors.text} !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    transition: all 0.3s ease !important;
    transform: translateY(0) scale(1) !important;

    &:hover {
      color: ${colors.textHighlight} !important;
      transform: translateY(4px) scale(1.1) !important;
    }
  }
`

export const StyledSelect = styled(Select)<{ width?: string }>`
  width: ${(props) => props.width || 'auto'};

  .ant-select-selector {
    background: rgba(255, 255, 255, 0.1) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    color: ${colors.text} !important;
  }

  .ant-select-selection-item {
    color: ${colors.text} !important;
  }

  .ant-select-arrow {
    color: ${colors.text} !important;
  }

  &:hover .ant-select-selector {
    border-color: ${colors.textHighlight} !important;
  }
`

export const StyledSelectMobile = styled(StyledSelect)`
  width: 100%;
`

export const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: ${colors.primary} !important;
  }
`

export const StyledButton = styled(Button)`
  color: ${colors.text} !important;
  border: none !important;

  &:hover {
    color: ${colors.textHighlight} !important;
    background: rgba(255, 255, 255, 0.1) !important;
  }
`

export const StyledAvatar = styled(Avatar)`
  background: ${colors.primary} !important;
`
