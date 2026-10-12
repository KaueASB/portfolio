import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { NavBar } from "./navbar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="py-3 border-b sticky top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Avatar className="size-10 text-primary-foreground font-bold">
            <AvatarImage src="https://github.com/KaueASB.png" alt="Kaue Alves" />
            <AvatarFallback className="bg-primary">KA</AvatarFallback>
          </Avatar>

          <div className="text-left leading-tight">
            <span className="block text-lg md:text-xl font-bold font-heading">Kaue Alves</span>
            <span className="hidden sm:block text-sm text-muted-foreground">{t('header.role')}</span>
          </div>
        </Link>

        <NavBar />
      </div>
    </header>
  )
}
