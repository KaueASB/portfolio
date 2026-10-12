import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

import { SectionLabel } from "./section-label"
import { projects } from "@/data/projects"

export function Projects() {
  const { t } = useTranslation()

  // Mostrar apenas projetos em destaque na home
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" aria-label={t('projects.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('header.nav.project')}</SectionLabel>
      <ul className="group/list grid gap-2">
        {featuredProjects.map((project) => {
          const title = t(project.title)
          const href = project.links.deploy || project.links.github || project.links.demo
          const image = project.images?.[0]
          const initials = title.split(' ').slice(0, 2).map((word) => word[0]).join('')

          return (
            <li key={project.id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 rounded-lg border border-transparent py-4 transition-all sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5 lg:p-5 lg:hover:border-border lg:hover:bg-card lg:group-hover/list:opacity-[0.55] lg:hover:!opacity-100"
              >
                {image ? (
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="order-2 aspect-[16/10] w-full max-w-[220px] rounded-md border object-cover sm:order-1 sm:mt-1"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="order-2 grid aspect-[16/10] w-full max-w-[220px] place-items-center rounded-md border bg-gradient-to-br from-card to-muted font-heading text-lg font-extrabold text-foreground/25 sm:order-1 sm:mt-1"
                  >
                    {initials}
                  </div>
                )}
                <div className="order-1 sm:order-2">
                  <h3 className="font-sans text-[17px] font-semibold tracking-normal text-foreground transition-colors group-hover:text-primary">
                    {title}{' '}
                    <span className="inline-block text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                    {t(project.description)}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          )
        })}
      </ul>

      <Link
        to="/projects"
        className="group mt-6 inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
      >
        {t('projects.see_all_projects')}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  )
}
