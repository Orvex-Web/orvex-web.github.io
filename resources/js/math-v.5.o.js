const MathModule = {

    extractMathFromText: function(text) {
        const mathQuestionPatterns = [
            /(?:cuanto|cuánto|que|qué)\s+es\s+([0-9\+\-\*\/\.\(\)\s\^%!]+)/i,
            /(?:calcula|resolver?|suma|resta|multiplica|divide)\s*([0-9\+\-\*\/\.\(\)\s\^%!]+)/i,
            /([0-9\+\-\*\/\.\(\)\s\^%!]+)\s*(?:\?|\¿)/,
            /^([0-9\+\-\*\/\.\(\)\s\^%!]+)$/
        ];
        
        for (let pattern of mathQuestionPatterns) {
            const match = text.match(pattern);
            if (match) {
                return match[1].trim();
            }
        }
        
        return null;
    },

    detectMathExpression: function(text) {
        const cleanText = text.replace(/[\?\¿\!¡]/g, '').trim().toLowerCase();
        
        const mathKeywords = [
            'cuanto es', 'cuánto es', 'que es', 'qué es', 'calcula', 
            'suma', 'resta', 'multiplica', 'divide', 'resolver'
        ];
        
        const hasMathKeywords = mathKeywords.some(keyword => cleanText.includes(keyword));
        const hasNumbers = /\d/.test(cleanText);
        const hasOperators = /[\+\-\*\/\^%!]/.test(cleanText);
        
        const mathExpression = this.extractMathFromText(text);
        
        if (mathExpression) {
            const cleanExpr = mathExpression.replace(/\s+/g, '');
            
            const hasMathCore = /(\d|pi|e|sin\(|cos\(|tan\(|log\(|ln\(|sqrt\()/i.test(cleanExpr);
            if (!hasMathCore) return false;
            
            const validOperatorPatterns = [
                /\d\s*[\+\-\*\/\^%!]/,     
                /[\+\-\*\/\^%!]\s*\d/,     
                /[\+\-\*\/\^%!]\s*[\(\w]/, 
                /\)\s*[\+\-\*\/\^%!]/      
            ];
            
            const hasValidOperators = validOperatorPatterns.some(pattern => pattern.test(cleanExpr));
            
            const hasCompleteFunctions = /(sin|cos|tan|log|ln|sqrt)\([^)]+\)/i.test(cleanExpr);
            
            const parenthesesBalanced = (() => {
                let count = 0;
                for (let char of cleanExpr) {
                    if (char === '(') count++;
                    if (char === ')') count--;
                    if (count < 0) return false;
                }
                if (count !== 0) return false;
                
                return /\([\d\w\+\-\*\/]/.test(cleanExpr);
            })();
            
            const isSimpleNumber = /^[-+]?\d*\.?\d+$/.test(cleanExpr);
            
            if (isSimpleNumber) {
                return hasMathKeywords;
            }
            
            return hasValidOperators || hasCompleteFunctions || parenthesesBalanced;
        }
        
        const directMathPatterns = [
            /\d+\s*[\+\-\*\/\^%]\s*\d+/,   
            /(sin|cos|tan|log|ln|sqrt)\([^)]+\)/i, 
            /[\+\-\*\/\^%]\s*\d/,          
            /\d\s*[\+\-\*\/\^%!]/,         
            /\(\s*[-+]?\d*\.?\d+\s*\)/      
        ];
        
        return (hasMathKeywords && hasNumbers && hasOperators) || 
               directMathPatterns.some(pattern => pattern.test(cleanText));
    },

    solveMathExpression: function(text) {
        try {
            let expression = this.extractMathFromText(text);
            
            if (!expression) {
                expression = text.replace(/[\?\¿\!¡]/g, '').trim();
                expression = expression.replace(/(?:cuanto|cuánto|que|qué)\s+es\s+/gi, '');
                expression = expression.replace(/(?:calcula|resolver?|suma|resta|multiplica|divide)\s*/gi, '');
            }
            
            let cleanExpr = expression
                .replace(/\s+/g, '')
                .replace(/x/gi, '*')
                .replace(/÷/g, '/')
                .replace(/\^/g, '**')
                .replace(/π|pi/gi, Math.PI)
                .replace(/e(?![a-z])/gi, Math.E)
                .replace(/sqrt\(([^)]+)\)/gi, 'Math.sqrt($1)')
                .replace(/sin\(([^)]+)\)/gi, 'Math.sin($1)')
                .replace(/cos\(([^)]+)\)/gi, 'Math.cos($1)')
                .replace(/tan\(([^)]+)\)/gi, 'Math.tan($1)')
                .replace(/log\(([^)]+)\)/gi, 'Math.log10($1)')
                .replace(/ln\(([^)]+)\)/gi, 'Math.log($1)')
                .replace(/(\d+)%(\d+)/g, '($1*$2/100)')
                .replace(/(\d+)%/g, '$1/100')
                .replace(/(\d+)!/g, 'MathModule.advancedMath.factorial($1)');

            const safePattern = /^[\d+\-*/.()Math\s,]+$/;
            const cleanForCheck = cleanExpr.replace(/Math\.\w+|MathModule\.advancedMath\.factorial/g, '');
            
            if (!safePattern.test(cleanForCheck)) {
                throw new Error('Expresión no válida');
            }

            const context = {
                MathModule: this,
                Math: Math
            };
            
            const result = Function('Math', 'MathModule', '"use strict"; return (' + cleanExpr + ')')(Math, this);
            
if (isNaN(result) || !isFinite(result)) {
    throw new Error('Resultado no válido');
}

return {
    success: true,
    result: Number(result.toFixed(10)).toString(),
    expression: expression.trim()
};
} catch (error) {
    const errorMessages = [
    'no pude resolver esta operación matemática. verifica que esté correctamente escrita.',
    'la operación no es válida. revisa la sintaxis por favor.',
    'hay un error en la expresión matemática. ¿podrías verificarla?',
    'no logré procesar esta operación. checa que esté bien escrita.',
    'la expresión tiene algún problema. revisa los números y operadores.',
    'error al calcular. asegúrate de que la operación sea correcta.',
    'no pude entender esta operación. verifica paréntesis y símbolos.',
    'algo anda mal con la expresión. revisa la estructura matemática.',
    'la operación contiene errores. por favor corrige la sintaxis.',
    'no es posible resolver esto. checa que todos los símbolos sean válidos.',
    'error de cálculo detectado. revisa la escritura de la operación.',
    'la expresión matemática no es correcta. inténtalo de nuevo.',
    'no pude procesar estos números. verifica la operación completa.',
    'hay problemas con la sintaxis matemática. revisa y reintenta.',
    'error en la operación. asegúrate de usar operadores válidos.',
    'no logré calcular esto. checa paréntesis y operadores.',
    'la expresión no se puede resolver. revisa la estructura.',
    'operación inválida detectada. corrige y vuelve a intentar.',
    'error matemático encontrado. verifica la escritura.',
    'no pude completar el cálculo. revisa la operación por favor.'
];
    
    return {
        success: false,
        error: errorMessages[Math.floor(Math.random() * errorMessages.length)],
        expression: text
    };
}
},

formatMathResult: function(calculation) {
    if (calculation.success) {
        const successResponses = [
            `🔢 Resultado: ${calculation.expression} = **${calculation.result}**`,
            `✅ Calculado: ${calculation.expression} = **${calculation.result}**`,
            `🧮 Resuelto: ${calculation.expression} = **${calculation.result}**`,
            `💡 La respuesta es: ${calculation.expression} = **${calculation.result}**`,
            `🎯 Resultado final: ${calculation.expression} = **${calculation.result}**`,
            `📊 Cálculo completado: ${calculation.expression} = **${calculation.result}**`,
            `⚡ Listo: ${calculation.expression} = **${calculation.result}**`,
            `🔍 Procesado: ${calculation.expression} = **${calculation.result}**`,
            `🚀 Resuelto exitosamente: ${calculation.expression} = **${calculation.result}**`,
            `🎉 ¡Calculado!: ${calculation.expression} = **${calculation.result}**`,
            `✨ Resultado obtenido: ${calculation.expression} = **${calculation.result}**`,
            `🎭 Ta-da: ${calculation.expression} = **${calculation.result}**`,
            `🏆 Cálculo perfecto: ${calculation.expression} = **${calculation.result}**`,
            `🔥 Resultado al instante: ${calculation.expression} = **${calculation.result}**`,
            `💫 Matemáticas resueltas: ${calculation.expression} = **${calculation.result}**`
        ];
        
        return successResponses[Math.floor(Math.random() * successResponses.length)];
    } else {
        const errorResponses = [
    `❌ ${calculation.error}`,
    `🚫 Oops, algo no está bien ${calculation.error}`,
    `⚠️ Houston, tenemos un problema ${calculation.error}`,
    `🤔 Hmm, no pude procesarlo ${calculation.error}`,
    `😅 Parece que hay un error ${calculation.error}`,
    `🧐 Algo no cuadra aquí ${calculation.error}`,
    `🔍 Revisemos esto ${calculation.error}`,
    `💭 No logré entender esta operación ${calculation.error}`,
    `🎯 Fallé en el intento ${calculation.error}`,
    `🌪️ Error detectado ${calculation.error}`,
    `🛠️ Necesitamos arreglar esto ${calculation.error}`,
    `📝 Por favor revisa ${calculation.error}`,
    `🎪 Ups, error en el circo matemático ${calculation.error}`,
    `🎨 No pude pintar este resultado ${calculation.error}`,
    `🧩 Esta pieza no encaja ${calculation.error}`,
    `🎵 Nota desafinada en las matemáticas ${calculation.error}`,
    `🎬 Corte, necesitamos otra toma ${calculation.error}`,
    `🎲 Los dados no salieron bien ${calculation.error}`,
    `🎪 El show matemático falló ${calculation.error}`,
    `🌈 No encontré el arcoíris en estos números ${calculation.error}`,
    `🎭 Drama matemático ${calculation.error}`,
    `🎯 No di en el blanco ${calculation.error}`,
    `🧙‍♂️ Ni la magia pudo resolver esto ${calculation.error}`,
    `🚀 La misión matemática falló ${calculation.error}`,
    `🎨 Error en el lienzo numérico ${calculation.error}`
];
        
        return errorResponses[Math.floor(Math.random() * errorResponses.length)];
    }
},

getSpecificErrorMessage: function(errorType) {
    const specificErrors = {
        syntax: [
            "La sintaxis no es correcta. ¿Revisamos los paréntesis?",
            "Hay un problema con la escritura de la operación.",
            "Parece que falta algo en la expresión matemática.",
            "La estructura de la operación no es válida."
        ],
        division: [
            "¡No se puede dividir entre cero! Eso rompería el universo 🌌",
            "División entre cero detectada. Las matemáticas dicen que no.",
            "Ups, intentaste dividir entre cero. Eso está prohibido.",
            "Error: División entre cero no permitida en este universo."
        ],
        overflow: [
            "El número es demasiado grande para procesarlo.",
            "Resultado desbordado. Necesitamos números más pequeños.",
            "El cálculo excede los límites numéricos.",
            "Número muy grande, mi cerebro matemático explotó."
        ],
        invalid: [
            "La operación contiene caracteres no válidos.",
            "Solo acepto números y operadores matemáticos básicos.",
            "Hay símbolos que no reconozco en la operación.",
            "Revisa que solo uses números y operadores (+, -, *, /, etc.)"
        ]
    };
    
    const messages = specificErrors[errorType] || specificErrors.invalid;
    return messages[Math.floor(Math.random() * messages.length)];
},

    advancedMath: {

        factorial: function(n) {
            if (n < 0) return NaN;
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        },

        degreesToRadians: function(degrees) {
            return degrees * (Math.PI / 180);
        },

        radiansToDegrees: function(radians) {
            return radians * (180 / Math.PI);
        },

        circleArea: function(radius) {
            return Math.PI * radius * radius;
        },
        
        hypotenuse: function(a, b) {
            return Math.sqrt(a * a + b * b);
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathModule;
} else if (typeof window !== 'undefined') {
    window.MathModule = MathModule;
}