import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Mail, Phone, Github, Linkedin, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

import { emailjs } from "@/lib/emailjs"

interface FieldLabels {
  [key: string]: string
}

export function Contact() {
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState(false)

  function handleEmailSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)

    const { VITE_SERVICE_ID_EMAILJS, VITE_TEMPLATE_EMAILJS } = import.meta.env

    if(!import.meta.env.VITE_SERVICE_ID_EMAILJS || !import.meta.env.VITE_TEMPLATE_EMAILJS) {
      return
    }
    
    const data = new FormData(event.currentTarget)

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
  
      setIsLoading(false)
      return
    }

    const templateParams = {
      name,
      email,
      message,
    }

    emailjs.send(VITE_SERVICE_ID_EMAILJS, VITE_TEMPLATE_EMAILJS, templateParams).then(() => {
      toast.success(t('toaster.success.title'), {
        description: t('toaster.success.description'),
        position:"top-center",
        duration: 2500,
      })
    }, () => {      
      toast.error(t('toaster.error.email_fail.title'), {
        description: t('toaster.error.email_fail.description'),
        position:"top-center",
        duration: 2500,
      })
    }).finally(() => { setIsLoading(false) })

    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="grid gap-8 scroll-mt-28">
      <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">{t('contact.info.title')}</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Mail className="w-5 h-5 inline-block mr-2" />
              <a href="#contact">kaue_alvessb@outlook.com</a>
            </li>
            <li>
              <Phone className="w-5 h-5 inline-block mr-2" />
              <a href="#contact">+55 (11) 98218-3363</a>
            </li>
            <li>
              <Github className="w-5 h-5 inline-block mr-2" />
              <a href="https://github.com/KaueASB" target="_blank">https://github.com/KaueASB</a>
            </li>
            <li>
              <Linkedin className="w-5 h-5 inline-block mr-2" />
              <a href="https://www.linkedin.com/in/kaue-alvess" target="_blank">https://www.linkedin.com/in/kaue-alvess</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2">{t('contact.send.title')}</h3>
          <form onSubmit={handleEmailSubmit} className="grid gap-4">
            <Input
              type="text"
              name="name"
              placeholder={t('contact.send.form.name')}
              className="w-full"
            />
            <Input
              type="email"
              name="email"
              placeholder={t('contact.send.form.email')}
              className="w-full"
            />
            <Textarea
              name="message"
              placeholder={t('contact.send.form.message')}
              rows={4}
              className="w-full"
            />
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