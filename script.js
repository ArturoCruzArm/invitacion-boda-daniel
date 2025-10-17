// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener(‘DOMContentLoaded’, function() {
console.log(’%c💍 ¡Bienvenido a nuestra invitación de boda! 💍’,
‘font-size: 20px; color: #4A6B54; font-weight: bold;’);

```
initMusic();
initCountdown();
initScrollAnimations();
initSmoothScroll();
initShareButton();
```

});

// ===================================
// MÚSICA DE FONDO
// ===================================
function initMusic() {
const music = document.getElementById(‘background-music’);
const musicToggle = document.getElementById(‘music-toggle’);
const musicIcon = document.getElementById(‘music-icon’);

```
// Validar que los elementos existen
if (!music || !musicToggle || !musicIcon) {
    console.log('Elementos de música no encontrados');
    return;
}

let isPlaying = false;
let hasInteracted = false;

// Función para iniciar música
function startMusic() {
    if (!hasInteracted) {
        music.play().catch(e => {
            console.log('Autoplay bloqueado:', e);
        });
        isPlaying = true;
        musicIcon.textContent = '🔊';
        hasInteracted = true;
    }
}

// Iniciar música en primera interacción
['click', 'touchstart', 'scroll'].forEach(event => {
    document.addEventListener(event, startMusic, { once: true });
});

// Toggle manual
musicToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isPlaying) {
        music.pause();
        musicIcon.textContent = '🔇';
    } else {
        music.play().catch(e => console.log('Error:', e));
        musicIcon.textContent = '🔊';
    }
    isPlaying = !isPlaying;
    hasInteracted = true;
});
```

}

// ===================================
// CUENTA REGRESIVA
// ===================================
function initCountdown() {
const weddingDate = new Date(‘2025-12-19T19:00:00’).getTime();

```
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = 
            '<div style="text-align: center; font-size: 2rem; color: var(--verde-eucalipto); font-family: var(--font-serif);">¡Es hoy! 🎉</div>';
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

updateCountdown();
setInterval(updateCountdown, 1000);
```

}

// ===================================
// ANIMACIONES AL HACER SCROLL - MEJORADO
// ===================================
function initScrollAnimations() {
// Configuración del observador
const observerOptions = {
threshold: 0.1, // Se activa cuando el 10% del elemento es visible
rootMargin: ‘0px 0px -50px 0px’ // Margen inferior para activar antes
};

```
// Crear el observador
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agregar clase 'visible' cuando el elemento entra en el viewport
            entry.target.classList.add('visible');
            // Opcional: dejar de observar después de animar (comentar si quieres que se anime cada vez)
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionar TODOS los elementos que queremos animar
const animatedElements = document.querySelectorAll(`
    .section-title,
    .parent-group,
    .romantic-quote,
    .countdown-item,
    .event-card,
    .gift-card,
    .hashtag-content,
    .whatsapp-item,
    .info-card,
    .footer-message,
    .footer-names,
    .footer-date,
    .rsvp-subtitle,
    .gifts-subtitle,
    .event-icon,
    .whatsapp-contact > p
`);

// Agregar clases de animación a cada elemento
animatedElements.forEach((element, index) => {
    // Determinar qué tipo de animación usar según el elemento
    if (element.classList.contains('section-title')) {
        element.classList.add('fade-in-up');
    } else if (element.classList.contains('parent-group')) {
        // Alternar entre izquierda y derecha
        element.classList.add(index % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
    } else if (element.classList.contains('countdown-item')) {
        element.classList.add('scale-in');
        element.classList.add(`delay-${(index % 4) + 1}`);
    } else if (element.classList.contains('event-card')) {
        element.classList.add('fade-in-up');
    } else if (element.classList.contains('gift-card')) {
        element.classList.add('scale-in');
    } else if (element.classList.contains('info-card')) {
        element.classList.add('fade-in-up');
        element.classList.add(`delay-${(index % 4) + 1}`);
    } else if (element.classList.contains('whatsapp-item')) {
        element.classList.add(index % 2 === 0 ? 'fade-in-left' : 'fade-in-right');
    } else {
        element.classList.add('fade-in-up');
    }
    
    // Observar el elemento
    observer.observe(element);
});

// Animar también los párrafos dentro de parent-group
const parentParagraphs = document.querySelectorAll('.parent-group p, .parent-group h3');
parentParagraphs.forEach((p, index) => {
    p.classList.add('fade-in-up');
    p.classList.add(`delay-${Math.min(index + 1, 3)}`);
    observer.observe(p);
});

// Animar elementos de la quote
const quoteText = document.querySelector('.romantic-quote p');
if (quoteText) {
    quoteText.classList.add('fade-in-up');
    observer.observe(quoteText);
}

// Animar botones de mapa
const mapButtons = document.querySelectorAll('.btn-map');
mapButtons.forEach((btn, index) => {
    btn.classList.add('fade-in-up');
    btn.classList.add(`delay-${index + 1}`);
    observer.observe(btn);
});

// Animar enlaces sociales
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach((link, index) => {
    link.classList.add('scale-in');
    link.classList.add(`delay-${index + 1}`);
    observer.observe(link);
});

// Animar el hashtag
const hashtag = document.querySelector('.hashtag');
if (hashtag) {
    hashtag.classList.add('scale-in');
    observer.observe(hashtag);
}
```

}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {
anchor.addEventListener(‘click’, function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute(‘href’));
if (target) {
target.scrollIntoView({
behavior: ‘smooth’,
block: ‘start’
});
}
});
});
}

// ===================================
// COMPARTIR INVITACIÓN
// ===================================
function initShareButton() {
window.shareInvitation = function() {
const shareData = {
title: ‘Boda Paulina & Daniel’,
text: ‘¡Nos casamos! 💍 Te invitamos a celebrar con nosotros - 19 de Diciembre 2025’,
url: window.location.href
};

```
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Compartido exitosamente'))
            .catch(err => console.log('Error al compartir:', err));
    } else {
        // Fallback: copiar al portapapeles
        copyToClipboard(window.location.href);
    }
};
```

}

// ===================================
// COPIAR AL PORTAPAPELES
// ===================================
function copyToClipboard(text) {
if (navigator.clipboard) {
navigator.clipboard.writeText(text)
.then(() => {
showNotification(’¡Enlace copiado al portapapeles! 📋’);
})
.catch(err => {
fallbackCopy(text);
});
} else {
fallbackCopy(text);
}
}

function fallbackCopy(text) {
const textArea = document.createElement(‘textarea’);
textArea.value = text;
textArea.style.position = ‘fixed’;
textArea.style.left = ‘-999999px’;
document.body.appendChild(textArea);
textArea.select();

```
try {
    document.execCommand('copy');
    showNotification('¡Enlace copiado! 📋');
} catch (err) {
    showNotification('Por favor copia manualmente: ' + text);
}

document.body.removeChild(textArea);
```

}

// ===================================
// MOSTRAR NOTIFICACIÓN
// ===================================
function showNotification(message) {
// Crear elemento de notificación
const notification = document.createElement(‘div’);
notification.textContent = message;
notification.style.cssText = `position: fixed; top: 100px; left: 50%; transform: translateX(-50%); background: var(--verde-eucalipto); color: white; padding: 1rem 2rem; border-radius: 50px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); z-index: 10000; font-family: var(--font-sans); font-weight: 600; animation: slideDown 0.5s ease;`;

```
document.body.appendChild(notification);

// Remover después de 3 segundos
setTimeout(() => {
    notification.style.animation = 'slideUp 0.5s ease';
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 500);
}, 3000);
```

}

// ===================================
// EFECTO PARALLAX SUAVE
// ===================================
let ticking = false;

window.addEventListener(‘scroll’, function() {
if (!ticking) {
window.requestAnimationFrame(function() {
const scrolled = window.pageYOffset;

```
        // Aplicar parallax muy sutil a las decoraciones florales
        const florals = document.querySelectorAll('.floral-decoration');
        florals.forEach(floral => {
            const speed = 0.15;
            const yPos = scrolled * speed;
            floral.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    });
    ticking = true;
}
```

});

// ===================================
// PREVENIR ZOOM EN iOS
// ===================================
document.addEventListener(‘gesturestart’, function(e) {
e.preventDefault();
});

// ===================================
// LAZY LOADING DE IMÁGENES
// ===================================
if (‘IntersectionObserver’ in window) {
const imageObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const img = entry.target;
if (img.dataset.src) {
img.src = img.dataset.src;
img.removeAttribute(‘data-src’);
}
observer.unobserve(img);
}
});
});

```
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
```

}

// ===================================
// DETECTAR MODO OSCURO DEL SISTEMA
// ===================================
if (window.matchMedia && window.matchMedia(’(prefers-color-scheme: dark)’).matches) {
console.log(‘Modo oscuro detectado’);
// Aquí podrías aplicar ajustes si lo deseas
}

// ===================================
// ANIMACIONES CSS ADICIONALES
// ===================================
const style = document.createElement(‘style’);
style.textContent = `
@keyframes slideDown {
from {
opacity: 0;
transform: translateX(-50%) translateY(-30px);
}
to {
opacity: 1;
transform: translateX(-50%) translateY(0);
}
}

```
@keyframes slideUp {
    from {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
    to {
        opacity: 0;
        transform: translateX(-50%) translateY(-30px);
    }
}
```

`;
document.head.appendChild(style);

// ===================================
// LOG FINAL
// ===================================
console.log(’%c✨ Invitación cargada exitosamente ✨’,
‘font-size: 14px; color: #D4AF37; font-weight: bold;’);
console.log(’%cDesarrollado con amor ❤️ para Paulina & Daniel’,
‘font-size: 12px; color: #4A6B54;’);