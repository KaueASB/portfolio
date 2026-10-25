export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "mobile" | "api" | "fullstack";
  status: "production" | "development" | "archived";
  type: "work" | "study";
  caseSlug?: string;
  links: {
    github?: string;
    deploy?: string;
    demo?: string;
  };
  createdAt: string;
}

// Textos em public/locales: projects.items.<id>.{title,description}
export const projects: Project[] = [
  {
    id: "zeca",
    title: "projects.items.zeca.title",
    description: "projects.items.zeca.description",
    technologies: ["React", "TypeScript", "Fastify", "MySQL"],
    category: "fullstack",
    status: "production",
    type: "work",
    caseSlug: "zeca",
    links: {},
    createdAt: "2024-12-01",
  },
  {
    id: "voltlab",
    title: "projects.items.voltlab.title",
    description: "projects.items.voltlab.description",
    technologies: ["TanStack Start", "React Flow", "PostgreSQL"],
    category: "fullstack",
    status: "development",
    type: "work",
    caseSlug: "voltlab",
    links: {
      deploy: "https://voltlab-seven.vercel.app",
    },
    createdAt: "2026-10-09",
  },
  {
    id: "conserte-car",
    title: "projects.items.conserte_car.title",
    description: "projects.items.conserte_car.description",
    technologies: ["Fastify", "Drizzle ORM", "PostgreSQL", "React"],
    category: "fullstack",
    status: "production",
    type: "work",
    caseSlug: "conserte-car",
    links: {},
    createdAt: "2025-12-16",
  },
  {
    id: "wg-estacionamento",
    title: "projects.items.wg.title",
    description: "projects.items.wg.description",
    technologies: ["Fastify", "Drizzle ORM", "PostgreSQL"],
    category: "api",
    status: "production",
    type: "work",
    caseSlug: "wg-estacionamento",
    links: {},
    createdAt: "2025-07-04",
  },
  {
    id: "i-love-pastel",
    title: "projects.items.pastel.title",
    description: "projects.items.pastel.description",
    technologies: ["Fastify", "Prisma", "PostgreSQL", "React"],
    category: "fullstack",
    status: "archived",
    type: "work",
    caseSlug: "i-love-pastel",
    links: {},
    createdAt: "2024-06-10",
  },
  {
    id: "kjr-desenvolvimento",
    title: "projects.items.kjr.title",
    description: "projects.items.kjr.description",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "web",
    status: "production",
    type: "work",
    links: {
      deploy: "https://kjrdev.com.br/",
    },
    createdAt: "2023-11-20",
  },
  {
    id: "cartao-vet",
    title: "projects.items.cartao_vet.title",
    description: "projects.items.cartao_vet.description",
    technologies: ["Node.js", "AWS Lambda", "MySQL", "Stripe"],
    category: "api",
    status: "production",
    type: "work",
    caseSlug: "cartao-vet",
    links: {
      deploy: "https://cartaovet.com.br/",
    },
    createdAt: "2023-05-01",
  },
  {
    id: "upload-ai",
    title: "projects.items.upload_ai.title",
    description: "projects.items.upload_ai.description",
    technologies: ["React", "Node.js", "OpenAI API", "Prisma"],
    category: "fullstack",
    status: "archived",
    type: "study",
    links: {
      github: "https://github.com/KaueASB/nlw-ai",
      deploy: "https://nlw-ai-seven.vercel.app",
    },
    createdAt: "2023-10-15",
  },
  {
    id: "gym-api",
    title: "projects.items.gym_api.title",
    description: "projects.items.gym_api.description",
    technologies: ["Node.js", "TypeScript", "Prisma", "Fastify"],
    category: "api",
    status: "archived",
    type: "study",
    links: {
      github: "https://github.com/KaueASB/api-solid-node-prisma",
    },
    createdAt: "2023-09-20",
  },
  {
    id: "pizza-shop-api",
    title: "projects.items.pizza_shop.title",
    description: "projects.items.pizza_shop.description",
    technologies: ["Node.js", "PostgreSQL", "Docker"],
    category: "api",
    status: "archived",
    type: "study",
    links: {
      github: "https://github.com/KaueASB/pizzashop-api",
    },
    createdAt: "2023-08-10",
  },
  {
    id: "realtime-voting",
    title: "projects.items.voting.title",
    description: "projects.items.voting.description",
    technologies: ["Node.js", "WebSocket", "Redis", "PostgreSQL"],
    category: "api",
    status: "archived",
    type: "study",
    links: {
      github: "https://github.com/KaueASB/system-real-time-votation",
    },
    createdAt: "2023-07-25",
  },
];
