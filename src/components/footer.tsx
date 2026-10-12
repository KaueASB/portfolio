import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "./ui/button";
import { socialLinks } from "@/data/contact";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

export function Footer() {
  const { t } = useTranslation()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 bg-muted/50 py-6 border-t">
      <div className="container flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </p>

        <div className="flex items-center gap-1">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.id]
            return (
              <Button key={link.id} variant="ghost" size="icon" asChild>
                <a href={link.href} target={link.external ? "_blank" : undefined} rel="noopener noreferrer" aria-label={link.label}>
                  <Icon className="size-4" />
                </a>
              </Button>
            )
          })}

          <Button onClick={handleScrollToTop} variant="link" size="sm">
            {t('footer.top')}
          </Button>
        </div>
      </div>
    </footer>
  )
}
