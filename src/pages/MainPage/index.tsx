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
import { InteractiveCat, Waves } from '@components/atoms'

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
        <InteractiveCat />
        <Contact />
      </Content>
      <Waves
        colors={[
          'rgba(37, 21, 37, 0.144)',
          'rgba(37, 21, 37, 0.247)',
          'rgba(37, 21, 37, 0.493)',
          'rgba(37, 21, 37, 0.603)',
        ]}
      />
      <Footer />
    </Layout>
  )
}
