type CardProjectProps = {
  name: string
  description: string
  linkDeploy?: string
  linkGithub: string
}

export function CardProject({name, description, linkDeploy, linkGithub}: CardProjectProps) {
  return (
    <div className="bg-muted rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-4">
          <a
            href={linkDeploy ?? '#'}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View Project
          </a>
          <a
            href={linkGithub}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}