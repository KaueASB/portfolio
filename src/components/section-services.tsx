import { useTranslation } from "react-i18next"
import { ArrowRight } from "lucide-react"

import { SectionLabel } from "./section-label"
import { translateList } from "@/lib/translate-list"

type Entry = { title: string; description: string }

export function Services() {
  const { t } = useTranslation()
  const offerings = translateList<Entry>(t, 'services.offerings')
  const process = translateList<Entry>(t, 'services.process')

  return (
    <section id="services" aria-label={t('services.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('services.title')}</SectionLabel>
      <p className="max-w-[62ch] leading-relaxed text-muted-foreground">{t('services.intro')}</p>

      <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {offerings.map((offering) => (
          <li key={offering.title}>
            <h3 className="font-sans text-[17px] font-semibold tracking-normal text-foreground">{offering.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{offering.description}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
        {t('services.process_title')}
      </h3>
      <ol className="mt-4 grid gap-4 sm:grid-cols-2">
        {process.map((step, index) => (
          <li key={step.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-3">
            <span className="font-heading text-xl font-extrabold leading-tight text-primary tabular-nums">{index + 1}</span>
            <div>
              <p className="font-semibold text-foreground">{step.title}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <a
        href="#contact"
        className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {t('services.cta')}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </a>
    </section>
  )
}
