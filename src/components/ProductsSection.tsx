'use client'

import ProductCard from './ProductCard'

const products = [
  {
    name: 'Filtro Residencial Básico',
    description: 'Ideal para hogares pequeños. Elimina sedimentos y cloro.',
    image: '/products/filtro1.png',
  },
  {
    name: 'Filtro Avanzado Carbón',
    description: 'Mejora sabor y olor del agua potable.',
    image: '/products/filtro2.png',
  },
  {
    name: 'Filtro Osmosis Inversa',
    description: 'Purificación profunda para consumo premium.',
    image: '/products/filtro3.png',
  },
  {
    name: 'Filtro Industrial',
    description: 'Solución para comercios y procesos productivos.',
    image: '/products/filtro4.png',
  },
  {
    name: 'Filtro Portátil',
    description: 'Ideal para viajes y emergencias.',
    image: '/products/filtro5.png',
  },
]

export default function ProductsSection() {
  return (
    <section
      id="productos"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestra tecnología en filtración
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}