// ═════════════════════════════════════════════════════════════════════════════
// 🎓 EXAMEN CON CONFIG COMENTADO (SIMPLE)
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'ia', // Nombre de la carpeta: /materias/ia/ | Usa en SUBJECTS[X].exams | IDs: ${charAt(0)}
    exam_key: 'parcial2', // Nombre del examen: SUBJECTS.ia.exams[X] | IDs: ${charAt(-1)} | Archivo: parcial2.js
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
    exam_label: 'Parcial 2', // Nombre del examen en selector de exámenes
  };

  // ─────────────────────────────────────────────────────────────────────────
  // PREGUNTAS (usa CONFIG para referencias, no hardcode)
  // ─────────────────────────────────────────────────────────────────────────
  const IA_PARCIAL2_QUESTIONS = [
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-1`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Por qué Python domina en IA?',
      opts: [
        'Es el lenguaje más antiguo',
        'Tiene sintaxis simple y herramientas listas para IA (ej: en Python escribes 10 líneas para que tu teléfono reconozca rostros, en C++ escribes 500)',
        'Es obligatorio usar Python',
        'Consume menos energía eléctrica',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-2`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Cuál es el propósito de Jupyter Notebook?',
      opts: [
        'Reemplazar Python como lenguaje',
        'Escribir código en pequeñas celdas y ver resultados al instante (ej: ajustas cómo el filtro de Instagram reconoce rostros, lo ejecutas, ves si funciona mejor, cambias de nuevo)',
        'Compilar código automáticamente a máquina',
        'Crear videos tutoriales',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-3`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Qué hace NumPy eficiente?',
      opts: [
        'Procesa solo texto y lenguaje',
        'Realiza cálculos matemáticos muy rápido con vectores (ej: calcular recomendaciones para 1 millón de usuarios en 1 segundo)',
        'Funciona solo con números enteros',
        'Gestiona imágenes JPG específicamente',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-4`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Cuál es la diferencia entre NumPy y pandas?',
      opts: [
        'NumPy es siempre más rápido',
        'NumPy hace cálculos matemáticos; pandas organiza datos como Excel (ej: pandas tiene columnas con nombres como "edad", "ciudad", "compras")',
        'Pandas es subconjunto de NumPy',
        'Son iguales',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-5`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Cuál es ventaja de Scikit-learn?',
      opts: [
        'Entrena deep learning automáticamente',
        'Puedes entrenar modelos complejos en pocas líneas sin código complicado (ej: predecir si alguien comprará en tu tienda en 3 líneas de código)',
        'Más potente que TensorFlow en todos los aspectos',
        'Solo funciona en la nube',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-6`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cuál es el primer paso en un proyecto IA?',
      opts: [
        'Seleccionar modelo de Deep Learning',
        'Definir claramente qué quieres predecir y cómo sabrás si funciona (ej: "predecir si un cliente volverá a comprar" → métrica: 90% de precisión)',
        'Recolectar datos máximo posible',
        'Publicar resultados',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-7`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cuál es el propósito de "One-Hot Encoding"?',
      opts: [
        'Reducir tamaño de archivo',
        'Convertir categorías en números que el modelo entienda (ej: ciudad "Madrid" → [1,0,0], "Barcelona" → [0,1,0], "Valencia" → [0,0,1])',
        'Optimizar internet',
        'Eliminar datos faltantes',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-8`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Por qué normalizar variables numéricas?',
      opts: [
        'Para código legible',
        'Para que todas tengan peso similar (ej: si tienes edad (0-100) e ingresos (0-1,000,000), ingresos no debería dominar solo por ser número grande; Instagram hace esto para tus búsquedas)',
        'Requisito legal',
        'Reducir tiempo de entrenamiento',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-9`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cuál es la división típica de datos entrenamiento/prueba?',
      opts: [
        '99% - 1%',
        '80% - 20% (ej: de 100 fotos de tu rostro para Face ID, entrenas con 80, pruebas con 20 que el modelo nunca vio)',
        '50% - 50%',
        '95% - 5%',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-10`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Qué mide el coeficiente R²?',
      opts: [
        'Número de parámetros',
        'Qué tan bien tu modelo explica los datos, de 0 a 1 (ej: R²=0.85 significa que explica el 85% de por qué algunos usuarios ven más TikTok que otros)',
        'La velocidad del modelo',
        'Cantidad de datos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-11`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cuál es el orden correcto en Machine Learning?',
      opts: [
        'Evaluar → Entrenar → Dividir → Cargar',
        'Cargar datos → Dividir en 80/20 → Entrenar modelo → Predecir → Evaluar resultados (ej: como usar WhatsApp: descargar → configurar → usar → revisar si funciona)',
        'Predecir → Entrenar → Dividir',
        'Entrenar → Predecir → Dividir',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-12`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Qué es el sesgo en IA?',
      opts: [
        'Un parámetro que mejora precisión',
        'Cuando el modelo aprende discriminaciones del pasado y las perpetúa (ej: un filtro de búsqueda que muestra menos a ciertas personas porque históricamente se buscaba más a otras)',
        'Un método para optimizar rápido',
        'Un nombre técnico',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-13`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cuál es un ejemplo de sesgo en IA?',
      opts: [
        'Algoritmo lento',
        'Un reconocedor facial que falla más en rostros oscuros porque fue entrenado mayormente con rostros claros (ej: el iPhone Face ID falla más con gente de piel oscura)',
        'Precisión muy alta',
        'Modelo que es rápido',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-14`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Qué es Federated Learning?',
      opts: [
        'Centralizar todos los datos en un servidor',
        'Entrenar modelos en los dispositivos del usuario sin enviar datos personales a servidores (ej: tu teléfono aprende tu forma de escribir sin mandar tus mensajes a Google)',
        'Dividir trabajo entre departamentos',
        'Hacer todos los modelos iguales',
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
    questions: IA_PARCIAL2_QUESTIONS,
  };
})();