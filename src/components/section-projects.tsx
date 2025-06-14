import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { ArrowRight } from "lucide-react"

import { ProjectCard } from "./project-card"
import { projects } from "@/data/projects"

export function Projects() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  // Mostrar apenas projetos em destaque na home
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

  const handleViewAll = () => {
    navigate('/projects')
  }

  const handleProjectClick = () => {
    navigate('/projects')
  }

  return (
    <section id="projects" className="grid gap-8 scroll-mt-28">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
        <button
          onClick={handleViewAll}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          {t('projects.view_all')}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div className="text-muted-foreground mb-4">
        <p>{t('projects.featured_description')}</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="featured"
            onClick={handleProjectClick}
          />
        ))}
      </div>

      {/* Call to action para ver todos os projetos */}
      <div className="text-center pt-8">
        <button
          onClick={handleViewAll}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          {t('projects.see_all_projects')}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}