import { useTranslation, Trans } from "react-i18next"

import { SectionLabel } from "./section-label"

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" aria-label={t('header.nav.about')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('header.nav.about')}</SectionLabel>
      <div className="max-w-[62ch] space-y-4 leading-relaxed text-muted-foreground">
        <p>
          <Trans
            i18nKey="about.paragraph_one_about"
            components={{ 1: <strong className="font-semibold text-foreground" /> }}
            values={{ span_one_about: t('about.span_one_about') }}
          />
        </p>

        <p>
          <Trans
            i18nKey="about.paragraph_two_about"
            components={{ 1: <strong className="font-semibold text-foreground" /> }}
            values={{ span_two_about: t('about.span_two_about') }}
          />
        </p>

        <p>{t('about.paragraph_three_about')}</p>
      </div>
    </section>
  )
}
