'use client'

import Image from 'next/image'

type Product = {
  name: string
  description: string
  image: string
}

export default function ProductCard({ name, description, image }: Product) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
      <div className="relative h-40 w-full mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <a
        href="https://wa.me/52XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
      >
        Solicitar información
      </a>
    </div>
  )
}