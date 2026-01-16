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
const STORAGE_KEY = 'boda_daniel_paulina_photo_selections';
const LIMITES = {
    ampliacion: 1,
    impresion: 50,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
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
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
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
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

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
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
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
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
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

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
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
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
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
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-daniel-paulina-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💒 SELECCIÓN DE FOTOS - BODA DANIEL & PAULINA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   🖼️  Ampliación requerida: ${LIMITES.ampliacion} foto (28x35 cm)\n`;
    summary += `   📸 Impresión requerida: ${LIMITES.impresion} fotos (5x7")\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}/${LIMITES.ampliacion} ${stats.ampliacion === LIMITES.ampliacion ? '✓' : stats.ampliacion > LIMITES.ampliacion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            if (!isCurrentlySelected) {
                const stats = getStats();

                if (category === 'ampliacion' && stats.ampliacion >= LIMITES.ampliacion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.ampliacion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.ampliacion} foto(s) para ampliación. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }

                if (category === 'impresion' && stats.impresion >= LIMITES.impresion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.impresion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.impresion} fotos para impresión. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }
            }

            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
