'use client'

import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-[#003E73]">
        Contáctanos
      </h3>

      {sent ? (
        <p className="text-green-600 font-medium">
          ✅ Mensaje enviado correctamente
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Nombre"
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
          />
          <textarea
            required
            placeholder="Mensaje"
            className="w-full border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="w-full bg-[#003E73] text-white py-2 rounded-lg hover:bg-[#00C4CF] transition"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  )
}
