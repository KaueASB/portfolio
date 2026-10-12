import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ArrowLeft, Search, LayoutGrid, List } from "lucide-react"

import { ProjectCard } from "./project-card"
import { Input } from "./ui/input"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

type FilterType = 'all' | 'web' | 'mobile' | 'api' | 'fullstack'
type StatusFilter = 'all' | 'production' | 'development' | 'archived'
type ViewMode = 'grid' | 'list'

const categories: FilterType[] = ['all', 'web', 'mobile', 'api', 'fullstack']
const statuses: StatusFilter[] = ['all', 'production', 'development', 'archived']

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
            "rounded-full border px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            value === option
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-muted-foreground hover:text-foreground hover:bg-accent"
          )}
        >
          {getLabel(option)}
        </button>
      ))}
    </div>
  )
}

export function ProjectsPage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const search = searchTerm.toLowerCase()

  const filteredProjects = projects.filter((project) => {
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
    <main className="relative z-10 flex-1">
      {/* Título e filtros */}
      <div className="border-b bg-muted/30">
        <div className="container py-8 grid gap-6">
          <div className="grid gap-3">
            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('common.back')}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{t('projects.title')}</h1>
          </div>

          <div className="grid gap-4">
            <div className="flex gap-3 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t('projects.search_placeholder')}
                  aria-label={t('projects.search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Modo de visualização */}
              <div className="ml-auto flex items-center gap-1 bg-muted rounded-md p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid"
                  aria-pressed={viewMode === 'grid'}
                  className={cn('p-2 rounded transition-colors', viewMode === 'grid' ? 'bg-background shadow-sm' : 'hover:bg-background/50')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  aria-label="List"
                  aria-pressed={viewMode === 'list'}
                  className={cn('p-2 rounded transition-colors', viewMode === 'list' ? 'bg-background shadow-sm' : 'hover:bg-background/50')}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
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
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container py-8">
        <p className="text-sm text-muted-foreground mb-6">
          {t('projects.showing_results', { count: filteredProjects.length, total: projects.length })}
        </p>

        {filteredProjects.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "grid gap-4"
          }>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant={viewMode === 'list' ? 'compact' : 'default'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed rounded-xl">
            <p className="text-muted-foreground mb-4">
              {t('projects.no_results')}
            </p>
            <button
              onClick={clearFilters}
              className="text-primary font-medium hover:underline underline-offset-4"
            >
              {t('projects.clear_filters')}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
