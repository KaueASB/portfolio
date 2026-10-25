export interface ExperienceItem {
  id: "innoa" | "kjr" | "wefirst" | "trybe" | "buyer";
  technologies?: string[];
  caseSlug?: string;
}

// Textos em public/locales: experience.items.<id>.{period,title,description}
export const experience: ExperienceItem[] = [
  { id: "innoa", technologies: ["React", "TypeScript", "Fastify", "MySQL"], caseSlug: "zeca" },
  { id: "kjr", technologies: ["Node.js", "Fastify", "PostgreSQL", "React"] },
  { id: "wefirst", technologies: ["Node.js", "AWS Lambda", "Stripe", "Prisma"], caseSlug: "cartao-vet" },
  { id: "trybe" },
  { id: "buyer" },
];
