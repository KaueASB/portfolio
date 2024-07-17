import { useTranslation } from "react-i18next";

import { NavBar } from "./navbar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="px-4 md:px-8 py-6 border-b sticky top-0 w-full z-50 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="size-11 text-primary-foreground font-bold">
            <AvatarImage src="https://github.com/KaueASB.png" />
            <AvatarFallback className="bg-primary">KA</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold">Kaue Alves</h1>
            <p className="text-muted-foreground">{t('header.role')}</p>
          </div>
        </div>
        
        <NavBar />
      </div>
    </header>
  )
}