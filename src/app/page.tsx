'use client'
import WhatsappButton from '../components/WhatsappButton'
import ContactForm from '../components/ContactForm'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Droplets, Shield, Zap, ChevronRight, Waves, Filter, Leaf } from 'lucide-react'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function SuutkaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-2xl font-bold"
              style={{ fontFamily: 'Phantom Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              SUUTKA
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Tecnología', 'Proceso', 'Beneficios', 'Contacto'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#00C4CF] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Inicio', 'Tecnología', 'Proceso', 'Beneficios', 'Contacto'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-gray-700 hover:text-[#00C4CF] hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#C9F1E9] via-white to-[#E6F9F6]"
            animate={{
              background: [
                'linear-gradient(135deg, #C9F1E9 0%, white 50%, #E6F9F6 100%)',
                'linear-gradient(135deg, #E6F9F6 0%, white 50%, #C9F1E9 100%)',
                'linear-gradient(135deg, #C9F1E9 0%, white 50%, #E6F9F6 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Fluid Waves Animation */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z"
              fill="url(#gradient1)"
              fillOpacity="0.1"
              animate={{
                d: [
                  "M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z",
                  "M0,150 C150,50 350,250 500,150 C650,50 850,250 1000,150 L1000,300 L0,300 Z",
                  "M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C4CF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#003E73" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
              style={{ fontFamily: 'Phantom Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              <span className="text-[#003E73]">SUUTKA</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Pureza inteligente en movimiento
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Fusionamos sonoridad maya con diseño moderno para crear sistemas de filtración 
              que combinan tecnología avanzada con raíces orgánicas.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-[#003E73] text-white rounded-full font-semibold hover:bg-[#00C4CF] transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 60, 115, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Descubrir tecnología <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-[#00C4CF] text-[#00C4CF] rounded-full font-semibold hover:bg-[#00C4CF] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "#00C4CF", color: "white" }}
                whileTap={{ scale: 0.95 }}
              >
                Ver proceso
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-[#00C4CF]/20 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-[#003E73]/10 rounded-full blur-2xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnología" className="py-20 bg-gradient-to-b from-white to-[#F8FBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003E73] mb-4">
              Tecnología de vanguardia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas de filtración que combinan precisión geométrica con procesos naturales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="w-12 h-12" />,
                title: "Filtración molecular",
                description: "Tecnología avanzada que elimina impurezas a nivel molecular",
                color: "#00C4CF"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Protección total",
                description: "Garantizamos la pureza del agua en cada etapa del proceso",
                color: "#003E73"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Eficiencia energética",
                description: "Sistemas optimizados para mínimo consumo energético",
                color: "#A8ADB3"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <div style={{ color: feature.color }}>
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #003E73,
                #003E73 10px,
                transparent 10px,
                transparent 20px
              )`
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003E73] mb-4">
              Proceso de filtración
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capas superpuestas que garantizan la máxima pureza
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Flow */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00C4CF] via-[#003E73] to-[#A8ADB3] transform -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Captación", description: "Recolección inicial del agua", icon: <Waves /> },
                { step: "02", title: "Pre-filtrado", description: "Eliminación de partículas grandes", icon: <Filter /> },
                { step: "03", title: "Filtrado fino", description: "Proceso de purificación molecular", icon: <Droplets /> },
                { step: "04", title: "Entrega", description: "Agua pura lista para consumo", icon: <Leaf /> }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <motion.div
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="text-4xl font-bold text-[#00C4CF] mb-4">
                      {process.step}
                    </div>
                    <motion.div 
                      className="w-16 h-16 bg-[#003E73]/10 rounded-full flex items-center justify-center mb-4 mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-[#003E73]">
                        {process.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {process.description}
                    </p>
                  </motion.div>
                  
                  {/* Connection dots for mobile */}
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-2 h-2 bg-[#00C4CF] rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-[#C9F1E9]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#003E73] mb-4">
              Beneficios exclusivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La diferencia Suutka en cada gota
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "99.9% de pureza garantizada",
              "Tecnología de filtración avanzada",
              "Diseño sostenible y ecológico",
              "Mantenimiento mínimo",
              "Ahorro energético del 40%",
              "Certificación internacional",
              "Instalación rápida y sencilla",
              "Monitoreo digital en tiempo real",
              "Durabilidad extendida"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <motion.div
                  className="w-3 h-3 bg-[#00C4CF] rounded-full flex-shrink-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#003E73] to-[#00C4CF] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, white 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Únete a la revolución del agua pura
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Descubre cómo Suutka está transformando el acceso al agua limpia 
              con tecnología de vanguardia y respeto por nuestras raíces.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-[#003E73] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar demostración
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#003E73] transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: "white", color: "#003E73" }}
                whileTap={{ scale: 0.95 }}
              >
                Más información
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
<section className="py-20 bg-[#F8FBFA]">
  <ContactForm />
</section>
      {/* Footer */}
      <footer id="contacto" className="bg-[#003E73] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: 'Phantom Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                SUUTKA
              </h3>
              <p className="text-white/80">
                Pureza inteligente en movimiento
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Sistemas residenciales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soluciones industriales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Componentes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tecnología</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sostenibilidad</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white/80">
                <li>info@suutka.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Chat en vivo</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Suutka. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <WhatsappButton />
    </div>
  )
}