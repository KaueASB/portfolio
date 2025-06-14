import { Footer } from "../components/footer"
import { ProjectsPage } from "../components/projects-page"

export function ProjectsPageRoute() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <ProjectsPage />
      <Footer />
    </div>
  )
}