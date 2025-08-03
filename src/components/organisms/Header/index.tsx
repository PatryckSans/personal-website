import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Drawer } from 'antd'
import {
  MenuOutlined,
  UserOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons'
import {
  HeaderContainer,
  LogoContainer,
  DesktopNav,
  MobileMenuButton,
  ControlsContainer,
  DrawerControlsContainer,
  ThemeSectionContainer,
  StyledMenu,
  StyledSelect,
  StyledSelectMobile,
  StyledSwitch,
  StyledButton,
  StyledAvatar,
} from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header = ({ onThemeToggle, isDarkTheme = true }: HeaderProps) => {
  const { t, i18n } = useTranslation()
  const [drawerVisible, setDrawerVisible] = useState(false)

  const menuItems = useMemo(
    () => [
      { key: 'about', label: t('about') },
      { key: 'projects', label: t('projects') },
      { key: 'experience', label: t('experience') },
      { key: 'contact', label: t('contact') },
    ],
    [t]
  )

  const languageOptions = [
    { value: 'pt', label: 'PT-BR' },
    { value: 'en', label: 'EN-US' },
    { value: 'es', label: 'ES-ES' },
  ]

  const handleLanguageChange = (value: unknown) => {
    i18n.changeLanguage(value as string)
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <StyledAvatar size="large" icon={<UserOutlined />} />
        <span>Portfolio</span>
      </LogoContainer>

      <DesktopNav>
        <StyledMenu
          mode="horizontal"
          items={menuItems}
          overflowedIndicator={null}
          disabledOverflow
        />

        <ControlsContainer>
          <StyledSelect
            value={i18n.language}
            onChange={handleLanguageChange}
            options={languageOptions}
            size="small"
          />

          <StyledSwitch
            checked={isDarkTheme}
            onChange={onThemeToggle}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </ControlsContainer>
      </DesktopNav>

      <MobileMenuButton>
        <StyledButton
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
        />
      </MobileMenuButton>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={280}
      >
        <StyledMenu mode="vertical" items={menuItems} />

        <DrawerControlsContainer>
          <StyledSelectMobile
            value={i18n.language}
            onChange={handleLanguageChange}
            options={languageOptions}
            dropdownMatchSelectWidth={false}
          />

          <ThemeSectionContainer>
            <span>Tema:</span>
            <StyledSwitch
              checked={isDarkTheme}
              onChange={onThemeToggle}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </ThemeSectionContainer>
        </DrawerControlsContainer>
      </Drawer>
    </HeaderContainer>
  )
}
