import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";

import { ThemeToggle } from "./theme/theme-toggle";
import { TranslateSwitch } from "./translate/translate-switch";

export function NavBar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (section: string) => {
    if (location.pathname === '/') {
      // Se estamos na home, faz scroll para a seção
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Se estamos em outra página, navega para home e depois para a seção
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const handleProjectsNavigation = () => {
    if (location.pathname === '/') {
      // Se estamos na home, faz scroll para a seção de projetos
      const element = document.getElementById('projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Se estamos em outra página, navega para a página de projetos
      navigate('/projects')
    }
  }

  return (
    <nav className="hidden md:flex gap-4 items-center">
      <button 
        onClick={() => handleNavigation('about')}
        className="hover:underline underline-offset-4 transition-colors"
      >
        {t('header.nav.about')}
      </button>

      <button 
        onClick={handleProjectsNavigation}
        className="hover:underline underline-offset-4 transition-colors"
      >
        {t('header.nav.project')}
      </button>
      
      <button 
        onClick={() => handleNavigation('contact')}
        className="hover:underline underline-offset-4 transition-colors"
      >
        {t('header.nav.contact')}
      </button>

      <TranslateSwitch />
      <ThemeToggle />
    </nav>
  )
}