export function About() {
  return (
    <section id="about" className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="text-muted-foreground">
          <p className="leading-relaxed">
            Atuei como Comprador de 2011 a 2021, lidando com <span className="underline font-bold text-primary">negociação para contratações de serviços, compras de insumos e consumo e gestão de contratos</span>. Contudo, optei por uma transição de carreira e vi na área de tecnologia uma grande oportunidade de tentar algo novo.
          </p><br />
          <p className="leading-relaxed">
            Hoje, sou Desenvolvedor Full Stack formado pela @Trybe, com experiência em desenvolvimento web, gerenciamento de banco de dados e criação de APIs. Além disso, adquiri habilidades em <span className="underline font-semibold text-primary">trabalho em equipe, comunicação, pensamento crítico, lógica de programação e resolução de problemas</span> através de projetos colaborativos e Hackathons.
          </p><br />
          <p className="leading-relaxed">
            Estou sempre buscando me aperfeiçoar e encontrar novos aprendizados. Estou aberto a novas oportunidades para aplicar minhas habilidades técnicas e contribuir com projetos desafiadores.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <ul className="grid grid-cols-3 gap-2 text-muted-foreground">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Node</li>
            <li>Express</li>
            <li>Fastify</li>
            <li>Nest</li>
            <li>Jest</li>
            <li>Vitest</li>
            <li>Playwright</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Sinon</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Prisma ORM</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Stripe</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Experiência</h3>
          <p className="text-muted-foreground">
            3+ years as a frontend developer, working on a variety of web applications.<br />
            +3 anos como desenvolvedor trabalhando com diversas aplicações web com foco em backend.
          </p>
        </div>
      </div>
    </section>
  )
}