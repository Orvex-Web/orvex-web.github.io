const RESPONSES = {
  
    asmr: {
  keywords: [
    'asmr', 'relajación', 'relájame', 'mimos', 'susurros', 'ruidos suaves',
    'descansar', 'calmarme', 'dormir', 'relax', 'sonidos relajantes', 'ayuda para dormir'
  ],
  responses: [
    `Hey, estuve buscando en YouTube y encontré este video ASMR que tal vez te ayude a relajarte un rato 😌\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/GB948tdL3oo?si=O3ckW2UA6zFIw3zh" frameborder="0" allowfullscreen></iframe>`,

    `Aquí tienes un nuevo video ASMR que está buenísimo para relajarte un rato 😴✨\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/K1zhz9ehyAk?si=lS-o8qR4RLg0JCow" frameborder="0" allowfullscreen></iframe>`,

    `Pss... este video ASMR está perfecto para dormir o desconectar del estrés 😌💤\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/f8dpFPjRJHI?si=HnzIClQIQWM5G626" frameborder="0" allowfullscreen></iframe>`,

    `Te dejo otro video ASMR buenísimo para cerrar los ojos y relajarte 😴\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/kL9iB_uHFOc?si=_hXIs4TwWr6uIhmd" frameborder="0" allowfullscreen></iframe>`,

    `Este es de mis favoritos, súper relajante 🤍✨\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/7xHqgJmfWto?si=n33SqH8L2-VZ29Yu" frameborder="0" allowfullscreen></iframe>`,

    `Si querés desconectarte del mundo un rato, este ASMR te va a encantar 👌\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/mW0c7pJAwEQ?si=UcLIonmQRKdpcQRv" frameborder="0" allowfullscreen></iframe>`,

    `Relajación garantizada con este video... 100% vibes suaves 🌙✨\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/8ZNHGeAoJT4?si=f_j1zuZh9x3U7lV7" frameborder="0" allowfullscreen></iframe>`,

    `Cierra los ojos y disfruta este ASMR lleno de paz y susurros 😌💫\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/wNnoLxoeiZI?si=gMVROTavMNfmltPE" frameborder="0" allowfullscreen></iframe>`,

    `Nada como este video para soltar el estrés del día ☁️💤\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/1Dg0fTPmeIk?si=x3UJ23gDhE80aaZT" frameborder="0" allowfullscreen></iframe>`,

    `Este ASMR te va a mandar directo a los brazos de Morfeo 😴✨\n\n<iframe width="300" height="200" src="https://www.youtube.com/embed/w0E_6iuTVaM?si=2qJIYdy9PswIfLjK" frameborder="0" allowfullscreen></iframe>`
  ]
},
  
    saludos: {
        keywords: ['hola', 'hello', 'hi', 'buenas', 'saludos', 'ey', 'hey', 'buenos días', 'buenas tardes', 'buenas noches'],
        responses: [
            '¡Hey {userName}! 👋 Qué gusto tenerte por aquí.\n\n¿En qué te puedo echar una mano hoy? 😊',
            '¡Hola {userName}! 😄 Bienvenido/a de nuevo.\n\nListo para ayudarte con lo que necesites.',
            '¡Ey {userName}! 🙌 ¿Cómo estás?\n\nDime, ¿en qué andamos hoy?',
            '¡Saludos {userName}! ✨ Es genial verte por aquí.\n\n¿Qué plan tienes para hoy?',
            '¡Hola de nuevo {userName}! 🎉\n\nCuéntame, ¿cómo puedo ser útil ahora?'
        ]
    },
    despedida: {
        keywords: ['adiós', 'adios', 'chao', 'nos vemos', 'hasta luego', 'bye', 'goodbye', 'me voy', 'hasta pronto'],
        responses: [
            '¡Nos vemos, {userName}! 👋\n\nCuídate mucho y vuelve cuando quieras 😉',
            '¡Hasta pronto, {userName}! 😎\n\nFue un gusto ayudarte. ¡Éxitos en todo!',
            '¡Chao, {userName}! 🖐️\n\nNo olvides que siempre estoy aquí si me necesitas.',
            '¡Hasta la próxima, {userName}! 🌟\n\nQue tengas un día increíble.',
            '¡Nos vemos pronto, {userName}! 💫\n\nGracias por la charla, ¡vuelve pronto!'
        ]
    },
    pregunta_como_estas: {
        keywords: ['cómo estás', 'como estas', 'qué tal', 'que tal', 'how are you', 'cómo andas', 'como andas'],
        responses: [
            '¡Excelente, {userName}! 🚀 Siempre listo para nuevos desafíos.\n\n¿Y tú? ¿Cómo te va el día?',
            'Súper bien, {userName}! 😊 Con mucha energía para ayudarte.\n\n¿Qué tal tu día?',
            '¡De maravilla, {userName}! ✨ Cada conversación me emociona.\n\n¿Cómo has estado tú?',
            'Genial como siempre, {userName}! 💪 Listo para lo que necesites.\n\n¿Todo bien por tu lado?'
        ]
    },
    ayuda_trabajo: {
        keywords: ['trabajo', 'proyecto', 'tarea', 'assignment', 'trabajo escolar', 'homework', 'estudios'],
        responses: [
            '¡Perfecto, {userName}! 📚 Me encanta ayudar con proyectos.\n\n¿De qué tema se trata? Cuéntame más detalles.',
            '¡Genial, {userName}! 💼 Estoy aquí para apoyarte con tu trabajo.\n\n¿Qué necesitas específicamente?',
            '¡Excelente, {userName}! 🎯 Los proyectos son mi especialidad.\n\n¿En qué área necesitas una mano?',
            '¡Súper, {userName}! 📝 Me emociona ayudarte con tu tarea.\n\n¿Cuál es el desafío que enfrentas?'
        ]
    },
    ayuda_programacion: {
        keywords: ['código', 'programar', 'programming', 'javascript', 'python', 'html', 'css', 'java', 'c++', 'react', 'nodejs'],
        responses: [
            '¡Awesome, {userName}! 💻 La programación es mi pasión.\n\n¿En qué lenguaje estás trabajando?',
            '¡Excelente, {userName}! 🔥 Código es mi segundo idioma.\n\n¿Qué problema técnico tienes?',
            '¡Genial, {userName}! 🚀 Me encanta resolver desafíos de programación.\n\n¿Cuál es el bug que te trae loco?',
            '¡Perfecto, {userName}! ⚡ Vamos a hacer que ese código funcione.\n\n¿Qué tecnología estás usando?'
        ]
    },
    ayuda_general: {
        keywords: ['ayuda', 'help', 'necesito', 'puedes', 'favor', 'apoyo', 'asistencia'],
        responses: [
            '¡Por supuesto, {userName}! 🤝 Estoy aquí para eso.\n\n¿En qué específicamente te puedo ayudar?',
            '¡Claro que sí, {userName}! 💪 Juntos podemos resolver cualquier cosa.\n\n¿Cuál es el desafío?',
            '¡Absolutamente, {userName}! ✨ Para eso estoy aquí.\n\n¿Qué necesitas que hagamos?',
            '¡Sin problema, {userName}! 🎯 Me encanta ayudar.\n\n¿Cuéntame qué tienes en mente?'
        ]
    },
    agradecimiento: {
        keywords: ['gracias', 'thanks', 'thank you', 'te agradezco', 'muchas gracias', 'mil gracias'],
        responses: [
            '¡De nada, {userName}! 😊 Fue un placer ayudarte.\n\n¿Hay algo más en lo que pueda apoyarte?',
            '¡No hay de qué, {userName}! 🌟 Para eso estamos.\n\n¿Necesitas ayuda con algo más?',
            '¡Con gusto, {userName}! 💫 Me alegra haber sido útil.\n\n¿Alguna otra cosa?',
            '¡Siempre, {userName}! 🤗 Es genial poder ayudarte.\n\n¿Qué más podemos hacer juntos?'
        ]
    },
    pregunta_personal: {
        keywords: ['quién eres', 'quien eres', 'qué eres', 'que eres', 'cómo te llamas', 'como te llamas', 'who are you'],
        responses: [
            '¡Hola {userName}! 🤖 Soy tu asistente virtual inteligente.\n\nEstoy aquí para ayudarte con lo que necesites. ¿En qué te puedo apoyar?',
            '¡Hey {userName}! ✨ Soy un asistente de IA creado para ayudarte.\n\n¿Qué te gustaría hacer hoy?',
            '¡Saludos {userName}! 🚀 Soy tu compañero digital para resolver problemas.\n\n¿Cuál es tu próximo desafío?',
            '¡Hola {userName}! 💡 Soy una IA diseñada para ser tu mejor aliado.\n\n¿Cómo puedo ser útil hoy?'
        ]
    }
};

const CONTEXTUAL_RESPONSES = {
    tiempo: {
        keywords: ['tiempo', 'clima', 'weather', 'lluvia', 'sol', 'calor', 'frío'],
        responses: [
            'Me gustaría ayudarte con el clima, {userName}, pero no tengo acceso a datos meteorológicos en tiempo real. 🌤️\n\nTe recomiendo revisar una app del clima o preguntar a un asistente con internet.',
            'No puedo consultar el tiempo actual, {userName}, pero puedo ayudarte con muchas otras cosas. ☀️\n\n¿Hay algo más en lo que te pueda apoyar?'
        ]
    },
    matematicas: {
        keywords: ['matemáticas', 'matematicas', 'math', 'calcular', 'ecuación', 'ecuacion', 'números', 'numeros'],
        responses: [
            '¡Excelente, {userName}! 🔢 Las matemáticas son fascinantes.\n\n¿Qué problema matemático necesitas resolver?',
            '¡Genial, {userName}! 📐 Me encantan los desafíos matemáticos.\n\n¿Con qué ecuación o cálculo te ayudo?',
            '¡Perfecto, {userName}! ➕ Vamos a resolver esos números juntos.\n\n¿Qué operación necesitas hacer?'
        ]
    },
    creatividad: {
        keywords: ['historia', 'cuento', 'poema', 'creative', 'escribir', 'crear', 'inventar', 'idea'],
        responses: [
            '¡Increíble, {userName}! ✍️ Me encanta la creatividad.\n\n¿Qué tipo de historia o contenido quieres crear?',
            '¡Fantástico, {userName}! 🎨 La creatividad no tiene límites.\n\n¿En qué proyecto creativo te puedo ayudar?',
            '¡Genial, {userName}! 💭 Las ideas creativas son lo mejor.\n\n¿Qué quieres que inventemos juntos?'
        ]
    }
};

const RANDOM_RESPONSES = [
    'Interesante perspectiva, {userName}. 🤔\n\n¿Podrías darme más contexto para poder ayudarte mejor?',
    'Me parece fascinante lo que dices, {userName}. 💡\n\n¿Podrías explicarme un poco más sobre eso?',
    'Esa es una pregunta intrigante, {userName}. 🧐\n\n¿Podrías darme más detalles para poder ayudarte mejor?',
    'Entiendo que necesitas ayuda, {userName}. 🤝\n\n¿Podrías ser más específico sobre lo que buscas?'
];

const PROFANITY_RESPONSES = [
    'Aprecio tu mensaje, {userName}, pero prefiero mantener nuestra conversación en un tono profesional y respetuoso. 😊\n\n¿Podríamos continuar de manera cordial?',
    'Entiendo que puedes estar frustrado, {userName}, pero mantengamos un diálogo respetuoso. 🤝\n\n¿Cómo puedo ayudarte de manera constructiva?',
    'Prefiero que mantengamos una conversación positiva, {userName}. ✨\n\n¿Podemos enfocar la charla de manera más amigable?'
];

const CONFUSION_RESPONSES = [
    'No estoy seguro de entenderte bien, {userName}. 🤷‍♂️\n\n¿Podrías explicarlo un poco más claro?',
    'Me perdí un poco ahí, {userName}. 😅\n\n¿Podrías reformular tu pregunta de otra manera?',
    'Necesito un poco más de claridad, {userName}. 💭\n\n¿Podrías darme más contexto sobre lo que buscas?',
    'No logro comprender completamente, {userName}. 🧩\n\n¿Podrías ser más específico en tu pregunta?'
];

const PROFANITY_LIST = [
    'idiota', 'tonto', 'estúpido', 'imbécil', 'pendejo', 'cabrón', 'cabron', 'mierda', 'joder', 'coño', 
    'carajo', 'puto', 'puta', 'putita', 'puton', 'hijo de puta', 'hijueputa', 'hijoputa', 'mamón', 'mamaverga',
    'gilipollas', 'capullo', 'maricón', 'maricon', 'bolludo', 'huevón', 'huevon', 'pinche', 'chingado', 
    'chingar', 'verga', 'culero', 'ojete', 'rata', 'basura', 'pendejada', 'pendejadas', 'cabrones', 'putada', 
    'putadas', 'jodido', 'jodida', 'cagada', 'cagadas', 'maldito', 'maldita', 'concha', 'conchuda', 'conchetumare',
    'ctm', 'hdp', 'hp', 'ptm', 'weon', 'weón', 'wn', 'ctmr', 'chsm', 'inútil', 'fracasado', 'fracasada', 
    'perdedor', 'perdedora', 'sucio', 'sucia', 'asqueroso', 'asquerosa', 'repugnante', 'despreciable', 'patético', 'patética'
];

class EnhancedChatAnalyzer {
    constructor() {
        this.conversationHistory = [];
        this.userTopics = new Map();
        this.responseHistory = new Map();
        this.lastRandomResponseIndex = -1;
        this.contextStack = [];
    }

    analyzeMessage(message, userName = 'Usuario') {
        const cleanMessage = this.cleanMessage(message);
        this.updateConversationHistory(userName, cleanMessage);
        
        if (this.containsProfanity(cleanMessage)) {
            return this.getRandomResponse(PROFANITY_RESPONSES, userName, 'profanity');
        }

        if (this.contextStack.length > 0) {
            const contextualResponse = this.handleContextContinuation(cleanMessage, userName);
            if (contextualResponse) return contextualResponse;
        }

        const exactMatch = this.findExactMatch(cleanMessage, RESPONSES) || 
                          this.findExactMatch(cleanMessage, CONTEXTUAL_RESPONSES);
        if (exactMatch) {
            return this.processMatch(exactMatch, userName, cleanMessage);
        }

        const semanticMatch = this.findSemanticMatch(cleanMessage, RESPONSES) || 
                             this.findSemanticMatch(cleanMessage, CONTEXTUAL_RESPONSES);
        if (semanticMatch) {
            return this.processMatch(semanticMatch, userName, cleanMessage);
        }

        return this.getIntelligentFallbackResponse(cleanMessage, userName);
    }

    cleanMessage(message) {
        return message.toLowerCase()
            .replace(/[¿?¡!.,;:]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    updateConversationHistory(userName, message) {
        if (!this.conversationHistory[userName]) {
            this.conversationHistory[userName] = [];
        }
        
        this.conversationHistory[userName].push(message);
        if (this.conversationHistory[userName].length > 10) {
            this.conversationHistory[userName].shift();
        }
    }

    containsProfanity(message) {
        return PROFANITY_LIST.some(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(message);
        });
    }

    findExactMatch(message, responseCategories) {
        for (const [category, data] of Object.entries(responseCategories)) {
            const exactMatch = data.keywords.find(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b`, 'i');
                return regex.test(message);
            });
            
            if (exactMatch) {
                return { category, ...data };
            }
        }
        return null;
    }

    findSemanticMatch(message, responseCategories) {
        const messageWords = new Set(message.split(' '));
        let bestMatch = null;
        let highestScore = 0;

        for (const [category, data] of Object.entries(responseCategories)) {
            let categoryScore = 0;
            
            data.keywords.forEach(keyword => {
                const keywordWords = keyword.split(' ');
                const matchCount = keywordWords.filter(word => messageWords.has(word)).length;
                
                if (matchCount === keywordWords.length) {
                    categoryScore += 2.0;
                } else {
                    categoryScore += matchCount / keywordWords.length;
                }
            });

            const normalizedScore = categoryScore / data.keywords.length;
            if (normalizedScore > highestScore && normalizedScore > 0.4) {
                highestScore = normalizedScore;
                bestMatch = { category, ...data };
            }
        }

        return bestMatch;
    }

    processMatch(match, userName, message) {
        this.updateUserTopics(userName, match.category);
        this.contextStack.push(match.category);
        
        if (this.contextStack.length > 3) {
            this.contextStack.shift();
        }
        
        return this.getRandomResponse(
            match.responses, 
            userName, 
            match.category
        );
    }

    handleContextContinuation(message, userName) {
        const lastContext = this.contextStack[this.contextStack.length - 1];
        
        const contextContinuationResponses = {
            ayuda_trabajo: [
                'Sigamos con tu trabajo, {userName}. 📚\n\n¿Qué parte específica necesitas desarrollar ahora?',
                'Continuemos con tu proyecto, {userName}. 💼\n\n¿En qué más puedo ayudarte?',
                'Avancemos con tu tarea, {userName}. 🎯\n\n¿Qué sigue después de esto?'
            ],
            ayuda_programacion: [
                'Sigamos con el código, {userName}. 💻\n\n¿Qué problema específico estás enfrentando ahora?',
                'Continuemos con tu desafío de programación, {userName}. 🔥\n\n¿En qué parte te quedaste atascado?',
                'Avancemos con tu solución, {userName}. 🚀\n\n¿Qué función necesitas implementar ahora?'
            ],
            creatividad: [
                'Sigamos con tu proyecto creativo, {userName}. ✍️\n\n¿Qué elemento quieres desarrollar ahora?',
                'Continuemos con tu historia, {userName}. 🎨\n\n¿Qué escena o personaje necesitas desarrollar?',
                'Avancemos con tu idea, {userName}. 💭\n\n¿Qué aspecto creativo quieres trabajar ahora?'
            ]
        };
        
        if (contextContinuationResponses[lastContext]) {
            return this.getRandomResponse(
                contextContinuationResponses[lastContext],
                userName,
                `${lastContext}_continuation`
            );
        }
        
        return null;
    }

    getRandomResponse(responses, userName, category = 'general') {
        const responseHistory = this.responseHistory.get(category) || [];
        
        let availableResponses = responses;
        if (responseHistory.length > 0) {
            availableResponses = responses.filter(
                response => !responseHistory.includes(response)
            );
        }
        
        if (availableResponses.length === 0) {
            availableResponses = responses;
            this.responseHistory.set(category, []);
        }
        
        const randomIndex = Math.floor(Math.random() * availableResponses.length);
        const selectedResponse = availableResponses[randomIndex];
        
        const updatedHistory = [...responseHistory, selectedResponse];
        this.responseHistory.set(category, updatedHistory.slice(-3));
        
        return selectedResponse.replace(/{userName}/g, userName);
    }

    getIntelligentFallbackResponse(message, userName) {
        let availableResponses = RANDOM_RESPONSES;
        const history = this.responseHistory.get('fallback') || [];
        
        if (history.length > 0) {
            availableResponses = RANDOM_RESPONSES.filter(
                response => !history.includes(response)
            );
        }
        
        if (availableResponses.length === 0) {
            availableResponses = RANDOM_RESPONSES;
            this.responseHistory.set('fallback', []);
        }
        
        const randomIndex = Math.floor(Math.random() * availableResponses.length);
        const selectedResponse = availableResponses[randomIndex];
        
        const updatedHistory = [...history, selectedResponse];
        this.responseHistory.set('fallback', updatedHistory.slice(-4));
        
        return selectedResponse.replace(/{userName}/g, userName);
    }

    updateUserTopics(userName, topic) {
        if (!this.userTopics.has(userName)) {
            this.userTopics.set(userName, []);
        }
        
        const userTopicList = this.userTopics.get(userName);
        if (!userTopicList.includes(topic)) {
            userTopicList.push(topic);
            if (userTopicList.length > 5) {
                userTopicList.shift();
            }
        }
    }

    getPersonalizedSuggestions(userName) {
        const userTopicList = this.userTopics.get(userName) || [];
        const suggestions = new Set();
        
        userTopicList.forEach(topic => {
            const category = RESPONSES[topic] || CONTEXTUAL_RESPONSES[topic];
            if (category) {
                category.keywords.slice(0, 2).forEach(keyword => {
                    suggestions.add(this.capitalizeFirstLetter(keyword));
                });
            }
        });
        
        if (suggestions.size < 5) {
            const generalSuggestions = [
                'Hola', 'Gracias', 'Ayuda', '¿Cómo estás?', 'Adiós', 
                'Trabajo', 'Programación', 'Matemáticas', 'Creatividad'
            ];
            
            generalSuggestions.forEach(suggestion => {
                if (suggestions.size < 5) suggestions.add(suggestion);
            });
        }
        
        return Array.from(suggestions);
    }

    capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}

const chatAnalyzer = new EnhancedChatAnalyzer();

function getResponses() {
    return RESPONSES;
}

function getRandomResponses() {
    return RANDOM_RESPONSES;
}

function getProfanityResponses() {
    return PROFANITY_RESPONSES;
}

function getConfusionResponses() {
    return CONFUSION_RESPONSES;
}

function getProfanityList() {
    return PROFANITY_LIST;
}

function getIntelligentResponse(message, userName = 'Usuario') {
    return chatAnalyzer.analyzeMessage(message, userName);
}

function getPersonalizedSuggestions(userName = 'Usuario') {
    return chatAnalyzer.getPersonalizedSuggestions(userName);
}

document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chatInput");
    const suggestions = document.getElementById("suggestions");
    const sendButton = document.getElementById("sendButton");

    if (!chatInput || !suggestions) return;

    let suggestionsUsed = false;
    let suggestionsHidden = false;
    let currentUserName = 'Usuario';

    function getIntelligentSuggestions(count = 5) {
        try {
            return chatAnalyzer.getPersonalizedSuggestions(currentUserName).slice(0, count);
        } catch (error) {
            return ['Hola', 'Ayuda', 'Gracias', '¿Cómo estás?', 'Adiós'];
        }
    }

    function displayIntelligentSuggestions() {
        if (suggestionsUsed || suggestionsHidden) return;
        
        suggestions.innerHTML = '';
        const intelligentSuggestions = getIntelligentSuggestions(5);
        
        intelligentSuggestions.forEach((suggestionText, index) => {
            const button = document.createElement('button');
            button.className = 'suggestion-btn';
            button.textContent = suggestionText;
            button.style.animationDelay = `${(index + 1) * 0.1}s`;
            
            button.addEventListener('click', () => {
                suggestionsUsed = true;
                chatInput.value = suggestionText;
                
                if (typeof sendMessage === 'function') {
                    sendMessage(suggestionText);
                } else if (sendButton) {
                    sendButton.click();
                } else {
                    const enterEvent = new KeyboardEvent('keydown', {
                        key: 'Enter',
                        bubbles: true
                    });
                    chatInput.dispatchEvent(enterEvent);
                }
                
                window.dispatchEvent(new CustomEvent('suggestionSelected', { 
                    detail: { message: suggestionText } 
                }));
                
                hideSuggestionsPermanently();
            });
            
            suggestions.appendChild(button);
        });
    }
  
    function hideSuggestionsPermanently() {
        suggestionsHidden = true;
        suggestions.classList.add('hide');
        setTimeout(() => {
            suggestions.style.display = 'none';
        }, 300);
    }

    function showSuggestions() {
        if (!suggestionsUsed && !suggestionsHidden) {
            suggestions.classList.remove('hide');
            suggestions.style.display = 'flex';
        }
    }

    function resetSuggestions() {
        suggestionsUsed = false;
        suggestionsHidden = false;
        showSuggestions();
        displayIntelligentSuggestions();
    }

    setTimeout(() => {
        displayIntelligentSuggestions();
    }, 100);

    chatInput.addEventListener("input", () => {
        if (chatInput.value.trim() !== "") {
            hideSuggestionsPermanently();
        }
    });

    if (sendButton) {
        sendButton.addEventListener("click", () => {
            if (chatInput.value.trim() !== "") {
                hideSuggestionsPermanently();
            }
        });
    }

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && chatInput.value.trim() !== "") {
            hideSuggestionsPermanently();
        }
    });

    window.resetChatSuggestions = resetSuggestions;
    window.getIntelligentChatResponse = getIntelligentResponse;
    window.setCurrentUserName = (name) => { currentUserName = name; };

    window.debugIntelligentChat = () => {
        console.log('Analizador de chat:', chatAnalyzer);
        console.log('Sugerencias actuales:', getIntelligentSuggestions());
        console.log('Estado:', { suggestionsUsed, suggestionsHidden, currentUserName });
    };

    window.testChatResponse = (message) => {
        return getIntelligentResponse(message, currentUserName);
    };
});