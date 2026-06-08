// ========================================
// SUPABASE CONFIG
// ========================================
const SUPABASE_URL  = 'https://nzpujmlienzfetqcgsxz.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s';
const EVENTO_SLUG   = 'invitacion-boda-daniel';
const SB_HEADERS    = {
    'apikey': SUPABASE_ANON,
    'Authorization': `Bearer ${SUPABASE_ANON}`,
    'Content-Type': 'application/json'
};

function getSessionId() {
    const KEY = 'foro7_sid';
    let sid = localStorage.getItem(KEY);
    if (!sid) { sid = crypto.randomUUID(); localStorage.setItem(KEY, sid); }
    return sid;
}
const SESSION_ID = getSessionId();
let eventoIdCache = null;
let sbDisponible  = true;

async function sbGetEventoId() {
    if (eventoIdCache) return eventoIdCache;
    const r = await fetch(
        `${SUPABASE_URL}/rest/v1/eventos?slug=eq.${EVENTO_SLUG}&select=id&limit=1`,
        { headers: SB_HEADERS }
    );
    if (!r.ok) throw new Error(r.status);
    const rows = await r.json();
    if (!rows.length) throw new Error('Evento no encontrado');
    eventoIdCache = rows[0].id;
    return eventoIdCache;
}

async function sbRegistrarVisita(pagina = 'selector') {
    try {
        const evento_id = await sbGetEventoId();
        await fetch(`${SUPABASE_URL}/rest/v1/visitas`, {
            method: 'POST',
            headers: { ...SB_HEADERS, 'Prefer': 'return=minimal' },
            body: JSON.stringify({ evento_id, pagina, session_id: SESSION_ID })
        });
    } catch(e) {}
}

// ========================================
// CONFIG
// ========================================
const CONFIG = {
    slug:               'invitacion-boda-daniel',
    nombre:             (window.EVENT_CONFIG && window.EVENT_CONFIG.nombre)             || 'Daniel \& Paulina',
    telefono:           (window.EVENT_CONFIG && window.EVENT_CONFIG.telefono)           || '',
    fechaEvento:        (window.EVENT_CONFIG && window.EVENT_CONFIG.fechaEvento)        || new Date(2026, 2, 21, 19, 0, 0),
    limiteImpresion:    50,
    limiteInvitacion:   null,
    costoFotoAdicional: (window.EVENT_CONFIG && window.EVENT_CONFIG.costoFotoAdicional) || 20,
};

// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = [
    'imagenes/foto7_0001.webp',
    'imagenes/foto7_0002.webp',
    'imagenes/foto7_0003.webp',
    'imagenes/foto7_0004.webp',
    'imagenes/foto7_0005.webp',
    'imagenes/foto7_0006.webp',
    'imagenes/foto7_0007.webp',
    'imagenes/foto7_0008.webp',
    'imagenes/foto7_0009.webp',
    'imagenes/foto7_0010.webp',
    'imagenes/foto7_0011.webp',
    'imagenes/foto7_0012.webp',
    'imagenes/foto7_0013.webp',
    'imagenes/foto7_0014.webp',
    'imagenes/foto7_0015.webp',
    'imagenes/foto7_0016.webp',
    'imagenes/foto7_0017.webp',
    'imagenes/foto7_0018.webp',
    'imagenes/foto7_0019.webp',
    'imagenes/foto7_0020.webp',
    'imagenes/foto7_0021.webp',
    'imagenes/foto7_0022.webp',
    'imagenes/foto7_0023.webp',
    'imagenes/foto7_0024.webp',
    'imagenes/foto7_0025.webp',
    'imagenes/foto7_0026.webp',
    'imagenes/foto7_0027.webp',
    'imagenes/foto7_0028.webp',
    'imagenes/foto7_0029.webp',
    'imagenes/foto7_0030.webp',
    'imagenes/foto7_0031.webp',
    'imagenes/foto7_0032.webp',
    'imagenes/foto7_0033.webp',
    'imagenes/foto7_0034.webp',
    'imagenes/foto7_0035.webp',
    'imagenes/foto7_0036.webp',
    'imagenes/foto7_0037.webp',
    'imagenes/foto7_0038.webp',
    'imagenes/foto7_0039.webp',
    'imagenes/foto7_0040.webp',
    'imagenes/foto7_0041.webp',
    'imagenes/foto7_0042.webp',
    'imagenes/foto7_0043.webp',
    'imagenes/foto7_0044.webp',
    'imagenes/foto7_0045.webp',
    'imagenes/foto7_0046.webp',
    'imagenes/foto7_0047.webp',
    'imagenes/foto7_0048.webp',
    'imagenes/foto7_0049.webp',
    'imagenes/foto7_0050.webp',
    'imagenes/foto7_0051.webp',
    'imagenes/foto7_0052.webp',
    'imagenes/foto7_0053.webp',
    'imagenes/foto7_0054.webp',
    'imagenes/foto7_0055.webp',
    'imagenes/foto7_0056.webp',
    'imagenes/foto7_0057.webp',
    'imagenes/foto7_0058.webp',
    'imagenes/foto7_0059.webp',
    'imagenes/foto7_0060.webp',
    'imagenes/foto7_0061.webp',
    'imagenes/foto7_0062.webp',
    'imagenes/foto7_0063.webp',
    'imagenes/foto7_0064.webp',
    'imagenes/foto7_0065.webp',
    'imagenes/foto7_0066.webp',
    'imagenes/foto7_0067.webp',
    'imagenes/foto7_0068.webp',
    'imagenes/foto7_0069.webp',
    'imagenes/foto7_0070.webp',
    'imagenes/foto7_0071.webp',
    'imagenes/foto7_0072.webp',
    'imagenes/foto7_0073.webp',
    'imagenes/foto7_0074.webp',
    'imagenes/foto7_0075.webp',
    'imagenes/foto7_0076.webp',
    'imagenes/foto7_0077.webp',
    'imagenes/foto7_0078.webp',
    'imagenes/foto7_0079.webp',
    'imagenes/foto7_0080.webp',
    'imagenes/foto7_0081.webp',
    'imagenes/foto7_0082.webp',
    'imagenes/foto7_0083.webp',
    'imagenes/foto7_0084.webp',
    'imagenes/foto7_0085.webp',
    'imagenes/foto7_0086.webp',
    'imagenes/foto7_0087.webp',
    'imagenes/foto7_0088.webp',
    'imagenes/foto7_0089.webp',
    'imagenes/foto7_0090.webp',
    'imagenes/foto7_0091.webp',
    'imagenes/foto7_0092.webp',
    'imagenes/foto7_0093.webp',
    'imagenes/foto7_0094.webp',
    'imagenes/foto7_0095.webp',
    'imagenes/foto7_0096.webp',
    'imagenes/foto7_0097.webp',
    'imagenes/foto7_0098.webp',
    'imagenes/foto7_0099.webp',
    'imagenes/foto7_0100.webp',
    'imagenes/foto7_0101.webp',
    'imagenes/foto7_0102.webp',
    'imagenes/foto7_0103.webp',
    'imagenes/foto7_0104.webp',
    'imagenes/foto7_0105.webp',
    'imagenes/foto7_0106.webp',
    'imagenes/foto7_0107.webp',
    'imagenes/foto7_0108.webp',
    'imagenes/foto7_0109.webp',
    'imagenes/foto7_0110.webp',
    'imagenes/foto7_0111.webp',
    'imagenes/foto7_0112.webp',
    'imagenes/foto7_0113.webp',
    'imagenes/foto7_0114.webp',
    'imagenes/foto7_0115.webp',
    'imagenes/foto7_0116.webp',
    'imagenes/foto7_0117.webp',
    'imagenes/foto7_0118.webp',
    'imagenes/foto7_0119.webp',
    'imagenes/foto7_0120.webp',
    'imagenes/foto7_0121.webp',
    'imagenes/foto7_0122.webp',
    'imagenes/foto7_0123.webp',
    'imagenes/foto7_0124.webp',
    'imagenes/foto7_0125.webp',
    'imagenes/foto7_0126.webp',
    'imagenes/foto7_0127.webp',
    'imagenes/foto7_0128.webp',
    'imagenes/foto7_0129.webp',
    'imagenes/foto7_0130.webp',
    'imagenes/foto7_0131.webp',
    'imagenes/foto7_0132.webp',
    'imagenes/foto7_0133.webp',
    'imagenes/foto7_0134.webp',
    'imagenes/foto7_0135.webp',
    'imagenes/foto7_0136.webp',
    'imagenes/foto7_0137.webp',
    'imagenes/foto7_0138.webp',
    'imagenes/foto7_0139.webp',
    'imagenes/foto7_0140.webp',
    'imagenes/foto7_0141.webp',
    'imagenes/foto7_0142.webp',
    'imagenes/foto7_0143.webp',
    'imagenes/foto7_0144.webp',
    'imagenes/foto7_0145.webp',
    'imagenes/foto7_0146.webp',
    'imagenes/foto7_0147.webp',
    'imagenes/foto7_0148.webp',
    'imagenes/foto7_0149.webp',
    'imagenes/foto7_0150.webp',
    'imagenes/foto7_0151.webp',
    'imagenes/foto7_0152.webp',
    'imagenes/foto7_0153.webp',
    'imagenes/foto7_0154.webp',
    'imagenes/foto7_0155.webp',
    'imagenes/foto7_0156.webp',
    'imagenes/foto7_0157.webp',
    'imagenes/foto7_0158.webp',
    'imagenes/foto7_0159.webp',
    'imagenes/foto7_0160.webp',
    'imagenes/foto7_0161.webp',
    'imagenes/foto7_0162.webp',
    'imagenes/foto7_0163.webp',
    'imagenes/foto7_0164.webp',
    'imagenes/foto7_0165.webp',
    'imagenes/foto7_0166.webp',
    'imagenes/foto7_0167.webp',
    'imagenes/foto7_0168.webp',
    'imagenes/foto7_0169.webp',
    'imagenes/foto7_0170.webp',
    'imagenes/foto7_0171.webp',
    'imagenes/foto7_0172.webp',
    'imagenes/foto7_0173.webp',
    'imagenes/foto7_0174.webp',
    'imagenes/foto7_0175.webp',
    'imagenes/foto7_0176.webp',
    'imagenes/foto7_0177.webp',
    'imagenes/foto7_0178.webp',
    'imagenes/foto7_0179.webp',
    'imagenes/foto7_0180.webp',
    'imagenes/foto7_0181.webp',
    'imagenes/foto7_0182.webp',
    'imagenes/foto7_0183.webp',
    'imagenes/foto7_0184.webp',
    'imagenes/foto7_0185.webp',
    'imagenes/foto7_0186.webp',
    'imagenes/foto7_0187.webp',
    'imagenes/foto7_0188.webp'
];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}


const STORAGE_KEY = 'boda_daniel_paulina_photo_selections';
const LIMITES = {
    ampliacion: CONFIG.limiteAmpliacion,
    impresion:  CONFIG.limiteImpresion,
    invitacion: CONFIG.limiteInvitacion
};

let photoSelections  = {};
let currentPhotoIndex = null;
let currentFilter    = 'all';
let touchStartX      = 0;
let touchStartY      = 0;
let modalOpen        = false;

// ========================================
// SUPABASE SYNC
// ========================================
function mostrarBannerSinSeleccion() {
    if (document.getElementById('banner-sin-sel')) return;
    if (Object.keys(photoSelections).length > 0) return;
    if (CONFIG.fechaEvento > new Date()) return; // evento aún no ocurre
    const banner = document.createElement('div');
    banner.id = 'banner-sin-sel';
    banner.style.cssText = 'background:#78350f;color:#fcd34d;text-align:center;padding:12px 20px;font-size:.88rem;position:sticky;top:0;z-index:200;line-height:1.5;';
    banner.innerHTML = '📸 <strong>¡Tus fotos están listas!</strong> Aún no has seleccionado ninguna foto. ¡Empieza ahora! <button onclick="this.parentElement.remove()" style="margin-left:12px;background:transparent;border:1px solid #fcd34d;color:#fcd34d;padding:1px 8px;border-radius:4px;cursor:pointer;font-size:.85rem;">×</button>';
    document.body.insertBefore(banner, document.body.firstChild);
}

async function loadSelections(isPoll = false) {
    if (!isPoll) {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) photoSelections = JSON.parse(saved);
        } catch(e) { photoSelections = {}; }
    }

    if (!sbDisponible) return;
    try {
        const evento_id = await sbGetEventoId();
        if (!evento_id) { sbDisponible = false; return; }

        const r = await fetch(
            `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}&select=foto_index,ampliacion,impresion,invitacion,descartada`,
            { headers: SB_HEADERS }
        );
        if (!r.ok) throw new Error(r.status);
        const rows = await r.json();

        const sb = {};
        rows.forEach(row => {
            if (row.ampliacion || row.impresion || row.invitacion || row.descartada)
                sb[row.foto_index] = {
                    ampliacion: row.ampliacion,
                    impresion:  row.impresion,
                    invitacion: row.invitacion,
                    descartada: row.descartada
                };
        });

        if (!isPoll) {
            const merged = {...sb};
            Object.entries(photoSelections).forEach(([idx, sel]) => {
                if (sel.ampliacion || sel.impresion || sel.invitacion || sel.descartada)
                    merged[idx] = sel;
            });
            photoSelections = merged;
            if (Object.keys(photoSelections).length > 0) {
                sbSyncSelections().catch(e => console.warn('[Supabase] Migración:', e.message));
            }
            sbRegistrarVisita('selector');
            mostrarBannerSinSeleccion();
        } else {
            photoSelections = sb;
        }

        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections)); } catch(e) {}
        renderGallery();
        updateStats();
        updateFilterButtons();
    } catch(e) {
        console.warn('[Supabase] Usando localStorage:', e.message);
        sbDisponible = false;
    }
}

async function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch(e) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (!sbDisponible) return;
    sbSyncSelections().catch(e => console.warn('[Supabase] Sync error:', e.message));
}

async function sbSyncSelections() {
    const snapshot = {...photoSelections};
    const evento_id = await sbGetEventoId();
    if (!evento_id) return;
    const rows = Object.entries(snapshot).map(([idx, sel]) => ({
        evento_id,
        session_id: SESSION_ID,
        foto_index: parseInt(idx),
        ampliacion: sel.ampliacion || false,
        impresion:  sel.impresion  || false,
        invitacion: sel.invitacion || false,
        descartada: sel.descartada || false,
    }));
    if (rows.length === 0) return;
    await fetch(`${SUPABASE_URL}/rest/v1/selecciones?on_conflict=evento_id,foto_index`, {
        method: 'POST',
        headers: { ...SB_HEADERS, 'Prefer': 'resolution=merge-duplicates,return=minimal' },
        body: JSON.stringify(rows)
    });
}

async function sbDeleteSelection(foto_index) {
    const evento_id = await sbGetEventoId();
    if (!evento_id) return;
    await fetch(
        `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}&foto_index=eq.${foto_index}`,
        { method: 'DELETE', headers: SB_HEADERS }
    );
}

// ========================================
// LOCAL STORAGE
// ========================================
async function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        if (sbDisponible) {
            try {
                const evento_id = await sbGetEventoId();
                if (evento_id) {
                    await fetch(
                        `${SUPABASE_URL}/rest/v1/selecciones?evento_id=eq.${evento_id}`,
                        { method: 'DELETE', headers: SB_HEADERS }
                    );
                }
            } catch(e) { console.warn('[Supabase] Error al borrar:', e.message); }
        }
        photoSelections = {};
        try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion:    0,
        impresion:     0,
        invitacion:    0,
        descartada:    0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion)  stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;
    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent =
        LIMITES.ampliacion ? `${stats.ampliacion}/${LIMITES.ampliacion}` : stats.ampliacion;
    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent  = stats.invitacion;
    document.getElementById('countDescartada').textContent  = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard  = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#f44336';
            ampliacionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.ampliacion === LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#4caf50';
            ampliacionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            ampliacionCard.style.borderColor = '';
            ampliacionCard.style.backgroundColor = '';
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#f44336';
            impresionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion)  categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');
            if (categories.length > 1)      card.classList.add('has-multiple');
            else if (categories.length === 1) card.classList.add(`has-${categories[0]}`);
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion)  badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    document.querySelectorAll('.photo-card').forEach(card => {
        const index     = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':          show = true; break;
            case 'ampliacion':   show = selection.ampliacion === true; break;
            case 'impresion':    show = selection.impresion  === true; break;
            case 'invitacion':   show = selection.invitacion === true; break;
            case 'descartada':   show = selection.descartada === true; break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function updateFilterButtons() {
    const stats = getStats();
    document.getElementById('btnFilterAll').textContent         = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent  = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent   = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent  = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent  = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    modalOpen = true;
    const modal = document.getElementById('photoModal');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');
    const displayNumber = `Foto ${index + 1} de ${photos.length}`;

    modalPhotoNumber.textContent = displayNumber;

    const modalImage = document.getElementById('modalImage');
    modalImage.src = photos[index];
    modalImage.alt = displayNumber;

    const selection = photoSelections[index] || {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.toggle('selected', selection[btn.dataset.category] === true);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
    modalOpen = false;
}

// ========================================
// NAVIGATION
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;
    let newIndex = direction === 'next'
        ? (currentPhotoIndex + 1) % photos.length
        : (currentPhotoIndex - 1 + photos.length) % photos.length;
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    let hasAnySelection = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        if (photoSelections[currentPhotoIndex]) {
            delete photoSelections[currentPhotoIndex];
            if (sbDisponible) sbDeleteSelection(currentPhotoIndex).catch(e => console.warn('[Supabase] Delete:', e.message));
        }
    }
    saveSelections();
    updateStats();
    updateFilterButtons();
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;
    const selectedCategories = {};
    let hasAnySelection = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
        if (sbDisponible) sbDeleteSelection(currentPhotoIndex).catch(e => console.warn('[Supabase] Delete:', e.message));
    }
    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada', 'success');
}

// ========================================
// SWIPE: derecha = guardar, izquierda = quitar
// ========================================
function swipeSaveAndNext() {
    if (currentPhotoIndex === null) return;
    saveCurrentSelections();
    const next = (currentPhotoIndex + 1) % photos.length;
    openModal(next);
    showToast('Guardado ✓', 'success');
}

function swipeClearAndNext() {
    if (currentPhotoIndex === null) return;
    const idx = currentPhotoIndex;
    if (photoSelections[idx]) {
        delete photoSelections[idx];
        if (sbDisponible) sbDeleteSelection(idx).catch(e => console.warn('[Supabase] Delete:', e.message));
        saveSelections();
        updateStats();
        updateFilterButtons();
    }
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    const next = (idx + 1) % photos.length;
    openModal(next);
    showToast('Selección quitada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda Daniel & Paulina',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };
    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo:     photo,
                ampliacion:  selection.ampliacion || false,
                impresion:   selection.impresion  || false,
                invitacion:  selection.invitacion || false,
                descartada:  selection.descartada || false
            });
        }
    });
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `seleccion-boda-daniel-paulina-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Reporte descargado', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let s = '💒 SELECCIÓN DE FOTOS - BODA DANIEL & PAULINA\n';
    s += '═══════════════════════════════════════════════════\n\n';
    s += `📋 SEGÚN CONTRATO:\n`;
    s += `   🖼️  Ampliación: ${LIMITES.ampliacion} foto (28x35 cm)\n`;
    s += `   📸 Impresión: ${LIMITES.impresion} fotos (5x7")\n\n`;
    s += `📊 RESUMEN ACTUAL:\n`;
    s += `   Total de fotos: ${photos.length}\n`;
    s += `   🖼️  Ampliación: ${stats.ampliacion}/${LIMITES.ampliacion} ${stats.ampliacion === LIMITES.ampliacion ? '✓' : stats.ampliacion > LIMITES.ampliacion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    s += `   📸 Impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    s += `   💌 Invitación: ${stats.invitacion}\n`;
    s += `   ❌ Descartadas: ${stats.descartada}\n`;
    s += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;
    ['ampliacion', 'impresion', 'invitacion', 'descartada'].forEach(cat => {
        const nums = [];
        photos.forEach((_, i) => { if (photoSelections[i]?.[cat]) nums.push(i + 1); });
        if (nums.length) {
            const names = { ampliacion: '🖼️  AMPLIACIÓN', impresion: '📸 IMPRESIÓN', invitacion: '💌 INVITACIÓN', descartada: '❌ DESCARTADAS' };
            s += `${names[cat]}:\n   Fotos: ${nums.join(', ')}\n   Total: ${nums.length}\n\n`;
        }
    });
    s += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    return s;
}

function copyToClipboard() {
    navigator.clipboard.writeText(generateTextSummary())
        .then(() => showToast('Resumen copiado al portapapeles', 'success'))
        .catch(() => showToast('No se pudo copiar', 'error'));
}

// ========================================
// TOAST
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    updateStats();
    updateFilterButtons();
    loadSelections();

    // Filter buttons
    const filterMap = {
        btnFilterAll: 'all', btnFilterAmpliacion: 'ampliacion', btnFilterImpresion: 'impresion',
        btnFilterInvitacion: 'invitacion', btnFilterDescartada: 'descartada', btnFilterSinClasificar: 'sin-clasificar'
    };
    Object.entries(filterMap).forEach(([id, filter]) => {
        const btn = document.getElementById(id);
        btn.dataset.filter = filter;
        btn.addEventListener('click', () => setFilter(filter));
    });
    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons with limits
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');
            if (!isCurrentlySelected) {
                const stats = getStats();
                if (category === 'ampliacion' && stats.ampliacion >= LIMITES.ampliacion) {
                    const cur = photoSelections[currentPhotoIndex] || {};
                    if (!cur.ampliacion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.ampliacion} foto para ampliación`, 'error');
                        return;
                    }
                }
                if (category === 'impresion' && stats.impresion >= LIMITES.impresion) {
                    const cur = photoSelections[currentPhotoIndex] || {};
                    if (!cur.impresion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.impresion} fotos para impresión`, 'error');
                        return;
                    }
                }
            }
            btn.classList.toggle('selected');
        });
    });

    // Close on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') closeModal();
    });

    // Navigation arrows (auto-guardan selección actual)
    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        saveCurrentSelections();
        navigatePhoto('prev');
    });
    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        saveCurrentSelections();
        navigatePhoto('next');
    });

    // Swipe: derecha = guardar + siguiente, izquierda = quitar + siguiente
    const photoModal = document.getElementById('photoModal');
    photoModal.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    photoModal.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) swipeSaveAndNext();
            else swipeClearAndNext();
        }
    }, { passive: true });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape')       closeModal();
            else if (e.key === 'Enter')   saveModalSelection();
            else if (e.key === 'ArrowLeft')  { saveCurrentSelections(); navigatePhoto('prev'); }
            else if (e.key === 'ArrowRight') { saveCurrentSelections(); navigatePhoto('next'); }
        }
    });

    // Polling: sincronizar con otros usuarios cada 30 segundos
    if (sbDisponible) {
        setInterval(() => { if (!modalOpen) loadSelections(true); }, 30000);
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) saveSelections();
});

window.addEventListener('beforeunload', () => {
    saveSelections();
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
