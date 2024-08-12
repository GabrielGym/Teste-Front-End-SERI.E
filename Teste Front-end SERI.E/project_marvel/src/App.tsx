import { Route, Routes } from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { HeroPage } from './pages/HeroPage'

function App() {

  return (
    <Routes>
      <Route path='' element={<HomePage />}/>
      <Route path="/HeroPage/:heroName" element={<HeroPage />}/>
    </Routes>
  )
}

export default App
