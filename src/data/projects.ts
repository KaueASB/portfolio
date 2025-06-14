export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: "web" | "mobile" | "api" | "fullstack";
  status: "production" | "development" | "archived";
  links: {
    github?: string;
    deploy?: string;
    demo?: string;
  };
  images?: string[];
  featured: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: "cartao-vet",
    title: "projects.project_seven.title",
    description: "projects.project_seven.description",
    longDescription: "projects.project_seven.long_description",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "fullstack",
    status: "production",
    links: {
      deploy: "https://cartaovet.com.br/",
    },
    featured: true,
    createdAt: "2024-01-15",
  },
  {
    id: "pastelaria-maza",
    title: "projects.project_one.title",
    description: "projects.project_one.description",
    longDescription: "projects.project_one.long_description",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    category: "web",
    status: "production",
    links: {
      deploy: "https://pastelaria-maza.vercel.app",
    },
    featured: true,
    createdAt: "2023-12-10",
  },
  {
    id: "kjrdev-portfolio",
    title: "projects.project_two.title",
    description: "projects.project_two.description",
    longDescription: "projects.project_two.long_description",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "web",
    status: "production",
    links: {
      deploy: "https://kjrdev.com.br/",
    },
    featured: true,
    createdAt: "2023-11-20",
  },
  {
    id: "nlw-ai",
    title: "projects.project_three.title",
    description: "projects.project_three.description",
    longDescription: "projects.project_three.long_description",
    technologies: ["React", "Node.js", "OpenAI API", "Prisma"],
    category: "fullstack",
    status: "development",
    links: {
      github: "https://github.com/KaueASB/nlw-ai",
      deploy: "https://nlw-ai-seven.vercel.app",
    },
    featured: false,
    createdAt: "2023-10-15",
  },
  {
    id: "api-solid-node",
    title: "projects.project_four.title",
    description: "projects.project_four.description",
    longDescription: "projects.project_four.long_description",
    technologies: ["Node.js", "TypeScript", "Prisma", "Fastify"],
    category: "api",
    status: "development",
    links: {
      github: "https://github.com/KaueASB/api-solid-node-prisma",
    },
    featured: false,
    createdAt: "2023-09-20",
  },
  {
    id: "pizzashop",
    title: "projects.project_five.title",
    description: "projects.project_five.description",
    longDescription: "projects.project_five.long_description",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    category: "fullstack",
    status: "production",
    links: {
      github: "https://github.com/KaueASB/pizzashop-api",
      deploy: "https://pizzashopp-web.vercel.app",
    },
    featured: false,
    createdAt: "2023-08-10",
  },
  {
    id: "realtime-voting",
    title: "projects.project_six.title",
    description: "projects.project_six.description",
    longDescription: "projects.project_six.long_description",
    technologies: ["Node.js", "WebSocket", "Redis", "PostgreSQL"],
    category: "api",
    status: "development",
    links: {
      github: "https://github.com/KaueASB/system-real-time-votation",
    },
    featured: false,
    createdAt: "2023-07-25",
  },
];
