'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function ProductModal({ product, onClose }: any) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-3xl max-w-lg w-full p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <div className="relative w-full h-56 mb-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-contain"
            priority
          />
        </div>

        <h2 className="text-3xl font-bold text-[#003E73] mb-4">
          {product.name}
        </h2>

        <p className="text-gray-600 mb-6">
          {product.description}
        </p>

        <a
          href="https://wa.me/5219999999999"
          target="_blank"
          className="block text-center bg-[#00C4CF] text-white font-semibold py-4 rounded-full hover:bg-[#003E73] transition"
        >
          Cotizar por WhatsApp
        </a>
      </motion.div>
    </motion.div>
  )
}