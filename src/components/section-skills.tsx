import { useTranslation } from "react-i18next"

import { SectionLabel } from "./section-label"
import { skillGroups } from "@/data/skills"

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" aria-label={t('skills.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('skills.title')}</SectionLabel>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
              {t(`skills.groups.${group.id}`)}
            </h3>
            <ul className="grid gap-1 text-[15px] text-muted-foreground">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
