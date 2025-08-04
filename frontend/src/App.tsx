import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from '@pages/MainPage'
import { StarryBackground, PageLoader } from '@components/atoms'
import { GlobalStyles } from '@/styles/GlobalStyles'

function App() {
  const [isLoading, setIsLoading] = useState(true)



  if (isLoading) {
    return (
      <>
        <GlobalStyles />
        <PageLoader onComplete={() => setIsLoading(false)} />
      </>
    )
  }

  return (
    <>
      <GlobalStyles />
      <StarryBackground />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
