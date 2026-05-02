import { Check, Copy } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type Contact = {
  label: string
  value: string
  copyValue: string
  href: string
  iconSrc: string
  iconAlt: string
  isExternal?: boolean
}

const contacts: Contact[] = [
  {
    label: 'Correo electrónico',
    value: 'asanlucasc@gmail.com',
    copyValue: 'asanlucasc@gmail.com',
    href: 'mailto:asanlucasc@gmail.com',
    iconSrc: '/images/social/gmail.svg',
    iconAlt: 'Icono de correo electr\u00f3nico'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anthonysanlucas',
    copyValue: 'https://linkedin.com/in/anthonysanlucas',
    href: 'https://linkedin.com/in/anthonysanlucas',
    iconSrc: '/images/social/linkedin.svg',
    iconAlt: 'Icono de LinkedIn',
    isExternal: true
  }
]

const copyFallback = (text: string) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

const copyText = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  copyFallback(text)
}

export default function ContactInfo() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleCopy = async (value: string, index: number) => {
    try {
      await copyText(value)
      setCopiedIndex(index)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopiedIndex(null)
      }, 1700)
    } catch {
      setCopiedIndex(null)
    }
  }

  return (
    <article className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {contacts.map((contact, index) => {
        const copied = copiedIndex === index

        return (
          <article
            key={contact.label}
            className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:bg-slate-50">
            <a
              href={contact.href}
              target={contact.isExternal ? '_blank' : undefined}
              rel={contact.isExternal ? 'noreferrer' : undefined}
              className="group min-w-0 flex-1">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                  <img
                    src={contact.iconSrc}
                    alt={contact.iconAlt}
                    className="h-6 w-6"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{contact.label}</p>
                  <p className="truncate text-sm text-gray-500 transition group-hover:text-gray-700">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>

            <button
              type="button"
              onClick={() => handleCopy(contact.copyValue, index)}
              aria-label={`Copiar ${contact.label}`}
              className={`shrink-0 rounded-lg border p-2.5 text-gray-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 active:scale-[0.98] ${
                copied
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}>
              {copied ? (
                <Check size={16} strokeWidth={2.3} />
              ) : (
                <Copy size={16} strokeWidth={2.1} />
              )}
              <span className="sr-only">{copied ? 'Copiado' : `Copiar ${contact.label}`}</span>
            </button>
          </article>
        )
      })}
    </article>
  )
}
