import { useTranslation } from "react-i18next"

import { CardProject } from "./card-project"

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="grid gap-8 scroll-mt-28">
      <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <CardProject
          name={t('projects.project_seven.title')}
          description={t('projects.project_seven.description')}
          linkGithub=""
          linkDeploy="https://cartaovet.com.br/"
          environment={t('projects.project_seven.environment')}
        />

        <CardProject
          name={t('projects.project_one.title')}
          description={t('projects.project_one.description')}
          linkGithub=""
          linkDeploy="https://pastelaria-maza.vercel.app"
          environment={t('projects.project_one.environment')}
        />

        <CardProject
          name={t('projects.project_two.title')}
          description={t('projects.project_two.description')}
          linkGithub=""
          linkDeploy="https://kjrdev.com.br/"
          environment={t('projects.project_two.environment')}
        />

        <CardProject
          name={t('projects.project_three.title')}
          description={t('projects.project_three.description')}
          linkGithub="https://github.com/KaueASB/nlw-ai"
          linkDeploy="https://nlw-ai-seven.vercel.app"
        />

        <CardProject
          name={t('projects.project_four.title')}
          description={t('projects.project_four.description')}
          linkGithub="https://github.com/KaueASB/api-solid-node-prisma"
        />

        <CardProject
          name={t('projects.project_five.title')}
          description={t('projects.project_five.description')}
          linkGithub="https://github.com/KaueASB/pizzashop-api"
          linkDeploy="https://pizzashopp-web.vercel.app"
        />

        <CardProject
          name={t('projects.project_six.title')}
          description={t('projects.project_six.description')}
          linkGithub="https://github.com/KaueASB/system-real-time-votation"
        />
      </div>
    </section>
  )
}