import { Mail, MailIcon, SparklesIcon } from 'lucide-react'

export default function Contact() {
  return (
    <section className="mt-8 w-full max-w-sm border-t border-gray-200/80 pt-6">
      <header className="flex items-center gap-2 text-gray-900">
        <SparklesIcon className="size-4 animate-pulse" />
        <h3 className="text-sm font-semibold sm:text-base">¿Tienes una idea o proyecto?</h3>
      </header>
      <p className="mt-2 text-sm leading-6 text-gray-500">
        Cuéntame qué necesitas y lo convertimos en una solución real.
      </p>

      <div className="mt-4 flex flex-col items-start gap-2">
        <a
          href="mailto:asanlucasc@gmail.com"
          className="inline-flex gap-2 h-9 items-center justify-center rounded-lg border bg-slate-50 border-gray-300 px-4 text-sm font-medium text-gray-900 transition hover:bg-gray-50 hover:border-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200">
          <MailIcon className="size-4" />
          <span>Contáctame</span>
        </a>

        <a
          href="https://wa.me/593982694256?text=Hola%20Anthony,%20tengo%20un%20proyecto%20y%20quiero%20desarrollarlo%20contigo."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-gray-700">
          o escríbeme por WhatsApp
        </a>
      </div>
    </section>
  )
}
