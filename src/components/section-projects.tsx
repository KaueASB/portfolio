import { CardProject } from "./card-project"

export function Projects() {
  return (
    <section id="projects" className="grid gap-12">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <CardProject name="projeto 1" description="descrição" linkGithub="#" />
        <CardProject name="projeto 2" description="descrição" linkGithub="#" />
        <CardProject name="projeto 3" description="descrição" linkGithub="#" />
        <CardProject name="projeto 4" description="descrição" linkGithub="#" />
      </div>
    </section>
  )
}