import { MailIcon } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'

const buttonBaseStyles =
  'inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2'
const outlineButtonStyles = `${buttonBaseStyles} bg-white hover:bg-gray-50 active:bg-gray-100`
const ctaButtonStyles = `${buttonBaseStyles} text-white shadow-sm hover:brightness-95 active:brightness-90`
const outlineButtonColor = {
  borderColor: 'var(--color-accent)',
  color: 'var(--color-accent)'
}
const ctaButtonColor = {
  borderColor: 'var(--color-accent)',
  backgroundColor: 'var(--color-accent)'
}

export default function Contact() {
  return (
    <section className="mt-6 grid grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:bg-slate-50 md:grid-cols-[1fr_auto] md:items-center">
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
          ¿Tienes una idea o proyecto?
        </h3>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          Cuéntame qué necesitas y lo hacemos realidad.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:justify-self-end">
        <a
          href="mailto:asanlucasc@gmail.com"
          className={outlineButtonStyles}
          style={outlineButtonColor}>
          <MailIcon className="size-4" />
          <span>Correo</span>
        </a>

        <a
          href="https://wa.me/593982694256?text=Hola%20Anthony,%20tengo%20un%20proyecto%20y%20quiero%20desarrollarlo%20contigo."
          target="_blank"
          rel="noreferrer"
          className={ctaButtonStyles}
          style={ctaButtonColor}>
          <SiWhatsapp className="size-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  )
}
