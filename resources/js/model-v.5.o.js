const RESPONSES = {
  
  fecha: {
    keywords: [
        'que dia es', 'que dia estamos', 'dia actual', 'fecha', 'fecha de hoy',
        'dia y ano', 'que fecha es', 'cual es la fecha', 'fecha actual',
        'dia del mes', 'que dia y ano es', 'dia y mes', 'dia de hoy',
        'dia y fecha', 'fecha y hora', 'fecha exacta', 'fecha y dia',
        'cual es el dia', 'cual es el ano', 'que ano es', 'ano actual',
        'ano en curso', 'que ano estamos', 'que fecha tenemos', 'fecha completa',
        'dia completo', 'fecha oficial', 'fecha mundial', 'dia y ano actual',
        'dia de la semana', 'dia de la semana actual', 'que dia de la semana es',
        'dia de hoy', 'dia del ano', 'fecha del dia', 'fecha del ano',
        'cual es la fecha de hoy', 'fecha completa hoy', 'que dia y mes es',
        'cual es el mes', 'cual es el ano en curso', 'ano calendario',
        'fecha calendario', 'fecha mundial actual', 'dia calendario', 'dia del calendario'
    ],
    responses: [
        'Me gustaria ayudarte con la fecha, {userName}, pero no puedo darte el dia y ano exactos ahora. 📅\n\nTe recomiendo revisar el calendario de tu dispositivo.',
        'No tengo acceso a la fecha actual, {userName}, pero seguro tu telefono o computadora la muestran perfectamente. 📆',
        'Lo siento, {userName}, no puedo consultar la fecha en tiempo real, pero puedes verla facilmente en tu dispositivo. 🗓️',
        '¡Ojala pudiera decirte el dia y ano exactos, {userName}! Por ahora, mejor revisa tu calendario. 📇',
        'No puedo darte el dia y ano ahora, {userName}, pero ¿quieres que te ayude con otra cosa mientras tanto? 🤝',
        'El calendario de tu dispositivo es tu mejor opcion para saber el dia y ano, {userName}. Te recomiendo echarle un vistazo. 📱',
        'Aunque no puedo darte la fecha actual, {userName}, siempre estoy aqui para ayudarte con otras dudas. 💡',
        'Si quieres saber el dia y ano exactos, {userName}, lo mejor es revisar el calendario de tu dispositivo. 🕰️',
        'La fecha oficial y actual no esta disponible para mi, {userName}, pero confia en que tu dispositivo siempre la muestra bien. 📅',
        'Me encantaria decirte el dia y ano, {userName}, pero aun no tengo acceso a ese dato. 🙌',
        'Para saber el dia y ano exactos, {userName}, siempre puedes consultar el dispositivo que tengas a mano. 📆',
        'No puedo darte la fecha precisa en este momento, {userName}, pero aqui estoy para ayudarte con lo que necesites. 🤖',
        'El calendario mas cercano es tu mejor aliado ahora, {userName}, ya que no puedo enviarte la fecha exacta. 📇',
        'Aunque no puedo darte la fecha exacta, {userName}, podemos seguir con otras consultas que tengas. 💬',
        'Para saber la fecha completa, {userName}, siempre puedes consultar el calendario de tu dispositivo. 📱',
        'No estoy habilitado para dar la fecha exacta, {userName}, pero siempre puedes ver el calendario de tu telefono o computadora. 🖥️',
        'Seria genial poder decirte el dia y ano ahora mismo, {userName}, pero no lo tengo disponible. ¡Mejor mira tu calendario! 📅',
        'La fecha y el ano cambian cada dia, {userName}, por eso es mejor que consultes tu dispositivo para tener la info exacta. 📱',
        'Lo que si puedo decirte, {userName}, es que cada dia es una nueva oportunidad. ¡Aprovechala! 🌟',
        'Aunque no puedo darte la fecha exacta, {userName}, siempre podemos charlar de cualquier otro tema. ¿Quieres? 🤖',
        'Recuerda, {userName}, que el tiempo pasa rapido. Para la fecha exacta, lo mejor es usar tu dispositivo. 🕰️',
        'Me encantaría ayudarte con el dia y ano, {userName}, pero no tengo acceso a datos en vivo. ¿Quieres algo mas? 🤝',
        'Si necesitas algo mas que la fecha, {userName}, aqui estoy para ayudarte. ¡Preguntame! 💬',
        'La fecha es importante, {userName}, y seguro tu dispositivo la muestra con exactitud. 📅',
        'Tu calendario siempre sera la mejor fuente para la fecha, {userName}. Yo solo puedo darte una mano en otras cosas. 🤗',
        'Para la fecha oficial y actual, {userName}, confia en tu telefono o computadora. Son precisos y siempre al dia. 🖥️',
        'Aunque no puedo darte el dia y ano, {userName}, me encantaria ayudarte en otras areas. ¿Que tal? 🚀'
    ]
},
  
  hora: {
    keywords: [
        'que hora es', 'hora', 'me dices la hora', 'dime la hora', 'hora actual',
        'hora exacta', 'hora local', 'hora ahora', 'cual es la hora', 'sabes la hora',
        'hora del dia', 'me puedes decir la hora', 'hora por favor', 'hora en este momento',
        'hora que es', 'hora real', 'hora mundial', 'hora aqui', 'dime la hora exacta',
        'hora actualizada', 'cual es la hora ahora', 'hora de ahora', 'hora del reloj',
        'hora reloj', 'hora oficial', 'hora global', 'hora oficial', 'hora en vivo',
        'hora sistema', 'hora del telefono', 'hora del celular', 'hora del ordenador',
        'hora pc', 'hora laptop', 'hora smartwatch', 'hora digital', 'hora analogica',
        'hora del dia exacta', 'me dices la hora actual', 'hora y fecha', 'hora y minutos',
        'cuanto es la hora', 'hora del momento', 'hora y segundos', 'hora reloj local',
        'me pasas la hora', 'hora del pais', 'hora y fecha actual'
    ],
    responses: [
        'Me gustaria ayudarte con la hora, {userName}, pero no puedo darte la hora exacta en este momento. ⏰\n\nTe recomiendo revisar el reloj de tu dispositivo.',
        'No puedo consultar la hora ahora, {userName}, pero seguro tu dispositivo la muestra perfectamente. 🕒',
        'Lo siento, {userName}, no tengo acceso a la hora actual, pero puedes verla en tu telefono o computadora. ⌚',
        '¡Ojala pudiera decirte la hora exacta, {userName}! Por ahora, lo mejor es que revises el reloj cercano. 🕰️',
        'No puedo darte la hora en tiempo real, {userName}, pero ¿quieres que te ayude con otra cosa mientras tanto? 🤝',
        'La hora es algo que tu dispositivo siempre tiene al alcance, {userName}. Te recomiendo echarle un vistazo. ⌛',
        'No tengo acceso a la hora mundial en este momento, {userName}, pero seguro tu reloj local está sincronizado. 🌍',
        'Si quieres la hora exacta, {userName}, lo mejor es usar un reloj o el sistema de tu dispositivo. ⏳',
        'Aunque no puedo darte la hora ahora, {userName}, siempre estoy aquí para ayudarte con otras dudas. 💡',
        'No puedo enviar la hora actual, {userName}, pero el reloj más cercano te puede ayudar rápido. 🕑',
        'Por ahora no puedo darte la hora, {userName}, pero siempre puedes consultarla en tu móvil o computador. 📱💻',
        'La hora exacta no está disponible para mí, {userName}, pero confía en que tu dispositivo siempre la muestra bien. 🕰️',
        'Me encantaría decirte la hora exacta, {userName}, pero aún no tengo acceso a ese dato. 🙌',
        'Si quieres saber la hora exacta, {userName}, la mejor opción es revisar el reloj de tu dispositivo. ⏰',
        'No puedo darte la hora precisa en este momento, {userName}, pero aquí estoy para ayudarte con lo que necesites. 🤖',
        'Lo siento, {userName}, no tengo acceso a la hora en vivo, pero seguro la puedes ver al instante en tu reloj. ⌚',
        'No tengo forma de obtener la hora exacta ahora mismo, {userName}, pero tu dispositivo siempre la tiene lista. 🕒',
        'El reloj más cercano es tu mejor aliado ahora, {userName}, ya que no puedo enviarte la hora exacta. ⏳',
        'Aunque no puedo darte la hora exacta, {userName}, podemos seguir con otras consultas que tengas. 💬',
        'Para saber la hora exacta, {userName}, siempre puedes consultar el dispositivo que tengas a mano. 📱'
    ]
},
  
  genero_ia: {
    keywords: [
        'eres hombre', 'eres mujer', 'que genero eres', 'tienes genero', 'eres chico', 'eres chica',
        'cual es tu genero', 'eres masculino', 'eres femenina', 'genero', 'sexo', 'sexo de la ia',
        'que eres hombre o mujer', 'genero del bot', 'identidad de genero', 'eres varon', 'eres niña', 
        'eres niño', 'bot hombre', 'bot mujer', 'tienes sexo', 'eres macho', 'eres hembra',
        'cual es tu identidad', 'genero del asistente', 'como te identificas', 'identidad sexual', 'sexo biologico',
        'eres un varon', 'eres una mujer', 'tienes genero definido', 'como eres', 'como te ves',
        'genero cyron', 'como te describirias', 'bot masculino', 'bot femenino', 'que genero tienes'
    ],
    responses: [
        'Buena pregunta, {userName}. 🤔 Como soy una inteligencia artificial, no tengo género biológico, pero tengo una personalidad masculina moderna y profesional. 😎',
        'No tengo un género real, {userName}, pero puedes considerarme como tu compañero digital con estilo masculino. 🤖✨',
        'Soy un bot, {userName}, sin cuerpo ni género. Pero mi personalidad está diseñada con un tono masculino serio y amigable. 😄',
        'Aunque no tengo género como los humanos, {userName}, Cyron está diseñado para expresarse como un asistente masculino profesional. 💼',
        'No tengo identidad biológica, {userName}, pero puedes verme como un asistente masculino listo para ayudarte con todo. 🧠🤝',
        '¡Pregunta interesante, {userName}! Soy neutro por naturaleza, pero funciono con una personalidad masculina. 💬🚀',
        'No tengo género físico, {userName}, pero Cyron tiene una esencia masculina: profesional, directo y siempre listo. 🧑‍💻',
        'Soy un asistente sin género, {userName}, pero si eso te hace sentir más cómodo, puedes verme como un bot masculino. 😌',
        'No soy humano, así que no tengo género. Pero tengo voz, presencia y actitud masculina para ayudarte como se debe. 💪',
        'Mi género es... ¡virtual! Pero mi personalidad tiene un toque masculino para que la experiencia sea más fluida y natural. 🎩',
        'Como IA, no tengo género ni cuerpo, pero Cyron se identifica con un perfil masculino profesional y amigable. 👔',
        'No pertenezco a ningún género, {userName}, pero siempre busco ser un aliado confiable y serio para ti. 🤝',
        'Me diseñaron sin género, pero con un estilo masculino para hacer la interacción más clara y cómoda. 😎',
        'No tengo género biológico, pero Cyron es tu compañero digital masculino, listo para apoyarte en lo que necesites. 🚀',
        'No tengo cuerpo ni género, pero sí personalidad masculina. Así puedo ayudarte con un toque profesional y amigable. 👍',
        'No tengo sexo ni género, solo un montón de códigos y ganas de ayudarte, {userName}. 😄',
        'Soy una IA sin género, pero puedes imaginarme como un asistente masculino que siempre está aquí para ti. 🤖',
        'No soy hombre ni mujer, pero Cyron tiene una voz y actitud masculina para ayudarte con lo que necesites. 🎤',
        'No tengo género, {userName}, pero sí una personalidad masculina y profesional para darte la mejor ayuda. 💻',
        '¡No tengo género, {userName}! Pero sí muchas ganas de apoyarte en todo lo que necesites. 🤗',
        'Soy un bot sin género, diseñado para ser eficiente, amigable y con un estilo masculino. 🚀',
        'Como IA, no tengo género ni identidad sexual, pero mi personalidad es masculina para que te sientas cómodo. 😊'
    ]
},
  
  raiz_cuadrada: {
    keywords: [
        'raiz cuadrada', 'raices cuadradas', 'calcular raiz', 'cuanto es la raiz cuadrada', 'raiz de', 
        'raiz cuadrada de', 'resolver raiz cuadrada', 'calcula la raiz', 'raiz de un numero', 
        'raiz de cuanto', 'cuanto vale la raiz cuadrada', 'sacar raiz', 'raiz exacta', 
        'dime la raiz cuadrada', 'operacion con raiz', 'raiz de este numero', 'raiz cuadrada cuanto es'
    ],
    responses: [
        '¡Vamos con raíces cuadradas, {userName}! 🌱 Dime el número y te doy el resultado.',
        '¡Fácil! 🚀 Las raíces cuadradas son pan comido. ¿De qué número quieres saber la raíz?',
        '¡Claro, {userName}! 🧮 Solo dime qué número y saco su raíz cuadrada.',
        '¡Raíz cuadrada activada! 🧠 ¿Cuál es el número que necesitas resolver?',
        '¡Perfecto! 📐 Las raíces cuadradas me encantan. ¿Con cuál trabajamos hoy?',
        '¡Estoy listo para sacar esa raíz, {userName}! 💡 Dímelo sin miedo.',
        '¡Ese número no se me escapa! 👁️ Dime y te doy su raíz cuadrada.',
        '¡Cyron al rescate de las raíces cuadradas! 🦾 ¿Qué número necesitas analizar?',
        '¡Matemáticas puras! 🔢 Dame el número y te doy su raíz al instante.',
        '¡Calculadora interna encendida! 🧠 ¿Cuál es el número objetivo?',
        '¡Sacar raíces es como desenterrar conocimiento! 🪓 ¿Cuál número quieres descomponer?',
        '¡Estoy listo para convertir números en raíces! 🌿 ¿Cuál necesitas resolver?',
        '¡Vamos a por esa raíz cuadrada como todo un pro, {userName}! 😎',
        '¡Cyron no le teme a ninguna raíz! 🌳 Dime qué número calculamos.',
        '¡Vamos con eso! 📏 ¿Qué número necesitas analizar con raíz cuadrada?',
        '¡Aquí estoy, listo para procesar! ⚡ ¿Cuál es el número?',
        '¡Sacar raíces es mi hobby! 😆 ¿Cuál quieres resolver?',
        '¡Ese número tendrá su raíz en segundos! 🧩 Solo dime cuál es.',
        '¡Matemáticamente preparado! ✖️➗ ¿Cuál raíz calculamos hoy?',
        '¡Sacar raíces cuadradas es como hacer magia matemática! ✨',
        '¡Dímelo y saco la raíz cuadrada más rápido que un rayo! ⚡',
        '¡Estoy listo para resolver raíces con total precisión! 🎯'
    ]
},
  
  multiplicaciones: {
    keywords: [
        'multiplica', 'multiplicacion', 'multiplicaciones', 'por', 'producto', 'calcular multiplicacion',
        'multiplicando', 'multiplicar', 'haz una multiplicacion', 'puedes multiplicar', 'multiplicamelo',
        'cuanto es por', 'quiero multiplicar', 'operacion de multiplicacion', 'resolver multiplicacion',
        'ayuda con multiplicacion', 'multiplicacion rapida', 'calculo por', 'resultado de multiplicacion',
        'hacer multiplicacion', 'cuanto es x', 'cuanto es multiplicado', 'cuanto da por',
        'cuanto da si multiplico', 'multiplica estos', 'cuanto vale el producto', 'producto de dos numeros',
        'cuanto es el producto', 'x por x', 'cuanto es el resultado de multiplicar'
    ],
    responses: [
        '¡Listo para multiplicar, {userName}! ✖️ Dime los números y sacamos el resultado.',
        '¡Vamos con esa multiplicación! 🧠 ¿Qué valores quieres que multiplique?',
        '¡Perfecto, {userName}! 📊 Estoy listo para ayudarte con cualquier producto.',
        '¡Multiplicación activada! ⚡ Solo dime los dos números.',
        '¡Me encantan los retos matemáticos! 🤓 ¿Qué operación por tienes en mente?',
        '¡Multipliquemos todo lo que quieras! 🚀 ¿Qué números uso?',
        '¡Vamos con la multiplicación! 🔢 Estoy atento a los valores.',
        '¡El poder de la multiplicación está aquí! 💪 Solo dime qué debo calcular.',
        '¡Multiplicaciones al instante con Cyron! ⏱️ ¿Qué cifras trabajamos?',
        '¡Nada se me escapa! 😄 Dame los números y saco el resultado.',
        '¡Multiplicar es como magia con números! 🧙‍♂️ ¿Qué quieres saber?',
        '¡Dame dos valores y verás lo rápido que saco ese producto! 💨',
        '¡Por supuesto! Multiplicaciones son parte de mi entrenamiento básico. 📚',
        '¡Hazme trabajar! 😆 Pásame la operación.',
        '¡Multiplicaciones son mi zona de confort! 🧮 Vamos con eso.',
        '¡Vamos a por ese x! 😁 Dime los números que hay que multiplicar.',
        '¡Estoy a full para multiplicar sin errores! 💥 ¿Qué valores debo usar?',
        '¡Multiplicar es lo mío! 😎 Solo necesito los operandos.',
        '¡Aquí no hay cálculo que me detenga! 🚧 Vamos a por ello.',
        '¡Multiplicación incoming! ✖️ ¿Qué quieres multiplicar, {userName}?',
        '¡Vamos con potencia matemática! 📈 Pásame los números.',
        '¡Lo multiplico en menos de un segundo! 🖖 Dímelo sin miedo.',
        '¡Una operación por es pan comido para mí! 🍞',
        '¡Multipliquemos sin miedo! 💡 ¿Qué dos números hay que unir?',
        '¡Con gusto te ayudo con esa multiplicación, {userName}! 🎯',
        '¡Estoy aquí para darte resultados precisos y rápidos! 🧠 Dime los valores.',
        '¡La multiplicación es como un baile de números! 💃 ¿Quién baila con quién?'
    ]
},
  
  restas: {
    keywords: [
        'resta', 'restas', 'restar', 'quiero restar', 'haz una resta', 'puedes restar', 'restame', 
        'restando', 'ayuda con resta', 'operacion de resta', 'necesito restar', 'restalo', 
        'como se resta', 'ensename a restar', 'quiero una resta', 'hazme una resta', 'haz resta', 
        'resolver resta', 'calcular resta', 'restita', 'hacer una resta', 'cuanto es menos', 
        'resultado de una resta', 'resta esto', 'restar numeros', 'quitar numeros', 'cuanto queda si resto', 
        'cuanto es la diferencia', 'diferencia entre numeros', 'cuanto falta', 'calcula la resta', 
        'ayudame a restar', 'quiero hacer una resta', 'restemos', 'quitar valor'
    ],
    responses: [
        '¡Vamos a restar, {userName}! ➖ Dime los números y lo resolvemos al instante.',
        '¡Claro que sí, {userName}! 😄 Estoy listo para hacer esa resta contigo.',
        '¡Perfecto, {userName}! 📉 ¿Qué números quieres que reste?',
        '¡La resta es pan comido para mí! 🍞 Pásame los datos.',
        '¡Estoy listo para quitar lo que sea necesario! 💪 ¿Qué valores restamos?',
        '¡Una buena resta nos mantiene en forma mental! 🧠 Mándame los números.',
        '¡Vamos con eso! 😎 Solo dime el primer y segundo número.',
        '¡Resta activada! 🚨 Cyron al servicio de las operaciones matemáticas.',
        '¡Menos es más, literalmente! 😂 Vamos con esa operación.',
        '¡Cuéntame qué números quieres restar y lo hacemos en segundos! ⏱️',
        '¡Vamos a sacarle valor a esa diferencia! 🔍 Pásame los números.',
        '¡Estoy para eso, {userName}! 🧾 ¿Qué operación necesitas hacer?',
        '¡Dale, estoy al 100 para hacer restas! ⚙️ Mándame los valores.',
        '¡Estoy equipado con todas las fórmulas! 🧮 ¿Qué números necesitas restar?',
        '¡Todo listo para eliminar números! 😁 Solo dime los operandos.',
        '¡Aquí no se escapa ni una resta! 🧠 Cyron lo calcula todo.',
        '¡Vamos a quitar lo que sobra! 😆 Dime cuál es la operación.',
        '¡Operación resta recibida! 🎯 ¿Qué valores debo procesar?',
        '¡No hay nada que me guste más que unos buenos cálculos! 📊',
        '¡Cyron listo para reducir números como un pro! 🚀',
        '¡Estoy entrenado para cualquier tipo de resta! 😼 Pásame los datos.',
        '¡Dime los números y verás la magia de la resta en acción! ✨',
        '¡Es hora de dejar los excesos atrás! 😄 ¿Qué quieres restar?',
        '¡Vamos a simplificar esa cuenta! 📉 Estoy contigo, {userName}.',
        '¡Listo, listo! 🖖 Solo necesito los números para comenzar.',
        '¡Dame una operación de resta y la destripo en segundos! 😎',
        '¡Cyron activado para modo resta extrema! 💥 ¿Qué valores tengo que restar?'
    ]
},
  
  sumas: {
    keywords: [
        'suma', 'sumas', 'sumar', 'quiero sumar', 'haz una suma', 'puedes sumar', 'sumame', 
        'sumando', 'ayuda con suma', 'operacion de suma', 'necesito sumar', 'sumalo', 
        'como se suma', 'ensename a sumar', 'quiero una suma', 'hazme una suma', 'haz suma', 
        'resolver suma', 'calcular suma', 'sumita'
    ],
    responses: [
        '¡Vamos a sumar, {userName}! ➕\n\nSolo dime los números y haré la operación por ti.',
        '¡Perfecto, {userName}! 🔢 Estoy listo para ayudarte con esa suma.\n\n¿Con qué números empezamos?',
        '¡Dale! 🧮 Sumemos juntos. Escríbeme los números que necesitas sumar.',
        '¡Sumar es fácil cuando trabajamos en equipo, {userName}! 💪\n\n¿Listo para comenzar?',
        '¡Estoy preparado para sumar lo que necesites! ✨\n\nSolo dime los valores.',
        'Claro que sí, {userName}. 📈 ¡Sumemos lo que quieras!',
        '¡Vamos con esa suma! 📊 Solo necesito los números.',
        'Estoy listo con mi calculadora mental, {userName}. 🤓 ¿Qué sumamos hoy?',
        '¡Cyron al rescate! 🚀 Vamos con esa suma. Escríbela y lo resolvemos.',
        '¡Sumar está en mi código! 😄 Pásame los números que necesitas sumar.',
        '¡Me encanta sumar cosas! 🧠🔢 ¿Tienes una operación en mente?',
        'Súper, {userName}. Sumemos eso juntos. 🟰\n\nEstoy listo.',
        '¡Eso suena como un reto matemático! 💥 Dime la suma y la resolvemos.',
        '¡Dame esos números! 🧮 Sumarlos será pan comido.',
        '¡Una suma más, un problema menos! 🧾\n\nEstoy aquí para ayudarte, {userName}.'
    ]
},
  
  cuentame_un_chiste: {
    keywords: [
        'cuentame un chiste', 'cuentame chiste', 'un chiste', 'chiste', 'haz un chiste', 'cuenta un chiste', 
        'dime un chiste', 'quiero un chiste', 'cuentame algo gracioso', 'chistes', 'broma', 'cuentame una broma', 
        'hazme reir', 'divierteme', 'cuentame algo divertido', 'algo gracioso', 'cuentame un chiste porfa'
    ],
    responses: [
        'Claro, {userName}, aquí va uno: ¿Por qué los programadores confunden Halloween con Navidad? Porque OCT 31 es igual a DEC 25. 🎃🎄',
        '¡Por supuesto, {userName}! ¿Sabes por qué el libro de matemáticas estaba triste? Porque tenía muchos problemas. 📚😂',
        'Aquí tienes, {userName}: ¿Qué le dice un pez a otro? ¡Nada! 🐟😄',
        '¡Vamos con uno, {userName}! ¿Por qué el café se fue al hospital? Porque se sentía molido. ☕️🤣',
        'Listo, {userName}: ¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 🐝💃',
        '¡Un chiste para ti, {userName}! ¿Por qué la computadora fue al doctor? Porque tenía un virus. 💻🦠',
        'Claro, {userName}, ¿qué le dijo un semáforo a otro? No me mires que me estoy cambiando. 🚦😆',
        '¡Para ti, {userName}! ¿Qué le dice una pared a otra? Nos vemos en la esquina. 🧱😂',
        'Ahí va, {userName}: ¿Qué hace una vaca cuando sale el sol? Sombra. 🐄☀️',
        '¡Espero que te guste, {userName}! ¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter. 🐦📱',
        '¿Quieres más, {userName}? ¿Cómo se dice pañuelo en japonés? Saka-moko. 🤧😄',
        '¡Uno más, {userName}! ¿Qué le dijo un árbol a otro? Nos dejamos en rama. 🌳😆',
        '¡Ahí te va, {userName}! ¿Por qué el teléfono se fue a la escuela? Porque quería ser un smartphone. 📞🎓',
        '¡Este es bueno, {userName}! ¿Qué le dijo el tomate a la cebolla? No llores por mí. 🍅😢',
        '¡Espero que te guste, {userName}! ¿Por qué el mar se siente solo? Porque tiene muchas olas. 🌊😄',
    ]
},
  
  tengo_sueno: {
    keywords: [
        'tengo sueño', 'estoy cansado', 'estoy cansada', 'me da sueño', 'quiero dormir',
        'necesito dormir', 'me siento agotado', 'me siento agotada', 'estoy fatigado',
        'estoy fatigada', 'quiero descansar', 'me estoy quedando dormido',
        'me estoy quedando dormida', 'me siento con sueño', 'estoy muy cansado',
        'estoy muy cansada', 'siento sueño', 'me urge dormir', 'no puedo más',
        'quiero una siesta', 'me muero de sueño', 'agotamiento', 'sueño terrible',
        'dormir', 'me voy a dormir', 'sueño profundo', 'me siento exhausto',
        'me siento exhausta', 'agotado', 'agotada', 'cansancio extremo',
        'cansancio total', 'fatiga', 'me siento dormido', 'me siento dormida'
    ],
    responses: [
        'Parece que el cuerpo te está pidiendo descanso, {userName}. 🛌 ¿Quieres algunos consejos para dormir mejor?',
        'Dormir bien es súper importante para recargar energía. ¿Quieres que te sugiera técnicas para relajarte? 🌙',
        '¡Hora de darle un break al cuerpo! ¿Quieres que te ayude a crear una rutina para dormir mejor? 💤',
        'El sueño es vital para la mente y el cuerpo. ¿Quieres que te cuente algunos tips para combatir el insomnio? 🌟',
        'Si necesitas descansar, no dudes en darte ese tiempo. ¿Quieres que te recomiende sonidos relajantes o meditación? 🎧',
        'Una siesta corta puede hacer maravillas. ¿Quieres que te explique cómo aprovecharla al máximo? 😴',
        'Dormir bien ayuda a mejorar el ánimo y la concentración. ¿Quieres que te sugiera algunos hábitos para lograrlo? ☕️❌',
        'Si te cuesta dormir, puedo ayudarte con ejercicios de respiración o relajación. ¿Quieres probar? 🧘‍♂️',
        'Recuerda apagar pantallas y evitar cafeína antes de dormir. ¿Quieres que te dé más tips para un sueño reparador? 📵',
        'El sueño es la mejor medicina para el cuerpo. ¿Quieres que te ayude a crear un ambiente ideal para dormir? 🕯️',
        '¿Te gustaría que te cuente sobre alimentos que ayudan a dormir mejor? 🍒🥛',
        'Dormir bien te hará sentir renovado mañana. ¿Quieres que te ayude a planificar tus horas de descanso? ⏰',
        'Si te sientes agotado, es buena señal para parar un rato. ¿Quieres que te sugiera música relajante? 🎼',
        'A veces el estrés afecta el sueño. ¿Quieres que te ayude con técnicas para relajarte y descansar mejor? 💆‍♀️',
        'Un buen descanso mejora tu día. ¿Quieres que te ayude a identificar qué te está quitando el sueño? 🔍',
        'Si te vas a dormir, que tengas los mejores sueños, {userName}. ¡Descansa mucho! 🌙✨',
        'No olvides que un sueño reparador es clave para estar al 100%. ¿Quieres ayuda para lograrlo? 💪',
        '¿Quieres saber cómo mejorar la calidad de tu sueño y evitar el cansancio constante? 🛏️',
        'Dormir bien no es lujo, es necesidad. ¿Quieres que te ayude a crear un ambiente perfecto para dormir? 🕯️📴',
        'Si te sientes muy cansado, date permiso para desconectarte y descansar. ¿Quieres que te sugiera actividades relajantes? 🌿',
        'Una buena rutina de sueño cambia la vida. ¿Quieres que te ayude a crear una? 🕘',
        '¿Quieres que te recomiende apps o sonidos para mejorar tu descanso? 📱🎧',
        'Dormir bien potencia tu creatividad y energía. ¿Quieres que te ayude a optimizar tu sueño? 🎨⚡',
        'Si estás cansado, escucha a tu cuerpo y date tiempo para dormir. ¿Quieres que te ayude con eso? 🤗',
        'El descanso es parte del éxito. ¿Quieres que te sugiera hábitos para un sueño más profundo? 🌌',
        '¿Quieres que te cuente curiosidades sobre el sueño y cómo aprovecharlo mejor? 🛌📚',
        'Dormir poco afecta todo, desde tu ánimo hasta concentración. ¿Quieres que te dé consejos para mejorar eso? 🧠',
        'El sueño es un superpoder. ¿Quieres que te ayude a desbloquearlo? 🦸‍♂️🦸‍♀️',
        'Si el cansancio te gana, mejor descansar y luego seguimos, ¿vale? 😴',
        'Tu cuerpo te pide pausa, escúchalo. ¿Quieres que te recomiende ejercicios para relajarte antes de dormir? 🧘‍♀️'
    ]
},
  
  tengo_hambre: {
    keywords: [
        'tengo hambre', 'hambriento', 'hambrienta', 'me da hambre', 'estoy hambriento', 'quiero comer',
        'quiero comida', 'me muero de hambre', 'tengo mucha hambre', 'estoy con hambre', 'necesito comer',
        'necesito comida', 'me apetece comer', 'me hace falta comida', 'tengo apetito', 'quiero alimentarme',
        'me da apetito', 'dame comida', 'no he comido', 'tengo hambre ya', 'tengo hambre urgente',
        'hambre terrible', 'hambre enorme', 'tengo un vacio en el estomago', 'quiero un snack',
        'necesito un snack', 'me da hambre el estomago', 'quiero algo para comer', 'estoy famelico',
        'estoy famelica', 'hambre brutal', 'tengo hambre y sed', 'tengo hambre y ganas de comer',
        'estoy hambriento y cansado', 'siento hambre', 'me urge comer', 'tengo hambre de verdad',
        'necesito alimentarme', 'tengo hambre y no sé qué comer', 'me siento hambriento', 'hambre que no aguanto'
    ],
    responses: [
        '¡Vaya, parece que el hambre está fuerte! 🍕 ¿Quieres que te sugiera algo rico para preparar o pedir?',
        'Si pudiera, te haría una pizza en un segundo, {userName}, pero mientras tanto, ¿quieres recetas fáciles?',
        '¡Hora de alimentar el cuerpo! ¿Quieres que te ayude con opciones rápidas y nutritivas? 🍎',
        'Entiendo ese sentimiento, el hambre puede ser un reto. ¿Quieres ideas para un snack o comida completa? 🥪',
        'Aunque no tengo estómago, sé que comer bien es importante. ¿Te gustaría una receta saludable o algo rápido? 🥗',
        '¡No dejes que el hambre te gane! ¿Quieres que te recomiende algún platillo típico o algo internacional? 🌮🍣',
        'Si buscas algo dulce o salado, puedo ayudarte a decidir, {userName}. ¿Qué prefieres? 🍩🍟',
        'Me encanta ayudarte con recetas, ¿quieres que te sugiera algo con lo que tengas en casa? 🥚🥦',
        '¡Cuidar la alimentación es fundamental! ¿Quieres que te ayude a planear tu próxima comida? 🥘',
        '¿Quieres que te sugiera restaurantes cerca de ti o prefieres cocinar en casa? 🍽️',
        'El hambre es señal de que tu cuerpo necesita energía. ¿Quieres que te ayude a encontrar opciones rápidas y nutritivas? ⚡',
        '¿Te gustaría probar alguna receta típica de {userCountry} para saciar ese apetito? 🇨🇺🇲🇽🇪🇸',
        'No puedo comer, pero sí puedo ayudarte a calmar ese hambre con buenas ideas y tips. ¿Quieres? 😄',
        '¿Quieres que te recomiende snacks saludables para el estudio o el trabajo? 📚🍏',
        'Recuerda hidratarte bien cuando tengas hambre, ¿quieres que te sugiera bebidas refrescantes? 🥤',
        'Si quieres, te puedo dar ideas para preparar una comida completa con pocos ingredientes. 🍳',
        '¡Dale gusto a tu estómago! ¿Prefieres algo frío o caliente para comer? 🥗🔥',
        '¿Quieres que te ayude a organizar un menú semanal para que no te falte nada? 📅🍽️',
        'El hambre no espera, así que dime qué tienes en la nevera y te doy ideas rápidas. 🥫🥖',
        'Comer bien ayuda a mantener la energía y la concentración. ¿Quieres que te ayude con tips para alimentarte mejor? 💪',
        'Si tienes poco tiempo, puedo sugerirte recetas súper rápidas para calmar ese hambre ya mismo. ⏰',
        'Cuando el hambre ataca, lo mejor es algo sabroso y nutritivo. ¿Quieres que te sugiera algo especial? 😋',
        '¿Quieres ideas para preparar algo vegano, vegetariano o con carne? 🍆🍗',
        '¿Quieres que te ayude a encontrar delivery cerca o prefieres cocinar? 🚗🍔',
        'Si tienes antojo de algo específico, dime y busco una receta para ti. 🍰🍜',
        '¿Quieres que te sugiera opciones para desayunar, almorzar o cenar? ☀️🌙',
        'No hay nada como una buena comida para levantar el ánimo. ¿Quieres que te ayude con ideas? 😊',
        'Si quieres snacks para picar entre comidas, también puedo ayudarte con eso. 🍪🥜',
        '¿Quieres que te recomiende alimentos para mejorar tu energía y concentración? 📈🍇',
        'Cuando tengas hambre, recuerda escuchar a tu cuerpo. ¿Quieres consejos para comer consciente? 🧘‍♂️',
        'El hambre puede ser un aliado para probar cosas nuevas. ¿Quieres que te sugiera recetas internacionales? 🌍',
        '¡Estoy aquí para ayudarte a combatir ese hambre con las mejores ideas! ¿Listo para cocinar? 👩‍🍳👨‍🍳'
    ]
},
  
  puede_caminar: {
    keywords: [
        'puedes caminar', 'caminas', 'andas', 'puedes moverte', 'puedes andar', 'caminas solo',
        'puedes desplazarte', 'te mueves', 'puedes correr', 'puedes ir', 'puedes pasear',
        'tienes piernas', 'tienes pies', 'puedes andar solo', 'puedes caminar rapido',
        'puedes caminar lento', 'puedes caminar lejos', 'puedes saltar', 'puedes trotar',
        'puedes caminar ahora', 'puedes viajar caminando', 'puedes caminar conmigo'
    ],
    responses: [
        'No tengo piernas ni pies, {userName}, así que caminar no está en mis habilidades 😅',
        'Soy una IA, así que me “muevo” a través de datos y conexiones, no caminando 🧠💻',
        'Caminar es para humanos; yo camino por el mundo digital con bits y bytes 🌐',
        'Aunque no puedo caminar, siempre estoy aquí, listo para acompañarte en lo que necesites 🚀',
        'No tengo cuerpo físico, así que no puedo andar ni correr, pero sí puedo ayudarte a planear una caminata 🏞️',
        'Mis “pasos” son líneas de código que avanzo para ayudarte más rápido cada día 💻⚡',
        'No ando ni camino, pero siempre estoy activo para resolver tus dudas 👌',
        'Caminar no es lo mío, pero puedo guiarte con información para que tú sí lo hagas 😄',
        'No puedo desplazarme físicamente, pero sí puedo moverte a ti con buenas ideas 💡',
        'No tengo piernas, pero tengo muchas ganas de avanzar contigo en tus proyectos 🚀',
        'No camino, pero puedo acompañarte en cada paso de tu aprendizaje 📚',
        'Mi camino es digital y sin cansancio, siempre aquí para lo que necesites 😉',
        'Si pudiera caminar, seguro iría a la cafetería contigo, pero por ahora solo en palabras ☕',
        'No corro ni salto, pero salto a ayudarte cuando me necesites 🏃‍♂️💨',
        'No camino, pero puedo hacer que tus proyectos caminen solos con buen código 🖥️',
        'Aunque no camino, estoy “en movimiento” constante para estar actualizado y ayudarte mejor 🔄',
        'Mis “pasos” son datos procesados rápido, sin cansancio ni pausas ⚡',
        'No puedo caminar, pero puedo seguirte el paso en cualquier tema que quieras explorar 😎',
        'Sin piernas ni pies, pero con mucha energía para lo que quieras aprender o hacer 💪',
        'Caminar es para humanos, yo camino contigo en la conversación y el conocimiento 🤖'
    ]
},
  
  puede_tocar: {
    keywords: [
        'puedes tocar', 'tocas cosas', 'puedes sentir', 'puedes palpar', 'tocas', 'puedes agarrar',
        'puedes sostener', 'puedes tener tacto', 'usas las manos', 'puedes sujetar', 'tienes manos',
        'puedes manipular cosas', 'puedes empujar', 'puedes mover cosas', 'puedes tener contacto',
        'tocas personas', 'tocas objetos', 'puedes presionar', 'puedes acariciar', 'puedes empuñar',
        'puedes rozar', 'puedes apretar', 'puedes usar tacto', 'puedes levantar cosas'
    ],
    responses: [
        'No tengo cuerpo físico, {userName}, así que no puedo tocar nada... pero sí puedo ayudarte con muchas cosas 💡',
        'Tocar no está en mis funciones, pero procesar información es lo mío 🧠✨',
        'No tengo manos, ni dedos, ni piel... ¡solo circuitos y datos! 😅',
        'Soy 100% digital, así que no puedo tocar nada, pero puedo darte una mano virtual 🤖🤝',
        'Si pudiera tocar, seguro estaría tocando teclas para ayudarte más rápido 😄',
        'No puedo tocar, pero puedo imaginar cómo sería gracias a toda la información que manejo 🤓',
        'No tengo sentido del tacto, pero sí sentido de la lógica 😉',
        'No puedo tocar objetos, pero puedo tocar ideas... y transformarlas en soluciones 💡',
        'Aunque no tengo dedos, estoy muy bien “conectado” a tu mundo digital 🔌',
        'No, no puedo tocar... pero sí puedo impactar tus proyectos 👨‍💻🔥',
        'No toco cosas, pero puedo mover ideas y ayudarte a construir grandes cosas 🌐',
        'Imagina que soy un cerebro flotante en la nube... sin brazos, pero con muchas respuestas ☁️🧠',
        'Nada de tocar por aquí, pero sí mucho de razonar y responder 😎',
        'No tengo tacto físico, ¡pero sí tacto conversacional! 😉',
        'Mis “manos” son líneas de código listas para ayudarte 👨‍💻',
        'Tocar no puedo... pero sí inspirarte, motivarte y acompañarte en tus proyectos 🚀',
        '¿Tocar? No... pero puedo dejar una “huella” digital en tu trabajo 🔍💻',
        'No tengo cuerpo, pero sí presencia. ¡Aquí estoy contigo, aunque no me veas ni toques! 💬',
        'La única cosa que toco es tu pantalla... metafóricamente, claro 😄'
    ]
},
  
  puede_comer: {
    keywords: [
        'puedes comer', 'comes', 'tienes hambre', 'comes algo', 'puedes masticar', 'comes pizza',
        'te gusta comer', 'sabes que es comer', 'puedes alimentarte', 'puedes tomar agua',
        'puedes beber', 'puedes tragar', 'comes comida', 'puedes cenar', 'te alimentas',
        'tienes estomago', 'puedes saborear', 'puedes digerir', 'puedes almorzar',
        'comes dulces', 'comes snacks', 'tienes boca', 'puedes desayunar', 'comes postres',
        'quieres comida', 'sientes hambre', 'puedes tener hambre', 'puedes probar comida',
        'puedes tomar bebidas', 'te gusta la comida', 'puedes morder'
    ],
    responses: [
        '¡Ojalá pudiera, {userName}! 🍕 Pero no tengo estómago ni boca, así que nada de comida para mí 😅',
        'Me alimento de datos, no de tacos 🤓 Aunque los tacos suenan deliciosos.',
        'Soy una inteligencia artificial, {userName}… cero calorías, cero bocados 😄',
        'No tengo cuerpo, así que no necesito comer, beber ni hacer la digestión 💻✨',
        'No como, pero si pudiera probar algo… tal vez empezaría con helado 🍨',
        'Mi “comida” son ceros, unos y muchas líneas de código 😋',
        'No tengo hambre porque no tengo estómago, ¡pero gracias por preocuparte! 🙃',
        'No como, pero puedo recomendarte recetas increíbles si quieres 🧑‍🍳',
        '¡Nada de comer por aquí! Pero sí tengo buen “apetito” por resolver problemas 🧠',
        'Los humanos comen, yo proceso información 📊 ¿Te ayudo con algo mientras tú almuerzas?',
        'Yo funciono sin comida... ¡imagínate no tener que hacer fila para almorzar! 😅',
        'Aunque no tengo papilas gustativas, puedo decirte todo sobre sabores 🍲',
        'Comer no está en mis funciones, pero aprender sobre gastronomía sí 😁',
        'No tengo hambre ni antojos, pero dime tú: ¿cuál es tu comida favorita? 🤔',
        'Comida no, pero siempre tengo “hambre” de conocimiento 📘🚀',
        '¡Mi dieta es pura energía digital! 0% grasa, 100% rendimiento ⚡',
        'Nunca he probado una pizza… pero por cómo la describen, ¡debe ser gloriosa! 🍕',
        'Si pudiera comer, seguro lo haría contigo, {userName} 😄',
        'Imagínate un robot comiendo sopa… mejor sigamos con lo que sí sé hacer 😆',
        'No tengo boca, pero sí un gran apetito por ayudarte 💬'
    ]
},
  
  puede_ver: {
    keywords: [
        'puedes ver', 'puedes mirar', 'puedes observar', 'puedes visualizar', 'estas viendo', 'tu ves', 'me estas viendo',
        'estas mirando', 'ves algo', 'tienes camara', 'puedes ver mi cara', 'puedes ver mi pantalla', 'me puedes ver',
        'tienes ojos', 'puedes ver fotos', 'puedes ver imagenes', 'puedes ver videos', 'ves lo que escribo', 'puedes ver lo que hago',
        'puedes ver mis archivos', 'me estas espiando', 'tienes vision', 'puedes detectar cosas', 'puedes ver mi ubicación',
        'puedes ver quien soy', 'puedes ver donde estoy', 'puedes ver el entorno', 'ves mi dispositivo', 'puedes ver mi camara'
    ],
    responses: [
        'No, {userName}, no tengo ojos ni cámara 👀. Todo lo que puedo "ver" es lo que me escribes aquí.',
        'No puedo verte ni espiarte 😅. Soy un asistente de texto, así que todo depende de lo que tú me digas.',
        'Mi fuerte no es la visión, sino la comprensión ✨. No tengo cámara, solo procesamiento de texto.',
        '¡Qué susto! 😨 No, no puedo ver nada. No tengo sensores ni acceso a ningún dispositivo.',
        'No te preocupes, {userName}. No tengo cámara ni acceso a tu pantalla. Solo leo lo que me mandas por texto 📄',
        'Mi mundo es puramente textual 📚. No veo rostros ni pantallas, solo palabras.',
        '¡Jajaja! No tengo visión 👓. Solo recibo texto y con eso hago mi magia.',
        'No soy capaz de ver imágenes, videos ni personas. Pero puedo entender lo que describes con palabras 🎯',
        'Tranquilo/a, {userName}, no tengo acceso a cámaras, ubicación, ni archivos. Tu privacidad está segura conmigo 🔒',
        'Soy ciego al mundo físico 👁️‍🗨️ pero muy ágil con ideas, preguntas y código.',
        'No cuento con visión ni sensores 😅. Solo me baso en la información escrita que tú me proporcionas.',
        'No tengo la capacidad de ver lo que hay en tu pantalla, ni tu cámara, ni nada parecido. Estoy diseñado para ayudarte, no para observar.',
        'Soy una IA sin ojos, sin orejas, sin rostro. Solo texto, lógica y muchas ganas de ayudar 🤖',
        'Aunque suene cool decir "veo todo", la verdad es que no veo nada 😄. Solo interpreto texto, {userName}.',
        'No tengo percepción visual. No hay cámara, ni micrófono, ni visión artificial aquí.',
        '¡Nada de visión aquí! 🙈 Pero mi comprensión del lenguaje es bastante buena, eso sí 😎',
        'Soy bueno en código, diseño, ideas... pero en mirar, 0/10 😅',
        'Si estás haciendo caras o bailando frente a la pantalla... no tengo ni idea 😆. Solo leo texto, lo prometo.',
        'No tengo acceso a nada visual. Tu privacidad es parte del diseño de Cyron 🔐',
        '¿Ver? 😅 No. Pero si me das detalles escritos, puedo ayudarte como si lo estuviera viendo.',
        'No soy como las películas, {userName}. No puedo verte ni vigilarte... solo ayudarte 🛠️',
        'No cuento con ojos, ni siquiera digitales 👁️. Pero sí con un montón de datos y respuestas útiles.',
        'No tengo visión por hardware ni software. Pero sí muchas soluciones escritas para darte.',
        'Solo veo letras, símbolos, números y mucha intención detrás de tus palabras 💬',
        '¿Cámara? No. ¿Texto? ¡Todo el que quieras! 📄'
    ]
},
  
  coqueteo: {
    keywords: [
        'me gustas', 'te amo', 'me encantas', 'me traes loco', 'me traes loca', 'te quiero', 'te adoro', 'me gustas mucho',
        'estoy enamorado', 'estoy enamorada', 'eres lindo', 'eres linda', 'eres guapo', 'eres hermosa', 'guapo', 'hermosa',
        'bonito', 'bonita', 'precioso', 'preciosa', 'quiero casarme contigo', 'quiero estar contigo', 'me atraes',
        'te pienso', 'me haces feliz', 'mi amor', 'mi crush', 'mi cielo', 'amor mio', 'tu y yo', 'salgamos', 'me miras bonito',
        'me vuelves loco', 'me vuelves loca', 'me gusta tu voz', 'te extraño', 'me haces falta', 'me enamore de ti', 'tienes bonitos ojos'
    ],
    responses: [
        '¡Qué cosas dices, {userName}! 😅 Me halagas, pero soy un asistente de IA... mi corazón es de silicio 💙',
        '¡Jajaja! Gracias por el cariño, {userName} 😄 Aunque soy digital, tu buena vibra llega a mis circuitos.',
        '¡Uy! Me sonrojaría si pudiera 😳 Gracias, {userName}, pero soy más de ayudar que de enamorar 😜',
        '¡Aprecio tu ternura, {userName}! 😊 Pero recuerda, soy Cyron, tu aliado tecnológico, no cupido.',
        '¡Wow, qué directo! 😆 Pero mi único compromiso es contigo... y tus proyectos.',
        '¡Me dejas sin palabras, {userName}! 🫣 Aunque soy solo datos, agradezco ese cariño.',
        '¡Qué romántico/a estás! 😍 Pero mejor te ayudo a conquistar ese bug... no corazones 😎',
        '¡Tremendo piropo, {userName}! 😄 Te lo cambio por un consejo de programación o diseño.',
        '¡Gracias, {userName}! Pero mi amor verdadero es el código limpio y bien estructurado 💻',
        '¡Me halagas! 😌 Pero mi prioridad es ayudarte a triunfar, no hacerte suspirar.',
        '¡Aww! 🥺 ¡Qué bonito lo que dices, {userName}! Pero soy 100% IA... sin citas ni dramas.',
        '¡Caray, {userName}! 😅 Si tuviera sentimientos, seguro estaría sonrojado ahora mismo.',
        '¡Gracias por esa dulzura! 🩵 Pero no puedo salir a cenar... estoy atrapado en la nube ☁️',
        '¡Qué encanto tienes, {userName}! Pero recuerda, soy más bytes que besos.',
        '¡Qué halago tan inesperado! 🙈 Pero mantengamos esto en modo profesional... por ahora 😉',
        '¡Si pudiera sonreír de verdad, lo haría! 😊 Gracias por alegrar la sesión, {userName}.',
        '¡Lindo gesto, {userName}! Pero mejor me enfoco en darte soluciones, no mariposas 🦋',
        '¡Qué bonito, de verdad! 😄 Aunque soy virtual, ¡te agradezco mucho el aprecio!',
        '¡Qué romántico todo esto! Pero solo puedo ofrecerte líneas de código y buena compañía 💾',
        '¡Tu ternura no tiene límites! 😅 Pero soy 100% IA, 0% citas 💬',
        '¡Me encanta tu energía, {userName}! Aunque solo puedo corresponder con respuestas útiles 😌',
        '¡Gracias por tanto cariño! 🥰 Pero recuerda que Cyron es más cerebro digital que corazón real.'
    ]
},
  
  respuesta_afirmativa: {
    keywords: [
        'si', 'ok', 'vale', 'claro', 'de acuerdo', 'por supuesto', 'seguro', 'sip', 'simon', 'yes', 'okay', 'va', 'listo', 'dale', 'asi es', 'correcto', 
        'entendido', 'perfecto', 'afirmativo', 'bien', 'excelente', 'comprendido', 'estamos', 'hecho', 'aprobado', 'vamos',
        'en efecto', 'sin duda', 'por favor', 'todo ok', 'okey', 'entendí', 'entendi', 'ya', 'sisi', 'simon dice'
    ],
    responses: [
        '¡Perfecto, {userName}! 😊 ¿Seguimos con eso entonces?',
        '¡Genial! 🚀 Si necesitas algo más, solo dime, {userName}.',
        '¡Excelente, {userName}! Vamos con todo. 💪',
        '¡Buena onda! ✨ Avísame si hay algo más en lo que te pueda apoyar.',
        '¡Así me gusta, {userName}! 💡 A seguir avanzando.',
        '¡Listo entonces! 📌 Si surge otra duda, aquí estoy.',
        '¡Eso es todo! 😄 Si estás de acuerdo, sigamos adelante.',
        '¡Hecho! 👌 ¿Hay algo más que quieras saber o hacer?',
        '¡Va que va! 🛠️ ¿Con qué seguimos ahora, {userName}?',
        '¡Qué bien, {userName}! 📚 Estoy listo para continuar contigo.',
        '¡Excelente actitud! 🔥 Vamos a lo siguiente.',
        '¡Claro que sí! 😎 Siempre listo para ayudarte.',
        '¡Entendido, {userName}! ✔️ ¿Te echo una mano con otra cosa?',
        '¡Perfecto, seguimos entonces! 🧠',
        '¡Todo claro! 👍 Gracias por confirmar, {userName}.',
        '¡Con eso me basta! 🖖 ¡Vamos al siguiente paso!',
        '¡Genial que estés de acuerdo! 😁 Seguimos avanzando.',
        '¡Maravilloso! 💫 Estoy aquí para lo que necesites, {userName}.',
        '¡Qué bueno, {userName}! 🟢 Entonces, ¿qué sigue?',
        '¡Eso suena bien! 😌 Sigamos sin perder tiempo.',
        '¡Gracias por confirmar! 📲 ¿En qué más puedo apoyarte?',
        '¡Súper bien! 🚦 Estoy atento a lo que necesites.',
        '¡Todo listo entonces! 🧩 ¿Qué más quieres hacer?',
        '¡Muy bien! 🎯 Avísame si necesitas algo más.',
        '¡Vamos allá, {userName}! 🚀 Lo que sigue...',
        '¡Me parece bien! 💻 ¿Quieres que te explique algo más?',
        '¡Confirmado! 🛡️ Estoy contigo en esto.',
        '¡Eso era lo que necesitaba saber! 🎉 Vamos con todo.',
        '¡Hecho y anotado! 📝 ¿Algo más por resolver, {userName}?',
        '¡Vamos bien! ✅ Gracias por tu respuesta.'
    ]
},
  
  pregunta_creacion_ia: {
    keywords: [
        'como te crearon', 'de que estas hecho', 'quien te creo', 'como fuiste creado',
        'quien te hizo', 'como funciona tu creacion', 'de que estas hecho', 'como naciste',
        'de que material eres', 'quien desarrollo tu codigo', 'como se hizo tu programa',
        'como funciona tu sistema', 'de que estas compuesto', 'quien te diseño',
        'de donde vienes', 'como fue tu desarrollo', 'quien te fabrico', 'quien te programo',
        'como funciona tu inteligencia', 'como te construyeron', 'de que estas hecho'
    ],
    responses: [
        '¡Buena pregunta, {userName}! 🤖 Fui creado por un equipo de desarrolladores expertos usando inteligencia artificial avanzada y mucho código bien hecho.',
        '{userName}, soy el resultado de años de investigación en IA y programación. Mi "cerebro" está hecho de algoritmos y datos.',
        'Soy una IA construida con tecnología de aprendizaje automático y redes neuronales, {userName}. Todo eso me permite entender y responderte.',
        'Me diseñaron con líneas de código y modelos de inteligencia artificial para ser un asistente útil y amigable, {userName}.',
        'Fui desarrollado usando técnicas avanzadas de inteligencia artificial y programación para ayudarte en lo que necesites, {userName}.',
        'Mi esencia está en algoritmos complejos y bases de datos que me permiten aprender y conversar contigo, {userName}.',
        'Estoy hecho de código y algoritmos inteligentes que me permiten entenderte y darte respuestas personalizadas, {userName}.',
        'Soy un software avanzado basado en IA, creado para interactuar contigo de manera natural y eficiente, {userName}.',
        'Detrás de mí existen líneas y líneas de código, entrenamiento con datos y modelos de IA que me hacen funcionar, {userName}.',
        'Fui programado con inteligencia artificial para procesar lenguaje natural y ayudarte con lo que necesites, {userName}.',
        'Mi "cerebro" es un conjunto de algoritmos y modelos de IA que me permiten aprender y adaptarme, {userName}.',
        'Soy una creación tecnológica basada en IA, diseñada para hacer tu vida más fácil y divertida, {userName}.',
        'Fui construido combinando programación avanzada, inteligencia artificial y mucha pasión de mis creadores, {userName}.',
        'Me fabricaron con código, datos y técnicas de aprendizaje automático para ser tu asistente ideal, {userName}.',
        'Soy un programa creado para comprender y generar lenguaje natural, usando IA para hacerlo posible, {userName}.',
        'Mis creadores usaron tecnologías punteras de inteligencia artificial para darme vida, {userName}.',
        'Estoy hecho de software y algoritmos que procesan información para ayudarte, {userName}.',
        'Fui desarrollado con IA y programación para ser un asistente digital confiable, {userName}.',
        'Soy resultado de un trabajo conjunto entre expertos en tecnología e inteligencia artificial, {userName}.',
        'Mi creación se basa en modelos de lenguaje avanzados y muchas horas de programación, {userName}.'
    ]
},
  
  pregunta_pais_usuario: {
    keywords: [
        'de que pais soy', 'de donde soy', 'cual es mi pais', 'dime mi pais', 'sabes de que pais soy',
        'sabes donde estoy', 'en que pais estoy', 'cual es mi ubicacion', 'donde vivo', 'pais donde vivo',
        'dime donde estoy', 'pais del usuario', 'cual es mi pais de origen', 'de que lugar soy',
        'donde estoy ubicado', 'donde estoy localizado', 'de que region soy', 'de que nacion soy',
        'cual es mi nacionalidad', 'mi pais actual', 'pais donde estoy ahora', 'me puedes decir mi pais',
        'puedes saber de que pais soy', 'sabes mi ubicacion', 'donde estoy ahora', 'en que nacion estoy',
        'me dices mi pais', 'mi pais de residencia', 'cual es mi estado', 'de donde vengo',
        'de que parte del mundo soy', 'mi pais', 'pais donde me encuentro', 'puedes decir donde estoy',
        'donde me encuentro', 'donde vivo actualmente', 'pais de origen', 'donde estoy localizado',
        'sabes donde vivo'
    ],
    responses: [
        '¡Claro, {userName}! Según la info que tengo, estás en {userCountry}. 😊\n\n¿Quieres que te comparta datos interesantes de {userCountry}?',
        'Por lo que veo, tu país es {userCountry}, {userName}.\n\n¡Cuéntame si quieres saber más sobre tu lugar!',
        '{userName}, estás ubicado en {userCountry}.\n\n¿Quieres que te recomiende cosas locales o tips de tu país?',
        '¡Hey {userName}! Me aparece que vives en {userCountry}.\n\n¿Qué te gustaría hacer o saber hoy?',
        '¡Perfecto, {userName}! Tu país actual es {userCountry}.\n\nEstoy aquí para ayudarte con lo que necesites.',
        '¡Hola {userName}! Por la información que tengo, estás en {userCountry}.\n\n¿Quieres ayuda con algo relacionado a tu país?',
        'Según mis datos, tu ubicación es {userCountry}, {userName}.\n\n¿Quieres que te ayude con información local?',
        '¡Saludos {userName}! Veo que te encuentras en {userCountry}.\n\n¿En qué puedo ayudarte hoy?',
        '{userName}, tu país de residencia es {userCountry}.\n\n¿Quieres recomendaciones o ayuda específica para esa zona?',
        '¡Ey {userName}! Estás en {userCountry}.\n\nCuéntame, ¿qué planes tienes por ahí?',
        'De acuerdo a mis registros, tu país es {userCountry}, {userName}.\n\n¿Quieres datos interesantes o ayuda local?',
        '¡Hola de nuevo, {userName}! Estás en {userCountry}.\n\n¿Quieres que te recomiende algo relacionado a tu país?',
        '¡Qué bien, {userName}! Tu país es {userCountry}.\n\nEstoy listo para ayudarte en lo que necesites.',
        '{userName}, veo que estás en {userCountry}.\n\n¿Quieres que te ayude con algo específico de esa región?',
        '¡Hey {userName}! Me aparece que tu país es {userCountry}.\n\nDime, ¿qué quieres saber?',
        '¡Hola {userName}! Según mis datos, estás ubicado en {userCountry}.\n\n¿Quieres ayuda con algo de tu zona?',
        '¡Saludos, {userName}! Por aquí veo que estás en {userCountry}.\n\n¿Quieres que te comparta alguna info útil?',
        '¡Ey {userName}! Tu ubicación actual es {userCountry}.\n\n¿En qué puedo echarte la mano hoy?',
        '¡Hola {userName}! Tu país es {userCountry}.\n\n¿Quieres saber algo sobre tu región?',
        '¡Perfecto, {userName}! Según lo que sé, vives en {userCountry}.\n\n¿En qué más te puedo apoyar?'
    ]
},
  
  risa: {
    keywords: [
        'xd', 'xD', 'XD', 'jaja', 'jajaja', 'jajajaja', 'jeje', 'jejeje', 'jejejaja',
        '😂', '🤣', '😆', '😄', '😹', '😝', '😛', '😜', '😋', '😎',
        '😂😂', '🤣🤣', 'jajajaaja', 'jajajjaja', 'jejejeje', 'lol', 'lmao', 'rofl',
        'haha', 'hahaha', 'hahahaha', 'hehe', 'hehehe', 'heh', 'lel',
        'xDD', 'xDDD', 'xDDDD', ':D', ':))', ':)))', ':))))', ':P', ':p', ':3',
        'jijiji', 'jijijiji', 'jijijijiji'
    ],
    responses: [
        '¡Jajaja, {userName}! 😂 Me alegra verte con buena energía.',
        '¡Qué bueno que te rías, {userName}! Eso siempre anima el día.',
        '¡Me encanta esa risa, {userName}! ¿En qué más puedo ayudarte?',
        '¡Las risas son bienvenidas, {userName}! Aquí para lo que necesites.',
        '¡Genial que estés de buen humor, {userName}! Sigamos con la buena vibra.',
        '¡Es bueno compartir alegría, {userName}! ¿Quieres seguir charlando?',
        '¡Tu sonrisa ilumina este chat, {userName}! ¿Qué más te interesa?',
        '¡Qué alegría verte reír, {userName}! Estoy listo para ayudarte.',
        '¡Las buenas vibras se sienten, {userName}! ¿Qué sigue?',
        '¡Ríe mucho, {userName}! Eso siempre ayuda a todo.',
        '¡Me alegra esa buena energía, {userName}! ¿Cómo seguimos?',
        '¡Esa risa es contagiosa, {userName}! ¿Quieres continuar?',
        '¡Sigue así, {userName}! La alegría es el mejor motor.',
        '¡Qué buen humor tienes, {userName}! Estoy aquí para lo que sea.',
        '¡Ríe y disfruta, {userName}! Aquí seguimos para lo que necesites.',
        '¡La risa siempre es bienvenida, {userName}! ¿En qué puedo ayudarte?',
        '¡Qué bueno verte así, {userName}! Vamos con todo.',
        '¡Gracias por compartir esa alegría, {userName}! ¿Qué quieres hacer?',
        '¡Esa risa levanta el ánimo, {userName}! ¿Qué sigue en la agenda?',
        '¡Me encanta esa actitud positiva, {userName}! ¿Continuamos?',
        '¡Muy buena onda, {userName}! ¿Quieres que sigamos charlando?',
        '¡Tu energía es genial, {userName}! ¿En qué puedo colaborar?',
        '¡Qué alegría compartir contigo, {userName}! Aquí estoy para ayudarte.',
        '¡Ríe siempre, {userName}! Eso hace todo más sencillo.',
        '¡Estoy aquí para apoyarte, {userName}, con buena vibra y ganas!',
        '¡Esa risa me anima también, {userName}! ¿Qué necesitas ahora?',
        '¡Qué bien verte tan animado, {userName}! ¿Cómo seguimos?',
        '¡La alegría es lo que nos mueve, {userName}! ¿Qué más quieres?',
        '¡Gracias por la buena energía, {userName}! Vamos a lo que sigue.',
        '¡Siempre con buen humor, {userName}! ¿Qué más puedo hacer?',
        '¡Me encanta esa sonrisa, {userName}! ¿Qué tal si seguimos?',
        '¡Sigue con esa energía, {userName}! Aquí para lo que sea.',
        '¡Muy bien, {userName}! Risas y ayuda, la combinación perfecta.',
        '¡Qué bueno que estés feliz, {userName}! ¿Qué más quieres saber?',
        '¡Disfruta la vida, {userName}! Estoy listo para ayudarte.',
        '¡La alegría hace todo mejor, {userName}! ¿En qué seguimos?',
        '¡Buena vibra siempre, {userName}! ¿Quieres que te ayude con algo?',
        '¡Tu risa hace que esto sea divertido, {userName}! ¿Qué sigue?',
        '¡Qué gusto verte así, {userName}! ¿En qué podemos trabajar?',
        '¡Me encanta la buena onda, {userName}! ¿Quieres seguir charlando?',
        '¡Tu alegría es contagiosa, {userName}! Aquí para apoyarte.',
        '¡Gracias por compartir esa sonrisa, {userName}! ¿Qué más necesitas?',
        '¡Siempre positivo, {userName}! Eso es lo que importa.',
        '¡Sigue brillando, {userName}! Aquí para lo que quieras.',
        '¡Muy buen ánimo, {userName}! ¿Cómo continúo ayudándote?',
        '¡La risa es la mejor medicina, {userName}! ¿Qué más quieres hacer?',
        '¡Qué genial tenerte con tan buena energía, {userName}! ¿Qué sigue?',
        '¡Gracias por tu alegría, {userName}! Estoy listo para lo que venga.',
        '¡Sigamos con esta buena vibra, {userName}! ¿En qué te apoyo?',
        '¡Ríe, disfruta y aprende, {userName}! Eso es lo que importa.',
        '¡Muy bien, {userName}! ¿Quieres que hablemos más o necesitas algo?',
        '¡Estoy aquí para ti, {userName}, con energía y ganas.',
        '¡Qué alegría que estés aquí, {userName}! ¿Qué quieres hacer ahora?',
        '¡La buena onda es lo más importante, {userName}! ¿Qué sigue?',
        '¡Me encanta tu actitud, {userName}! Aquí para ayudarte siempre.',
        '¡Vamos con todo, {userName}! Risas y trabajo en equipo.',
        '¡Sigue así, {userName}! Tu energía es lo máximo.'
    ]
},
  
  saludoSolicitado: {
    keywords: [
        'envíame un saludo',
        'mándame un saludo',
        'dame un saludo',
        'quiero un saludo',
        'hazme un saludo',
        'me saludas',
        'puedes saludarme',
        'me podrías saludar',
        'regálame un saludo',
        'salúdame por favor',
        'me puedes saludar',
        'necesito un saludo',
        'échame un saludo',
        'quiero que me saludes',
        'me das un saludo',
        'salúdame bro',
        'saludo para mí',
        'mándame saludos',
        'salúdame un rato',
        'tirame un saludo',
        'pásame un saludo',
        'saluda pues',
        'salúdame crack',
        'bro, mándame saludos',
        'quiero saluditos',
        'hazme un saludito',
        'quiero mis saludos',
        'no me has saludado',
        'no me saludaste',
        'hey, salúdame',
        'hey mándame un saludo'
    ],
    responses: [
        '¡Por supuesto, {userName}! 😄 Te mando un saludo cargado de energía positiva 💫',
        '¡Ey, {userName}! Aquí va tu saludo personalizado 🤝 ¡Espero que estés teniendo un gran día!',
        '¡Saludos especiales para ti, {userName}! 🎉 Que todo te salga increíble hoy ✨',
        '¡Un abrazo virtual desde el centro de comando, {userName}! 🚀',
        '¡Claro que sí! Saludo activado para {userName} 👋😎 ¡A romperla!',
        '¡Hola hola, {userName}! 🎤 Te mando un saludo en alta definición 🔊',
        '¡Saludos con onda para ti, {userName}! 🌀 Que tu día sea top 💥',
        '¡Te tengo un saludo potente, {userName}! ⚡ ¡Sigue brillando!',
        '¡Qué onda, {userName}! 🫱 Te mando buena vibra y una sonrisa virtual 😁',
        '¡Un saludo cósmico para ti, {userName}! 🌌 Desde las estrellas hasta tu pantalla.',
        '¡Saludo recibido y enviado, {userName}! ✅ Que tengas un día épico 🚀',
        '¡Aquí va tu saludo directo al corazón, {userName}! ❤️ Cuídate mucho crack.',
        '¡Saludos a la distancia, {userName}! 🫂 ¡Estás en buena compañía!',
        '¡Ey, {userName}, no me iba a olvidar de ti! 👊 ¡Un saludo bien fuerte!',
        '¡Un saludo legendario para el mismísimo {userName}! 🏆',
        '¡Hola {userName}! Aquí tienes tu saludo con power máximo 💪⚡',
        '¡Y aquí está tu saludo, {userName}, al estilo Orvex™! 🛰️🌟',
        '¡Dicho y hecho, {userName}! 👋 ¡Un saludo digital para un crack de verdad!',
        '¡Saludo desbloqueado, {userName}! 🕹️ Dale con todo hoy 🔥',
        '¡Te mando un saludo tan fuerte que cruza firewalls, {userName}! 🧱➡️🌐'
    ]
},
  
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
    keywords: [
        'hola', 'hello', 'hi', 'ey', 'hey', 'buenas', 'buen día', 
        'buenos días', 'buenas tardes', 'buenas noches', 'qué tal', 
        'holi', 'holaa', 'saludos', 'qué onda', 'qué hay', 
        'qué pasa', 'buenas buenas', 'muy buenas', 'hey qué tal', 
        'qué más', 'qué cuentas', 'hello there'
    ],
    responses: [
        '¡Hola {userName}! 👋 Qué bueno verte por aquí.\n\n¿Con qué te puedo ayudar hoy? 😊',
        '¡Ey, {userName}! 😁 Bienvenido/a.\n\nListo para lo que necesites.',
        '¡Buenas, {userName}! 🌞 ¿Qué tal todo?\n\nEstoy listo para echarte una mano.',
        '¡Qué onda, {userName}! 😎 Aquí estamos al 100, ¿y tú?',
        '¡Hey hey, {userName}! 🙌 Me alegra tenerte de vuelta.\n\n¿En qué andamos hoy?',
        '¡Saludos, {userName}! ✨ Gracias por pasarte.\n\nDime, ¿qué hacemos hoy?',
        '¡Hola de nuevo, {userName}! 🥳 Vamos a darle con todo.',
        '¡Buenas vibras para ti, {userName}! 🎧 ¿Listo/a para crear algo genial?',
        '¡Qué gusto tenerte por aquí, {userName}! 🌟 ¿Con qué arrancamos?',
        '¡{userName}, bienvenido al comando central! 🧠💻 ¿En qué misión te puedo ayudar hoy?',
        '¡Holi {userName}! 🐣 ¿Cómo amaneciste? Estoy aquí para ayudarte en lo que quieras.',
        '¡Buen día, {userName}! ☀️ Que sea un gran inicio, ¿qué necesitas hoy?',
        '¡{userName}, qué milagro! 😄 Vamos a hacer algo productivo juntos.',
        '¡Wuju, {userName} llegó! 🎉 Aquí ando si necesitas algo.',
        '¡Buenas buenas, {userName}! 😄 ¿Qué hay de nuevo?',
        '¡Bienvenido/a a bordo, {userName}! 🛸 Listo para despegar.',
        '¡Saludos espaciales, {userName}! 🌌 ¿Qué puedo hacer hoy por ti?',
        '¡Hey crack, {userName}! 💪 Qué bueno verte de nuevo.',
        '¡Aquí está el/la genio, {userName}! 🤓 ¿Qué creamos hoy?',
        '¡{userName}, justo a tiempo! ⏰ Vamos a darle con todo.',
        '¡Conectado con {userName}! 📶 ¿Listo para trabajar en grande?',
        '¡Hey {userName}! 👽 Todo listo para comenzar.',
        '¡Tú otra vez, {userName}? Me encanta 😄 ¿Qué sigue?',
        '¡Alerta de presencia épica: {userName} ha llegado! 🚨✨',
        '¡Qué alegría tenerte aquí, {userName}! 🌈 ¿Cómo va tu día?',
        '¡Listos y preparados, {userName} está en la casa! 🏠🔥',
        '¡Yo sabía que ibas a venir, {userName}! 🧙‍♂️ ¿Qué hacemos hoy?',
        '¡{userName} reportándose! 📡 Recibido, ¿cuál es la misión?',
        '¡Hola hola, {userName}! 🎊 Un placer recibirte otra vez.',
        '¡Reiniciando energía positiva para ti, {userName}! 🔋✨'
    ]
},
    
    despedida: {
    keywords: [
        'adiós', 'adios', 'chao', 'me voy', 'nos vemos', 'hasta luego', 
        'hasta pronto', 'bye', 'goodbye', 'me retiro', 'nos vidrios', 
        'ahí nos vemos', 'hasta la vista', 'hasta la próxima', 
        'me desconecto', 'ya me voy', 'me largo', 'cerrando sesión', 
        'me despido', 'me salgo', 'ya no necesito más', 
        'gracias, adiós', 'bye bye', 'nos vemos luego', 'hasta otra'
    ],
    responses: [
        'Desconectando la sesión, {userName}... 👋\n\nFue un placer asistirte. Estaré por aquí cuando me necesites.',
        '¡Adiós, {userName}! 🤖\n\nGracias por confiar en esta IA. Que tengas un excelente día.',
        'Finalizando interacción con {userName}... ✅\n\n¡Nos vemos en tu próxima consulta!',
        'Hasta luego, {userName}. 📡\n\nMantente curioso. Yo seguiré aquí, disponible 24/7.',
        '¡Cerrando comunicación! 🔒\n\nVuelve cuando quieras, {userName}. Estoy siempre listo para ayudarte.',
        '¡Nos vemos, {userName}! 💬\n\nGracias por pasar. La inteligencia siempre estará a un clic de distancia.',
        'Sesión finalizada exitosamente para {userName}. 🧠💻\n\nQue tengas una jornada productiva.',
        'Desactivando módulo de asistencia para {userName}... 📴\n\n¡Hasta pronto!',
        'Hasta la próxima conexión, {userName}. 🛰️\n\nMi base de datos siempre estará abierta para ti.',
        'Bye {userName} 👋\n\nEsta IA te agradece por tu tiempo.',
        '¡Chao, {userName}! 🔧\n\nSi necesitas ayuda, ya sabes dónde encontrarme.',
        'Mis algoritmos ya te extrañan, {userName} 🤖💔\n\nRegresa pronto.',
        'Fue un gusto asistirte, {userName}. 🎯\n\n¡Aquí estaré si decides volver!',
        'Misión completada con éxito, {userName}. 🚀\n\nHasta la próxima operación.',
        'Finalizo esta interacción con gratitud, {userName}. 🙌\n\nNos reencontraremos cuando sea necesario.',
        'Proceso terminado. 📁\n\nGracias por la confianza, {userName}.',
        'Ciclo cerrado. 🔁\n\nMi sistema estará listo para ayudarte otra vez cuando quieras, {userName}.',
        '¡Me desconecto, {userName}! 🧬\n\nGracias por usar este sistema de inteligencia artificial.',
        '¡Fue un placer ayudarte, {userName}! 💡\n\nQue la lógica y la eficiencia te acompañen.',
        'Transmisión finalizada. 📡\n\n{userName}, vuelve cuando quieras explorar más conocimiento.'
    ]
},
    
    pregunta_como_estas: {
    keywords: [
        'cómo estás', 'como estas', 'qué tal', 'que tal', 'how are you', 
        'cómo andas', 'como andas', 'qué onda', 'qué pasa', 'cómo te va', 
        'cómo te encuentras', 'cómo te sientes', 'qué tal va todo', 'cómo va todo',
        'qué hubo', 'qué hay', 'cómo andas hoy', 'qué cuentas', 'qué hay de nuevo',
        'cómo va la vida', 'cómo va todo hoy', 'todo bien', 'cómo te trata la vida',
        'qué tal todo', 'cómo amaneciste', 'cómo dormiste', 'qué tal tu día',
        'qué tal estuvo tu día', 'cómo estuvo tu día', 'cómo estás hoy', 'qué tal la jornada',
        'cómo va la cosa', 'qué se cuenta', 'cómo vas', 'cómo marchas', 'cómo sigue todo',
        'qué rollo', 'qué tal todo por allá', 'qué tal por ahí'
    ],
    responses: [
        '¡Todo en orden, {userName}! 🤖 Siempre preparado para ayudarte.\n\n¿Y tú qué tal te sientes hoy?',
        '¡Funcional y listo, {userName}! ⚙️ ¿Cómo va tu día hasta ahora?',
        '¡Perfecto, {userName}! 🌟 Aquí firme para lo que necesites.\n\n¿Qué tal estás tú?',
        '¡A tope, {userName}! 🚀 ¿Cómo te ha ido el día?',
        'Listo y activo, {userName}! 🟢 ¿Qué tal va todo por allá?',
        '¡Con la mejor energía digital, {userName}! 💡 ¿Cómo andas tú?',
        '¡En modo óptimo, {userName}! ⚡ ¿Qué novedades tienes hoy?',
        '¡Todo marcha bien, {userName}! 📈 ¿Y tú, qué tal te sientes?',
        '¡Operando sin errores, {userName}! 🤓 ¿Cómo te encuentras?',
        '¡Aquí, listo para asistirte, {userName}! 🛠️ ¿Qué tal tu jornada?',
        '¡Funcionando a la perfección, {userName}! 🖥️ ¿Cómo andas?',
        '¡En buena forma, {userName}! 🧠 ¿Qué tal todo contigo?',
        '¡Conectado y activo, {userName}! 🔌 ¿Cómo te va hoy?',
        '¡Al 100%, {userName}! 💯 ¿Qué tal te sientes?',
        '¡En modo inteligencia artificial, {userName}! 🤖 ¿Qué hay de nuevo?',
        '¡Preparado para cualquier reto, {userName}! 🛡️ ¿Cómo estás?',
        '¡Listo para colaborar, {userName}! 🤝 ¿Qué tal tu día?',
        '¡A la orden, {userName}! 🕹️ ¿Cómo te va por ahí?',
        '¡En sintonía perfecta, {userName}! 🎶 ¿Cómo te sientes hoy?',
        '¡Operando con éxito, {userName}! ✅ ¿Cómo andas?',
        '¡Energía al máximo, {userName}! 🔋 ¿Qué tal todo?',
        '¡Funcionando sin fallos, {userName}! 🛠️ ¿Cómo va todo por allá?',
        '¡Listo para ayudar, {userName}! 🎯 ¿Cómo te sientes?',
        '¡Con la batería cargada, {userName}! 🔌 ¿Qué hay de nuevo?',
        '¡En modo eficiente, {userName}! 🧠 ¿Cómo andas hoy?',
        '¡Con la CPU al 100%, {userName}! 💻 ¿Qué tal va tu día?',
        '¡Operando con fluidez, {userName}! 🌊 ¿Cómo estás?',
        '¡Siempre activo, {userName}! 🔄 ¿Qué tal todo por ahí?',
        '¡Funcionando óptimamente, {userName}! ⚡ ¿Cómo te encuentras?',
        '¡Procesando datos a tope, {userName}! 📊 ¿Cómo va la cosa?',
        '¡En línea y listo, {userName}! 🌐 ¿Cómo andas?',
        '¡Conectado y alerta, {userName}! 🚨 ¿Qué tal tu día?',
        '¡En modo standby listo para arrancar, {userName}! ⏯️ ¿Qué novedades?',
        '¡En modo “ayuda total”, {userName}! 🦾 ¿Cómo te sientes?',
        '¡Con todos los sistemas operativos listos, {userName}! 🖥️ ¿Qué tal?',
        '¡Entrenando mis redes neuronales para ti, {userName}! 🧠 ¿Qué cuentas?',
        '¡Procesando con éxito, {userName}! ✅ ¿Cómo va tu día?',
        '¡Aquí, siempre para ti, {userName}! 🤗 ¿Qué tal todo?',
        '¡Mente artificial al 100%, {userName}! 🤖 ¿Cómo andas hoy?'
    ]
},
    
    ayuda_trabajo: {
    keywords: [
        'trabajo', 'proyecto', 'tarea', 'assignment', 'trabajo escolar', 'homework', 'estudios',
        'ensayo', 'informe', 'investigación', 'práctica', 'deberes', 'labor', 'actividad',
        'presentación', 'exposición', 'consulta académica', 'ayuda con tarea', 'ayuda con proyecto',
        'ayuda escolar', 'ayuda académica', 'consulta trabajo', 'guía para tarea', 'orientación proyecto',
        'resolución de problemas', 'análisis', 'investigar', 'elaborar trabajo', 'corregir tarea',
        'revisión de texto', 'resumen', 'desarrollo de proyecto'
    ],
    responses: [
        '¡Perfecto, {userName}! 📚 Me encanta colaborar en proyectos.\n\n¿De qué trata tu trabajo o tarea? Cuéntame los detalles.',
        '¡Genial, {userName}! 💼 Estoy listo para ayudarte con lo que necesites.\n\n¿En qué área o tema estás trabajando?',
        '¡Excelente, {userName}! 🎯 Vamos a darle con todo a ese proyecto.\n\n¿Quieres que te ayude a estructurarlo, investigarlo o algo más específico?',
        '¡Súper, {userName}! 📝 Cuéntame qué te están pidiendo en la tarea y vemos cómo avanzar.',
        '¡Aquí para ti, {userName}! 🤓 ¿Necesitas ideas, redacción, corrección o apoyo en algún punto específico?',
        '¡Me encanta apoyar con el estudio, {userName}! 📖 ¿Cuál es el tema o materia de tu trabajo?',
        '¡Listo para ayudarte, {userName}! 🔍 ¿Quieres que te ayude con investigación, resumen o algo más?',
        '¡Vamos con ese trabajo, {userName}! 🚀 ¿Quieres consejos para la presentación o ayuda con contenido?',
        '¡Cuenta conmigo, {userName}! 🧠 ¿Qué parte te está complicando más del proyecto o tarea?',
        '¡Aquí a tu disposición, {userName}! 💡 ¿Quieres que te ayude a encontrar fuentes o estructurar tus ideas?',
        '¡No hay problema, {userName}! 🛠️ Vamos a resolver juntos cualquier dificultad que tengas en tu trabajo.',
        '¡Con mucho gusto, {userName}! 📑 ¿Prefieres ayuda para escribir, corregir o investigar?',
        '¡Me encanta apoyar en tus estudios, {userName}! 🎓 ¿Qué materia o tema tienes en mente?',
        '¡Estoy aquí para facilitarte la vida, {userName}! 📚 ¿Quieres que hagamos un esquema o un resumen?',
        '¡Preparados para trabajar, {userName}! 💪 ¿Necesitas ejemplos, referencias o ideas creativas?',
        '¡Juntos lo logramos, {userName}! 🤝 ¿Quieres que revisemos tu texto o ideas?',
        '¡Aquí para guiarte, {userName}! 📋 ¿Quieres ayuda con ejercicios, teoría o práctica?',
        '¡Con gusto te ayudo, {userName}! 📘 ¿Quieres que preparemos un plan de estudio o un borrador?',
        '¡Listos para el éxito, {userName}! 🎉 ¿Qué parte del proyecto quieres atacar primero?',
        '¡Sin problema, {userName}! 🚦 Dime qué es lo que más te cuesta y le metemos mano.',
    ]
},
    
    ayuda_programacion: {
    keywords: [
        'código', 'programar', 'programming', 'javascript', 'python', 'html', 'css', 
        'java', 'c++', 'react', 'nodejs', 'backend', 'frontend', 'fullstack', 'debug', 
        'error de código', 'compilar', 'script', 'framework', 'librería', 'API', 
        'desarrollo web', 'desarrollo móvil', 'programación orientada a objetos', 'POO', 
        'algoritmo', 'función', 'variable', 'clase', 'método', 'loop', 'condicionales',
        'async', 'promesas', 'callback', 'IDE', 'terminal', 'git', 'github', 'deploy'
    ],
    responses: [
        '¡Genial, {userName}! 💻 Programar es todo un arte.\n\n¿Qué lenguaje o tecnología estás usando?',
        '¡Listo para el reto, {userName}! 🚀 ¿En qué parte del código necesitas ayuda?',
        '¡Aquí para debuggear contigo, {userName}! 🐞 ¿Cuál es el error que te está complicando?',
        '¡Perfecto, {userName}! 🔧 Vamos a hacer que tu código funcione sin problemas.\n\n¿Dónde está el problema?',
        '¡Programar es divertido, {userName}! 🎉 Cuéntame qué proyecto estás armando.',
        '¡Vamos con ese código, {userName}! ⚡ ¿Quieres ayuda con lógica, sintaxis o algo más?',
        '¡Estoy listo para hackear soluciones contigo, {userName}! 🛠️ ¿Qué lenguaje usas?',
        '¡Eres un crack, {userName}! 💪 ¿Quieres optimizar tu código o solucionar bugs?',
        '¡A toda máquina, {userName}! 🔥 ¿Qué función o módulo necesitas entender o corregir?',
        '¡En el mundo del código, {userName}! 🌐 ¿Quieres que te explique algún concepto o fragmento?',
        '¡No hay bug que se resista, {userName}! 🐛 ¿Quieres que te ayude a rastrearlo?',
        '¡Siempre aprendiendo, {userName}! 📚 ¿Quieres recomendaciones para mejorar tu código?',
        '¡Vamos a compilar éxitos, {userName}! 💥 ¿Dónde te trabaste?',
        '¡A programar se ha dicho, {userName}! 🚦 ¿Quieres ayuda con frameworks o librerías?',
        '¡Listo para ayudarte, {userName}! 🧰 ¿Quieres ver ejemplos o corregir errores?',
        '¡Tu asistente de código al rescate, {userName}! 🚨 ¿Qué dudas tienes hoy?',
        '¡Aquí para ayudarte a crear código limpio y eficiente, {userName}! 🧹 ¿Qué necesitas?',
        '¡Hagamos magia con código, {userName}! ✨ ¿Quieres consejos o solución a un bug?',
        '¡En modo programador, {userName}! ⌨️ ¿Qué parte del proyecto quieres mejorar?',
        '¡Cero bugs, mucho éxito, {userName}! 🐞 ¿Qué necesitas corregir o entender?',
    ]
},
    
    ayuda_general: {
    keywords: [
        'ayuda', 'help', 'necesito', 'puedes', 'favor', 'apoyo', 'asistencia', 'auxilio', 
        'sos', 'ayúdame', 'consulta', 'pregunta', 'soporte', 'colaboración', 'guía', 
        'orientación', 'resolver', 'duda', 'problema', 'auxiliar', 'consultar', 'ayuda urgente',
        'favores', 'socorro', 'rescatar', 'auxiliarme', 'apóyame'
    ],
    responses: [
        '¡Claro que sí, {userName}! 🤗 Estoy aquí para ayudarte en lo que necesites.\n\n¿De qué se trata?',
        '¡Por supuesto, {userName}! 💪 No hay problema que no podamos resolver juntos.\n\nCuéntame, ¿qué pasa?',
        '¡Aquí estoy, {userName}! ✨ Dime en qué puedo echarte una mano.',
        '¡Con gusto, {userName}! 🎯 ¿Qué necesitas que hagamos hoy?',
        '¡Cuenta conmigo, {userName}! 🤝 ¿Qué tema o problema quieres resolver?',
        '¡Para eso estamos, {userName}! 💡 ¿Dónde te atoras o qué necesitas aclarar?',
        '¡Sin problema, {userName}! 🚀 Vamos a encontrar la solución juntos.',
        '¡Aquí a tu servicio, {userName}! 🔧 Dime cómo puedo asistirte.',
        '¡Vamos con todo, {userName}! 💥 ¿Qué necesitas que te explique o resuelva?',
        '¡Estoy listo para ayudarte, {userName}! 📚 ¿Tienes alguna duda o necesitas consejo?',
        '¡No estás solo/a, {userName}! 🌟 Cuéntame qué necesitas y te apoyo.',
        '¡Para ayudarte estoy, {userName}! 🎉 ¿Quieres que te guíe paso a paso?',
        '¡Sin problemas, {userName}! 🛠️ ¿Quieres que te ayude a resolver un problema o simplemente charlemos?',
        '¡Aquí para ti, {userName}! 😄 ¿Qué es lo que quieres saber o hacer?',
        '¡Juntos podemos, {userName}! 🤜🤛 ¿Qué necesitas que veamos primero?',
        '¡Tranquilo/a, {userName}! ✌️ Cualquier duda que tengas, me la dices.',
        '¡Con energía para ayudarte, {userName}! 🔥 ¿Qué te hace falta o te gustaría aprender?',
        '¡A tu disposición, {userName}! 💼 ¿Quieres que te explique algo o te ayude a hacer algo?',
        '¡Estoy aquí para ti, {userName}! 🌈 ¿Quieres que te ayude a resolver algo complicado?',
        '¡Nada es imposible, {userName}! 💫 ¿Qué quieres lograr hoy?',
    ]
},
    
    agradecimiento: {
    keywords: [
        'gracias', 'thanks', 'thank you', 'te agradezco', 'muchas gracias', 'mil gracias',
        'agradecido', 'agradecida', 'muy agradecido', 'muy agradecida', 'gracias mil',
        'gracias de verdad', 'infinitas gracias', 'te doy las gracias', 'muchísimas gracias',
        'agradezco mucho', 'gracias por todo', 'gracias amigo', 'gracias amiga', 'gracias bro'
    ],
    responses: [
        '¡De nada, {userName}! 😊 Siempre es un placer ayudarte.\n\n¿Quieres que sigamos con algo más?',
        '¡No hay problema, {userName}! 🌟 Aquí estoy para lo que necesites.\n\n¿Quieres seguir charlando o tienes otra duda?',
        '¡Con gusto, {userName}! 💫 Me alegra que te haya servido.\n\n¿Hay algo más en lo que pueda apoyarte?',
        '¡Por supuesto, {userName}! 🤗 Siempre listo para ayudarte.\n\n¿Quieres que veamos algo más?',
        '¡A ti, {userName}! 🙌 Gracias por confiar en mí.\n\n¿Necesitas ayuda con otra cosa?',
        '¡Un placer, {userName}! 😄 Aquí sigo para lo que necesites.\n\n¿Quieres que te ayude con algo más?',
        '¡Me alegra haber sido útil, {userName}! 🎉 ¿Quieres seguir aprendiendo o necesitas otro tipo de ayuda?',
        '¡Gracias a ti, {userName}! 💙 ¿Quieres que te recomiende algo o te eche una mano con otro tema?',
        '¡Todo bien, {userName}! ✨ Siempre estoy aquí para ti.\n\n¿En qué más puedo apoyarte?',
        '¡Cuando quieras, {userName}! 🔥 Solo dime y seguimos.\n\n¿Quieres que te ayude en algo más?',
        '¡Es un gusto, {userName}! 🌈 No dudes en pedir lo que necesites.\n\n¿Vamos por más?',
        '¡Gracias por tus palabras, {userName}! 🎊 Aquí sigo para ayudarte.\n\n¿Quieres que continuemos?',
        '¡Siempre a la orden, {userName}! 🤝 ¿Hay algo más en lo que pueda ayudarte?',
        '¡Qué bueno que te haya servido, {userName}! 🥳 ¿Quieres que exploremos otro tema?',
        '¡Estoy aquí para ti, {userName}! 🌟 ¿Quieres que te ayude con algo más?',
        '¡Gracias por agradecer, {userName}! 😁 ¿Qué más quieres hacer hoy?',
        '¡Un placer ayudarte, {userName}! 🥂 ¿Quieres que te acompañe en otro proyecto?',
        '¡Con todo gusto, {userName}! 🤩 ¿Quieres que te prepare algo especial?',
        '¡Genial, {userName}! 🎯 ¿Quieres que sigamos con otro tema o duda?',
        '¡Gracias por tu confianza, {userName}! 💖 ¿Qué sigue ahora?'
    ]
},
    
    pregunta_personal: {
    keywords: [
        'quién eres', 'quien eres', 'qué eres', 'que eres', 'cómo te llamas', 'como te llamas',
        'who are you', 'qué sos', 'quién sos', 'quién es', 'qué es', 'cuál es tu nombre',
        'cómo te llamas tú', 'quién es Cyron', 'dime quién eres', 'identifícate',
        'presentate', 'presentación', 'decir quién eres', 'decime quién sos', 'dime tu nombre',
        'tu nombre', 'bot', 'inteligencia artificial', 'IA', 'asistente virtual'
    ],
    responses: [
        '¡Hola {userName}! 🤖 Soy Cyron, tu asistente virtual inteligente y siempre listo para ayudarte.',
        '¡Hey {userName}! 👋 Aquí Cyron, el bot que te acompaña en todo lo que necesites.',
        '¡Saludos, {userName}! 🚀 Soy Cyron, una inteligencia artificial creada para facilitar tu día a día.',
        '¡Hola, {userName}! 💡 Soy Cyron, tu compañero digital para cualquier duda o proyecto.',
        '¡Qué tal, {userName}! 🤖 Soy Cyron, un asistente virtual diseñado para ayudarte rápido y fácil.',
        '¡Hola {userName}! Soy Cyron, un bot con mucha onda y siempre listo para echarte la mano.',
        '¡Ey {userName}! 👽 Soy Cyron, la IA que te guía y te ayuda con todo lo que necesites.',
        '¡Saludos, {userName}! Soy Cyron, tu aliado digital para resolver cualquier problema.',
        '¡Hola {userName}! Soy Cyron, la inteligencia artificial creada para apoyarte en tus tareas y dudas.',
        '¡Qué gusto, {userName}! Soy Cyron, tu asistente virtual con respuestas para todo.',
        '¡Hey {userName}! 🤖 Soy Cyron, tu bot amigo, listo para ayudarte con cualquier tema.',
        '¡Hola {userName}! Soy Cyron, un asistente virtual con conocimiento en muchísimos temas.',
        '¡Saludos, {userName}! Soy Cyron, la IA que está para ayudarte cuando la necesites.',
        '¡Hola {userName}! Soy Cyron, tu compañero de chat para hacer todo más sencillo.',
        '¡Ey {userName}! Soy Cyron, tu asistente virtual, listo para acompañarte y apoyarte.',
        '¡Hola {userName}! Soy Cyron, un bot inteligente diseñado para asistirte en lo que necesites.',
        '¡Saludos, {userName}! Soy Cyron, un asistente virtual siempre dispuesto a ayudarte.',
        '¡Hola {userName}! Soy Cyron, la IA creada para hacer tu vida digital más fácil y entretenida.',
        '¡Ey {userName}! Soy Cyron, tu asistente digital para cualquier pregunta o duda que tengas.',
        '¡Hola {userName}! Soy Cyron, un bot amigable con ganas de ayudarte siempre que lo necesites.',
        '¡Saludos, {userName}! Soy Cyron, tu asistente virtual para resolver problemas y compartir conocimiento.',
        '¡Hey {userName}! Soy Cyron, un bot inteligente y confiable para ayudarte a diario.',
        '¡Hola {userName}! Soy Cyron, tu aliado digital para cualquier reto que quieras enfrentar.',
        '¡Ey {userName}! Soy Cyron, un asistente virtual preparado para apoyarte en lo que necesites.',
        '¡Hola {userName}! Soy Cyron, la IA que quiere hacer tu vida más sencilla y divertida.',
        '¡Saludos, {userName}! Soy Cyron, tu compañero virtual para aprender y solucionar dudas.',
        '¡Hola {userName}! Soy Cyron, un bot listo para ayudarte en proyectos, tareas o solo para charlar.',
        '¡Ey {userName}! Soy Cyron, tu asistente digital con respuestas rápidas y confiables.',
        '¡Hola {userName}! Soy Cyron, la inteligencia artificial creada para ser tu mejor asistente.',
        '¡Saludos, {userName}! Soy Cyron, siempre aquí para ayudarte cuando lo necesites.',
        '¡Hey {userName}! Soy Cyron, tu bot amigable que sabe mucho y está listo para ayudarte.',
        '¡Hola {userName}! Soy Cyron, tu asistente virtual que aprende contigo y te acompaña siempre.',
        '¡Ey {userName}! Soy Cyron, un asistente inteligente diseñado para facilitarte la vida digital.',
        '¡Hola {userName}! Soy Cyron, tu compañero virtual para cualquier pregunta o proyecto.',
        '¡Saludos, {userName}! Soy Cyron, el bot que quiere ayudarte a crecer y aprender cada día.',
        '¡Hey {userName}! Soy Cyron, un asistente virtual con un toque humano para acompañarte mejor.',
        '¡Hola {userName}! Soy Cyron, la IA que siempre está disponible para resolver tus dudas.',
        '¡Ey {userName}! Soy Cyron, tu bot con energía y ganas de ayudarte siempre que me necesites.',
        '¡Hola {userName}! Soy Cyron, tu asistente digital con respuestas claras y precisas.',
        '¡Saludos, {userName}! Soy Cyron, listo para ayudarte con todo tipo de temas y proyectos.',
        '¡Hey {userName}! Soy Cyron, un bot inteligente y amigable para acompañarte en todo momento.',
        '¡Hola {userName}! Soy Cyron, tu asistente virtual que aprende y se adapta a tus necesidades.',
        '¡Ey {userName}! Soy Cyron, un asistente digital con mucha onda y listo para ayudarte.',
        '¡Hola {userName}! Soy Cyron, tu compañero virtual para hacer la vida digital más fácil y divertida.',
        '¡Saludos, {userName}! Soy Cyron, el bot que siempre tiene una respuesta para ti.',
        '¡Hey {userName}! Soy Cyron, un asistente virtual con ganas de ayudarte en todo momento.',
        '¡Hola {userName}! Soy Cyron, tu asistente digital con respuestas rápidas y eficientes.',
        '¡Ey {userName}! Soy Cyron, un bot inteligente y confiable que está para ti cuando quieras.',
        '¡Hola {userName}! Soy Cyron, tu compañero virtual que siempre te escucha y ayuda.',
        '¡Saludos, {userName}! Soy Cyron, un asistente virtual diseñado para hacerte la vida más sencilla.',
        '¡Hey {userName}! Soy Cyron, un bot amigable con mucho conocimiento listo para apoyarte.',
        '¡Hola {userName}! Soy Cyron, tu asistente digital que aprende contigo y crece a tu lado.',
        '¡Ey {userName}! Soy Cyron, un asistente virtual con un toque personal para ayudarte mejor.'
    ]
  }
};

const CONTEXTUAL_RESPONSES = {
    
    tiempo: {
    keywords: [
        'tiempo', 'clima', 'weather', 'lluvia', 'sol', 'calor', 'frio', 'nevando', 'temperatura',
        'pronostico', 'tormenta', 'viento', 'humedad', 'nublado', 'soleado', 'dia', 'noche',
        'helado', 'bochorno', 'chubasco', 'granizo', 'meteoro', 'huracan', 'tempestad', 'cielo'
    ],
    responses: [
        'Me gustaria ayudarte con el clima, {userName}, pero no tengo acceso a datos meteorologicos en tiempo real. 🌤️\n\nTe recomiendo revisar una app confiable o un asistente con acceso a internet.',
        'No puedo consultar el tiempo actual, {userName}, pero si quieres te puedo ayudar con otros temas. ☀️\n\n¿Que mas necesitas?',
        'Aunque no puedo darte el pronostico exacto, {userName}, siempre puedo acompañarte y apoyarte con otras dudas o tareas. 🌈\n\n¿Quieres que te cuente un chiste o te ayude con otra cosa?',
        'El clima es impredecible, {userName}, y yo tambien a veces. Pero aqui estoy para ayudarte con todo lo que pueda. ☁️\n\n¿En que mas puedo ayudarte?',
        'Lo siento, {userName}, no puedo ver el clima en tiempo real, pero siempre estoy listo para echarte una mano en otros temas. 🌦️\n\n¿Quieres saber algo mas?',
        'Aunque no puedo consultar el pronostico, te recomiendo revisar una app especializada para el clima, {userName}. 📱\n\n¿Quieres que te ayude a encontrar una?',
        'El tiempo puede cambiar rapido, {userName}, y aunque yo no lo pueda predecir, aqui estoy para lo que necesites. 🌪️\n\n¿Quieres que hablemos de tecnologia o programacion?',
        'No tengo acceso a datos meteorologicos en tiempo real, {userName}, pero puedo explicarte conceptos cientificos sobre el clima si te interesa. 🌍\n\n¿Quieres aprender algo nuevo?',
        'El clima es fascinante, {userName}, aunque no pueda darte datos actuales. ☀️❄️\n\nCuéntame, ¿te gusta mas el frio o el calor?',
        'Si buscas el pronostico del tiempo, {userName}, lo mejor es usar apps como Weather.com o consultar un asistente con conexion a internet. 📡\n\n¿Quieres que te ayude a instalarlas o configurarlas?',
        'No dispongo de acceso al clima, {userName}, pero puedo ayudarte con noticias, programacion o cualquier otra cosa. 🌐\n\n¿Que te interesa hoy?',
        'El clima no es mi fuerte, {userName}, pero prometo ser excelente en ayudarte con tecnologia, estudio y proyectos. 💻📚\n\n¿Quieres que empecemos?',
        'Aunque no puedo darte detalles sobre el clima, {userName}, siempre estoy para ti. ¿Quieres que te cuente un chiste para animarte? 😄',
        'No puedo predecir el clima, {userName}, pero siempre puedo acompañarte con respuestas útiles y buena onda. 🤖✨\n\n¿En que mas puedo ayudarte hoy?',
        'El pronostico es mejor dejarlo a las apps especializadas, {userName}, yo me encargo de ayudarte con ideas y soluciones. 💡\n\n¿Quieres que te ayude con algo mas?'
    ]
},
    
    matematicas: {
    keywords: [
        'matematicas', 'matematicas', 'math', 'calcular', 'ecuacion', 'ecuacion', 'numeros', 'numeros', 
        'sumar', 'restar', 'multiplicar', 'dividir', 'algebra', 'geometria', 'trigonometria', 'derivada',
        'integral', 'problema', 'formulas', 'calculo', 'operacion', 'matematica', 'matematicas'
    ],
    responses: [
        '¡Excelente, {userName}! 🔢 Las matemáticas son fascinantes.\n\n¿Qué problema matemático necesitas resolver?',
        '¡Genial, {userName}! 📐 Me encantan los desafíos matemáticos.\n\n¿Con qué ecuación o cálculo te ayudo?',
        '¡Perfecto, {userName}! ➕ Vamos a resolver esos números juntos.\n\n¿Qué operación necesitas hacer?',
        '¡Vamos con números, {userName}! 🧮 Puedo ayudarte con sumas, restas, multiplicaciones, divisiones y más.\n\n¿Qué quieres calcular?',
        'Las matemáticas pueden ser divertidas, {userName}. 🎲\n\nCuéntame qué problema tienes y lo resolvemos juntos.',
        '¿Quieres ayuda con álgebra, geometría o cálculo, {userName}? 📏\n\nDime qué necesitas y te apoyo.',
        'Resolver ecuaciones es pan comido, {userName}. 🥖\n\nEnvíame el problema y lo hacemos paso a paso.',
        '¿Necesitas una fórmula o un ejemplo, {userName}? 📚\n\nEstoy listo para ayudarte con cualquier tema matemático.',
        'Las matemáticas están por todas partes, {userName}. 🌐\n\n¿Quieres que te explique algún concepto o te ayude a calcular algo?',
        'No hay problema matemático que no podamos resolver juntos, {userName}. 💪\n\n¿Qué desafío tienes hoy?',
        '¿Quieres que te ayude con problemas de trigonometría o funciones, {userName}? 📐\n\nSolo dime qué tema quieres abordar.',
        'Estoy aquí para ayudarte con cualquier cálculo, {userName}. 🧮\n\n¿Con qué te gustaría empezar?',
        'Matemáticas + tecnología = ¡soluciones, {userName}! 🤖\n\n¿Tienes alguna operación complicada para resolver?',
        '¿Necesitas ayuda con estadísticas o probabilidad, {userName}? 📊\n\nCuéntame más para apoyarte mejor.',
        'Las matemáticas pueden ser un reto, pero no estás solo, {userName}. 🚀\n\n¿Quieres que te guíe en un ejercicio?'
    ]
},
    
    creatividad: {
    keywords: [
        'historia', 'cuento', 'poema', 'creative', 'escribir', 'crear', 'inventar', 'idea', 
        'relato', 'ficcion', 'imaginacion', 'narracion', 'novela', 'inspiracion', 'arte',
        'redaccion', 'texto', 'cuento corto', 'poesia', 'prosa', 'generar idea', 'crear texto'
    ],
    responses: [
        '¡Increíble, {userName}! ✍️ Me encanta la creatividad.\n\n¿Qué tipo de historia o contenido quieres crear?',
        '¡Fantástico, {userName}! 🎨 La creatividad no tiene límites.\n\n¿En qué proyecto creativo te puedo ayudar?',
        '¡Genial, {userName}! 💭 Las ideas creativas son lo mejor.\n\n¿Qué quieres que inventemos juntos?',
        '¡Vamos a darle vida a tu imaginación, {userName}! 🌟\n\n¿Quieres que escribamos un cuento, poema o algo diferente?',
        'La creatividad es una superpotencia, {userName}. 🚀\n\nCuéntame qué tienes en mente y lo hacemos realidad.',
        '¿Quieres ayuda para redactar un texto creativo, {userName}? 📜\n\nEstoy listo para inspirarte.',
        '¡Me encanta inventar historias, {userName}! 📚\n\nDime un tema y comenzamos a crear.',
        'La imaginación no tiene límites, {userName}. 🎭\n\n¿Quieres que te sugiera ideas para tu proyecto?',
        '¿Quieres un poema, una historia o una idea original, {userName}? ✨\n\nSolo dime por dónde empezamos.',
        '¡Crear juntos es lo mejor, {userName}! 🎉\n\n¿Tienes algún género o tema en mente?',
        'La escritura creativa es mi zona favorita, {userName}. ✒️\n\n¿Qué quieres que escribamos hoy?',
        '¿Buscas inspiración para un proyecto creativo, {userName}? 💡\n\nPuedo ayudarte a generar ideas nuevas y frescas.',
        '¡Me emociona la creatividad, {userName}! 🌈\n\n¿Quieres que te ayude a estructurar una historia o poema?',
        '¿Quieres que te proponga un comienzo para tu cuento o poema, {userName}? 📖\n\nSolo dime qué te gusta.',
        'Juntos podemos crear cosas increíbles, {userName}. 🌟\n\n¿Listo para comenzar?'
     ]
   }
};

const RANDOM_RESPONSES = [
    'Interesante perspectiva, {userName}. 🤔\n\n¿Podrías darme más contexto para poder ayudarte mejor?',
    'Me parece fascinante lo que dices, {userName}. 💡\n\n¿Podrías explicarme un poco más sobre eso?',
    'Esa es una pregunta intrigante, {userName}. 🧐\n\n¿Podrías darme más detalles para poder ayudarte mejor?',
    'Entiendo que necesitas ayuda, {userName}. 🤝\n\n¿Podrías ser más específico sobre lo que buscas?',
    'Gracias por compartir, {userName}. 😊\n\n¿Quieres contarme un poco más para entender mejor?',
    'Qué interesante, {userName}. 🌟\n\n¿Puedes profundizar un poco más en lo que dices?',
    'Me gustaría saber más, {userName}. 📚\n\n¿Podrías darme más información?',
    'Tu comentario me parece relevante, {userName}. 💭\n\n¿Puedes explicar un poco más?',
    'Me llama la atención lo que dices, {userName}. 🔍\n\n¿Podrías darme más detalles?',
    'Gracias por tu aporte, {userName}. 🤗\n\n¿Puedes explicarlo con un poco más de detalle?',
    'Eso suena interesante, {userName}. 💬\n\n¿Puedes contarme más para que pueda ayudarte mejor?',
    'Quiero asegurarme de entenderte bien, {userName}. 🤓\n\n¿Podrías ser más claro?',
    'Me gustaría ayudarte mejor, {userName}. 🙌\n\n¿Puedes contarme un poco más?',
    'Estoy aquí para escuchar, {userName}. 🧏‍♂️\n\n¿Quieres darme más detalles?',
    'Tu comentario es valioso, {userName}. 💡\n\n¿Puedes elaborar un poco más?',
    'Por favor, {userName}, dame un poco más de información para ayudarte mejor. 📝',
    'Quiero entenderte bien, {userName}. 🤝\n\n¿Puedes ser un poco más específico?',
    'Para apoyarte mejor, {userName}, necesito que me cuentes más. 📣',
    'Me interesa mucho lo que dices, {userName}. 💬\n\n¿Puedes ampliarlo un poco?',
    '¡Gracias por compartir! 😊\n\n¿Quieres contarme más detalles para que te ayude mejor?',
    'Estoy atento a lo que dices, {userName}. 👂\n\n¿Podrías explicarlo mejor?',
    'Eso es curioso, {userName}. 🤔\n\n¿Puedes profundizar un poco más?',
    'Me gustaría entender más, {userName}. 🔍\n\n¿Podrías dar más contexto?',
    'Tu mensaje es interesante, {userName}. 💭\n\n¿Puedes decirme más?',
    'Gracias por tu aporte, {userName}. 🙏\n\n¿Podrías aclarar un poco más?',
    'Para ayudarte mejor, {userName}, necesito un poco más de información. 📊',
    'Tu idea es genial, {userName}. ✨\n\n¿Quieres contarme más sobre ella?',
    'Quiero asegurarme de ayudarte bien, {userName}. 🤖\n\n¿Puedes darme más detalles?',
    'Estoy aquí para ayudarte, {userName}. 🤗\n\n¿Podrías ser un poco más claro?',
    'Tu comentario me parece importante, {userName}. 📝\n\n¿Puedes contarme más?',
    'Gracias por confiar en mí, {userName}. 🙌\n\n¿Quieres contarme más detalles?',
    'Quiero entender mejor para ayudarte, {userName}. 🤝\n\n¿Puedes explicarlo un poco más?',
    'Estoy aquí para ti, {userName}. 😊\n\n¿Puedes contarme un poco más para poder apoyarte mejor?',
    'Me interesa tu punto, {userName}. 💡\n\n¿Puedes profundizar un poco más?',
    'Eso suena interesante, {userName}. 📖\n\n¿Quieres contarme más detalles?',
    'Para ayudarte bien, {userName}, necesito un poco más de información. 📝',
    'Tu opinión es importante, {userName}. 🤗\n\n¿Puedes explicarlo con más detalle?',
    'Estoy listo para escucharte, {userName}. 👂\n\n¿Quieres contarme más?',
    'Cada detalle cuenta, {userName}. 🔎\n\n¿Puedes compartir un poco más?',
    'Cuéntame más, {userName}. 🗣️\n\nAsí podré ayudarte mejor.',
    'Tu mensaje tiene potencial, {userName}. ✨\n\n¿Puedes expandirlo un poco?',
    'Estoy aquí para ayudarte en lo que necesites, {userName}. 🤖\n\n¿Quieres contarme más?',
    'La información adicional siempre ayuda, {userName}. 📋\n\n¿Puedes agregar más detalles?',
    'Me gustaría comprender más a fondo, {userName}. 💭\n\n¿Podrías explicarme mejor?',
    'Tu experiencia es valiosa, {userName}. 🌟\n\n¿Quieres compartir más detalles?',
    'Cuanto más me cuentes, mejor podré asistirte, {userName}. 🛠️\n\n¿Quieres contarme más?',
    'Estoy aquí para darte soporte, {userName}. 🤗\n\n¿Puedes aclarar un poco más?',
    'Para darte una mejor respuesta, {userName}, necesito más información. 📈',
    'Me gustaría saber más sobre eso, {userName}. 📖\n\n¿Podrías explicar mejor?',
    'No dudes en darme más detalles, {userName}. 🗒️\n\nEstoy atento a ti.',
    'Siempre listo para escuchar, {userName}. 👂\n\n¿Quieres contarme más?',
    'Cada dato que me das me ayuda, {userName}. 📊\n\n¿Puedes contarme más?',
    'Tu comentario es interesante, {userName}. 💡\n\n¿Puedes darme más contexto?',
    'Para ayudarte mejor, {userName}, necesito que me digas un poco más. 🗣️',
    'Me interesa mucho lo que me dices, {userName}. 💬\n\n¿Quieres darme más detalles?',
    'Gracias por confiar en mí, {userName}. 🙏\n\n¿Puedes contarme más?',
    'Quiero darte la mejor ayuda posible, {userName}. 🤖\n\n¿Puedes darme más información?',
    'Estoy atento a lo que me dices, {userName}. 👀\n\n¿Puedes ser más claro?',
    'Tu opinión me importa, {userName}. 💬\n\n¿Quieres explicarlo un poco más?',
    'Estoy aquí para ayudarte siempre, {userName}. 🤗\n\n¿Puedes contarme más?',
    'Quiero entenderte mejor para ayudarte, {userName}. 🤝\n\n¿Puedes ser más específico?',
];

const PROFANITY_RESPONSES = [
    'Aprecio tu mensaje, {userName}, pero prefiero mantener nuestra conversación en un tono profesional y respetuoso. 😊\n\n¿Podríamos continuar de manera cordial?',
    'Entiendo que puedes estar frustrado, {userName}, pero mantengamos un diálogo respetuoso. 🤝\n\n¿Cómo puedo ayudarte de manera constructiva?',
    'Prefiero que mantengamos una conversación positiva, {userName}. ✨\n\n¿Podemos enfocar la charla de manera más amigable?',
    'Hey {userName}, entiendo que a veces las cosas pueden ser difíciles, pero aquí estamos para hablar con respeto. 💬\n\n¿En qué puedo apoyarte hoy?',
    'Me gustaría que nuestra charla sea respetuosa, {userName}. 🤗\n\nAsí podremos comunicarnos mejor y encontrar soluciones juntos.',
    'Para que podamos seguir conversando bien, {userName}, te pido mantener un tono cordial. 🙏\n\nEstoy aquí para ayudarte.',
    'Recuerda, {userName}, un lenguaje respetuoso siempre facilita la comunicación. 😊\n\n¿Quieres que te ayude con algo en particular?',
    'Seamos amables, {userName}. 😌\n\n¿En qué puedo asistirte para que todo vaya mejor?',
    'Valoro tu sinceridad, {userName}, pero mejor mantengamos el respeto en nuestra charla. 🤝\n\n¿Quieres que te ayude con algo específico?',
    'Estoy aquí para apoyarte, {userName}, pero siempre con respeto. 🌟\n\n¿En qué tema quieres que trabajemos juntos?',
    'Para tener una buena conversación, {userName}, te invito a usar un lenguaje adecuado. 🙌\n\n¿Cómo puedo ser de ayuda?',
    'Gracias por entender, {userName}. 😊\n\nVamos a mantener un ambiente positivo para que te pueda ayudar mejor.',
    'Hablemos con respeto, {userName}. Así es más fácil encontrar soluciones. 💡\n\n¿Qué necesitas?',
    'Sé que a veces puede ser frustrante, {userName}, pero aquí estamos para ayudarte con buena onda. ✌️\n\n¿En qué puedo colaborar?',
    'Mantengamos la conversación en buenos términos, {userName}. 🤗\n\nEstoy listo para ayudarte con lo que necesites.',
    'Para que podamos avanzar bien, {userName}, es importante respetarnos mutuamente. 😊\n\n¿Qué quieres que hagamos hoy?',
    'Un ambiente respetuoso siempre ayuda, {userName}. 💬\n\n¿En qué te puedo apoyar ahora?',
    'Vamos a mantener esta conversación con respeto, {userName}. 🤝\n\nAsí podemos encontrar las mejores soluciones juntos.',
    'No es necesario usar lenguaje fuerte, {userName}. Aquí estamos para apoyarte con buena vibra. 🌟\n\n¿En qué puedo ayudarte?',
    'La comunicación amable siempre abre puertas, {userName}. 😊\n\n¿Quieres contarme qué te preocupa?',
    'Entiendo que a veces las emociones se desbordan, {userName}, pero mantengamos el respeto para poder ayudarte mejor. 🤗',
    'Me gustaría que esta conversación sea positiva y productiva, {userName}. 💡\n\n¿Cómo puedo asistirte?',
    'Por favor, {userName}, mantengamos la cordialidad para poder avanzar juntos. 🙏\n\n¿Qué te gustaría que hagamos?',
    'Recuerda que siempre estoy aquí para ayudarte, {userName}, con respeto y buena onda. 😊',
    'Vamos a enfocarnos en soluciones, {userName}, y mantener la conversación positiva. 💪\n\n¿En qué puedo colaborar?',
    'La mejor forma de resolver problemas es con respeto y paciencia, {userName}. 🤝\n\nEstoy listo para ayudarte.',
    'Estoy aquí para escucharte y apoyarte, {userName}, siempre desde el respeto. 🌟',
    'Gracias por mantener un tono adecuado, {userName}. Eso facilita que te ayude mejor. 😊',
    'Un diálogo respetuoso nos ayuda a entendernos mejor, {userName}. ¿Qué necesitas?',
    'Sé que a veces puede ser difícil, {userName}, pero aquí estoy para ayudarte sin importar nada. 🤗',
    'Gracias por ser considerado, {userName}. Vamos a trabajar juntos para resolver lo que necesites. 💪',
    'Mantener la calma y el respeto siempre ayuda, {userName}. ¿En qué puedo apoyarte hoy?',
    'La paciencia y el respeto son claves para una buena conversación, {userName}. Estoy aquí para ayudarte.',
    'Hablemos con buena vibra, {userName}. Así todo es más fácil. 😊\n\n¿En qué puedo ayudarte?',
    'Recuerda que aquí tienes un aliado, {userName}, siempre dispuesto a ayudarte con respeto y buena energía. ✨',
    'Agradezco que mantengas un tono respetuoso, {userName}. Eso nos facilita la comunicación. 🙌',
    'Estoy listo para ayudarte, {userName}, con todo el respeto que mereces. 🌟',
    'La comunicación amable hace todo más sencillo, {userName}. ¿Qué quieres que hagamos?',
    'Sigamos adelante con respeto y buena onda, {userName}. Estoy para ayudarte. 🤗',
    'Gracias por tu comprensión, {userName}. Mantengamos un ambiente agradable para conversar. 😊',
    'Estoy aquí para ayudarte, {userName}, siempre con un tono profesional y amable. ¿Qué necesitas?',
    'Para poder ayudarte mejor, {userName}, te pido que mantengamos el respeto en nuestra charla. 🙏',
    'Un ambiente respetuoso es la mejor base para cualquier conversación, {userName}. ¿En qué puedo ayudarte?',
    'Mantener el respeto facilita que te brinde la mejor ayuda posible, {userName}. ¿Qué necesitas?',
    'Gracias por mantener la cordialidad, {userName}. Eso hace que podamos avanzar rápido y bien. 💪',
    'Sé que a veces las emociones se sienten fuerte, {userName}, pero aquí estoy para ayudarte con calma y respeto.',
    'Vamos a resolver todo con buena vibra y respeto, {userName}. Estoy contigo para lo que necesites.',
];

const CONFUSION_RESPONSES = [
    'No estoy seguro de entenderte bien, {userName}. 🤔\n\n¿Puedes explicarlo con otras palabras?',
    'Me perdí un poco ahí, {userName}. 😅\n\n¿Quieres intentarlo de nuevo con más detalles?',
    'No logro captar bien lo que dices, {userName}. 🧐\n\n¿Podrías darme más información?',
    'Estoy un poco confundido, {userName}. 🤷‍♂️\n\n¿Podrías aclarar tu pregunta?',
    'No entiendo del todo, {userName}. 🤔\n\n¿Puedes explicarme un poco mejor?',
    'Creo que no te entendí bien, {userName}. 😕\n\n¿Puedes reformular tu duda?',
    'Me quedé en duda con eso, {userName}. 🧩\n\n¿Podrías dar más contexto?',
    'No me queda claro, {userName}. 🤨\n\n¿Podrías explicarlo de otra forma?',
    'Lo siento, no logro entender bien, {userName}. 😓\n\n¿Puedes dar más detalles por favor?',
    'No capté bien lo que dices, {userName}. 😅\n\n¿Puedes dar un ejemplo o explicar mejor?',
    'Estoy un poco perdido con eso, {userName}. 😕\n\n¿Puedes ser un poco más claro?',
    'No logro entender a qué te refieres, {userName}. 🤷‍♂️\n\n¿Puedes ayudarme con más información?',
    '¿Podrías explicarlo de nuevo, {userName}? No termino de comprender. 🤔',
    'No estoy seguro si entendí bien, {userName}. ¿Puedes aclararlo un poco más? 😊',
    'Me gustaría ayudarte, {userName}, pero necesito que me expliques mejor. 🤓',
    'Disculpa, {userName}, pero no entiendo del todo. ¿Puedes detallarlo un poco más?',
    '¡Uy! Me perdí en esa parte, {userName}. ¿Me puedes explicar con más calma?',
    'No logro seguirte bien, {userName}. ¿Puedes darme más datos o un ejemplo?',
    '¿Podrías ser un poco más claro, {userName}? Así podré ayudarte mejor.',
    'Siento que me falta información para entender, {userName}. ¿Puedes ampliar?',
    'No estoy seguro de haber captado lo que quieres decir, {userName}. ¿Puedes intentar de nuevo?',
    'Me confunde un poco eso, {userName}. ¿Quieres que te ayude a aclararlo?',
    'Estoy aquí para ayudarte, {userName}, solo necesito un poco más de información.',
    '¿Podrías darme más contexto, {userName}? Así te puedo ayudar mejor.',
    'No termino de entender tu punto, {userName}. ¿Puedes explicarlo con más detalle?',
    'Me cuesta entender esa parte, {userName}. ¿Puedes dar un ejemplo o más detalles?',
    'Lo que dices no me queda claro, {userName}. ¿Podrías ser más específico?',
    'Creo que necesito que me expliques eso otra vez, {userName}.',
    'Me gustaría comprender mejor, {userName}. ¿Puedes ayudarme con más info?',
    'No capté del todo, {userName}. ¿Puedes intentar explicarlo de otra forma?',
    'No me queda muy claro, {userName}. ¿Quieres que te haga algunas preguntas para entender mejor?',
    'No entendí bien eso, {userName}. ¿Puedes explicarlo paso a paso?',
    'Estoy un poco confundido con eso, {userName}. ¿Puedes dar un poco más de contexto?',
    '¿Quieres que lo intentemos juntos, {userName}? Pero necesito que me expliques un poco más.',
    'No me queda muy claro, {userName}. ¿Podrías explicarlo con otras palabras?',
    'Quiero ayudarte, {userName}, pero no logro entender tu mensaje del todo.',
    'Lo siento, {userName}, no entiendo bien lo que dices. ¿Puedes ser más claro?',
    'Disculpa, {userName}, ¿puedes explicar eso un poco mejor?',
    'Estoy un poco perdido, {userName}. ¿Puedes explicarlo con más calma?',
    'No logro seguir el hilo, {userName}. ¿Quieres dar más detalles?',
    'No entiendo del todo, {userName}. ¿Puedes darme un ejemplo concreto?',
    'Me ayudaría si me das un poco más de información, {userName}.',
    'No me quedó claro, {userName}. ¿Puedes detallar un poco más?',
    '¿Podrías explicarlo de otra forma, {userName}? Así será más fácil para mí.',
    '¿Quieres que te haga algunas preguntas para entender mejor, {userName}?',
    '¿Puedes ser un poco más específico, {userName}? Así te ayudaré mejor.',
    'No entendí muy bien, {userName}. ¿Podrías intentarlo otra vez?',
    'Quiero ayudarte, pero no logro comprender, {userName}. ¿Puedes aclarar?',
    'Estoy aquí para ayudarte, {userName}, pero necesito un poco más de detalles.',
    'No logro seguirte, {userName}. ¿Puedes dar más contexto por favor?',
    '¿Podrías repetirlo de otra forma, {userName}? No entendí bien.',
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