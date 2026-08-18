import { ArrowUpRight, MailIcon, MessageCircle, SparklesIcon } from 'lucide-react'

export default function Contact() {
  return (
    <section className="mt-6 grid grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:bg-slate-50 md:grid-cols-[1fr_auto] md:items-center">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
          <SparklesIcon className="size-5" />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
            ¿Tienes una idea o proyecto?
          </h3>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Cuéntame qué necesitas y lo hacemos realidad.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:justify-end">
        <a
          href="mailto:asanlucasc@gmail.com"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-slate-50 px-4 text-sm font-medium text-gray-900 transition hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200">
          <MailIcon className="size-4" />
          <span>Contáctame</span>
        </a>

        <a
          href="https://wa.me/593982694256?text=Hola%20Anthony,%20tengo%20un%20proyecto%20y%20quiero%20desarrollarlo%20contigo."
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200">
          <MessageCircle className="size-4" />
          <span>WhatsApp</span>
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </section>
  )
}
