// ===================================
// INICIALIZACIÓN
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c💍 ¡Bienvenido a nuestra invitación de boda! 💍', 
        'font-size: 20px; color: #4A6B54; font-weight: bold;');
    
    initMusic();
    initCountdown();
    initScrollAnimations();
    initSmoothScroll();
});

// ===================================
// MÚSICA DE FONDO
// ===================================
function initMusic() {
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');

    if (!music || !musicToggle || !musicIcon) {
        console.log('Elementos de música no encontrados');
        return;
    }

    let isPlaying = false;
    let hasInteracted = false;

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

    ['click', 'touchstart', 'scroll'].forEach(event => {
        document.addEventListener(event, startMusic, { once: true });
    });

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
}

// ===================================
// CUENTA REGRESIVA - CORREGIDA
// ===================================
function initCountdown() {
    // Fecha: 19 de diciembre de 2025, 19:00 hrs (7:00 PM)
    const weddingYear = 2025;
    const weddingMonth = 11; // Diciembre (0=enero, 11=diciembre)
    const weddingDay = 19;
    const weddingHour = 19;
    const weddingMinute = 0;
    
    const weddingDate = new Date(weddingYear, weddingMonth, weddingDay, weddingHour, weddingMinute, 0).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            const countdown = document.getElementById('countdown');
            if (countdown) {
                countdown.innerHTML = '<div style="text-align: center; font-size: 2rem; color: var(--verde-eucalipto); font-family: var(--font-serif);">¡Es hoy! 🎉</div>';
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        if (minutesEl) minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        if (secondsEl) secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    console.log('✅ Cuenta regresiva inicializada');
}

// ===================================
// ANIMACIONES AL HACER SCROLL
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

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

    animatedElements.forEach((element, index) => {
        if (element.classList.contains('section-title')) {
            element.classList.add('fade-in-up');
        } else if (element.classList.contains('parent-group')) {
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
        
        observer.observe(element);
    });

    const parentParagraphs = document.querySelectorAll('.parent-group p, .parent-group h3');
    parentParagraphs.forEach((p, index) => {
        p.classList.add('fade-in-up');
        p.classList.add(`delay-${Math.min(index + 1, 3)}`);
        observer.observe(p);
    });

    const quoteText = document.querySelector('.romantic-quote p');
    if (quoteText) {
        quoteText.classList.add('fade-in-up');
        observer.observe(quoteText);
    }

    const mapButtons = document.querySelectorAll('.btn-map');
    mapButtons.forEach((btn, index) => {
        btn.classList.add('fade-in-up');
        btn.classList.add(`delay-${index + 1}`);
        observer.observe(btn);
    });

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.classList.add('scale-in');
        link.classList.add(`delay-${index + 1}`);
        observer.observe(link);
    });

    const hashtag = document.querySelector('.hashtag');
    if (hashtag) {
        hashtag.classList.add('scale-in');
        observer.observe(hashtag);
    }
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ===================================
// EFECTO PARALLAX SUAVE
// ===================================
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const scrolled = window.pageYOffset;
            
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
});

// ===================================
// ANIMACIONES CSS ADICIONALES
// ===================================
const style = document.createElement('style');
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
`;
document.head.appendChild(style);

console.log('%c✨ Invitación cargada exitosamente ✨', 'font-size: 14px; color: #D4AF37; font-weight: bold;');