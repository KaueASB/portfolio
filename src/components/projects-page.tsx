import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ArrowLeft, Search } from "lucide-react"

import { ThemeToggle } from "./theme/theme-toggle"
import { TranslateSwitch } from "./translate/translate-switch"
import { Input } from "./ui/input"
import { projects, type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

type FilterType = 'all' | Project['category']
type StatusFilter = 'all' | Project['status']

const categories: FilterType[] = ['all', 'web', 'mobile', 'api', 'fullstack']
const statuses: StatusFilter[] = ['all', 'production', 'development', 'archived']

const statusDot: Record<Project['status'], string> = {
  production: 'bg-emerald-500',
  development: 'bg-primary',
  archived: 'bg-muted-foreground',
}

// Mais recentes primeiro
const sortedProjects = [...projects].sort((a, b) => b.createdAt.localeCompare(a.createdAt))

type ChipGroupProps<T extends string> = {
  label: string
  options: T[]
  value: T
  onChange: (value: T) => void
  getLabel: (option: T) => string
}

function ChipGroup<T extends string>({ label, options, value, onChange, getLabel }: ChipGroupProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            value === option
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
          )}
        >
          {getLabel(option)}
        </button>
      ))}
    </div>
  )
}

function projectLinks(project: Project) {
  const links: { label: string, href: string }[] = []
  if (project.links.deploy) links.push({ label: new URL(project.links.deploy).host.replace(/^www\./, ''), href: project.links.deploy })
  if (project.links.github) links.push({ label: 'GitHub', href: project.links.github })
  if (project.links.demo) links.push({ label: 'Demo', href: project.links.demo })
  return links
}

function StatusLabel({ status }: { status: Project['status'] }) {
  const { t } = useTranslation()

  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground">
      <span className={cn("size-1.5 rounded-full", statusDot[status])} />
      {t(`projects.status.${status}`)}
    </span>
  )
}

export function ProjectsPage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const search = searchTerm.toLowerCase()

  const filteredProjects = sortedProjects.filter((project) => {
    const matchesSearch = t(project.title).toLowerCase().includes(search) ||
                         t(project.description).toLowerCase().includes(search) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(search))

    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  const clearFilters = () => {
    setSearchTerm('')
    setCategoryFilter('all')
    setStatusFilter('all')
  }

  return (
    <main className="relative z-10 mx-auto w-full max-w-[1180px] flex-1 px-6 py-16 md:px-12 lg:py-24">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-semibold text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Kaue Alves
        </Link>
        <div className="flex items-center gap-3">
          <TranslateSwitch />
          <ThemeToggle />
        </div>
      </div>

      <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        {t('projects.archive.title')}
      </h1>
      <p className="mt-3 max-w-[60ch] text-muted-foreground">
        {t('projects.archive.description')}
      </p>

      {/* Busca e filtros */}
      <div className="mt-10 grid gap-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t('projects.search_placeholder')}
            aria-label={t('projects.search_placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent pl-10"
          />
        </div>
        <ChipGroup
          label={t('projects.category.all')}
          options={categories}
          value={categoryFilter}
          onChange={setCategoryFilter}
          getLabel={(category) => t(`projects.category.${category}`)}
        />
        <ChipGroup
          label={t('projects.status.all')}
          options={statuses}
          value={statusFilter}
          onChange={setStatusFilter}
          getLabel={(status) => t(`projects.status.${status}`)}
        />
      </div>

      <p className="mt-8 text-sm text-muted-foreground" role="status">
        {t('projects.showing_results', { count: filteredProjects.length, total: projects.length })}
      </p>

      {filteredProjects.length > 0 ? (
        <table className="mt-4 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 bg-background/90 backdrop-blur">
            <tr className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
              <th className="py-4 pr-6">{t('projects.archive.year')}</th>
              <th className="py-4 pr-6">{t('projects.archive.project')}</th>
              <th className="hidden py-4 pr-6 lg:table-cell">{t('projects.archive.category')}</th>
              <th className="hidden py-4 pr-6 md:table-cell">{t('projects.archive.status')}</th>
              <th className="hidden py-4 pr-6 lg:table-cell">{t('projects.archive.stack')}</th>
              <th className="hidden py-4 sm:table-cell">{t('projects.archive.link')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => {
              const links = projectLinks(project)
              const mainLink = links[0]

              return (
                <tr key={project.id} className="border-t border-border align-top transition-colors hover:bg-card/60">
                  <td className="py-4 pr-6 pt-[1.15rem] text-sm text-muted-foreground tabular-nums">
                    {project.createdAt.slice(0, 4)}
                  </td>
                  <td className="py-4 pr-6">
                    {mainLink ? (
                      <a
                        href={mainLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {t(project.title)}
                        {/* No mobile a coluna de links some, então o título indica que é clicável */}
                        <span className="ml-1 inline-block text-primary sm:hidden">↗</span>
                      </a>
                    ) : (
                      <span className="font-semibold text-foreground">{t(project.title)}</span>
                    )}
                    <p className="mt-1 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
                      {t(project.description)}
                    </p>
                    <div className="mt-2 md:hidden">
                      <StatusLabel status={project.status} />
                    </div>
                  </td>
                  <td className="hidden py-4 pr-6 pt-[1.15rem] text-sm text-muted-foreground lg:table-cell">
                    {t(`projects.category.${project.category}`)}
                  </td>
                  <td className="hidden py-4 pr-6 pt-[1.15rem] md:table-cell">
                    <StatusLabel status={project.status} />
                  </td>
                  <td className="hidden py-4 pr-6 lg:table-cell">
                    <ul className="flex max-w-[260px] flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 pt-[1.15rem] sm:table-cell">
                    <ul className="grid gap-1">
                      {links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {link.label}
                            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed py-16 text-center">
          <p className="mb-4 text-muted-foreground">
            {t('projects.no_results')}
          </p>
          <button
            onClick={clearFilters}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t('projects.clear_filters')}
          </button>
        </div>
      )}

      <footer className="mt-20 max-w-[46ch] text-[13px] text-muted-foreground">
        {t('footer.credit')} &copy; {new Date().getFullYear()} Kaue Alves.
      </footer>
    </main>
  )
}
