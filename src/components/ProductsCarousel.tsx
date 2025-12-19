'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ProductModal from './ProductModal'

const products = [
  {
    id: 1,
    name: 'Filtro Residencial',
    image: '/products/filtro1.png',
    description: 'Sistema ideal para hogares con filtración avanzada.',
  },
  {
    id: 2,
    name: 'Carbón Activado',
    image: '/products/filtro2.png',
    description: 'Reduce cloro, olores y mejora el sabor.',
  },
  {
    id: 3,
    name: 'Ósmosis Inversa',
    image: '/products/filtro3.png',
    description: 'Elimina hasta 99.9% de contaminantes.',
  },
  {
    id: 4,
    name: 'Filtro Industrial',
    image: '/products/filtro4.png',
    description: 'Alto flujo para negocios e industria.',
  },
  {
    id: 5,
    name: 'Filtro Bajo Tarja',
    image: '/products/filtro5.png',
    description: 'Compacto, discreto y potente.',
  },
]

export default function ProductsCarousel() {
  const [activeProduct, setActiveProduct] = useState<any>(null)

  return (
    <>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
          }}
        >
          {[...products, ...products].map((product, index) => (
            <div
              key={index}
              className="min-w-[280px] cursor-pointer"
              onClick={() => setActiveProduct(product)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-xl p-6 text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-[#003E73]">
                  {product.name}
                </h3>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProduct && (
          <ProductModal
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}