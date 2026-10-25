import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { ThemeToggle } from "../components/theme/theme-toggle"
import { TranslateSwitch } from "../components/translate/translate-switch"
import { NotFoundPage } from "./not-found"
import { caseStudies, getCaseStudy } from "@/data/cases"
import { translateList } from "@/lib/translate-list"

type Highlight = { value: string; label: string }
type Section = { heading: string; body?: string; items?: string[] }

export function CasePage() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const caseStudy = getCaseStudy(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!caseStudy) {
    return <NotFoundPage />
  }

  const base = `cases.${caseStudy.slug}`
  const highlights = translateList<Highlight>(t, `${base}.highlights`)
  const sections = translateList<Section>(t, `${base}.sections`)

  const index = caseStudies.findIndex((item) => item.slug === caseStudy.slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <main className="relative z-10 mx-auto w-full max-w-[980px] flex-1 px-6 py-16 md:px-12 lg:py-24">
      <div className="flex items-center justify-between gap-4">
        <Link to="/#cases" className="group inline-flex items-center gap-2 font-semibold text-primary">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          {t('cases.back')}
        </Link>
        <div className="flex items-center gap-3">
          <TranslateSwitch />
          <ThemeToggle />
        </div>
      </div>

      <header className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {t(`${base}.label`)}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {t(`${base}.title`)}
        </h1>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
          {t(`${base}.pitch`)}
        </p>

        <dl className="mt-8 grid gap-x-10 gap-y-4 border-y py-5 sm:grid-cols-[auto_auto_minmax(0,1fr)]">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{t('cases.period')}</dt>
            <dd className="mt-1 font-medium text-foreground">{t(`${base}.period`)}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{t('cases.role')}</dt>
            <dd className="mt-1 font-medium text-foreground">{t(`${base}.role`)}</dd>
          </div>
          {caseStudy.links && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{t('cases.links_title')}</dt>
              <dd className="mt-1 flex flex-wrap gap-x-4">
                {caseStudy.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline underline-offset-4">
                    {t(link.labelKey)} ↗
                  </a>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </header>

      {highlights.length > 0 && (
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <li key={highlight.label}>
              <p className="font-heading text-4xl font-extrabold tracking-tight text-primary tabular-nums">{highlight.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{highlight.label}</p>
            </li>
          ))}
        </ul>
      )}

      {caseStudy.images && (
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {caseStudy.images.map((image, imageIndex) => (
            <img
              key={image.src}
              src={image.src}
              alt={t(image.altKey)}
              loading={imageIndex === 0 ? "eager" : "lazy"}
              className={`w-full rounded-lg border shadow-sm ${imageIndex === 0 ? "md:col-span-2" : ""}`}
            />
          ))}
        </div>
      )}

      <div className="mt-12 grid gap-10">
        {sections.map((section) => (
          <section key={section.heading} className="grid gap-3 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-foreground md:pt-1">
              {section.heading}
            </h2>
            <div className="max-w-[62ch] leading-relaxed text-muted-foreground">
              {section.body && <p>{section.body}</p>}
              {section.items && (
                <ul className="grid list-disc gap-2 pl-5 marker:text-primary">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section className="grid gap-3 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-foreground md:pt-1">
            {t('cases.stack')}
          </h2>
          <ul className="flex flex-wrap gap-1.5">
            {caseStudy.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <nav className="mt-16 border-t pt-8">
        <Link to={`/cases/${next.slug}`} className="group inline-flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{t('cases.next')}</span>
          <span className="mt-1 inline-flex items-center gap-2 font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
            {t(`cases.${next.slug}.title`)}
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </nav>

      <footer className="mt-16 max-w-[46ch] text-[13px] text-muted-foreground">
        {t('footer.credit')} &copy; {new Date().getFullYear()} Kaue Alves.
      </footer>
    </main>
  )
}
