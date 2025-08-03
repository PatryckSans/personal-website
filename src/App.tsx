import { Routes, Route } from 'react-router-dom'
import { MainPage } from '@pages/MainPage'
import { GlobalStyles } from './styles/GlobalStyles'
import { StarryBackground } from '@components/atoms/StarryBackground'

function App() {
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