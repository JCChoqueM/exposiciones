// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · GUÍA 2 — Estrategia, Decisiones, Calidad de información y Ética
// Basado en la Guía de estudio - Equipo 2 (ASI-170). Incluye preguntas de repaso.
// Archivo AUTOCONTENIDO: define la materia (si no existe) y registra el examen.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'guia2',
    icon: '🏢',
    label: 'Administración de Sistemas de Información',
    badge: 'ASI · INGENIERÍA DE SISTEMAS',
    subtitle: 'Examen Interactivo — Administración de Sistemas de la Información (UNIOR)',
    temas: null,
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
    exam_label: 'Guía 2 · Estrategia, Decisiones, Calidad y Ética',
  };

  const NUEVAS_SECCIONES = ['Gobierno de SI'];
  const NUEVOS_TEMAS = { 'GUÍA 2': 'GUÍA 2: Estrategia, Decisiones, Calidad, Gobierno y Ética' };

  const q = (n, seccion, text, opts, answer) => ({
    id: `asi-e2-${n}`,
    tema: 'GUÍA 2',
    seccion,
    text,
    opts,
    answer,
  });

  const ASI_GUIA2_QUESTIONS = [
    // ── Estrategia y SI ──
    q(1, 'Estrategia y SI', '¿Cuándo un sistema de información apoya la estrategia de la empresa?', [
      'Cuando es el más caro del mercado',
      'Cuando contribuye a objetivos del negocio: reducir costos, diferenciar el servicio, mejorar la relación con clientes o proveedores, acelerar procesos o decidir mejor',
      'Cuando solo lo usa el área de TI',
      'Cuando reemplaza todos los procesos manuales sin analizarlos',
    ], 1),
    q(2, 'Estrategia y SI', '[Repaso] ¿Qué significa alinear TI con la estrategia del negocio?', [
      'Que el negocio se adapte a lo que ofrece la tecnología',
      'Comprar siempre la tecnología más moderna',
      'Que las inversiones tecnológicas respondan a las necesidades y objetivos organizacionales',
      'Que TI trabaje de forma independiente del resto de la organización',
    ], 2),
    q(3, 'Estrategia y SI', '¿Qué es la ventaja competitiva?', [
      'La capacidad de realizar actividades de forma más eficiente o diferente que los competidores',
      'Tener más computadoras que la competencia',
      'Contar con un software muy caro',
      'Tener más empleados que los competidores',
    ], 0),
    q(4, 'Estrategia y SI', 'Según la guía, además de la tecnología, ¿qué se requiere para lograr una ventaja competitiva?', [
      'Nada más: la tecnología garantiza la ventaja por sí sola',
      'Procesos, personas, datos y gestión del cambio',
      'Únicamente más presupuesto',
      'Solo contratar a más técnicos',
    ], 1),

    // ── Decisiones y SI ──
    q(5, 'Decisiones y SI', 'Aprobar un descuento dentro de un límite establecido es un ejemplo de decisión:', [
      'No estructurada',
      'Semiestructurada',
      'Estructurada',
      'Estratégica',
    ], 2),
    q(6, 'Decisiones y SI', 'Definir la cantidad de compra según un pronóstico es un ejemplo de decisión:', [
      'Estructurada',
      'Semiestructurada',
      'No estructurada',
      'Programada',
    ], 1),
    q(7, 'Decisiones y SI', 'Ingresar a un nuevo mercado es un ejemplo de decisión:', [
      'Estructurada',
      'Repetitiva',
      'Semiestructurada',
      'No estructurada',
    ], 3),
    q(8, 'Decisiones y SI', '[Repaso] Diferencie una decisión estructurada de una no estructurada.', [
      'La estructurada tiene reglas conocidas y es repetitiva; la no estructurada es nueva, incierta y requiere juicio',
      'La estructurada es nueva e incierta; la no estructurada tiene reglas conocidas',
      'Ambas tienen reglas conocidas',
      'La estructurada solo la toma la alta dirección',
    ], 0),
    q(9, 'Decisiones y SI', 'Una decisión semiestructurada se caracteriza por tener:', [
      'Reglas completamente conocidas',
      'Ninguna parte analítica',
      'Parte definida y parte analítica',
      'Ningún dato disponible',
    ], 2),
    q(10, 'Decisiones y SI', 'En términos organizacionales, ¿cómo se orientan las decisiones estratégicas?', [
      'Al corto plazo y a las tareas diarias',
      'Al control y asignación de recursos',
      'Al registro de operaciones',
      'Al largo plazo y a la dirección de la organización',
    ], 3),
    q(11, 'Decisiones y SI', '¿Qué sistema registra las operaciones diarias como ventas, pagos e inventario?', [
      'TPS',
      'MIS',
      'DSS',
      'ESS',
    ], 0),
    q(12, 'Decisiones y SI', '¿Cuál es el principal uso de un MIS?', [
      'Registrar cada venta individual',
      'Resumir y controlar el desempeño (por ejemplo, reporte mensual vs. meta)',
      'Simular escenarios de precio',
      'Proteger la red',
    ], 1),
    q(13, 'Decisiones y SI', '¿Qué sistema permite analizar escenarios y alternativas, como «qué ocurre si cambia el precio o la demanda»?', [
      'TPS',
      'MIS',
      'DSS',
      'ESS',
    ], 2),
    q(14, 'Decisiones y SI', '¿Qué sistema apoya la visión estratégica con tableros de crecimiento, rentabilidad y riesgo?', [
      'TPS',
      'MIS',
      'DSS',
      'ESS',
    ], 3),
    q(15, 'Decisiones y SI', '[Repaso] ¿Qué diferencia existe entre MIS y DSS?', [
      'El MIS resume y controla el desempeño con reportes; el DSS analiza escenarios y alternativas («qué pasaría si»)',
      'El DSS registra operaciones diarias y el MIS simula escenarios',
      'Son exactamente el mismo sistema',
      'El MIS solo lo usa la alta dirección y el DSS solo el nivel operativo',
    ], 0),

    // ── Calidad de la informática ──
    q(16, 'Calidad de la informática', 'Una decisión puede ser incorrecta aunque el sistema funcione técnicamente cuando:', [
      'El servidor es muy rápido',
      'La información utilizada es deficiente',
      'La red es una LAN',
      'El software es de código abierto',
    ], 1),
    q(17, 'Calidad de la informática', 'La pregunta «¿El dato representa la realidad?» corresponde a la dimensión de:', [
      'Oportunidad',
      'Relevancia',
      'Exactitud',
      'Consistencia',
    ], 2),
    q(18, 'Calidad de la informática', 'La pregunta «¿Están presentes los datos necesarios?» corresponde a la dimensión de:', [
      'Integridad',
      'Exactitud',
      'Oportunidad',
      'Relevancia',
    ], 0),
    q(19, 'Calidad de la informática', 'La pregunta «¿Tiene el mismo significado en todos los sistemas?» corresponde a la dimensión de:', [
      'Exactitud',
      'Oportunidad',
      'Relevancia',
      'Consistencia',
    ], 3),
    q(20, 'Calidad de la informática', '[Repaso] ¿Por qué la oportunidad es una dimensión de calidad de la información?', [
      'Porque los datos antiguos ocupan más espacio',
      'Porque un dato correcto pero que no está disponible cuando se necesita pierde utilidad para la decisión',
      'Porque solo importa la hora del registro',
      'Porque la oportunidad reemplaza a la exactitud',
    ], 1),
    q(21, 'Calidad de la informática', 'La pregunta «¿Ayuda a la decisión concreta?» corresponde a la dimensión de:', [
      'Consistencia',
      'Integridad',
      'Exactitud',
      'Relevancia',
    ], 3),

    // ── Gobierno de SI ──
    q(22, 'Gobierno de SI', '¿Qué define el gobierno de sistemas e información?', [
      'Solo qué equipos se compran',
      'Quién decide, quién es responsable, qué controles existen y cómo se mide el desempeño de los sistemas de información',
      'Únicamente el diseño de la red',
      'El horario de trabajo del área técnica',
    ], 1),
    q(23, 'Gobierno de SI', 'Según la guía, el gobierno de sistemas e información:', [
      'Se limita al área técnica',
      'Es responsabilidad exclusiva del proveedor',
      'Conecta la responsabilidad directiva con riesgos, recursos, datos y resultados',
      'No necesita indicadores',
    ], 2),
    q(24, 'Gobierno de SI', '¿Cuál de estos es un elemento del gobierno de sistemas de información?', [
      'Políticas de acceso, respaldo, continuidad y seguridad, e indicadores (KPI) vinculados con objetivos y procesos',
      'Eliminar los roles y responsabilidades',
      'Evitar el seguimiento de incidentes',
      'Dejar el cumplimiento a criterio de cada usuario',
    ], 0),

    // ── Ética en los SI ──
    q(25, 'Ética en los SI', 'Respecto al uso de la información, una organización debe preguntarse:', [
      'Solo si puede recolectar los datos',
      'Únicamente cuánto cuesta almacenarlos',
      'Si puede recolectarlos, pero no importa para qué',
      'No solo si puede recolectar o procesar datos, sino si debe hacerlo, con qué propósito, quién accede y cómo se protege a los afectados',
    ], 3),
    q(26, 'Ética en los SI', '¿Qué establece el principio de finalidad?', [
      'Recolectar datos para un propósito legítimo y conocido',
      'Solicitar solo los datos necesarios',
      'Permitir acceso según función y necesidad',
      'Definir quién responde por los errores',
    ], 0),
    q(27, 'Ética en los SI', '¿Qué establece el principio de minimización?', [
      'Recolectar todos los datos posibles por si acaso',
      'Solicitar solo los datos necesarios',
      'Explicar a las personas cómo se usan sus datos',
      'Cifrar todos los datos',
    ], 1),
    q(28, 'Ética en los SI', '¿Qué establece el principio de acceso controlado?', [
      'Que todos los empleados vean todos los datos',
      'Que solo la gerencia pueda ver los datos',
      'Permitir acceso según función y necesidad',
      'Que los datos no se puedan consultar',
    ], 2),
    q(29, 'Ética en los SI', '¿Qué establece el principio de transparencia?', [
      'Definir quién responde por decisiones y errores',
      'Solicitar solo los datos necesarios',
      'Restringir el acceso por función',
      'Explicar qué datos se usan y para qué',
    ], 3),
    q(30, 'Ética en los SI', '¿Qué establece el principio de responsabilidad?', [
      'Definir quién responde por decisiones y errores',
      'Recolectar datos con un propósito legítimo',
      'Explicar qué datos se usan',
      'Permitir acceso según función',
    ], 0),
    q(31, 'Ética en los SI', '[Repaso] Explique un riesgo ético del uso de datos personales en decisiones empresariales. ¿Cuál es un ejemplo válido?', [
      'Que los datos ocupen demasiado espacio',
      'Usar variables personales sin finalidad clara, consentimiento ni responsables puede discriminar o perjudicar a las personas afectadas',
      'Que el tablero sea muy rápido',
      'Que los reportes sean muy extensos',
    ], 1),

    // ── Integración (caso de aplicación) ──
    q(32, 'Integración', 'Caso: una empresa crea un tablero para decidir qué clientes reciben ofertas preferenciales, pero hay registros duplicados, datos sin actualizar hace seis meses y nadie sabe quién autorizó ciertas variables. ¿Qué debe hacerse primero?', [
      'Usar el tablero de inmediato para no perder tiempo',
      'Agregar más variables personales',
      'Corregir la calidad y el gobierno de datos, y luego definir propósito, responsables, controles de acceso y criterios éticos',
      'Eliminar el tablero y no usar datos nunca más',
    ], 2),
    q(33, 'Integración', 'En el caso del tablero, los datos que no se actualizan desde hace seis meses afectan principalmente la dimensión de:', [
      'Oportunidad',
      'Relevancia',
      'Finalidad',
      'Acceso controlado',
    ], 0),
    q(34, 'Integración', 'En el caso del tablero, que nadie sepa quién autorizó el uso de determinadas variables evidencia falta de:', [
      'Velocidad de procesamiento',
      'Responsabilidad y gobierno de datos',
      'Capacidad de almacenamiento',
      'Conectividad',
    ], 1),
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

  // Agrega secciones y etiquetas nuevas si la materia ya existía
  const subj = SUBJECTS[CONFIG.subject_key];
  NUEVAS_SECCIONES.forEach((s) => {
    if (!subj.secciones.includes(s)) subj.secciones.push(s);
  });
  subj.temaLabels = Object.assign({}, subj.temaLabels, NUEVOS_TEMAS);

  // Registro del examen
  subj.exams[CONFIG.exam_key] = {
    key: CONFIG.exam_key,
    label: CONFIG.exam_label,
    group: 'guia',
    questions: ASI_GUIA2_QUESTIONS,
  };
})();
