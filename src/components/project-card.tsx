import { useTranslation } from "react-i18next"
import { ExternalLink, GitBranch, Calendar, Tag } from "lucide-react"

import { Badge } from "./ui/badge"
import { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
  variant?: 'default' | 'featured' | 'compact'
  onClick?: () => void
}

export function ProjectCard({ project, variant = 'default', onClick }: ProjectCardProps) {
  const { t } = useTranslation()

  const statusColors = {
    production: 'green',
    development: 'outline',
    archived: 'secondary'
  } as const

  const categoryColors = {
    web: 'default',
    mobile: 'secondary',
    api: 'outline',
    fullstack: 'green'
  } as const

  if (variant === 'compact') {
    return (
      <div 
        className="bg-card border rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer group"
        onClick={onClick}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {t(project.title)}
          </h3>
          <Badge variant={statusColors[project.status]} className="text-xs">
            {t(`projects.status.${project.status}`)}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {t(project.description)}
        </p>
        <div className="flex items-center justify-between">
          <Badge variant={categoryColors[project.category]} className="text-xs">
            {t(`projects.category.${project.category}`)}
          </Badge>
          <div className="flex gap-2">
            {project.links.deploy && (
              <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            )}
            {project.links.github && (
              <GitBranch className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group ${
        onClick ? 'cursor-pointer' : ''
      } ${variant === 'featured' ? 'ring-2 ring-primary/20' : ''}`}
      onClick={onClick}
    >
      {/* Header com status e categoria */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge variant={categoryColors[project.category]}>
              {t(`projects.category.${project.category}`)}
            </Badge>
            {project.featured && (
              <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-500">
                ⭐ {t('projects.featured')}
              </Badge>
            )}
          </div>
          <Badge variant={statusColors[project.status]}>
            {t(`projects.status.${project.status}`)}
          </Badge>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {t(project.title)}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {t(project.description)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs font-medium"
            >
              <Tag className="h-3 w-3" />
              {tech}
            </span>
          ))}
        </div>

        {/* Data de criação */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Calendar className="h-3 w-3" />
          {new Date(project.createdAt).toLocaleDateString('pt-BR')}
        </div>

        <div className="flex gap-3">
          {project.links.deploy && (
            <a
              href={project.links.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              {t('projects.see_project')}
            </a>
          )}
          
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-background rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
          )}
          
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-input bg-background rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}