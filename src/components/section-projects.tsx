import { useTranslation } from "react-i18next"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

import { ProjectCard } from "./project-card"
import { Button } from "./ui/button"
import { projects } from "@/data/projects"

export function Projects() {
  const { t } = useTranslation()

  // Mostrar apenas projetos em destaque na home
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  return (
    <section id="projects" className="grid gap-8 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="grid gap-2">
          <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
          <p className="text-muted-foreground">{t('projects.featured_description')}</p>
        </div>
        <Button asChild variant="outline" className="group shrink-0 self-start sm:self-auto">
          <Link to="/projects">
            {t('projects.see_all_projects')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="featured"
          />
        ))}
      </div>
    </section>
  )
}
