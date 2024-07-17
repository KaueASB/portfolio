import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import './global.css'
import './lib/i18n'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider storageKey="my-portfolio-theme" defaultTheme="light">
      <Toaster richColors />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
