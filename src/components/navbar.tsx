import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import { Menu } from "lucide-react";

import { ThemeToggle } from "./theme/theme-toggle";
import { TranslateSwitch } from "./translate/translate-switch";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function NavBar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavigation = (section: string) => {
    if (location.pathname === '/') {
      scrollToSection(section)
    } else {
      // Em outra página: volta para a home e depois rola até a seção
      navigate('/')
      setTimeout(() => scrollToSection(section), 100)
    }
  }

  const handleProjectsNavigation = () => {
    if (location.pathname === '/') {
      scrollToSection('projects')
    } else {
      navigate('/projects')
    }
  }

  const links = [
    { label: t('header.nav.about'), onClick: () => handleNavigation('about') },
    { label: t('header.nav.project'), onClick: handleProjectsNavigation },
    { label: t('header.nav.contact'), onClick: () => handleNavigation('contact') },
  ]

  return (
    <nav className="flex gap-3 md:gap-6 items-center">
      <div className="hidden md:flex gap-6 items-center">
        {links.map((link) => (
          <button
            key={link.label}
            onClick={link.onClick}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </button>
        ))}
      </div>

      <TranslateSwitch />
      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          {links.map((link) => (
            <DropdownMenuItem key={link.label} onClick={link.onClick}>
              {link.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
