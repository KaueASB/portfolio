import { useTranslation } from "react-i18next"

import { SectionLabel } from "./section-label"
import { CaseListItem } from "./case-list-item"
import { caseStudies } from "@/data/cases"

export function Products() {
  const { t } = useTranslation()
  const items = caseStudies.filter((item) => item.kind === "product")

  return (
    <section id="products" aria-label={t('products.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('products.title')}</SectionLabel>
      <p className="mb-4 max-w-[60ch] text-muted-foreground lg:px-5">{t('products.intro')}</p>
      <ul className="group/list grid gap-2">
        {items.map((item) => (
          <CaseListItem key={item.slug} caseStudy={item} />
        ))}
      </ul>
    </section>
  )
}
