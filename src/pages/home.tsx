import { useTranslation } from "react-i18next"

import { Sidebar } from "../components/sidebar"
import { About } from "../components/section-about"
import { Experience } from "../components/section-experience"
import { Projects } from "../components/section-projects"
import { Skills } from "../components/section-skills"
import { Contact } from "../components/section-contact"

export function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 md:px-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
      <Sidebar />

      <main className="grid gap-[72px] pt-12 pb-16 lg:gap-24 lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        <footer className="max-w-[46ch] text-[13px] text-muted-foreground">
          {t('footer.credit')} &copy; {new Date().getFullYear()} Kaue Alves.
        </footer>
      </main>
    </div>
  )
}
