import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/ibm-plex-mono"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="font-mono">
      <App />
    </div>
  </StrictMode>,
)
