export interface CaseStudy {
  slug: string;
  kind: "client" | "product" | "job";
  stack: string[];
  links?: { labelKey: string; href: string }[];
  images?: { src: string; altKey: string }[];
}

// Textos em public/locales: cases.<slug>.{title,label,pitch,period,role,highlights,sections,images}
export const caseStudies: CaseStudy[] = [
  {
    slug: "wg-estacionamento",
    kind: "client",
    stack: ["Node.js", "TypeScript", "Fastify", "Zod", "Drizzle ORM", "PostgreSQL", "JWT", "Vercel"],
    images: [
      { src: "/cases/wg-estacionamento/01-painel.jpg", altKey: "cases.wg-estacionamento.images.dashboard" },
      { src: "/cases/wg-estacionamento/03-entrada-veiculo.jpg", altKey: "cases.wg-estacionamento.images.entry" },
      { src: "/cases/wg-estacionamento/02-saida-veiculo.jpg", altKey: "cases.wg-estacionamento.images.exit" },
    ],
  },
  {
    slug: "zeca",
    kind: "job",
    stack: ["React 19", "TypeScript", "Vite", "TanStack Router", "TanStack Query", "Tailwind CSS", "Zod", "Vitest", "Playwright", "Fastify", "Drizzle ORM", "MySQL"],
  },
  {
    slug: "cartao-vet",
    kind: "client",
    stack: ["Node.js", "AWS Lambda", "API Gateway", "MySQL", "Stripe"],
    links: [{ labelKey: "cases.links.website", href: "https://cartaovet.com.br/" }],
  },
  {
    slug: "i-love-pastel",
    kind: "client",
    stack: ["Node.js", "Fastify", "Zod", "Prisma", "PostgreSQL", "React", "Vercel"],
  },
  {
    slug: "conserte-car",
    kind: "product",
    stack: ["Node.js", "Fastify", "Drizzle ORM", "PostgreSQL", "React 19", "TanStack Router", "TanStack Query", "Cloudflare R2", "Resend", "AbacatePay", "Vitest", "GitHub Actions", "Vercel"],
  },
  {
    slug: "voltlab",
    kind: "product",
    stack: ["TanStack Start", "React", "React Flow", "oRPC", "Drizzle ORM", "PostgreSQL", "Better Auth", "Turborepo", "Vercel"],
    links: [{ labelKey: "cases.links.open_product", href: "https://voltlab-seven.vercel.app" }],
  },
];

export function getCaseStudy(slug: string | undefined) {
  return caseStudies.find((item) => item.slug === slug)
}
