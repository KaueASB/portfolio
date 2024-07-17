import { useTranslation } from 'react-i18next'

import { Switch } from '../ui/switch'
import { Label } from '../ui/label'

export function TranslateSwitch() {
  const { i18n } = useTranslation()

  function toggleLanguage() {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="language-switch"
        checked={i18n.language === 'pt'}
        onCheckedChange={toggleLanguage}
      />
      <Label htmlFor="language-switch">
        {i18n.language.toUpperCase()}
      </Label>
    </div>
  )
}
