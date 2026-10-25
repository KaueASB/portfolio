import { useTranslation } from "react-i18next"

import { SectionLabel } from "./section-label"
import { CaseListItem } from "./case-list-item"
import { caseStudies } from "@/data/cases"

export function Cases() {
  const { t } = useTranslation()
  const items = caseStudies.filter((item) => item.kind !== "product")

  return (
    <section id="cases" aria-label={t('cases_section.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('cases_section.title')}</SectionLabel>
      <p className="mb-4 max-w-[60ch] text-muted-foreground lg:px-5">{t('cases_section.intro')}</p>
      <ul className="group/list grid gap-2">
        {items.map((item) => (
          <CaseListItem key={item.slug} caseStudy={item} />
        ))}
      </ul>
    </section>
  )
}
