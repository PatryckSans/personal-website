import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import { ScrollToTopButton } from './ScrollToTop.styles'
import { colors } from '@/themes'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <ScrollToTopButton>
      <Button
        type="default"
        shape="circle"
        color={colors.cardBg}
        icon={<ArrowUpOutlined />}
        size="large"
        onClick={scrollToTop}
      />
    </ScrollToTopButton>
  )
}
