'use client'

import { useState } from "react"

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      setSent(true)
      setFormData({ nombre: '', email: '', mensaje: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el mensaje')
    } finally {
      setLoading(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (sent) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-[#003E73]">
          Contáctanos
        </h3>
        <div className="text-center py-8">
          <p className="text-green-600 font-medium text-lg mb-4">
            ✅ Mensaje enviado correctamente
          </p>
          <p className="text-gray-600 mb-6">
            Nos pondremos en contacto contigo pronto.
          </p>
          <button
            onClick={() => setSent(false)}
            className="text-[#003E73] hover:text-[#00C4CF] font-medium transition"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-[#003E73]">
        Contáctanos
      </h3>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CF] transition"
          disabled={loading}
        />
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CF] transition"
          disabled={loading}
        />
        <textarea
          required
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Mensaje"
          rows={4}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CF] transition resize-none"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#003E73] text-white py-3 rounded-lg hover:bg-[#00C4CF] transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  )
}
