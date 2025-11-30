const BOT_CONFIG = {
    name: "Cyron AI",
    version: "2.0",
    typingSpeed: 35,
    responseDelay: 800,
    maxMessageLength: 500,
    profanityDetection: true,
    autoScroll: true,
    showTimestamps: true
};

const PROFILE_CONFIG = {
    storageKey: 'syncai_user_profile',
    imageStorageKey: 'syncai_user_image',
    countryStorageKey: 'syncai_user_country',
    defaultAvatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM0Yzc5ZmYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Im0xMiAxMmE0IDQgMCAxIDAgMC04IDQgNCAwIDAgMCAwIDh6bTAgMGE3LjUgNy41IDAgMCAwLTcuNSA3LjVoMTVhNy41IDcuNSAwIDAgMC03LjUtNy41eiIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4KPC9zdmc+',
    maxNameLength: 30
};

const COUNTRIES = [
    'Guatemala', 'México', 'España', 'Argentina', 'Colombia', 'Perú', 'Chile',
    'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay', 'Costa Rica',
    'Panamá', 'Honduras', 'El Salvador', 'Nicaragua', 'República Dominicana',
    'Puerto Rico', 'Cuba', 'Estados Unidos', 'Canadá', 'Brasil', 'Otros'
];

class UserProfileManager {
    constructor() {
        this.profile = this.loadProfile();
        this.isEditing = false;
        this.updateProfileUI();
    }

    loadProfile() {
        try {
            const savedProfile = localStorage.getItem(PROFILE_CONFIG.storageKey);
            const savedImage = localStorage.getItem(PROFILE_CONFIG.imageStorageKey);
            const savedCountry = localStorage.getItem(PROFILE_CONFIG.countryStorageKey);
            
            return {
                name: savedProfile ? JSON.parse(savedProfile).name || '' : '',
                country: savedCountry || '',
                avatar: savedImage || PROFILE_CONFIG.defaultAvatar,
                joinDate: savedProfile ? JSON.parse(savedProfile).joinDate || new Date().toISOString() : new Date().toISOString(),
                messageCount: savedProfile ? JSON.parse(savedProfile).messageCount || 0 : 0
            };
        } catch (error) {
            console.warn('Error loading profile:', error);
            return {
                name: '',
                country: '',
                avatar: PROFILE_CONFIG.defaultAvatar,
                joinDate: new Date().toISOString(),
                messageCount: 0
            };
        }
    }

    saveProfile() {
        try {
            const profileData = {
                name: this.profile.name,
                joinDate: this.profile.joinDate,
                messageCount: this.profile.messageCount
            };
            localStorage.setItem(PROFILE_CONFIG.storageKey, JSON.stringify(profileData));
            localStorage.setItem(PROFILE_CONFIG.imageStorageKey, this.profile.avatar);
            localStorage.setItem(PROFILE_CONFIG.countryStorageKey, this.profile.country);
        } catch (error) {
            console.warn('Error saving profile:', error);
        }
    }

    updateName(newName) {
        if (newName && newName.trim().length > 0 && newName.trim().length <= PROFILE_CONFIG.maxNameLength) {
            this.profile.name = newName.trim();
            this.saveProfile();
            this.updateProfileUI();
            return true;
        }
        return false;
    }

    updateCountry(newCountry) {
        if (newCountry && COUNTRIES.includes(newCountry)) {
            this.profile.country = newCountry;
            this.saveProfile();
            this.updateProfileUI();
            return true;
        }
        return false;
    }

    updateAvatar(imageData) {
        if (imageData) {
            this.profile.avatar = imageData;
            this.saveProfile();
            this.updateProfileUI();
            return true;
        }
        return false;
    }

    incrementMessageCount() {
        this.profile.messageCount++;
        this.saveProfile();
    }

    getProfile() {
        return { ...this.profile };
    }

    hasCompleteProfile() {
        return this.profile.name.trim() !== '' && this.profile.country.trim() !== '';
    }

    updateProfileUI() {
        const profileMenuButton = document.getElementById('profileMenuButton');
        if (profileMenuButton) {
            if (this.hasCompleteProfile()) {
                profileMenuButton.classList.add('has-profile');
            } else {
                profileMenuButton.classList.remove('has-profile');
            }
        }
        
        const profileDisplayName = document.getElementById('profileDisplayName');
        const profileDisplayCountry = document.getElementById('profileDisplayCountry');
        const profileInitials = document.getElementById('profileInitials');
        const profileImage = document.getElementById('profileImage');
        
        if (profileDisplayName) {
            profileDisplayName.textContent = this.profile.name || 'Usuario';
        }
        if (profileDisplayCountry) {
            profileDisplayCountry.textContent = this.profile.country || 'País no seleccionado';
        }
        if (profileInitials && profileImage) {
            if (this.profile.avatar && this.profile.avatar !== PROFILE_CONFIG.defaultAvatar) {
                profileImage.src = this.profile.avatar;
                profileImage.style.display = 'block';
                profileInitials.style.display = 'none';
            } else {
                profileImage.style.display = 'none';
                profileInitials.style.display = 'block';
                profileInitials.textContent = this.profile.name ? this.profile.name.charAt(0).toUpperCase() : 'U';
            }
        }
    }

    resetProfile() {
        this.profile = {
            name: '',
            country: '',
            avatar: PROFILE_CONFIG.defaultAvatar,
            joinDate: new Date().toISOString(),
            messageCount: 0
        };
        this.saveProfile();
        this.updateProfileUI();
    }
}

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const typingContainer = document.getElementById('typingContainer');
let isTyping = false;
let messageCounter = 0;
let userProfile = new UserProfileManager();

function detectNameChange(message) {
    const namePatterns = [
        /(?:mi nombre es|me llamo|soy|my name is)\s+([a-záéíóúñ\s]+)/i,
        /(?:llámame|llamame)\s+([a-záéíóúñ\s]+)/i
    ];
    
    for (let pattern of namePatterns) {
        const match = message.match(pattern);
        if (match) {
            const newName = match[1].trim();
            if (newName.length > 0 && newName.length <= PROFILE_CONFIG.maxNameLength) {
                return newName;
            }
        }
    }
    return null;
}

function replaceUserPlaceholders(text) {
    const profile = userProfile.getProfile();
    const joinDate = new Date(profile.joinDate).toLocaleDateString('es-ES');
    
    return text
        .replace(/\{userName\}/g, profile.name || 'Usuario')
        .replace(/\{userCountry\}/g, profile.country || 'No especificado')
        .replace(/\{messageCount\}/g, profile.messageCount.toString())
        .replace(/\{joinDate\}/g, joinDate);
}

function getKeywordResponse(userMessage) {

    if (typeof getResponses !== 'function') {
        console.error('Módulo de respuestas no encontrado');
        return null;
    }

    const responses = getResponses();
    const normalizedMessage = userMessage.toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[ñ]/g, 'n');
    
    let bestMatch = null;
    let maxMatches = 0;
    
    for (const category in responses) {
        const { keywords, responses: categoryResponses } = responses[category];
        let matches = 0;
        
        keywords.forEach(keyword => {
            if (normalizedMessage.includes(keyword)) {
                matches++;
            }
        });
        
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
        }
    }
    
    return bestMatch ? replaceUserPlaceholders(bestMatch) : null;
}

function containsProfanity(text) {
    if (!BOT_CONFIG.profanityDetection) return false;
    
    if (typeof getProfanityList !== 'function') {
        console.error('Lista de profanidad no encontrada');
        return false;
    }

    const profanityList = getProfanityList();
    const normalizedText = text.toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[ñ]/g, 'n');
    
    return profanityList.some(word => {
        const wordRegex = new RegExp(`\\b${word}\\b`, 'i');
        return wordRegex.test(normalizedText);
    });
}

function censorProfanity(text) {
    if (!BOT_CONFIG.profanityDetection) return { text, wasCensored: false };
    
    if (typeof getProfanityList !== 'function') {
        return { text, wasCensored: false };
    }

    const profanityList = getProfanityList();
    let censoredText = text;
    let wasCensored = false;
    
    profanityList.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        if (regex.test(censoredText)) {
            const censored = word.charAt(0) + '*'.repeat(Math.max(word.length - 2, 1)) + word.charAt(word.length - 1);
            censoredText = censoredText.replace(regex, censored);
            wasCensored = true;
        }
    });
    
    return { text: censoredText, wasCensored };
}

function formatTime() {
    const now = new Date();
    return now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

function addMessage(content, isUser = false, isCensored = false, isError = false) {
    messageCounter++;
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.style.animationDelay = '0.1s';

    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'message-wrapper';
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = `message-bubble ${isCensored ? 'censored-message' : ''} ${isError ? 'error-message' : ''}`;

    if (!isUser && !isError) {
        bubbleDiv.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor"></span>';
        const textSpan = bubbleDiv.querySelector('.typewriter-text');
        const cursor = bubbleDiv.querySelector('.typewriter-cursor');

        let processedContent = content
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/<div class="code-block">([\s\S]*?)<\/div>/g, '<div class="code-block">$1</div>')
            .replace(/<a href="(.*?)" class="bot-link" target="_blank">(.*?)<\/a>/g, '<a href="$1" class="bot-link" target="_blank">$2</a>');

        let i = 0;
        const typeWriter = () => {
            if (i < processedContent.length) {
                if (processedContent.charAt(i) === '<') {
                    let tagEnd = processedContent.indexOf('>', i);
                    if (tagEnd !== -1) {
                        const tag = processedContent.substring(i, tagEnd + 1);
                        textSpan.innerHTML += tag;
                        i = tagEnd + 1;
                    } else {
                        textSpan.innerHTML += processedContent.charAt(i);
                        i++;
                    }
                } else {
                    textSpan.innerHTML += processedContent.charAt(i);
                    i++;
                }
               if (BOT_CONFIG.autoScroll) scrollToBottom();
                setTimeout(typeWriter, BOT_CONFIG.typingSpeed);
            } else {
                setTimeout(() => {
                    if (cursor) cursor.remove();
                    if (BOT_CONFIG.autoScroll) scrollToBottom();
                }, 300);
            }
        };

        setTimeout(typeWriter, 200);
    } else {
        bubbleDiv.textContent = content;
    }

    wrapperDiv.appendChild(bubbleDiv);

    if (BOT_CONFIG.showTimestamps) {
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = formatTime();
        wrapperDiv.appendChild(timeDiv);
    }

    messageDiv.appendChild(wrapperDiv);
    chatMessages.appendChild(messageDiv);

    if (BOT_CONFIG.autoScroll && (isUser || isError)) {
        scrollToBottom();
    }
}

function scrollToBottom() {
    setTimeout(() => {
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
}

function showTypingIndicator() {
    if (isTyping) return;
    isTyping = true;
    typingContainer.style.display = 'block';
    scrollToBottom();
}

function hideTypingIndicator() {
    isTyping = false;
    typingContainer.style.display = 'none';
}

function validateUserInput(message) {
    if (!message || message.trim().length === 0) {
        return { valid: false, error: 'El mensaje no puede estar vacío.' };
    }
    
    if (message.length > BOT_CONFIG.maxMessageLength) {
        return { 
            valid: false, 
            error: `El mensaje es demasiado largo. Máximo ${BOT_CONFIG.maxMessageLength} caracteres.` 
        };
    }
    
    return { valid: true };
}

function processUserMessage(userMessage) {

    if (!userProfile.hasCompleteProfile()) {
        setTimeout(() => {
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                addMessage('Por favor, completa tu perfil antes de comenzar a chatear. Haz clic en el menú de perfil en la esquina superior izquierda para ingresar tu nombre y país.');
            }, BOT_CONFIG.responseDelay);
        }, 300);
        return;
    }

    const validation = validateUserInput(userMessage);
    if (!validation.valid) {
        addMessage(validation.error, false, false, true);
        return;
    }

    userProfile.incrementMessageCount();

    const newName = detectNameChange(userMessage);
    if (newName) {
        if (userProfile.updateName(newName)) {
            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    addMessage(`¡Perfecto! Ahora te llamaré **${newName}**. Es un placer conocerte mejor. 😊`);
                }, BOT_CONFIG.responseDelay);
            }, 300);
            return;
        }
    }

    if (typeof MathModule !== 'undefined' && MathModule.detectMathExpression && MathModule.detectMathExpression(userMessage)) {
        setTimeout(() => {
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                const calculation = MathModule.solveMathExpression(userMessage);
                const response = MathModule.formatMathResult(calculation);
                addMessage(response);
            }, BOT_CONFIG.responseDelay);
        }, 300);
        return;
    }

    let botResponse = getKeywordResponse(userMessage);
    if (botResponse) {
        const { text: censoredResponse, wasCensored } = censorProfanity(botResponse);
        
        setTimeout(() => {
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                addMessage(censoredResponse, false, wasCensored);
            }, BOT_CONFIG.responseDelay);
        }, 300);
        return;
    }

    if (containsProfanity(userMessage)) {
        setTimeout(() => {
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                if (typeof getProfanityResponses === 'function') {
                    const profanityResponses = getProfanityResponses();
                    const response = profanityResponses[Math.floor(Math.random() * profanityResponses.length)];
                    addMessage(replaceUserPlaceholders(response));
                } else {
                    addMessage('Por favor, mantengamos una conversación respetuosa.');
                }
            }, BOT_CONFIG.responseDelay);
        }, 300);
        return;
    }

    setTimeout(() => {
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            if (typeof getRandomResponses === 'function') {
                const randomResponses = getRandomResponses();
                botResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];
            } else {
                botResponse = 'Interesante perspectiva, {userName}. ¿Podrías darme más contexto para poder ayudarte mejor?';
            }
            const { text: censoredResponse, wasCensored } = censorProfanity(replaceUserPlaceholders(botResponse));
            addMessage(censoredResponse, false, wasCensored);
        }, BOT_CONFIG.responseDelay);
    }, 300);
}

function autoResizeTextarea() {
    chatInput.style.height = 'auto';
    const newHeight = Math.min(chatInput.scrollHeight, 120);
    chatInput.style.height = newHeight + 'px';
}

function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    sendButton.disabled = true;
    setTimeout(() => {
        sendButton.disabled = false;
    }, 1000);
    
    addMessage(message, true);
    
    chatInput.value = '';
    autoResizeTextarea();
    chatInput.focus();
    
    processUserMessage(message);
}

sendButton.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

chatInput.addEventListener('input', autoResizeTextarea);

chatInput.addEventListener('focus', () => {
    chatInput.style.borderColor = 'var(--primary-color)';
});

chatInput.addEventListener('blur', () => {
    chatInput.style.borderColor = 'var(--border-color)';
});

function clearChat() {
    chatMessages.innerHTML = '';
    messageCounter = 0;
}

function initializeChatbot() {
    if (BOT_CONFIG.showTimestamps) {
        const welcomeTime = document.getElementById('welcomeTime');
        if (welcomeTime) {
            welcomeTime.textContent = formatTime();
        }
    }
    
    setTimeout(() => {
        chatInput.focus();
    }, 500);
    
    console.log(`🤖 ${BOT_CONFIG.name} v${BOT_CONFIG.version} inicializado correctamente`);
    
    const profileMenuButton = document.getElementById('profileMenuButton');
    const profileDropdown = document.getElementById('profileDropdown');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const clearProfileBtn = document.getElementById('clearProfileBtn');
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const profileImageInput = document.getElementById('profileImageInput');
    const usernameInput = document.getElementById('usernameInput');
    const countrySelect = document.getElementById('countrySelect');
    const profileImage = document.getElementById('profileImage');
    const profileInitials = document.getElementById('profileInitials');
    
    if (profileMenuButton && profileDropdown) {
        profileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
            
            const profile = userProfile.getProfile();
            usernameInput.value = profile.name;
            countrySelect.value = profile.country;
        });
        
        document.addEventListener('click', (e) => {
            if (!profileDropdown.contains(e.target) && !profileMenuButton.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });
    }
  
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            const newName = usernameInput.value.trim();
            const newCountry = countrySelect.value;
            
            if (newName) {
                userProfile.updateName(newName);
            }
            
            if (newCountry) {
                userProfile.updateCountry(newCountry);
            }
            
            profileDropdown.classList.remove('show');
        });
    }
    
    if (clearProfileBtn) {
        clearProfileBtn.addEventListener('click', () => {
            userProfile.resetProfile();
            profileDropdown.classList.remove('show');
        });
    }
    
    if (changeAvatarBtn && profileImageInput) {
        changeAvatarBtn.addEventListener('click', () => {
            profileImageInput.click();
        });
        
        profileImageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    userProfile.updateAvatar(event.target.result);
                    profileImage.src = event.target.result;
                    profileImage.style.display = 'block';
                    profileInitials.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeChatbot);
} else {
    initializeChatbot();
}

window.addEventListener('error', (e) => {
    console.error('Error en Cyron AI:', e.error);
    addMessage('Disculpa, he experimentado un error técnico. Por favor, intenta nuevamente.', false, false, true);
});

window.SyncAI = {
    version: BOT_CONFIG.version,
    clearChat,
    config: BOT_CONFIG,
    stats: () => ({
        messages: messageCounter,
        profanityDetection: BOT_CONFIG.profanityDetection,
        mathModule: typeof MathModule !== 'undefined',
        responseModule: typeof getResponses === 'function'
    })
};

(function () {
  let botActivo = false;
  let loaderActive = false;
  const loaderShown = localStorage.getItem('cyronLoaderShown');
  if (botActivo && loaderShown) {
    const loader = document.getElementById('cyronAiLoader');
    if (loader) loader.classList.add('cyron-hide');
    return;
  }

  const normalMessagesCols = [
    [
      "Inicializando núcleo inteligente",
      "Sincronizando arquitectura de datos",
      "Actualización del motor aplicada",
      "Validando sistema cognitivo",
      "Sistema operativo en línea"
    ],
    [
      "Cargando memoria RAM virtual",
      "Red neuronal activa",
      "Importando librerías internas",
      "Configuración establecida",
      "Cyron listo para operar"
    ],
    [
      "Interfaz de comandos activada",
      "Revisión de módulos completada",
      "Entradas analizadas correctamente",
      "Canal de voz sincronizado",
      "Módulos de soporte listos"
    ],
    [
      "Aplicando políticas de seguridad",
      "Comprobando credenciales internas",
      "Kernel actualizado",
      "Sistema de lógica cargado",
      "Listo para procesar solicitudes"
    ],
    [
      "Validando integridad de código",
      "Optimizando subprocesos cognitivos",
      "Protocolos conectados",
      "Actualización de entorno realizada",
      "Cyron preparado para ayudarte"
    ]
  ];

  const errorMessagesCols = [
    [
      "Fallo crítico en subsistema",
      "Módulo desconectado inesperadamente",
      "No puedo acceder al núcleo",
      "Modo de diagnóstico iniciado",
      "Reintenta más tarde"
    ],
    [
      "Error de autenticación interna",
      "Estoy temporalmente inactivo",
      "Memoria de procesos no disponible",
      "Interfaz dañada",
      "Intentaré recuperarme pronto"
    ],
    [
      "Comando fallido al iniciar",
      "Conexión de red perdida",
      "Base de datos no accesible",
      "Control de voz desactivado",
      "Regresa en unos minutos"
    ],
    [
      "Kernel bloqueado por seguridad",
      "Reinicio forzado cancelado",
      "Imposible continuar operación",
      "Estado crítico persistente",
      "Por favor, vuelve más tarde"
    ],
    [
      "Actualización incompleta",
      "Desactivado por administrador",
      "Error general en el sistema",
      "Respaldo no disponible",
      "Intenta nuevamente más adelante"
    ]
  ];

  let currentProgress = 0;
  let messageIndex = 0;
  let typingInterval;
  let progressInterval;
  let messageTimeout;
  let selectedMessages = [];
  const typingSpeed = 40;
  const pauseBetweenMessages = 600;

  function getRandomColumn(messagesCols) {
    const col = Math.floor(Math.random() * messagesCols.length);
    return messagesCols[col];
  }

  function initLoader() {
    if (loaderActive) return;
    loaderActive = true;
    currentProgress = 0;
    messageIndex = 0;

    const loader = document.getElementById('cyronAiLoader');
    const progressBar = document.getElementById('cyronProgressBar');
    const progressPercentage = document.getElementById('cyronProgressPercentage');
    const aiIcon = document.getElementById('cyronAiIcon');
    const messageText = document.getElementById('cyronMessageText');
    const cursor = document.getElementById('cyronCursor');

    if (loader && progressBar && progressPercentage && aiIcon && messageText && cursor) {
      loader.classList.remove('cyron-hide');
      progressBar.style.width = '0%';
      progressPercentage.textContent = '0%';
      aiIcon.classList.remove('cyron-error-animation');
      progressBar.classList.remove('cyron-error');

      if (botActivo) {
        selectedMessages = getRandomColumn(normalMessagesCols);
        const estimatedTime = calculateTypingTime(selectedMessages);
        startProgressAnimation(estimatedTime);
        startMessageTyping(() => {
          localStorage.setItem('cyronLoaderShown', 'true');
          finishLoading();
        });
      } else {
        selectedMessages = getRandomColumn(errorMessagesCols);
        aiIcon.classList.add('cyron-error-animation');
        progressBar.classList.add('cyron-error');
        startMessageTyping(() => {});
      }
    }
  }

  function calculateTypingTime(messages) {
    let totalChars = 0;
    messages.forEach(msg => totalChars += msg.length);
    const timeForTyping = totalChars * typingSpeed;
    const totalPauses = (messages.length - 1) * pauseBetweenMessages;
    return timeForTyping + totalPauses;
  }

  function startProgressAnimation(duration) {
    const progressBar = document.getElementById('cyronProgressBar');
    const progressPercentage = document.getElementById('cyronProgressPercentage');
    const updateInterval = 50;
    const totalUpdates = duration / updateInterval;
    const incrementPerUpdate = 100 / totalUpdates;

    progressInterval = setInterval(() => {
      currentProgress += incrementPerUpdate;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
      }
      progressBar.style.width = currentProgress + '%';
      progressPercentage.textContent = Math.floor(currentProgress) + '%';
    }, updateInterval);
  }

  function startMessageTyping(onComplete) {
    const messageText = document.getElementById('cyronMessageText');
    const cursor = document.getElementById('cyronCursor');
    if (messageIndex >= selectedMessages.length) {
      cursor.style.display = 'none';
      onComplete();
      return;
    }
    const message = selectedMessages[messageIndex];
    messageText.textContent = '';
    cursor.style.display = 'inline-block';
    let charIndex = 0;

    typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        messageText.textContent += message[charIndex];
        charIndex++;
      } else {
        clearInterval(typingInterval);
        messageTimeout = setTimeout(() => {
          messageIndex++;
          startMessageTyping(onComplete);
        }, pauseBetweenMessages);
      }
    }, typingSpeed);
  }

  function finishLoading() {
    clearInterval(progressInterval);
    clearInterval(typingInterval);
    clearTimeout(messageTimeout);
    const loader = document.getElementById('cyronAiLoader');
    if (botActivo) {
      loader.classList.add('cyron-hide');
      loaderActive = false;
    }
  }

  window.addEventListener('load', () => {
    initLoader();
  });

  if (document.readyState === 'complete') {
    initLoader();
  }
})();
