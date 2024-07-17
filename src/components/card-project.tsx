import { useTranslation } from "react-i18next"

import { Badge } from "./ui/badge"

type CardProjectProps = {
  name: string
  description: string
  linkDeploy?: string
  linkGithub?: string
  environment?: string
}

export function CardProject({name, description, linkDeploy, linkGithub, environment = 'dev'}: CardProjectProps) {
  const { t } = useTranslation()

  return (
    <div className="bg-muted rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          {environment === 'dev' ? (
            <Badge variant="outline">{environment}</Badge>
          ) :(
            <Badge variant="green">{environment}</Badge>
          )}
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-4">
          <a
            href={linkDeploy ?? '#projects'}
            target={linkDeploy ? '_blank' : ''}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {t('projects.see_project')}
          </a>

          <a
            href={linkGithub ?? '#projects'}
            target={linkGithub ? '_blank' : ''}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}