import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router"
import { ArrowLeft } from "lucide-react"

import { ThemeToggle } from "../components/theme/theme-toggle"
import { TranslateSwitch } from "../components/translate/translate-switch"

export function NotFoundPage() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-1 flex-col px-6 py-16 md:px-12 lg:py-24">
      <div className="flex justify-end gap-3">
        <TranslateSwitch />
        <ThemeToggle />
      </div>

      <div className="my-auto py-16">
        <p className="font-heading text-7xl font-extrabold tracking-tight text-primary sm:text-8xl">404</p>
        <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t('not_found.title')}
        </h1>
        <p className="mt-3 max-w-[50ch] text-muted-foreground">
          {t('not_found.description')}
        </p>
        <p className="mt-2 break-all font-mono text-sm text-muted-foreground">{pathname}</p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          <Link to="/" className="group inline-flex items-center gap-2 font-semibold text-primary">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            {t('not_found.home')}
          </Link>
          <Link to="/projects" className="font-semibold text-foreground transition-colors hover:text-primary">
            {t('projects.see_all_projects')}
          </Link>
        </div>
      </div>
    </main>
  )
}
