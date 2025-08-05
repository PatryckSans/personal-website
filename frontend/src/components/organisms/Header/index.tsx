import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Drawer } from 'antd'
import { MenuOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'
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
} from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header = ({
  onThemeToggle,
  isDarkTheme = true,
  isThemeDisabled = false,
}: HeaderProps) => {
  const { t, i18n } = useTranslation()
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const menuItems = useMemo(
    () => [
      { key: 'about', label: t('about-title') },
      { key: 'skills', label: t('skills') },
      { key: 'experience', label: t('experience') },
      { key: 'projects', label: t('projects') },
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setDrawerVisible(false)
  }

  const handleMenuClick = ({ key }: { key: string }) => {
    scrollToSection(key)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact']
      const headerHeight = 80

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderContainer>
      <LogoContainer>
        <span>{'</>'} Patryck Sans</span>
      </LogoContainer>

      <DesktopNav>
        <StyledMenu
          mode="horizontal"
          items={menuItems}
          overflowedIndicator={null}
          disabledOverflow
          onClick={handleMenuClick}
          selectedKeys={[activeSection]}
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
            disabled={isThemeDisabled}
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
        <StyledMenu
          mode="vertical"
          items={menuItems}
          onClick={handleMenuClick}
          selectedKeys={[activeSection]}
        />

        <DrawerControlsContainer>
          <StyledSelectMobile
            value={i18n.language}
            onChange={handleLanguageChange}
            options={languageOptions}
            dropdownMatchSelectWidth={false}
          />

          <ThemeSectionContainer>
            <span>{t('theme')}:</span>
            <StyledSwitch
              checked={isDarkTheme}
              onChange={onThemeToggle}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              disabled={isThemeDisabled}
            />
          </ThemeSectionContainer>
        </DrawerControlsContainer>
      </Drawer>
    </HeaderContainer>
  )
}
