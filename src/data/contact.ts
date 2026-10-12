export interface SocialLink {
  id: "email" | "github" | "linkedin";
  label: string;
  display: string;
  href: string;
  external: boolean;
}

export const phone = {
  display: "+55 (11) 98218-3363",
  href: "tel:+5511982183363",
};

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "E-mail",
    display: "kaue_alvessb@outlook.com",
    href: "mailto:kaue_alvessb@outlook.com",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    display: "github.com/KaueASB",
    href: "https://github.com/KaueASB",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    display: "linkedin.com/in/kaue-alvess",
    href: "https://www.linkedin.com/in/kaue-alvess",
    external: true,
  },
];
