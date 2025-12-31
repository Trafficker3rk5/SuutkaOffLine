# Suutka - Pureza Inteligente en Movimiento

Landing page para Suutka, empresa líder en sistemas de filtración de agua con tecnología de ósmosis inversa.

## 🚀 Tecnologías Principales

- **Next.js 16** - Framework React de producción
- **React 19** - Librería UI moderna
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first

- **Framer Motion 12** - Animaciones fluidas
- **Resend** - Envío de emails transaccionales
- **Sharp** - Optimización de imágenes

## 📋 Características

✅ Diseño responsive y mobile-first
✅ Imágenes optimizadas en formato WebP
✅ Formulario de contacto funcional con envío de emails
✅ Carrusel de productos animado
✅ SEO optimizado
✅ Performance optimizado para carga rápida
✅ Botón flotante de WhatsApp

## 🛠️ Instalación

```bash
# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env.local
```

## 🔑 Configuración de Variables de Entorno

Edita el archivo `.env.local` y agrega tu API key de Resend:

```env
RESEND_API_KEY=re_tu_api_key_aqui
```

### Obtener API Key de Resend

1. Visita [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Ve a **API Keys** en el dashboard
4. Crea una nueva API key
5. Cópiala en tu archivo `.env.local`

## 🚀 Desarrollo

```bash
# Ejecutar servidor de desarrollo
pnpm dev

# Abrir en el navegador
# http://localhost:3000
```

## 📦 Build para Producción

```bash
# Crear build optimizado
pnpm build

# Ejecutar build de producción
pnpm start
```

## 📧 Configuración del Formulario de Contacto

El formulario envía emails a: `david@trafficker.com.mx`

Para cambiar el destinatario, edita:
```
src/app/api/contact/route.ts
```

Y modifica la línea:
```typescript
to: ['tu-email@ejemplo.com'],
```

## 🖼️ Optimización de Imágenes

Las imágenes de productos están optimizadas en formato WebP con una reducción de ~90% en tamaño.

Para optimizar nuevas imágenes:

```bash
# Agregar imágenes a public/products/
# Ejecutar script de optimización
node scripts/optimize-images.js
```

## 📱 Mobile-First

El sitio está optimizado para móviles con:
- Diseño responsive
- Imágenes adaptativas
- Navegación móvil con menú hamburguesa
- Touch-friendly interactions

## 📊 Performance

- ✅ Imágenes en formato WebP (90% más pequeñas)
- ✅ Lazy loading de imágenes
- ✅ Compresión habilitada
- ✅ Headers de caché configurados
- ✅ Fonts optimizados

## 📞 Contacto

Para soporte técnico, contactar a: david@trafficker.com.mx

## 📄 Licencia

© 2026 Suutka. Todos los derechos reservados
