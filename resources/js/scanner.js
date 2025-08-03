const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const uploadOption = document.getElementById('upload-option');
    const cameraOption = document.getElementById('camera-option');
    const fileInput = document.getElementById('file-input');
    const imagePreview = document.getElementById('image-preview');
    const cameraPreview = document.getElementById('camera-preview');
    const previewContainer = document.querySelector('.preview-container');
    const resetBtn = document.getElementById('reset-btn');
    const scanOverlay = document.querySelector('.scan-overlay');
    const scanResult = document.querySelector('.scan-result');
    const scanResultContent = document.getElementById('scan-result');
    const qrInput = document.getElementById('qr-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrResultContainer = document.querySelector('.qr-result-container');
    const qrCodeElement = document.getElementById('qr-code');
    const downloadBtn = document.getElementById('download-btn');
    const cropModal = document.getElementById('crop-modal');
    const cropImage = document.getElementById('crop-image');
    const closeModal = document.getElementById('close-modal');
    const cropBtn = document.getElementById('crop-btn');

    let stream = null;
    let cropper = null;
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let scanning = false;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');

        if (stream) {
          stopCamera();
          previewContainer.classList.remove('active');
        }

        resetScanner();

        qrResultContainer.classList.remove('active');
      });
    });

    uploadOption.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {

          cropImage.src = event.target.result;
          cropModal.classList.add('active');

          if (cropper) {
            cropper.destroy();
          }

          cropper = new Cropper(cropImage, {
            aspectRatio: 1,
            viewMode: 1,
            autoCropArea: 0.8,
            guides: true,
            background: false,
            movable: true,
            rotatable: false,
            scalable: true,
            zoomable: true,
            ready: function() {
              cropImage.style.width = '100%';
              cropImage.style.height = 'auto';
            }
          });
        }

        reader.readAsDataURL(file);
      }
    });

    cameraOption.addEventListener('click', () => {
      startCamera();
    });

    resetBtn.addEventListener('click', () => {
      resetScanner();
    });

    generateBtn.addEventListener('click', () => {
      generateQRCode();
    });

    downloadBtn.addEventListener('click', () => {
      downloadQRCode();
    });

    closeModal.addEventListener('click', () => {
      cropModal.classList.remove('active');
      resetScanner();
    });

    cropBtn.addEventListener('click', () => {
      if (cropper) {

        const croppedCanvas = cropper.getCroppedCanvas({
          width: 800,
          height: 800
        });

        imagePreview.src = croppedCanvas.toDataURL('image/png');

        cropModal.classList.remove('active');

        previewContainer.classList.add('active');
        imagePreview.classList.add('active');
        cameraPreview.classList.remove('active');

        resetBtn.classList.remove('hidden');

        setTimeout(() => {
          startScanning('image');
        }, 500);
      }
    });

    function startCamera() {
      if (scanning) return;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: {
              ideal: 1280
            },
            height: {
              ideal: 1280
            }
          }
        })
        .then(function(mediaStream) {
          scanning = true;
          stream = mediaStream;
          cameraPreview.srcObject = stream;
          previewContainer.classList.add('active');
          cameraPreview.classList.add('active');
          imagePreview.classList.remove('active');

          scanCamera();
        })
        .catch(function(error) {
          alert('Error al acceder a la cámara: ' + error.message);
        });
      } else {
        alert('Tu navegador no soporta el acceso a la cámara.');
      }
    }

    function stopCamera() {
      if (stream) {
        scanning = false;
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        cameraPreview.classList.remove('active');
      }
    }

    function scanCamera() {
      if (!scanning || !cameraPreview.classList.contains('active')) return;

      if (cameraPreview.videoWidth > 0) {
        canvas.width = cameraPreview.videoWidth;
        canvas.height = cameraPreview.videoHeight;

        ctx.drawImage(cameraPreview, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {

          scanResultContent.textContent = code.data;
          scanResult.classList.add('active');

          scanOverlay.classList.remove('active');

          resetBtn.classList.remove('hidden');

          stopCamera();
        } else {

          requestAnimationFrame(scanCamera);
        }
      } else {

        setTimeout(scanCamera, 100);
      }
    }

    function startScanning(source) {

      scanOverlay.classList.add('active');
      scanResult.classList.remove('active');

      setTimeout(() => {
        if (source === 'image') {
          scanImage();
        }
      },
        800);
    }

    function scanImage() {
      canvas.width = imagePreview.naturalWidth || imagePreview.width;
      canvas.height = imagePreview.naturalHeight || imagePreview.height;
      ctx.drawImage(imagePreview,
        0,
        0,
        canvas.width,
        canvas.height);

      const imageData = ctx.getImageData(0,
        0,
        canvas.width,
        canvas.height);
      const code = jsQR(imageData.data,
        imageData.width,
        imageData.height);

      setTimeout(() => {
        scanOverlay.classList.remove('active');

        if (code) {
          scanResultContent.textContent = code.data;
          scanResult.classList.add('active');
        } else {
          alert('No se pudo detectar ningún código QR. Intenta con otra imagen.');
        }
      },
        2000);
    }

    function resetScanner() {

      stopCamera();

      imagePreview.src = '';
      imagePreview.classList.remove('active');
      cameraPreview.classList.remove('active');
      previewContainer.classList.remove('active');

      scanOverlay.classList.remove('active');
      scanResult.classList.remove('active');

      fileInput.value = '';

      resetBtn.classList.add('hidden');

      scanning = false;
    }

    function generateQRCode() {
      const inputText = qrInput.value.trim();

      if (!inputText) {
        alert('Por favor introduce un texto o URL');
        return;
      }

      qrCodeElement.width = 256;
      qrCodeElement.height = 256;
      const ctx = qrCodeElement.getContext('2d');
      ctx.clearRect(0, 0, qrCodeElement.width, qrCodeElement.height);

      QRCode.toCanvas(
        qrCodeElement,
        inputText,
        {
          width: 256,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          },
          errorCorrectionLevel: 'H'
        },
        function(error) {
          if (error) {
            console.error(error);
            alert('Error al generar el código QR');
            return;
          }

          qrResultContainer.classList.add('active');

          qrResultContainer.scrollIntoView({
            behavior: 'smooth', block: 'center'
          });
        }
      );
    }

    function downloadQRCode() {
  const ctx = qrCodeElement.getContext('2d');

  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = qrCodeElement.width;
  tempCanvas.height = qrCodeElement.height;
  const tempCtx = tempCanvas.getContext('2d');

  tempCtx.fillStyle = '#ffffff';
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  tempCtx.drawImage(qrCodeElement, 0, 0);

  const isUrl = /^https?:\/\//i.test(qrInput.value);
  const prefix = isUrl ? 'qr-link' : 'qr-text';
  const randomId = Math.random().toString(36).substring(2, 6); // ahora en minúsculas
  const fileName = `orvex-${prefix}-${randomId}.png`;

  const link = document.createElement('a');
  link.href = tempCanvas.toDataURL('image/png');
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

  const phrases = [
    "Analizando patrones del código QR...",
    "Supervisando el flujo de escaneo.",
    "Preparando escáner inteligente.",
    "Escaneando datos con precisión avanzada.",
    "Monitoreando entrada visual del usuario.",
    "Decodificando símbolos QR...",
    "Alineando parámetros de lectura óptica.",
    "Confirmando autenticidad del código QR.",
    "Evaluando consistencia del escaneo.",
    "Interpretando información digital.",
    "Esperando imagen válida del usuario...",
    "Validación en tiempo real activada.",
    "Optimización de escaneo en progreso.",
    "Comprobando condiciones de lectura...",
    "Listo para nuevas instrucciones.",
    "Adaptando algoritmos al entorno.",
    "Preparado para escaneos complejos.",
    "Priorizando precisión sobre velocidad.",
    "Calibrando visor de entrada...",
    "El escaneo está bajo mi control."
  ];

  const typingElement = document.getElementById("cyron-typing");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeSmart() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.substring(0, charIndex);
    typingElement.innerHTML = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeSmart, 40);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeSmart, 20);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      setTimeout(typeSmart, isDeleting ? 500 : 1000);
    }
  }

  window.addEventListener("DOMContentLoaded", typeSmart);
