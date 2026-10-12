// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · GRUPO 2 — Estrategia, Decisiones, Calidad de Informática y Ética
// Archivo AUTOCONTENIDO: define la materia (si no existe) y registra el examen.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'grupo2',
    icon: '🏢',
    label: 'Administración de Sistemas de Información',
    badge: 'ASI · INGENIERÍA DE SISTEMAS',
    subtitle: 'Examen Interactivo — Administración de Sistemas de la Información (UNIOR)',
    temas: ['TODOS', 'GRUPO 1', 'GRUPO 2', 'GRUPO 3'],
    temaLabels: {
      'GRUPO 1': 'GRUPO 1: CRM, SCM y KM',
      'GRUPO 2': 'GRUPO 2: Estrategia, Decisiones, Calidad y Ética',
      'GRUPO 3': 'GRUPO 3: Infraestructura, Software, Datos, Redes y Seguridad',
    },
    secciones: [
      'TODAS',
      'CRM',
      'SCM',
      'Gestión del Conocimiento',
      'Comparación',
      'Estrategia y SI',
      'Decisiones y SI',
      'Calidad de la informática',
      'Ética en los SI',
      'Infraestructura',
      'Software',
      'Datos e información',
      'Redes',
      'Seguridad',
      'Integración',
    ],
    exam_label: 'Grupo 2 · Estrategia, Decisiones, Calidad y Ética',
  };

  const q = (n, seccion, text, opts, answer) => ({
    id: `asi-g2-${n}`,
    tema: 'GRUPO 2',
    seccion,
    text,
    opts,
    answer,
  });

  const ASI_GRUPO2_QUESTIONS = [
    // ── Estrategia y SI ──
    q(1, 'Estrategia y SI', '¿Qué significa que los sistemas de información sean «estratégicos»?', [
      'Que solo los usa la alta dirección',
      'Que son los más caros de la empresa',
      'Que ya no solo automatizan tareas: pueden cambiar el modelo de negocio, los productos y la relación con clientes y proveedores',
      'Que reemplazan a todo el personal',
    ], 2),
    q(2, 'Estrategia y SI', '¿En qué consiste la alineación estratégica entre TI y negocio?', [
      'En que los objetivos y proyectos de tecnología respondan a los objetivos del negocio, y no al revés',
      'En comprar la tecnología más moderna del mercado',
      'En que el área de TI trabaje separada del resto',
      'En que el negocio se adapte a lo que ofrece el proveedor de software',
    ], 0),
    q(3, 'Estrategia y SI', 'Según Henderson y Venkatraman (1993), la alineación es el ajuste entre cuatro dominios. ¿Cuáles son?', [
      'Clientes, proveedores, empleados y accionistas',
      'Estrategia del negocio, estrategia de TI, infraestructura y procesos de la organización, e infraestructura y procesos de TI',
      'Hardware, software, datos y redes',
      'Planificar, hacer, verificar y actuar',
    ], 1),
    q(4, 'Estrategia y SI', '¿Cuál es el primer paso de la planificación estratégica de sistemas de información (PESI)?', [
      'Elaborar el plan de implementación con presupuesto',
      'Priorizar proyectos según costo y riesgo',
      'Evaluar resultados y ajustar',
      'Analizar la misión, visión y objetivos de la empresa',
    ], 3),
    q(5, 'Estrategia y SI', 'Según el modelo de las cinco fuerzas de Porter, ¿cuál NO es una de las fuerzas?', [
      'Poder de los clientes',
      'Productos sustitutos',
      'Poder del gobierno',
      'Nuevos entrantes',
    ], 2),
    q(6, 'Estrategia y SI', 'Según McFarlan, ¿qué rol de TI tiene impacto ALTO actual y ALTO futuro?', [
      'Soporte',
      'Estratégico',
      'Factoría',
      'Vuelco (transición)',
    ], 1),
    q(7, 'Estrategia y SI', 'Un proyecto piloto de una nueva tecnología, con bajo impacto actual pero alto impacto futuro, corresponde al rol de:', [
      'Vuelco (transición)',
      'Soporte',
      'Factoría',
      'Estratégico',
    ], 0),
    q(8, 'Estrategia y SI', '¿Para qué se usa el marco ITIL 4?', [
      'Para el gobierno corporativo de TI',
      'Para medir la madurez del desarrollo de software',
      'Para la gestión de servicios de TI',
      'Para la seguridad de la información',
    ], 2),
    q(9, 'Estrategia y SI', '¿Cuál es un error frecuente en la transformación digital?', [
      'Usar la nube',
      'Digitalizar un proceso malo sin rediseñarlo',
      'Cambiar la cultura de la organización',
      'Usar analítica de datos',
    ], 1),

    // ── Decisiones y SI ──
    q(10, 'Decisiones y SI', 'Las decisiones a largo plazo, poco estructuradas y tomadas por la alta dirección corresponden al nivel:', [
      'Operativo',
      'Táctico',
      'Estratégico',
      'Técnico',
    ], 2),
    q(11, 'Decisiones y SI', '¿Cuál es un ejemplo de decisión estructurada?', [
      'Calcular un sueldo',
      'Entrar a un mercado desconocido',
      'Fijar el precio de un producto nuevo',
      'Decidir abrir una sucursal',
    ], 0),
    q(12, 'Decisiones y SI', 'Entrar a un mercado desconocido es una decisión:', [
      'Estructurada',
      'Programada',
      'Semiestructurada',
      'No estructurada',
    ], 3),
    q(13, 'Decisiones y SI', '¿Cuál es el orden de las etapas del proceso de decisión de Simon?', [
      'Diseño → Inteligencia → Elección → Implementación',
      'Inteligencia → Diseño → Elección → Implementación',
      'Inteligencia → Elección → Diseño → Implementación',
      'Elección → Diseño → Inteligencia → Implementación',
    ], 1),
    q(14, 'Decisiones y SI', 'En la etapa de «Diseño» del proceso de decisión se:', [
      'Detecta y entiende el problema',
      'Selecciona la mejor alternativa',
      'Generan alternativas de solución',
      'Hace seguimiento de la decisión',
    ], 2),
    q(15, 'Decisiones y SI', '¿Qué sistemas registran las operaciones diarias (ventas, compras, pagos) y apoyan el nivel operativo?', [
      'TPS (procesamiento de transacciones)',
      'DSS (apoyo a la decisión)',
      'EIS (información ejecutiva)',
      'BI (inteligencia de negocios)',
    ], 0),
    q(16, 'Decisiones y SI', '¿Qué sistemas permiten simular escenarios «¿qué pasaría si…?» para decisiones semiestructuradas?', [
      'MIS',
      'TPS',
      'ERP',
      'DSS',
    ], 3),
    q(17, 'Decisiones y SI', '¿Qué sistemas ofrecen tableros de control con indicadores clave para la alta dirección?', [
      'TPS',
      'EIS / ESS',
      'MIS',
      'CRM',
    ], 1),
    q(18, 'Decisiones y SI', '¿Qué ocurrió con la herramienta de selección de personal con IA de Amazon (2018)?', [
      'Fue premiada por su precisión',
      'Se vendió a otras empresas',
      'Se abandonó porque penalizaba a las mujeres al haber aprendido de contrataciones pasadas mayoritariamente masculinas',
      'Fue prohibida por una ley',
    ], 2),
    q(19, 'Decisiones y SI', 'La frase «basura entra, basura sale» se refiere a que:', [
      'Datos incorrectos o desactualizados llevan a decisiones erradas',
      'Hay que borrar los datos viejos cada mes',
      'Los sistemas viejos deben reemplazarse',
      'El exceso de información es siempre útil',
    ], 0),

    // ── Calidad de la informática ──
    q(20, 'Calidad de la informática', 'Un mismo cliente registrado dos veces vulnera la dimensión de calidad de datos llamada:', [
      'Exactitud',
      'Unicidad',
      'Oportunidad',
      'Validez',
    ], 1),
    q(21, 'Calidad de la informática', 'Un dato que cumple el formato y las reglas definidas (por ejemplo, una fecha con formato correcto) cumple la dimensión de:', [
      'Completitud',
      'Consistencia',
      'Unicidad',
      'Validez',
    ], 3),
    q(22, 'Calidad de la informática', 'Según Wang y Strong (1996), un dato es de calidad cuando:', [
      'No tiene ningún error de ortografía',
      'Está almacenado en la nube',
      'Sirve para la tarea de su usuario',
      'Fue ingresado por el gerente',
    ], 2),
    q(23, 'Calidad de la informática', '¿Qué característica agregó la versión 2023 de la norma ISO/IEC 25010 (la versión de 2011 tenía ocho)?', [
      'Protección (safety)',
      'Seguridad',
      'Mantenibilidad',
      'Compatibilidad',
    ], 0),
    q(24, 'Calidad de la informática', 'En la ISO/IEC 25010:2023, la antes llamada «usabilidad» pasó a llamarse:', [
      'Flexibilidad',
      'Fiabilidad',
      'Adecuación funcional',
      'Capacidad de interacción',
    ], 3),
    q(25, 'Calidad de la informática', '¿Qué caso real muestra el costo de fallar en fiabilidad según el trabajo?', [
      'El caso Cambridge Analytica',
      'La caída global por una actualización defectuosa de CrowdStrike (19 de julio de 2024)',
      'El abandono de la herramienta de Amazon',
      'La migración a SIAT en Bolivia',
    ], 1),
    q(26, 'Calidad de la informática', '¿Qué es un SLA?', [
      'Un tipo de base de datos',
      'Un lenguaje de programación',
      'Un acuerdo de nivel de servicio',
      'Un protocolo de red',
    ], 2),
    q(27, 'Calidad de la informática', 'La norma ISO/IEC 27001 es un sistema de gestión de:', [
      'La seguridad de la información (confidencialidad, integridad y disponibilidad)',
      'La calidad en general',
      'La madurez de procesos de software',
      'Los servicios de TI',
    ], 0),
    q(28, 'Calidad de la informática', 'En el modelo de éxito de DeLone y McLean, ¿cuál NO es uno de los seis elementos?', [
      'Calidad del sistema',
      'Satisfacción del usuario',
      'Beneficios netos',
      'Costo de la licencia del software',
    ], 3),
    q(29, 'Calidad de la informática', 'Las siglas del ciclo de mejora continua PDCA significan:', [
      'Programar, Depurar, Comprobar, Archivar',
      'Planificar, Hacer, Verificar, Actuar',
      'Priorizar, Decidir, Controlar, Aplicar',
      'Probar, Documentar, Corregir, Actualizar',
    ], 1),

    // ── Ética en los SI ──
    q(30, 'Ética en los SI', '¿Cuál de estas es una de las cinco dimensiones morales de Laudon y Laudon?', [
      'Velocidad de procesamiento',
      'Costo de la licencia',
      'Rendición de cuentas y control',
      'Tamaño de la empresa',
    ], 2),
    q(31, 'Ética en los SI', 'El acrónimo PAPA de Mason (1986) se refiere a:', [
      'Planificación, Análisis, Programación y Auditoría',
      'Procesos, Aplicaciones, Plataformas y Accesos',
      'Privacidad, Auditoría, Productividad y Acceso',
      'Privacidad, Exactitud, Propiedad y Accesibilidad',
    ], 3),
    q(32, 'Ética en los SI', '¿Qué ocurrió en el caso Facebook – Cambridge Analytica según el trabajo?', [
      'Se recopilaron datos de hasta 87 millones de usuarios sin su consentimiento informado y la FTC multó a Facebook con 5.000 millones de dólares en 2019',
      'Se filtraron contraseñas de Facebook por un virus',
      'Facebook vendió su plataforma a Cambridge Analytica',
      'La multa fue de 5 millones de dólares y se aplicó en 2010',
    ], 0),
    q(33, 'Ética en los SI', 'Según el trabajo, ¿cuál es la situación de Bolivia (a 2025) sobre protección de datos personales?', [
      'Tiene una ley integral idéntica al GDPR',
      'No hay ninguna norma que mencione la privacidad',
      'La protección depende solo de las empresas',
      'No existe una ley integral, pero rigen normas dispersas',
    ], 3),
    q(34, 'Ética en los SI', '¿Qué exige el Decreto Supremo N.º 1793 (art. 56) para tratar datos personales?', [
      'Autorización del Ministerio de Justicia',
      'Consentimiento previo y expreso',
      'Registro en el SIAT',
      'Cifrado obligatorio de todos los datos',
    ], 1),
    q(35, 'Ética en los SI', '¿Qué permite la Acción de Protección de Privacidad de la Constitución boliviana (arts. 130 y 131)?', [
      'Cobrar multas a las empresas',
      'Bloquear sitios web',
      'Conocer, rectificar o eliminar datos personales',
      'Obtener una licencia de software',
    ], 2),
    q(36, 'Ética en los SI', '¿Qué afirma el trabajo sobre la relación entre lo legal y lo ético?', [
      'Una conducta puede ser legal y aun así poco ética',
      'Todo lo legal es ético',
      'Todo lo ético es obligatorio por ley',
      'No hay relación alguna',
    ], 0),
    q(37, 'Ética en los SI', 'Según la relación entre los cuatro componentes, ¿qué ocurre con una buena calidad sin ética?', [
      'Produce decisiones erradas',
      'Puede dañar a las personas',
      'Queda en buenas intenciones',
      'Garantiza la confianza del cliente',
    ], 1),
    q(38, 'Ética en los SI', '¿Cuál NO es un principio común de los códigos de ética profesional (ACM / IEEE) mencionados?', [
      'No causar daño',
      'Respetar la privacidad',
      'Ser honesto',
      'Priorizar siempre la ganancia de la empresa',
    ], 3),
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
    questions: ASI_GRUPO2_QUESTIONS,
  };
})();
