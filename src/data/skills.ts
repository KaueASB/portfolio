export interface SkillGroup {
  id: "backend" | "data" | "testing" | "frontend" | "infra";
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { id: "backend", items: ["Node.js", "NestJS", "Fastify", "Express", "Python · Flask"] },
  { id: "data", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"] },
  { id: "testing", items: ["Jest", "Vitest", "Playwright", "Mocha · Chai · Sinon"] },
  { id: "frontend", items: ["TypeScript", "JavaScript", "React", "Tailwind CSS", "HTML/CSS"] },
  { id: "infra", items: ["Docker", "AWS", "Stripe"] },
];
