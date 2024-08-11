import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from "./styles/GlobalStyles.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
      <App />
  </StrictMode>
)
