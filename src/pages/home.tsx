import { About } from "../components/section-about"
import { Projects } from "../components/section-projects"
import { Contact } from "../components/section-contact"

export function HomePage() {
  return (
    <main className="flex-1 container py-12 md:py-20 grid gap-20 md:gap-28">
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
