import { useTranslation } from "react-i18next"

import { ThemeToggle } from "./theme/theme-toggle"
import { TranslateSwitch } from "./translate/translate-switch"
import { useActiveSection } from "@/hooks/use-active-section"
import { socialLinks } from "@/data/contact"
import { cn } from "@/lib/utils"

const sections = ["about", "experience", "projects", "skills", "contact"]

const navKeys: Record<string, string> = {
  about: "header.nav.about",
  experience: "header.nav.experience",
  projects: "header.nav.project",
  skills: "header.nav.skills",
  contact: "header.nav.contact",
}

export function Sidebar() {
  const { t } = useTranslation()
  const active = useActiveSection(sections)

  return (
    <aside className="flex flex-col pt-16 pb-8 lg:sticky lg:top-0 lg:h-[100dvh] lg:py-24">
      <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-none">
        Kaue Alves
      </h1>
      <p className="mt-4 font-heading text-xl font-semibold text-foreground">
        {t('header.role')}
      </p>
      <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
        {t('header.tagline')}
      </p>

      <nav aria-label={t('common.sections')} className="mt-14 hidden lg:block">
        <ul className="grid gap-3.5 w-max">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "group flex items-center gap-4 py-0.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                  active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "h-px transition-all duration-300",
                    active === id
                      ? "w-16 bg-foreground"
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                  )}
                />
                {t(navKeys[id])}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 lg:mt-auto">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {link.label}{link.external && " ↗"}
          </a>
        ))}

        <div className="flex items-center gap-3">
          <TranslateSwitch />
          <ThemeToggle />
        </div>
      </div>
    </aside>
  )
}
