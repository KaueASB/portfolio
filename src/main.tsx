import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { App } from './app'
import './global.css'
import './lib/i18n'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider storageKey="my-portfolio-theme" defaultTheme="light">
        <Toaster richColors />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)