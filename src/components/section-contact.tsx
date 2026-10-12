import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Loader2 } from "lucide-react"
import { toast } from "sonner"

import { SectionLabel } from "./section-label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

import { emailjs } from "@/lib/emailjs"
import { phone, socialLinks } from "@/data/contact"

interface FieldLabels {
  [key: string]: string
}

const email = socialLinks.find((link) => link.id === "email")!

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

  return (
    <section id="contact" aria-label={t('contact.title')} className="scroll-mt-16 lg:scroll-mt-24">
      <SectionLabel>{t('header.nav.contact')}</SectionLabel>
      <p className="mb-5 max-w-[50ch] text-muted-foreground">{t('contact.description')}</p>

      <a
        href={email.href}
        className="block w-fit font-heading text-xl font-bold text-foreground transition-colors [overflow-wrap:anywhere] hover:text-primary sm:text-3xl"
      >
        {email.display}
      </a>
      <a href={phone.href} className="mt-2 block w-fit text-muted-foreground transition-colors hover:text-primary">
        {phone.display}
      </a>

      <form onSubmit={handleEmailSubmit} className="mt-10 grid max-w-xl gap-4">
        <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
          {t('contact.send.title')}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="contact-name">{t('contact.send.form.name')}</Label>
            <Input id="contact-name" type="text" name="name" autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-email">{t('contact.send.form.email')}</Label>
            <Input id="contact-email" type="email" name="email" autoComplete="email" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-message">{t('contact.send.form.message')}</Label>
          <Textarea id="contact-message" name="message" rows={5} />
        </div>
        <Button type="submit" disabled={isLoading} className="justify-self-start">
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
    </section>
  )
}
