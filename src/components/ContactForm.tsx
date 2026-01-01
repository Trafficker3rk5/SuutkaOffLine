'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || data.message || 'Error desconocido')
        console.error('Error del servidor:', data)
      }
    } catch (error) {
      setStatus('error')
      setErrorMsg('Error de conexión')
      console.error('Error de red:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-gray-600 mb-4">
          Gracias por contactarnos. Te responderemos pronto.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#00C4CF] hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-[#003E73]">
        Contáctanos
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            disabled={status === 'sending'}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C4CF] disabled:opacity-50"
          />
        </div>

        <div>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            disabled={status === 'sending'}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C4CF] disabled:opacity-50"
          />
        </div>

        <div>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="¿Cómo podemos ayudarte?"
            rows={5}
            disabled={status === 'sending'}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C4CF] resize-none disabled:opacity-50"
          />
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-semibold">Error al enviar</p>
            <p className="text-sm">{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-[#003E73] text-white py-3 rounded-lg font-semibold hover:bg-[#00C4CF] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  )
}
