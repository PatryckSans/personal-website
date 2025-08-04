import { useState } from 'react'
import { Layout } from 'antd'
import {
  Header,
  Hero,
  Skills,
  Experience,
  Contact,
  About,
  Footer,
} from '@components/organisms'
import { Waves } from '@components/atoms'

const { Content } = Layout

export const MainPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const handleThemeToggle = (checked: boolean) => {
    setIsDarkTheme(checked)
  }

  return (
    <Layout>
      <Header onThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />
      <Content>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </Content>
      <Waves
        colors={[
          'rgba(37, 21, 37, 0.356)',
          'rgba(37, 21, 37, 0.397)',
          'rgba(37, 21, 37, 0.596)',
          'rgba(37, 21, 37, 0.801)',
        ]}
      />
      <Footer />
    </Layout>
  )
}
