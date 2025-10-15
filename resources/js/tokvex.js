let mediaUrls = [];
let selectedMediaUrl = '';
let mediaType = '';
let fileName = '';

function generarNombreArchivo(tipo) {
    const randomNum = Math.floor(Math.random() * 1000000);
    const fecha = Date.now();
    const prefijo = tipo === 'video' ? 'orvex_video_' : 'orvex_imagen_';
    return `${prefijo}${randomNum}_${fecha}${tipo === 'video' ? '.mp4' : '.jpg'}`;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toast.className = 'toast ' + type;    
    toastMessage.textContent = message;    
      
    setTimeout(() => {    
        toast.classList.add('show');    
    }, 100);    
      
    setTimeout(() => {    
        toast.classList.remove('show');    
    }, 3000);
}

function selectImage(index) {
    const allImages = document.querySelectorAll('.image-option');
    allImages.forEach(img => img.classList.remove('selected'));

    const selectedImage = document.querySelector(`.image-option[data-index="${index}"]`);  
    selectedImage.classList.add('selected');  
      
    selectedMediaUrl = mediaUrls[index];  
      
    const previewImage = document.getElementById('previewImage');  
    previewImage.src = selectedMediaUrl;  
    previewImage.style.display = 'block';  
      
    document.getElementById('previewSection').style.display = 'block';  
      
    fileName = generarNombreArchivo('image');
}

async function procesarEnlace() {
    const url = document.getElementById("tiktokUrl").value.trim();
    const loaderContainer = document.getElementById("loaderContainer");
    const previewSection = document.getElementById("previewSection");
    const imageGallerySection = document.getElementById("imageGallerySection");
    const previewImage = document.getElementById("previewImage");
    const previewVideo = document.getElementById("previewVideo");
    const mediaContainer = document.getElementById("mediaContainer");

    if (!url) {    
        showToast("Por favor, ingresa un enlace válido", "error");    
        return;    
    }    

    loaderContainer.style.display = "flex";    
    previewSection.style.display = "none";    
    imageGallerySection.style.display = "none";  

    let apiURL = '';    
      
    if (url.includes("tiktok.com")) {    
        apiURL = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;    
    } else {    
        showToast("Por favor, ingresa un enlace válido", "error");    
        loaderContainer.style.display = "none";    
        return;    
    }    

    try {    
        let response = await fetch(apiURL);    
        let data = await response.json();    
        if (!data || data.code !== 0 || !data.data) {    

            let mensajeError = "No se pudo procesar el enlace";
            
            if (data && data.msg) {
                if (data.msg.includes("Invalid") || data.msg.includes("not found")) {
                    mensajeError = "Enlace de TikTok inválido";
                } else if (data.msg.includes("Service") || data.msg.includes("server")) {
                    mensajeError = "Error en el servicio";
                }
            }
            
            showToast(mensajeError, "error");
            loaderContainer.style.display = "none";
            return;
        }    

        previewImage.style.display = "none";    
        previewVideo.style.display = "none";    

        if (data.data.images && data.data.images.length > 1) {  
            mediaUrls = data.data.images;  
            mediaType = 'image';  
              
            const imageGallery = document.getElementById('imageGallery');  
            imageGallery.innerHTML = '';  
              
            mediaUrls.forEach((imageUrl, index) => {  
                const imageDiv = document.createElement('div');  
                imageDiv.className = 'image-option';  
                imageDiv.setAttribute('data-index', index);  
                imageDiv.onclick = () => selectImage(index);  
                  
                const img = document.createElement('img');  
                img.src = imageUrl;  
                img.alt = `Imagen ${index + 1}`;  
                  
                const overlay = document.createElement('div');  
                overlay.className = 'select-overlay';  
                overlay.innerHTML = '<i class="fas fa-check"></i>';  
                  
                imageDiv.appendChild(img);  
                imageDiv.appendChild(overlay);  
                imageGallery.appendChild(imageDiv);  
            });  
              
            imageGallerySection.style.display = "block";  
            showToast("¡Contenido listo para descargar!", "success");  
              
        } else if (data.data.images && data.data.images.length > 0) {    
            previewImage.src = data.data.images[0];    
            previewImage.style.display = "block";    
            selectedMediaUrl = data.data.images[0];    
            mediaType = 'image';    
            fileName = generarNombreArchivo('image');  
            previewSection.style.display = "block";  
            showToast("¡Contenido listo para descargar!", "success");  
        } else if (data.data.play) {    
            previewVideo.src = data.data.play;    
            previewVideo.style.display = "block";    
            selectedMediaUrl = data.data.play;    
            mediaType = 'video';    
            fileName = generarNombreArchivo('video');  
            previewSection.style.display = "block";  
            showToast("¡Contenido listo para descargar!", "success");  
        } else {

            showToast("No se encontró contenido en el enlace", "error");
            return;
        }    
            
        document.getElementById("downloadButton").style.animation = "pulse 2s infinite";    
        mediaContainer.style.animation = "fadeUp 0.5s forwards";    
    } catch (error) {    
        showToast("Error al obtener el contenido", "error");    
        console.error(error);    
    } finally {    
        loaderContainer.style.display = "none";    
    }
}

function iniciarDescarga() {
    if (!selectedMediaUrl) {
        showToast("No hay contenido para descargar", "error");
        return;
    }

    showToast("¡Descarga iniciada!", "success");    
      
    fetch(selectedMediaUrl)    
        .then(response => response.blob())    
        .then(blob => {    
            const blobUrl = window.URL.createObjectURL(blob);    
            const a = document.createElement('a');    
            a.style.display = 'none';    
            a.href = blobUrl;    
            a.download = fileName;    
            document.body.appendChild(a);    
            a.click();    
            window.URL.revokeObjectURL(blobUrl);    
            document.body.removeChild(a);    
        })    
        .catch(error => {    
            console.error("Error al descargar:", error);    
            showToast("Error al descargar:", "error");
            intentarDescargaAlternativa();    
        });
}

function intentarDescargaAlternativa() {
    const downloadFrame = document.getElementById('downloadFrame');
    downloadFrame.src = selectedMediaUrl;
    window.location.href = selectedMediaUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, 100 * index);
    });
});

const CURRENT_TERMS_VERSION = '1.0';
const UPDATE_DATE = '12 de octubre de 2025';

let hasScrolledToBottom = false;

function updateVersionDisplay() {
    document.getElementById('versionBadge').textContent = `Versión ${CURRENT_TERMS_VERSION}`;
    document.getElementById('modalVersion').textContent = CURRENT_TERMS_VERSION;
    document.getElementById('updateDate').textContent = UPDATE_DATE;
}

function showTermsPopup() {
    const popup = document.getElementById('termsPopup');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openTermsModal() {
    document.getElementById('termsPopup').classList.remove('active');
    document.getElementById('termsModal').classList.add('active');
    hasScrolledToBottom = false;
    updateAcceptButton();
}

function closeTermsModal() {
    document.getElementById('termsModal').classList.remove('active');
    document.getElementById('termsPopup').classList.add('active');
    hasScrolledToBottom = false;
    updateAcceptButton();
}

function updateAcceptButton() {
    const acceptBtn = document.getElementById('acceptBtn');
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    if (hasScrolledToBottom) {
        acceptBtn.classList.add('enabled');
        acceptBtn.disabled = false;
        scrollIndicator.classList.add('completed');
        scrollIndicator.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>¡Lectura completada!</span>
        `;
    } else {
        acceptBtn.classList.remove('enabled');
        acceptBtn.disabled = true;
        scrollIndicator.classList.remove('completed');
        scrollIndicator.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Desplázate hasta el final</span>
        `;
    }
}

function acceptTerms() {
    if (!hasScrolledToBottom) {
        showWarningNotification('Por favor, lee todos los términos antes de aceptar');
        return;
    }

    const acceptedData = {
        version: CURRENT_TERMS_VERSION,
        acceptedAt: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    localStorage.setItem('termsAccepted', JSON.stringify(acceptedData));
    
    console.log('Términos aceptados y guardados en localStorage:', acceptedData);
    
    const modal = document.getElementById('termsModal');
    const popup = document.getElementById('termsPopup');
    
    modal.style.opacity = '0';
    popup.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.remove('active');
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
        showSuccessNotification();
    }, 300);
}

function showSuccessNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
        color: white;
        padding: 18px 28px;
        border-radius: 12px;
        box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
        font-weight: 600;
        font-size: 15px;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    notification.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
            <polyline points="16 10 10 16 8 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>¡Términos aceptados correctamente!</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

function showWarningNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        background: linear-gradient(135deg, #f59e0b 0%, #fb923c 100%);
        color: white;
        padding: 18px 28px;
        border-radius: 12px;
        box-shadow: 0 12px 40px rgba(245, 158, 11, 0.4);
        font-weight: 600;
        font-size: 15px;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    notification.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="12" y1="9" x2="12" y2="13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

function checkTermsUpdate() {
    const savedData = localStorage.getItem('termsAccepted');
    
    if (!savedData) {
        console.log('No se encontraron términos aceptados. Mostrando popup...');
        setTimeout(showTermsPopup, 500);
        return;
    }
    
    try {
        const acceptedData = JSON.parse(savedData);
        
        if (acceptedData.version !== CURRENT_TERMS_VERSION) {
            console.log(`Nueva versión de términos detectada (${acceptedData.version} → ${CURRENT_TERMS_VERSION}). Mostrando popup...`);
            setTimeout(showTermsPopup, 500);
        } else {
            console.log('Términos ya aceptados. Versión actual:', acceptedData.version);
            console.log('Fecha de aceptación:', new Date(acceptedData.acceptedAt).toLocaleString('es-ES'));
        }
    } catch (error) {
        console.error('Error al leer los datos guardados:', error);
        setTimeout(showTermsPopup, 500);
    }
}

function updateReadingProgress() {
    const modal = document.getElementById('termsModal');
    const progressBar = document.getElementById('readingProgress');
    
    if (modal.classList.contains('active')) {
        const scrollTop = modal.scrollTop;
        const scrollHeight = modal.scrollHeight - modal.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = Math.min(progress, 100) + '%';
        
        // Detectar si llegó al final (con margen de 50px)
        if (scrollTop + 50 >= scrollHeight && !hasScrolledToBottom) {
            hasScrolledToBottom = true;
            updateAcceptButton();
        }
    }
}

document.getElementById('termsModal').addEventListener('scroll', updateReadingProgress);

window.addEventListener('beforeunload', function(e) {
    const savedData = localStorage.getItem('termsAccepted');
    
    if (!savedData) {
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que quieres salir sin aceptar los términos?';
        return;
    }
    
    try {
        const acceptedData = JSON.parse(savedData);
        if (acceptedData.version !== CURRENT_TERMS_VERSION) {
            e.preventDefault();
            e.returnValue = '¿Estás seguro de que quieres salir sin aceptar los términos actualizados?';
        }
    } catch (error) {
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que quieres salir sin aceptar los términos?';
    }
});

window.addEventListener('load', function() {
    updateVersionDisplay();
    checkTermsUpdate();
});

if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    console.log('Modo oscuro:', darkModeQuery.matches ? 'Activado' : 'Desactivado');
    
    darkModeQuery.addEventListener('change', (e) => {
        console.log('Modo oscuro cambió a:', e.matches ? 'Activado' : 'Desactivado');
    });
}

function resetTerms() {
    localStorage.removeItem('termsAccepted');
    console.log('Términos borrados. Recarga la página para ver el popup nuevamente.');
}