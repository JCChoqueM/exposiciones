// ═════════════════════════════════════════════════════════════════════════════
// 🎓 EXAMEN CON CONFIG COMENTADO (SIMPLE)
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'ia', // Nombre de la carpeta: /materias/ia/ | Usa en SUBJECTS[X].exams | IDs: ${charAt(0)}
    exam_key: 'parcial1', // Nombre del examen: SUBJECTS.ia.exams[X] | IDs: ${charAt(-1)} | Archivo: parcial1.js
    icon: '🤖', // Emoji en selector de materia (visual)
    label: 'Inteligencia Artificial', // Nombre completo en encabezado, selector, tab del browser
    badge: 'IA · INGENIERÍA', // Clasificación debajo del label (ÁREA · CATEGORÍA)
    subtitle: 'Examen Interactivo — IA para Ingenieros: Primeros Pasos (UNIOR)', // Descripción larga bajo el título
    temas: ['TODOS', 'TEMA I'], // Array de temas (filtro en dropdown) | SIEMPRE empieza con "TODOS"
    temaLabels: {
      // Nombres legibles de temas (tooltip al hover)
      'TEMA I': 'TEMA I: IA para Ingenieros', // Mapeo tema → descripción
    },
    secciones: [
      // Array de subsecciones (filtro en dropdown) | SIEMPRE empieza con "TODAS"
      'TODAS', // Opción "mostrar todas"
      '¿Qué es la IA?', // Sección 1
      'Aprendizaje Supervisado', // Sección 2
      'Aprendizaje No Supervisado', // Sección 3
      'Aprendizaje por Refuerzo', // Sección 4
      'Redes Neuronales', // Sección 5
      'Herramientas y Lenguajes', // Sección 6
      'Proyecto y Preprocesamiento', // Sección 7
      'Ética y Responsabilidad', // Sección 8
    ],
    exam_label: 'Parcial 1', // Nombre del examen en selector de exámenes
  };

  // ─────────────────────────────────────────────────────────────────────────
  // PREGUNTAS (usa CONFIG para referencias, no hardcode)
  // ─────────────────────────────────────────────────────────────────────────
  const IA_PARCIAL1_QUESTIONS = [
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-1`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Cuál es IA Estrecha?',
      opts: [
        'Un sistema que realiza múltiples tareas distintas simultáneamente',
        'Un algoritmo que SOLO reconoce rostros en tu teléfono y nada más (no puede traducir idiomas, ni jugar ajedrez)',
        'Un sistema capaz de resolver cualquier problema cognitivo humano',
        'Una máquina que puede aprender nuevas tareas sin reentrenamiento',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-2`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Cuál es la diferencia entre IA General e IA Estrecha?',
      opts: [
        'IA General es más rápida en procesamiento',
        'IA General podría resolver CUALQUIER tarea cognitiva humana (como un humano), mientras que IA Estrecha solo resuelve una tarea específica (ej: Google Translate solo traduce, Siri solo escucha comandos)',
        'IA General requiere menos datos de entrenamiento',
        'IA General funciona sin necesidad de datos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-3`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿En qué año se formalizó el campo de la IA en la conferencia de Dartmouth?',
      opts: ['1943', '1956', '1974', '1997'],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-4`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Qué caracterizó las "Épocas Doradas" de la IA?',
      opts: [
        'La creación de máquinas superinteligentes',
        'Desarrollo de programas de ajedrez y gran optimismo (ej: pensaron que en 20 años tendríamos asistentes virtuales perfectos)',
        'La prohibición de investigar IA',
        'Colapso de la inversión en tecnología',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-5`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Qué fueron los "Inviernos de la IA"?',
      opts: [
        'Períodos con temperaturas bajas extremas',
        'Períodos de crisis financiera y promesas no cumplidas (ej: los asistentes virtuales "perfectos" no llegaron)',
        'Épocas donde la IA se volvió demasiado peligrosa',
        'Años donde los científicos dejaron completamente el campo',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-6`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Cuál fue el principal factor en el resurgimiento de la IA después de 2010?',
      opts: [
        'Invención de nuevos lenguajes de programación',
        'Disponibilidad masiva de datos y poder computacional en la nube (ej: Netflix viendo tus películas, YouTube viendo tus búsquedas)',
        'Regulaciones gubernamentales',
        'Mejoras en infraestructura de cables',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-7`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Cuál es la definición de Inteligencia Artificial?',
      opts: [
        'Un robot que habla como humano',
        'La rama de la informática que diseña sistemas capaces de realizar tareas que requieren inteligencia humana',
        'Un programa que gana competencias',
        'Cualquier máquina automática',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-8`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Qué significa que un modelo de IA "aprenda"?',
      opts: [
        'Que descargue información de internet',
        'Que recuerde conversaciones anteriores',
        'Que ajuste sus parámetros internos basándose en datos para mejorar (ej: TikTok ve que ves 10 segundos de baile y 2 de noticias, ajusta para mostrarte más baile)',
        'Que desarrolle conciencia',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-9`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[2],
      text: '¿Cuál es un ejemplo de Aprendizaje Supervisado?',
      opts: [
        'YouTube agrupa videos en géneros que descubre automáticamente',
        'Tu teléfono aprende a reconocer tu cara usando miles de fotos tuyas etiquetadas como "tu cara" o "no tu cara"',
        'Netflix descubre qué tipo de películas te gustan sin que las etiquetes',
        'Spotify te muestra canciones similares a las que escuchas',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-10`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[2],
      text: '¿Qué caracteriza al Aprendizaje Supervisado?',
      opts: [
        'El modelo aprende completamente solo sin ayuda',
        'Los datos incluyen entrada + la respuesta correcta (ej: foto de tu perro + "es tu perro", foto ajena + "no es tu perro")',
        'Solo funciona con redes profundas',
        'El modelo puede aprender mientras está en uso',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-11`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[2],
      text: '¿Cuál es una tarea de Aprendizaje Supervisado?',
      opts: [
        'Instagram agrupa tus fotos en álbumes automáticamente sin decirle cuáles son vacaciones',
        'Google Photos aprende a identificar si hay gatos en tus fotos usando millones de fotos etiquetadas como "gato" o "no gato"',
        'TikTok te muestra videos similares a los que viste',
        'Spotify descubre patrones en lo que escuchas',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-12`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[3],
      text: '¿Cuál es un ejemplo de Aprendizaje No Supervisado?',
      opts: [
        'Tu corrector de WhatsApp usa palabras etiquetadas como "correctas" e "incorrectas"',
        'Instagram agrupa automáticamente a usuarios: algunos solo ven moda, otros solo viajes, otros solo comida, sin que Instagram te diga qué categoría eres',
        'Google Translate usa millones de frases etiquetadas en pares de idiomas',
        'Netflix usa películas etiquetadas por género',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-13`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[3],
      text: '¿Cuál es el objetivo del Aprendizaje No Supervisado?',
      opts: [
        'Etiquetar datos manualmente',
        'Descubrir patrones ocultos sin que nadie te diga qué buscar (ej: Gmail ve que recibes correos de tu mamá, trabajo, compras, agrupa automáticamente)',
        'Entrenar rápidamente',
        'Eliminar datos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-14`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[3],
      text: '¿Cuál es una característica del Aprendizaje No Supervisado?',
      opts: [
        'Requiere etiquetas claras como "correcto/incorrecto"',
        'El modelo descubre grupos por sí solo sin categorías previas (ej: YouTube agrupa a usuarios en "ven tutoriales", "ven música", "ven comedia" automáticamente)',
        'Solo predice números',
        'Necesita validación humana constante',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-15`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[4],
      text: '¿Cuál es un ejemplo de Aprendizaje por Refuerzo?',
      opts: [
        'Clasificar tus correos como spam usando correos etiquetados previamente',
        'Google Photos agrupa tus fotos en álbumes automáticamente',
        'Un videojuego donde un personaje aprende: cada vez que choca con una pared pierde vida, cada vez que recoge monedas gana puntos, mejora su camino',
        'Spotify te recomienda canciones similares',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-16`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[4],
      text: '¿Cuál es el principio del Aprendizaje por Refuerzo?',
      opts: [
        'Recibir etiquetas correctas para cada ejemplo',
        'El agente intenta acciones, recibe retroalimentación (recompensa o penalización) y mejora (ej: un perro hace un truco → recibe galleta → repite el truco)',
        'Descubrir patrones sin intervención',
        'Memorizar todas las experiencias',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-17`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[4],
      text: '¿Qué distingue al Aprendizaje por Refuerzo?',
      opts: [
        'Requiere datos completamente etiquetados',
        'El agente aprende haciendo: intenta acción → obtiene puntos/penalización → ajusta estrategia (ej: un robot aspirador choca con pared = no funciona bien, limpia todo bien = funciona bien, aprende mejor ruta)',
        'No funciona en robots reales',
        'Solo para videojuegos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-18`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Qué es la "propagación hacia atrás" (backpropagation)?',
      opts: [
        'Cuando una red neuronal olvida lo aprendido',
        'Un algoritmo que calcula: "este parámetro causó error grande, cambialo" (como cuando escribes un mensaje en WhatsApp mal escrito, ves el error, lo corriges)',
        'Conectar capas automáticamente',
        'Eliminar datos defectuosos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-19`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Cuál es el propósito del "Forward Pass"?',
      opts: [
        'Eliminar capas innecesarias',
        'Pasar datos hacia adelante a través de la red para obtener una predicción (ej: tu foto entra al Face ID → pasa por capas → sale "es tu cara" o "no es tu cara")',
        'Corregir errores del paso anterior',
        'Aumentar velocidad de procesamiento',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-20`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Por qué importan las funciones de activación no lineales?',
      opts: [
        'Para hacer código más legible',
        'Para reducir parámetros del modelo',
        'Permiten que la red aprenda relaciones complejas que operaciones simples no pueden (ej: sin ellas, un filtro de fotos solo oscurece uniformemente; con ellas, detecta si estás sonriendo)',
        'Para conectar capas automáticamente',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-21`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Cuál es la diferencia entre red neuronal simple y Deep Learning?',
      opts: [
        'Deep Learning es más lento',
        'Deep Learning usa muchas capas que reconocen detalles cada vez más complejos (ej: capa 1 ve píxeles, capa 5 ve ojos y boca, capa 10 ve rostro y emoción)',
        'Deep Learning solo funciona con imágenes',
        'Son exactamente iguales',
      ],
      answer: 1,
    },
  ];

  // Registro idempotente de materia
  if (!SUBJECTS[CONFIG.subject_key]) {
    SUBJECTS[CONFIG.subject_key] = {
      key: CONFIG.subject_key,
      icon: CONFIG.icon,
      label: CONFIG.label,
      badge: CONFIG.badge,
      subtitle: CONFIG.subtitle,
      temas: CONFIG.temas,
      temaLabels: CONFIG.temaLabels,
      secciones: CONFIG.secciones,
      exams: {},
    };
  }

  // Registro del examen
  SUBJECTS[CONFIG.subject_key].exams[CONFIG.exam_key] = {
    key: CONFIG.exam_key,
    label: CONFIG.exam_label,
    questions: IA_PARCIAL1_QUESTIONS,
  };
})();