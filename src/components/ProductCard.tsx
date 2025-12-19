'use client'

type Product = {
  name: string
  description: string
  image: string
}

export default function ProductCard({ name, description, image }: Product) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-contain mb-4"
      />

      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <a
        href="https://wa.me/521XXXXXXXXXX"
        target="_blank"
        className="mt-auto text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
      >
        Solicitar información
      </a>
    </div>
  )
}