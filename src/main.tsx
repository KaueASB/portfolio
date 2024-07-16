import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './global.css'

import { ThemeProvider } from '@/components/theme/theme-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider storageKey="my-portfolio-theme" defaultTheme="dark">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
