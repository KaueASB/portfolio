import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import type { CaseStudy } from "@/data/cases"

// Item de lista da home (Cases e Produtos) que leva para a página do case
export function CaseListItem({ caseStudy }: { caseStudy: CaseStudy }) {
  const { t } = useTranslation()
  const base = `cases.${caseStudy.slug}`
  const title = t(`${base}.title`)
  const image = caseStudy.images?.[0]
  const initials = title.split(' ').filter((word) => /^[A-Za-zÀ-ÿ]/.test(word)).slice(0, 2).map((word) => word[0]).join('')

  return (
    <li>
      <Link
        to={`/cases/${caseStudy.slug}`}
        className="group grid gap-3 rounded-lg border border-transparent py-4 transition-all sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5 lg:p-5 lg:hover:border-border lg:hover:bg-card lg:group-hover/list:opacity-[0.55] lg:hover:!opacity-100"
      >
        {image ? (
          <img
            src={image.src}
            alt=""
            loading="lazy"
            className="order-2 aspect-[16/10] w-full max-w-[220px] rounded-md border object-cover object-top sm:order-1 sm:mt-1"
          />
        ) : (
          <div
            aria-hidden
            className="order-2 grid aspect-[16/10] w-full max-w-[220px] place-items-center rounded-md border bg-gradient-to-br from-card to-muted font-heading text-lg font-extrabold text-foreground/25 sm:order-1 sm:mt-1"
          >
            {initials}
          </div>
        )}
        <div className="order-1 sm:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {t(`${base}.label`)}
          </p>
          <h3 className="mt-1 font-sans text-[17px] font-semibold tracking-normal text-foreground transition-colors group-hover:text-primary">
            {title}{' '}
            <span className="inline-block text-primary transition-transform group-hover:translate-x-0.5">→</span>
          </h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
            {t(`${base}.pitch`)}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {caseStudy.stack.slice(0, 4).map((tech) => (
              <li key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  )
}
