import { CardProject } from "./card-project"

export function Projects() {
  return (
    <section id="projects" className="grid gap-12">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <CardProject
          name="I Love Pastel"
          description="Aplicação web para gerenciamento de pedidos e gerenciamento de estoque."
          linkGithub="#"
          linkDeploy="https://pastelaria-maza.vercel.app"
          environment="Produção"
          />

        <CardProject
          name="KJR Desenvolvimento"
          description="Landing page de uma software house" 
          linkGithub="#"
          linkDeploy="https://kjrdev.com.br/"
          environment="Produção"
        />

        <CardProject
          name="Upload AI"
          description="Projeto para conversão de vídeo em áudio e transcrição de texto com OpenAI API para sugestão de título e descrição."
          linkGithub="https://github.com/KaueASB/nlw-ai"
          linkDeploy="https://nlw-ai-seven.vercel.app"
        />

        <CardProject
          name="Gym API"
          description="API para gerenciamento de academia no estilo Gympass. Aplicando conceitos de S.O.L.I.D."
          linkGithub="https://github.com/KaueASB/api-solid-node-prisma"
        />

        <CardProject
          name="Pizza Shop API"
          description="Projeto para conversão de vídeo em áudio e transcrição de texto com OpenAI API para sugestão de título e descrição."
          linkGithub="https://github.com/KaueASB/pizzashop-api"
          linkDeploy="https://pizzashopp-web.vercel.app"
        />

        <CardProject
          name="Sistema de Votação em Tempo Real"
          description="API para aplicação de votação em tempo real. Criação de enquetes, votação e acompanhamento de votos."
          linkGithub="https://github.com/KaueASB/system-real-time-votation"
        />
      </div>
    </section>
  )
}