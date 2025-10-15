// ===================================
// MÚSICA DE FONDO
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    let isPlaying = false;

    // Control de música
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            musicIcon.textContent = '🔇';
        } else {
            music.play().catch(e => {
                console.log('Error al reproducir música:', e);
            });
            musicIcon.textContent = '🔊';
        }
        isPlaying = !isPlaying;
    });

    // ===================================
    // CUENTA REGRESIVA
    // ===================================
    const weddingDate = new Date('December 19, 2025 20:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML =
                '<p style="font-size: 2rem; color: var(--color-primary);">¡Ya es nuestro día especial!</p>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===================================
    // FORMULARIO RSVP
    // ===================================
    const rsvpForm = document.getElementById('rsvp-form');

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const guests = document.getElementById('guests').value;
        const message = document.getElementById('message').value;

        // Crear mensaje de WhatsApp
        const whatsappMessage = `Hola, confirmo mi asistencia a la boda:%0A%0A` +
            `Nombre: ${encodeURIComponent(name)}%0A` +
            `Número de invitados: ${guests}%0A` +
            `Mensaje: ${encodeURIComponent(message)}`;

        // Número de WhatsApp (reemplazar con el número real)
        const phoneNumber = '52XXXXXXXXXX'; // Reemplazar con el número real

        // Abrir WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');

        // Mostrar mensaje de confirmación
        alert('¡Gracias por confirmar! Serás redirigido a WhatsApp.');

        // Limpiar formulario
        rsvpForm.reset();
    });

    // ===================================
    // ANIMACIONES AL HACER SCROLL
    // ===================================
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.event-card, .gift-card, .info-card, .photo-item');

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ===================================
    // SMOOTH SCROLL PARA ENLACES
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===================================
    // EFECTO PARALLAX EN EL HERO
    // ===================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ===================================
    // LAZY LOADING DE IMÁGENES
    // ===================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ===================================
    // PRECARGA DE FUENTES
    // ===================================
    if ('fonts' in document) {
        Promise.all([
            document.fonts.load('1em Great Vibes'),
            document.fonts.load('1em Cormorant Garamond'),
            document.fonts.load('1em Montserrat')
        ]).then(() => {
            document.body.classList.add('fonts-loaded');
        });
    }

    // ===================================
    // COMPARTIR EN REDES SOCIALES
    // ===================================
    function shareOnSocialMedia(platform) {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('¡Nos casamos! Te invitamos a nuestra boda');

        const socialLinks = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            whatsapp: `https://wa.me/?text=${text}%20${url}`
        };

        if (socialLinks[platform]) {
            window.open(socialLinks[platform], '_blank', 'width=600,height=400');
        }
    }

    // Exponer función globalmente si se necesita
    window.shareOnSocialMedia = shareOnSocialMedia;

    // ===================================
    // DETECTAR SI ES MÓVIL
    // ===================================
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        document.body.classList.add('mobile-device');

        // Deshabilitar parallax en móviles para mejor rendimiento
        window.removeEventListener('scroll', function() {});
    }

    // ===================================
    // AGREGAR AL CALENDARIO
    // ===================================
    function addToCalendar() {
        const event = {
            title: 'Boda de [Novia] y [Novio]',
            description: 'Ceremonia religiosa y recepción',
            location: 'Templo San Judas Tadeo y Salón de Eventos Laja, León, Gto.',
            start: '2025-12-19T20:00:00',
            end: '2025-12-20T02:00:00'
        };

        // Formato para Google Calendar
        const googleCalendarUrl =
            `https://calendar.google.com/calendar/render?action=TEMPLATE` +
            `&text=${encodeURIComponent(event.title)}` +
            `&details=${encodeURIComponent(event.description)}` +
            `&location=${encodeURIComponent(event.location)}` +
            `&dates=${event.start.replace(/[-:]/g, '')}/${event.end.replace(/[-:]/g, '')}`;

        window.open(googleCalendarUrl, '_blank');
    }

    window.addToCalendar = addToCalendar;

    // ===================================
    // MOSTRAR NOTIFICACIÓN DE BIENVENIDA
    // ===================================
    setTimeout(() => {
        // Puedes agregar una notificación o modal de bienvenida aquí
        console.log('Invitación cargada correctamente');
    }, 1000);

    // ===================================
    // PREVENIR ZOOM EN iOS
    // ===================================
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });

    // ===================================
    // ANALYTICS Y SEGUIMIENTO (Opcional)
    // ===================================
    // Aquí puedes agregar Google Analytics o Facebook Pixel
    // Ejemplo:
    // gtag('event', 'page_view', { page_path: window.location.pathname });
});

// ===================================
// FUNCIONES AUXILIARES
// ===================================

// Formatear fecha
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(date).toLocaleDateString('es-MX', options);
}

// Copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('¡Copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Cargar imagen con placeholder
function loadImageWithPlaceholder(img) {
    const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3C/svg%3E';

    img.src = placeholder;

    const actualImage = new Image();
    actualImage.onload = function() {
        img.src = actualImage.src;
        img.classList.add('loaded');
    };
    actualImage.src = img.dataset.src;
}

console.log('%c💒 ¡Bienvenido a nuestra invitación de boda! 💒', 'font-size: 20px; color: #C9A66B; font-weight: bold;');
console.log('%cDesarrollado con amor ❤️', 'font-size: 14px; color: #8B7355;');
