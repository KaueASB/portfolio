import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { ArrowLeft, Filter, Search, Grid, List } from "lucide-react"

import { Header } from "./header"
import { ProjectCard } from "./project-card"
import { projects } from "@/data/projects"

type FilterType = 'all' | 'web' | 'mobile' | 'api' | 'fullstack'
type StatusFilter = 'all' | 'production' | 'development' | 'archived'
type ViewMode = 'grid' | 'list'

export function ProjectsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<FilterType>('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = t(project.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
                         t(project.description).toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  const categories: FilterType[] = ['all', 'web', 'mobile', 'api', 'fullstack']
  const statuses: StatusFilter[] = ['all', 'production', 'development', 'archived']

  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header com navegação */}
      <Header />
      
      {/* Seção de filtros e título */}
      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('common.back')}
            </button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-3xl font-bold">{t('projects.title')}</h1>
          </div>

          {/* Filtros e busca */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Busca */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t('projects.search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Filtros */}
              <div className="flex gap-2 items-center">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value as FilterType)}
                  className="px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {t(`projects.category.${category}`)}
                    </option>
                  ))}
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                  className="px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {t(`projects.status.${status}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Modo de visualização */}
            <div className="flex items-center gap-2 bg-muted rounded-md p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-8">
        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{projects.length}</div>
            <div className="text-sm text-muted-foreground">{t('projects.stats.total')}</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {projects.filter(p => p.status === 'production').length}
            </div>
            <div className="text-sm text-muted-foreground">{t('projects.stats.production')}</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {projects.filter(p => p.status === 'development').length}
            </div>
            <div className="text-sm text-muted-foreground">{t('projects.stats.development')}</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-muted-foreground">{t('projects.stats.featured')}</div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {t('projects.showing_results', { count: filteredProjects.length, total: projects.length })}
          </p>
        </div>

        {/* Grid de projetos */}
        {filteredProjects.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-4"
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
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              {t('projects.no_results')}
            </div>
            <button
              onClick={() => {
                setSearchTerm('')
                setCategoryFilter('all')
                setStatusFilter('all')
              }}
              className="text-primary hover:underline"
            >
              {t('projects.clear_filters')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}