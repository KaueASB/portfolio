import { useTranslation, Trans } from "react-i18next"

import { ListSkills } from "./list-skills"
import { skills } from "@/data/skills"

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="grid md:grid-cols-2 gap-8 md:gap-12 scroll-mt-24">
      <div>
        <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
        <div className="text-muted-foreground space-y-4">
          <p className="leading-relaxed">
            <Trans
              i18nKey="about.paragraph_one_about"
              components={{ 1: <span className="underline font-bold text-primary" /> }}
              values={{ span_one_about: t('about.span_one_about') }}
            />
          </p>

          <p className="leading-relaxed">
            <Trans
              i18nKey="about.paragraph_two_about"
              components={{ 1: <span className="underline font-bold text-primary" /> }}
              values={{ span_two_about: t('about.span_two_about') }}
            />
          </p>

          <p className="leading-relaxed">
            {t('about.paragraph_three_about')}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">{t('about.skills.title')}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-3 text-muted-foreground">
            {skills.map((skill) => (
              <ListSkills key={skill.name}>
                {skill.icon}
                {skill.name}
              </ListSkills>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">{t('about.experience.title')}</h3>
          <p className="text-muted-foreground">{t('about.experience.description')}</p>
        </div>
      </div>
    </section>
  )
}
