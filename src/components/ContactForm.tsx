'use client'

import { useState, FormEvent } from "react"

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' }) // Limpiar formulario
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Por favor intenta de nuevo.')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-[#003E73]">
        Contáctanos
      </h3>

      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">✅</div>
          <p className="text-green-600 font-medium text-lg mb-2">
            ¡Mensaje enviado correctamente!
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Nos pondremos en contacto contigo pronto.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-[#00C4CF] hover:underline text-sm"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CF]"
              disabled={status === 'sending'}
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CF]"
              disabled={status === 'sending'}
            />
          </div>

          <div>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CF] resize-none"
              disabled={status === 'sending'}
            />
          </div>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-[#003E73] text-white py-3 rounded-lg hover:bg-[#00C4CF] transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {status === 'sending' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </span>
            ) : (
              'Enviar mensaje'
            )}
          </button>
        </form>
      )}
    </div>
  )
}
