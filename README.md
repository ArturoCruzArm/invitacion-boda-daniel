# 💒 Invitación de Boda Digital - Plantilla Profesional

Invitación web elegante y moderna para bodas, con diseño responsivo y múltiples características interactivas.

## ✨ Características

### Diseño y Estética
- 🎨 Diseño elegante con paleta de colores dorados y neutros
- 📱 Completamente responsivo (móvil, tablet y escritorio)
- ✨ Animaciones suaves y efectos de parallax
- 🖼️ Galería de fotos integrada
- 🎭 Tipografías elegantes (Great Vibes, Cormorant Garamond, Montserrat)

### Funcionalidades Interactivas
- ⏰ Cuenta regresiva en tiempo real hasta el día de la boda
- 🎵 Control de música de fondo opcional
- 📝 Formulario de confirmación de asistencia (RSVP)
- 📍 Enlaces directos a Google Maps para ceremonia y recepción
- 💝 Sección de mesa de regalos con enlaces
- 📱 Integración con WhatsApp para confirmaciones
- #️⃣ Hashtag de la boda para redes sociales
- 📅 Opción para agregar al calendario

### Secciones Incluidas
1. **Hero** - Portada con nombres y fecha
2. **Padres** - Reconocimiento a los padres de los novios
3. **Frase Romántica** - Cita especial
4. **Cuenta Regresiva** - Contador dinámico
5. **Galería** - Fotos de la pareja
6. **Detalles del Evento** - Ceremonia y recepción con mapas
7. **Mesa de Regalos** - Enlaces a tiendas
8. **Hashtag** - Para redes sociales
9. **RSVP** - Formulario de confirmación
10. **Información Adicional** - Detalles importantes

## 📋 Datos del Evento (Ejemplo)

```
Fecha: 19 de Diciembre de 2025
Ceremonia: 8:00 PM - Templo San Judas Tadeo
Recepción: 9:30 PM - 2:00 AM - Salón de Eventos Laja
Ubicación: León, Guanajuato
```

## 🚀 Instalación y Uso

### 1. Clonar o Descargar
```bash
git clone [URL_DEL_REPOSITORIO]
cd invitacion-boda-daniel
```

### 2. Personalizar Contenido

Edita el archivo `index.html` y reemplaza los campos marcados con corchetes:

- `[Nombre Novia]` - Nombre completo de la novia
- `[Nombre Novio]` - Nombre completo del novio
- `[Nombre del Padre]` - Nombres de los padres
- `[Nombre de la Madre]` - Nombres de las madres
- `[ENLACE_LIVERPOOL]` - URL de la mesa de regalos
- `[TELEFONO]` - Número de WhatsApp para confirmaciones
- `[Fecha Límite]` - Fecha límite para confirmar asistencia
- Código de vestimenta
- Información sobre niños

### 3. Personalizar Colores y Estilos

En `styles.css`, modifica las variables CSS al inicio del archivo:

```css
:root {
    --color-primary: #C9A66B;      /* Color principal (dorado) */
    --color-secondary: #8B7355;     /* Color secundario */
    --color-accent: #D4AF37;        /* Color de acento */
    --color-bg-light: #FAF9F6;      /* Fondo claro */
    --color-bg-dark: #2C2C2C;       /* Fondo oscuro */
}
```

### 4. Agregar Imágenes

Coloca tus imágenes en la carpeta del proyecto y actualiza las rutas:

- `hero-bg.jpg` - Imagen de portada (1920x1080px recomendado)
- `foto1.jpg` hasta `foto4.jpg` - Fotos de la galería (800x800px recomendado)
- `musica-fondo.mp3` - Música de fondo (opcional)

### 5. Configurar WhatsApp

En `script.js`, actualiza el número de teléfono:

```javascript
const phoneNumber = '52XXXXXXXXXX'; // Reemplazar con tu número (incluye código de país)
```

### 6. Configurar Fecha de la Boda

En `script.js`, verifica la fecha:

```javascript
const weddingDate = new Date('December 19, 2025 20:00:00').getTime();
```

## 🌐 Publicación en GitHub Pages

### Opción 1: Desde la línea de comandos

```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Commit
git commit -m "Invitación de boda inicial"

# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/invitacion-boda.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

### Opción 2: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **main** branch
5. Click en **Save**
6. Tu sitio estará disponible en: `https://TU_USUARIO.github.io/invitacion-boda/`

## 📱 Compartir la Invitación

Una vez publicada, puedes compartir el enlace por:

- WhatsApp
- Email
- Redes sociales
- Código QR (genera uno con tu URL)

## 🎨 Personalización Avanzada

### Cambiar Fuentes

Puedes cambiar las fuentes en `index.html` (sección `<head>`):

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap" rel="stylesheet">
```

Y actualiza las variables en `styles.css`:

```css
--font-script: 'TuFuente', cursive;
```

### Agregar Más Fotos a la Galería

En `index.html`, dentro de `.photo-gallery`, agrega:

```html
<div class="photo-item">
    <img src="foto5.jpg" alt="Foto de la pareja" loading="lazy">
</div>
```

### Modificar Colores del Contador

En `styles.css`, busca `.countdown-number` y `.countdown-label` para cambiar colores.

## 📝 Checklist de Personalización

- [ ] Nombres de los novios
- [ ] Nombres de los padres
- [ ] Fecha y hora del evento
- [ ] Direcciones de ceremonia y recepción
- [ ] Enlaces a Google Maps
- [ ] Mesa de regalos (Liverpool y otras)
- [ ] Número de WhatsApp
- [ ] Código de vestimenta
- [ ] Política de niños
- [ ] Hashtag de la boda
- [ ] Imágenes (hero y galería)
- [ ] Música de fondo
- [ ] Colores y estilos personalizados
- [ ] Fecha límite de confirmación

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript Vanilla
- Google Fonts
- Responsive Design

## 📞 Información de Contacto del Fotógrafo

**Arturo Cruz**
- Teléfono: 477-920-3776
- Servicios: Fotografía y Video para Eventos

## 🎉 Características Premium Implementadas

✅ Diseño elegante y profesional
✅ Totalmente responsivo
✅ Cuenta regresiva en tiempo real
✅ Formulario RSVP integrado
✅ Integración con WhatsApp
✅ Mapas interactivos
✅ Galería de fotos
✅ Animaciones suaves
✅ Optimización de carga (lazy loading)
✅ SEO friendly
✅ Compatible con todos los navegadores

## 💡 Tips y Recomendaciones

### Optimización de Imágenes
- Usa formato JPG para fotos
- Comprime las imágenes antes de subirlas (usa TinyPNG o similar)
- Tamaño recomendado: 1920x1080px para hero, 800x800px para galería

### Música de Fondo
- Formato MP3
- Duración: 3-5 minutos en loop
- Bitrate: 128kbps para balance entre calidad y tamaño

### Testing
Prueba tu invitación en:
- Chrome, Firefox, Safari, Edge
- iPhone y Android
- Diferentes tamaños de pantalla

### Accesibilidad
- Usa alto contraste en textos
- Incluye atributos alt en imágenes
- Asegúrate de que sea navegable con teclado

## 🐛 Solución de Problemas

### La música no se reproduce
- Verifica que el archivo MP3 existe en la carpeta
- Algunos navegadores bloquean reproducción automática
- El usuario debe hacer click en el botón de música

### Las imágenes no se cargan
- Verifica las rutas de los archivos
- Asegúrate de que los nombres coincidan exactamente
- Verifica que las imágenes estén en la carpeta correcta

### El contador no funciona
- Verifica la fecha en `script.js`
- Asegúrate de que el formato sea correcto
- Revisa la consola del navegador para errores

## 📄 Licencia

Este proyecto es de uso libre para eventos personales. Si lo usas, sería genial que mencionaras al desarrollador original.

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias de mejoras, siéntete libre de:
- Abrir un Issue
- Hacer un Pull Request
- Contactar directamente

## 📸 Preview

Una vez que agregues tus fotos y personalices el contenido, tendrás una invitación digital profesional lista para compartir con tus invitados.

---

**¡Felicidades por tu boda! 💑**

*Desarrollado con ❤️ para celebrar el amor*
