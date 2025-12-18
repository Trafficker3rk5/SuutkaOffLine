'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsappButton() {
  const phone = '5219999999999' // CAMBIA ESTE NÚMERO

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        flex items-center gap-2
        bg-[#25D366]
        text-white
        px-4 py-3
        rounded-full
        shadow-lg
        hover:scale-105
        hover:shadow-xl
        transition
        z-50
      "
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline font-medium">
        WhatsApp
      </span>
    </a>
  )
}
