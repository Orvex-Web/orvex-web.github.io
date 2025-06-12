const MathModule = {

    extractMathFromText: function(text) {
        const mathQuestionPatterns = [
            /(?:cuanto|cuánto|que|qué)\s+es\s+([0-9\+\-\*\/\.\(\)\s\^%]+)/i,
            /(?:calcula|resolver?|suma|resta|multiplica|divide)\s*([0-9\+\-\*\/\.\(\)\s\^%]+)/i,
            /([0-9\+\-\*\/\.\(\)\s\^%]+)\s*(?:\?|\¿)/,
            /^([0-9\+\-\*\/\.\(\)\s\^%]+)$/
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
        const hasOperators = /[\+\-\*\/\^%]/.test(cleanText);
        
        const mathExpression = this.extractMathFromText(text);
        
        if (mathExpression) {
            const cleanExpr = mathExpression.replace(/\s+/g, '');
            const mathPatterns = [
                /^[\d\+\-\*\/\(\)\.\^%]+$/,
                /\d+\s*[\+\-\*\/\^%]\s*\d+/,
                /sin\(|cos\(|tan\(|log\(|ln\(|sqrt\(/i,
                /pi|e/i
            ];
            
            return mathPatterns.some(pattern => pattern.test(cleanExpr));
        }
        
        const directMathPatterns = [
            /^\s*\d+\s*[\+\-\*\/\^%]\s*\d+/,
            /sin\(|cos\(|tan\(|log\(|ln\(|sqrt\(/i,
            /^\s*\d+\s*[\+\-\*\/\^%][\d\+\-\*\/\(\)\.\s\^%]+$/
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
                .replace(/(\d+)%(\d+)/g, '($1*$2/100)');

            if (!/^[0-9+\-*/.()Math\s]+$/.test(cleanExpr.replace(/Math\.(sqrt|sin|cos|tan|log|PI|E)/g, ''))) {
                throw new Error('Expresión no válida');
            }

            const result = Function('"use strict"; return (' + cleanExpr + ')')();
            
            if (isNaN(result) || !isFinite(result)) {
                throw new Error('Resultado no válido');
            }

            return {
                success: true,
                result: Number(result.toFixed(10)).toString(),
                expression: expression.trim()
            };
        } catch (error) {
            return {
                success: false,
                error: 'No pude resolver esta operación matemática. Verifica que esté correctamente escrita.',
                expression: text
            };
        }
    },

    formatMathResult: function(calculation) {
        if (calculation.success) {
            return `🔢 **Resultado:** ${calculation.expression} = **${calculation.result}**`;
        } else {
            return `❌ ${calculation.error}`;
        }
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