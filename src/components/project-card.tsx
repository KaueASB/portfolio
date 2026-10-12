import { useTranslation } from "react-i18next"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
  variant?: 'default' | 'featured' | 'compact'
}

const statusColors = {
  production: 'green',
  development: 'outline',
  archived: 'secondary'
} as const

const categoryColors = {
  web: 'default',
  mobile: 'secondary',
  api: 'outline',
  fullstack: 'secondary'
} as const

function ProjectLinks({ project, size = 'sm' }: { project: Project, size?: 'sm' | 'icon' }) {
  const { t } = useTranslation()
  const iconOnly = size === 'icon'

  const links = [
    { href: project.links.deploy, label: t('projects.see_project'), Icon: ExternalLink, primary: true },
    { href: project.links.github, label: 'GitHub', Icon: Github, primary: false },
    { href: project.links.demo, label: 'Demo', Icon: ExternalLink, primary: false },
  ].filter((link) => link.href)

  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ href, label, Icon, primary }) => (
        <Button
          key={label}
          asChild
          size={iconOnly ? 'icon' : 'sm'}
          variant={iconOnly ? 'ghost' : primary ? 'default' : 'outline'}
          className={cn(iconOnly && 'size-8')}
        >
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={iconOnly ? label : undefined}>
            <Icon className={cn('size-4', !iconOnly && 'mr-2')} />
            {!iconOnly && label}
          </a>
        </Button>
      ))}
    </div>
  )
}

function ProjectMedia({ project }: { project: Project }) {
  const { t } = useTranslation()
  const title = t(project.title)
  const image = project.images?.[0]

  if (image) {
    return (
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="aspect-video w-full object-cover border-b"
      />
    )
  }

  const initials = title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <div
      aria-hidden
      className="aspect-video w-full border-b bg-gradient-to-br from-muted via-muted/60 to-background flex items-center justify-center"
    >
      <span className="font-heading text-5xl font-bold text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors">
        {initials}
      </span>
    </div>
  )
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const { t, i18n } = useTranslation()

  if (variant === 'compact') {
    return (
      <div className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-semibold text-lg">
            {t(project.title)}
          </h3>
          <Badge variant={statusColors[project.status]} className="text-xs shrink-0">
            {t(`projects.status.${project.status}`)}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {t(project.description)}
        </p>
        <div className="flex items-center justify-between gap-4">
          <Badge variant={categoryColors[project.category]} className="text-xs">
            {t(`projects.category.${project.category}`)}
          </Badge>
          <ProjectLinks project={project} size="icon" />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group flex flex-col h-full">
      <ProjectMedia project={project} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={categoryColors[project.category]}>
              {t(`projects.category.${project.category}`)}
            </Badge>
            {variant === 'default' && project.featured && (
              <Badge variant="secondary" className="gap-1">
                <Star className="size-3 fill-current" />
                {t('projects.featured')}
              </Badge>
            )}
          </div>
          <Badge variant={statusColors[project.status]} className="shrink-0">
            {t(`projects.status.${project.status}`)}
          </Badge>
        </div>

        <h3 className="text-xl font-bold mb-2">
          {t(project.title)}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {t(project.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-muted rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto grid gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {new Date(project.createdAt).toLocaleDateString(i18n.language === 'pt' ? 'pt-BR' : 'en-US', { month: 'long', year: 'numeric' })}
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  )
}
