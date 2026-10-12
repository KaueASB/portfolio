export interface ExperienceItem {
  id: "current" | "trybe" | "buyer";
  technologies?: string[];
}

// Textos em public/locales: experience.items.<id>.{period,title,description}
export const experience: ExperienceItem[] = [
  { id: "current", technologies: ["Node.js", "NestJS", "PostgreSQL", "Docker"] },
  { id: "trybe" },
  { id: "buyer" },
];
