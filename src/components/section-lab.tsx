import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

import { SectionLabel } from "./section-label"
import { projects } from "@/data/projects"

export function Lab() {
  const { t } = useTranslation()
  const studies = projects.filter((project) => project.type === "study")

  return (
    <section id="lab" aria-label={t('lab.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('lab.title')}</SectionLabel>
      <p className="mb-4 max-w-[60ch] text-muted-foreground">{t('lab.intro')}</p>
      <ul className="grid gap-3">
        {studies.map((project) => (
          <li key={project.id} className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
            <div>
              <a
                href={project.links.github ?? project.links.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground transition-colors hover:text-primary"
              >
                {t(project.title)} <span className="text-primary">↗</span>
              </a>
              <p className="text-[15px] text-muted-foreground">{t(project.description)}</p>
            </div>
            <span className="text-sm text-muted-foreground sm:pt-0.5">{project.technologies.slice(0, 3).join(' · ')}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/projects"
        className="group mt-6 inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
      >
        {t('lab.archive')}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  )
}
