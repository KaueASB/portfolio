import { useTranslation } from "react-i18next"

import { SectionLabel } from "./section-label"
import { experience } from "@/data/experience"

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" aria-label={t('experience.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('experience.title')}</SectionLabel>
      <ol className="group/list grid gap-2">
        {experience.map((item) => (
          <li
            key={item.id}
            className="grid gap-2 rounded-lg border border-transparent py-4 transition-all sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5 lg:p-5 lg:hover:border-border lg:hover:bg-card lg:group-hover/list:opacity-[0.55] lg:hover:!opacity-100"
          >
            <span className="pt-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground tabular-nums">
              {t(`experience.items.${item.id}.period`)}
            </span>
            <div>
              <h3 className="font-sans text-[17px] font-semibold tracking-normal text-foreground">
                {t(`experience.items.${item.id}.title`)}
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                {t(`experience.items.${item.id}.description`)}
              </p>
              {item.technologies && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <li key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
