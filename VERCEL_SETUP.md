# Configuración de Variables de Entorno en Vercel

## ⚠️ IMPORTANTE: Sin esto el formulario NO funcionará

El formulario de contacto requiere que configures la variable de entorno `RESEND_API_KEY` en Vercel.

## 📋 Pasos para Configurar

### 1. Accede a tu Proyecto en Vercel
1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecciona el proyecto **SuutkaOffLine**

### 2. Configura la Variable de Entorno

1. En el menú del proyecto, ve a **Settings** (Configuración)
2. En el menú lateral izquierdo, haz clic en **Environment Variables** (Variables de Entorno)
3. Agrega una nueva variable con los siguientes datos:

   - **Key (Nombre):** `RESEND_API_KEY`
   - **Value (Valor):** `re_36mqix8U_BcVqNHcDxWxjNxNexxBGGKic`
   - **Environment:** Selecciona las 3 opciones:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

4. Haz clic en **Save** (Guardar)

### 3. Redeploy el Proyecto

**⚠️ CRÍTICO:** Después de agregar la variable, debes hacer un redeploy:

1. Ve a la pestaña **Deployments** (Despliegues)
2. Encuentra el último deployment exitoso
3. Haz clic en los tres puntos (...) al lado derecho
4. Selecciona **Redeploy** (Volver a desplegar)
5. Confirma el redeploy

### 4. Verifica que Funcione

1. Espera a que termine el deployment (1-2 minutos)
2. Visita tu sitio web
3. Ve al formulario de contacto
4. Envía un mensaje de prueba
5. Deberías recibir el email en: **david@trafficker.com.mx**

## 🔧 Troubleshooting

### Error: "Servicio de email no configurado"
- ✅ Verifica que agregaste la variable `RESEND_API_KEY`
- ✅ Verifica que hiciste el **Redeploy** después de agregar la variable
- ✅ Verifica que el valor de la API key sea correcto

### No recibo los emails
- ✅ Verifica en Resend que la API key sea válida
- ✅ Revisa la pestaña "Logs" en Resend para ver si se enviaron los emails
- ✅ Verifica tu carpeta de spam

## 📸 Capturas de Pantalla (Referencias)

### Paso 2 - Environment Variables
```
Vercel Dashboard > Tu Proyecto > Settings > Environment Variables

[+ Add New]

Name: RESEND_API_KEY
Value: re_36mqix8U_BcVqNHcDxWxjNxNexxBGGKic

☑ Production
☑ Preview
☑ Development

[Save]
```

### Paso 3 - Redeploy
```
Vercel Dashboard > Tu Proyecto > Deployments

Latest Deployment (...) > Redeploy
```

## ✅ Checklist Final

- [ ] Variable `RESEND_API_KEY` agregada en Vercel
- [ ] Valor correcto: `re_36mqix8U_BcVqNHcDxWxjNxNexxBGGKic`
- [ ] Seleccionadas las 3 opciones: Production, Preview, Development
- [ ] Redeploy realizado exitosamente
- [ ] Formulario probado y funcionando
- [ ] Email recibido en david@trafficker.com.mx

---

**💡 Nota:** Una vez configurado, el formulario funcionará automáticamente en todos los deployments futuros.
