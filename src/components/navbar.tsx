import { useTranslation } from "react-i18next";

import { ThemeToggle } from "./theme/theme-toggle";
import { TranslateSwitch } from "./translate/translate-switch";

export function NavBar() {
  const { t } = useTranslation()

  return (
    <nav className="hidden md:flex gap-4 items-center">
      <a href="#about" className="hover:underline underline-offset-4">
        {t('header.nav.about')}
      </a>

      <a href="#projects" className="hover:underline underline-offset-4">
        {t('header.nav.project')}
      </a>
      
      <a href="#contact" className="hover:underline underline-offset-4">
        {t('header.nav.contact')}
      </a>

      <TranslateSwitch />
      <ThemeToggle />
    </nav>
  )
}