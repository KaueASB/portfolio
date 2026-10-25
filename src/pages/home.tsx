import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router"

import { Sidebar } from "../components/sidebar"
import { About } from "../components/section-about"
import { Experience } from "../components/section-experience"
import { Cases } from "../components/section-cases"
import { Products } from "../components/section-products"
import { Services } from "../components/section-services"
import { Lab } from "../components/section-lab"
import { Skills } from "../components/section-skills"
import { Contact } from "../components/section-contact"

export function HomePage() {
  const { t } = useTranslation()
  const { hash } = useLocation()

  // Vindo de outra página com âncora (ex.: /#cases), rola até a seção
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 md:px-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
      <Sidebar />

      <main className="grid gap-[72px] pt-12 pb-16 lg:gap-24 lg:py-24">
        <About />
        <Cases />
        <Products />
        <Services />
        <Experience />
        <Skills />
        <Lab />
        <Contact />

        <footer className="max-w-[46ch] text-[13px] text-muted-foreground">
          {t('footer.credit')} &copy; {new Date().getFullYear()} Kaue Alves.
        </footer>
      </main>
    </div>
  )
}
