import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { About } from "../components/section-about"
import { Projects } from "../components/section-projects"
import { Contact } from "../components/section-contact"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto py-12 md:py-16 px-4 md:px-8 grid gap-12">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}