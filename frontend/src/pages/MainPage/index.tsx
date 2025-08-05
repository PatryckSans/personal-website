import { useState } from 'react'
import { Layout, Modal } from 'antd'
import {
  Header,
  Hero,
  Skills,
  Experience,
  Contact,
  About,
  Footer,
} from '@components/organisms'
import { Waves, ScrollAnimation, ScrollToTop } from '@components/atoms'
import { SEO } from '@components/SEO'
import { colors } from '@/themes'
import ProjectShowcase from '@/components/organisms/ProjectShowcase'

const { Content } = Layout

export const MainPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [isThemeDisabled, setIsThemeDisabled] = useState(false)

  const handleThemeToggle = (checked: boolean) => {
    if (!checked && !isThemeDisabled) {
      Modal.warning({
        title: '🤔 Sério mesmo?',
        content:
          'Ninguém hoje em dia usa White Mode, reveja seu gosto e reflita suas escolhas',
        okText: 'Entendi...',
        centered: true,
      })

      setTimeout(() => {
        setIsDarkTheme(true)
        setIsThemeDisabled(true)
      }, 1000)
    }
  }

  return (
    <Layout>
      <SEO />
      <Header
        onThemeToggle={handleThemeToggle}
        isDarkTheme={isDarkTheme}
        isThemeDisabled={isThemeDisabled}
      />
      <Content>
        <Hero />
        <ScrollAnimation delay={0.2}>
          <About />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <Experience />
        </ScrollAnimation>
        <ScrollAnimation delay={0.5}>
          <ProjectShowcase />
        </ScrollAnimation>
        <ScrollAnimation delay={0.6}>
          <Contact />
        </ScrollAnimation>
      </Content>
      <Waves colors={colors.waves} />
      <Footer />
      <ScrollToTop />
    </Layout>
  )
}
