import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Mail, Phone, Github, Linkedin, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

import { emailjs } from "@/lib/emailjs"
import { phone, socialLinks } from "@/data/contact"

interface FieldLabels {
  [key: string]: string
}

const contactIcons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
}

export function Contact() {
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState(false)

  function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { VITE_SERVICE_ID_EMAILJS, VITE_TEMPLATE_EMAILJS } = import.meta.env

    if(!VITE_SERVICE_ID_EMAILJS || !VITE_TEMPLATE_EMAILJS) {
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)

    const name = data.get('name')?.toString()
    const email = data.get('email')?.toString()
    const message = data.get('message')?.toString()

    const fieldLabels: FieldLabels = {
      name: t('contact.send.form.name'),
      email: t('contact.send.form.email'),
      message: t('contact.send.form.message'),
    }

    const fields: { [key: string]: string | undefined } = { name, email, message }

    const missingFields = Object.keys(fields)
      .filter(key => !fields[key])
      .map(key => fieldLabels[key])

    if (missingFields.length > 0) {
      toast.error(t('toaster.error.missing_field.title'), {
        description: `${t('toaster.error.missing_field.description')} ${missingFields.join(', ')}`,
        position: "top-center",
      })
      return
    }

    const templateParams = {
      name,
      email,
      message,
    }

    setIsLoading(true)

    emailjs.send(VITE_SERVICE_ID_EMAILJS, VITE_TEMPLATE_EMAILJS, templateParams).then(() => {
      toast.success(t('toaster.success.title'), {
        description: t('toaster.success.description'),
        position:"top-center",
        duration: 2500,
      })
      form.reset()
    }, () => {
      toast.error(t('toaster.error.email_fail.title'), {
        description: t('toaster.error.email_fail.description'),
        position:"top-center",
        duration: 2500,
      })
    }).finally(() => { setIsLoading(false) })
  }

  const contactItems = [
    { id: 'phone', label: t('contact.info.phone'), display: phone.display, href: phone.href, external: false, Icon: Phone },
    ...socialLinks.map((link) => ({ ...link, Icon: contactIcons[link.id] })),
  ]

  return (
    <section id="contact" className="grid gap-8 scroll-mt-24">
      <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">{t('contact.info.title')}</h3>
          <ul className="grid gap-3">
            {contactItems.map(({ id, label, display, href, external, Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border bg-card p-3 hover:bg-accent transition-colors group"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted group-hover:bg-background transition-colors">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm font-medium">{display}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">{t('contact.send.title')}</h3>
          <form onSubmit={handleEmailSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="contact-name">{t('contact.send.form.name')}</Label>
              <Input id="contact-name" type="text" name="name" autoComplete="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">{t('contact.send.form.email')}</Label>
              <Input id="contact-email" type="email" name="email" autoComplete="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-message">{t('contact.send.form.message')}</Label>
              <Textarea id="contact-message" name="message" rows={5} />
            </div>
            <Button type="submit" disabled={isLoading} className="justify-center">
              {isLoading ? (
                <>
                  <Loader2 className="size-5 animate-spin mr-2" />
                  {t('contact.send.form.button.sending')}
                </>
              ): (
                t('contact.send.form.button.to_send')
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
