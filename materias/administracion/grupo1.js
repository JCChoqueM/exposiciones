// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · GRUPO 1 — CRM, SCM y Gestión del Conocimiento
// Archivo AUTOCONTENIDO: define la materia (si no existe) y registra el examen.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'grupo1',
    icon: '🏢',
    label: 'Administración de Sistemas de Información',
    badge: 'ASI · INGENIERÍA DE SISTEMAS',
    subtitle: 'Examen Interactivo — Administración de Sistemas de la Información (UNIOR)',
    temas: null, // sin filtro por tema: los grupos ya son pestañas de examen
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
    exam_label: 'Grupo 1 · CRM, SCM y KM',
  };

  const q = (n, seccion, text, opts, answer) => ({
    id: `asi-g1-${n}`,
    tema: 'GRUPO 1',
    seccion,
    text,
    opts,
    answer,
  });

  const ASI_GRUPO1_QUESTIONS = [
    // ── CRM ──
    q(2, 'CRM', 'Según IBM, ¿qué es un CRM?', [
      'Un conjunto de tecnologías integradas para documentar, seguir y gestionar las relaciones e interacciones con clientes actuales y potenciales',
      'Un programa que solo sirve para enviar correos masivos',
      'Un sistema para controlar el inventario de bodega',
      'Una base de datos de proveedores',
    ], 0),
    q(3, 'CRM', '¿Qué es un «lead» en CRM?', [
      'Un cliente que ya compró varias veces',
      'Un proveedor de la empresa',
      'Alguien interesado que todavía no ha comprado (cliente potencial)',
      'Un reporte de ventas mensual',
    ], 2),
    q(4, 'CRM', '¿Cuál es el orden correcto de las seis etapas del CRM?', [
      'Registrar → Captar leads → Cerrar la venta → Seguimiento → Fidelizar → Posventa',
      'Captar leads → Cerrar la venta → Registrar → Seguimiento → Posventa → Fidelizar',
      'Seguimiento → Captar leads → Registrar → Cerrar la venta → Fidelizar → Posventa',
      'Captar leads → Registrar → Seguimiento → Cerrar la venta → Posventa → Fidelizar',
    ], 3),
    q(5, 'CRM', '¿Qué es el pipeline (embudo de ventas)?', [
      'El camino que va de «me interesa» a «ya compré»',
      'El sistema de transporte de productos',
      'La lista de proveedores aprobados',
      'El conjunto de guías internas de la empresa',
    ], 0),
    q(8, 'CRM', '¿Qué significa «segmentar» clientes?', [
      'Eliminar a los clientes inactivos',
      'Cobrarles precios distintos',
      'Dividir al equipo de ventas en grupos',
      'Juntar clientes parecidos para enviarles mensajes que les sirvan',
    ], 3),
    q(9, 'CRM', '¿Qué mide el indicador CAC?', [
      'Cuánto se gasta, en promedio, para conseguir un cliente nuevo',
      'Cuántos clientes se van y no regresan',
      'Qué tan contentos están los clientes',
      'Cuánto dinero deja un cliente a lo largo del tiempo',
    ], 0),
    q(10, 'CRM', '¿Qué mide el LTV (Lifetime Value)?', [
      'El tiempo que tarda un pedido en llegar',
      'La cantidad de leads captados por mes',
      'Cuánto dinero deja un cliente mientras siga con la empresa',
      'El costo de la publicidad en redes',
    ], 2),
    q(11, 'CRM', '¿Qué indica el churn?', [
      'Cuántos interesados terminan comprando',
      'Cuántos clientes abandonan la empresa y no regresan',
      'Cuánto cuesta enviar cada pedido',
      'Cuántas guías internas se consultan',
    ], 1),
    q(12, 'CRM', '¿Qué mide el NPS (Net Promoter Score)?', [
      'La rotación del inventario',
      'La velocidad de entrega de los pedidos',
      'El costo de adquirir un cliente',
      'Qué tan contentos están los clientes y si recomendarían la empresa',
    ], 3),
    q(13, 'CRM', '¿Cuál es un error común al implementar un CRM?', [
      'Comprar el programa sin tener claro cómo se vende',
      'Capacitar al equipo antes de usarlo',
      'Programar recordatorios de seguimiento',
      'Conectarlo con el correo y la página web',
    ], 0),

    // ── SCM ──
    q(15, 'SCM', 'Según el CSCMP, ¿qué es la gestión de la cadena de suministro (SCM)?', [
      'Solo la compra de materiales a proveedores',
      'La planificación y gestión de las actividades de abastecimiento, transformación y logística, incluida la coordinación con los socios del canal',
      'El control de la atención al cliente',
      'El almacenamiento de documentos de la empresa',
    ], 1),
    q(16, 'SCM', '¿Cuál es el orden correcto de las seis etapas del SCM?', [
      'Abastecer → Planificar → Producir → Distribuir → Almacenar → Logística inversa',
      'Planificar → Producir → Abastecer → Almacenar → Logística inversa → Distribuir',
      'Planificar → Abastecer → Producir → Almacenar → Distribuir → Logística inversa',
      'Producir → Planificar → Abastecer → Distribuir → Almacenar → Logística inversa',
    ], 2),
    q(17, 'SCM', '¿En qué consiste la logística inversa?', [
      'Recibir devoluciones y darles solución',
      'Enviar productos a otra ciudad',
      'Comprar a un segundo proveedor',
      'Cambiar el orden de las etapas de la cadena',
    ], 0),
    q(18, 'SCM', '¿Qué es el stock de seguridad (reserva)?', [
      'Los productos que están en mal estado',
      'El inventario que se vende primero',
      'Los productos guardados bajo llave',
      'Producto extra que se guarda por si algo se retrasa',
    ], 3),
    q(19, 'SCM', '¿Qué es el lead time?', [
      'El tiempo que tarda un cliente en decidir su compra',
      'Lo que pasa desde que se hace el pedido hasta que llega',
      'El tiempo que un producto pasa en bodega',
      'El horario de atención de los proveedores',
    ], 1),
    q(20, 'SCM', '¿Qué mide el indicador OTIF (On Time In Full)?', [
      'Qué tan rápido se vende el inventario',
      'Cuánto cuesta enviar cada pedido',
      'Los pedidos entregados a tiempo y completos, sin faltantes',
      'Cuántos clientes devuelven productos',
    ], 2),
    q(21, 'SCM', '¿Qué mide el fill rate (tasa de cumplimiento)?', [
      'De cada 100 productos que piden, cuántos se logran entregar',
      'Cuánto tarda un pedido en llegar',
      'Cuánto stock de seguridad se tiene',
      'Cuántos proveedores tiene la empresa',
    ], 0),
    q(22, 'SCM', '¿Qué mide la rotación de inventario?', [
      'Cuántos empleados cambian de bodega',
      'Cuánto cuesta almacenar un producto',
      'El tiempo de entrega al cliente',
      'Qué tan rápido se vende lo que hay en bodega',
    ], 3),
    q(24, 'SCM', '¿Cuál es un error común en el SCM?', [
      'Compartir información con los proveedores',
      'Tener un plan por si algo falla',
      'Depender de un solo proveedor',
      'Revisar los datos todos los días',
    ], 2),

    // ── Gestión del Conocimiento ──
    q(26, 'Gestión del Conocimiento', 'Dicho de forma simple, ¿en qué consiste la gestión del conocimiento (KM)?', [
      'En comprar software para la empresa',
      'En guardar y compartir lo que sabe la gente de la empresa para que no se pierda cuando alguien se va',
      'En controlar el inventario de la bodega',
      'En registrar a los clientes potenciales',
    ], 1),
    q(27, 'Gestión del Conocimiento', '¿Qué es el conocimiento tácito?', [
      'Lo que ya está en manuales, guías o videos',
      'Lo que está guardado en la base de conocimiento',
      'Lo que se enseña en el onboarding',
      'Lo que alguien sabe por experiencia pero nunca escribió',
    ], 3),
    q(28, 'Gestión del Conocimiento', '¿Cuál es el ciclo de la gestión del conocimiento?', [
      'Crear → Capturar → Organizar → Compartir → Aplicar → Actualizar',
      'Capturar → Crear → Compartir → Organizar → Actualizar → Aplicar',
      'Crear → Compartir → Capturar → Aplicar → Organizar → Actualizar',
      'Organizar → Crear → Capturar → Aplicar → Compartir → Actualizar',
    ], 0),
    q(29, 'Gestión del Conocimiento', '¿Qué es una base de conocimiento (la «biblioteca»)?', [
      'Una lista de clientes con su historial',
      'Un registro de pedidos a proveedores',
      'Un lugar con todas las guías y respuestas de la empresa',
      'Un programa para enviar correos automáticos',
    ], 2),
    q(30, 'Gestión del Conocimiento', '¿Qué es el onboarding?', [
      'La evaluación anual de los empleados',
      'Ayudar a alguien nuevo a aprender rápido su trabajo en los primeros días',
      'El proceso de despedir a un empleado',
      'La compra de software de gestión',
    ], 1),
    q(34, 'Gestión del Conocimiento', '¿Cuál es un error común en la gestión del conocimiento?', [
      'Asignar un responsable a cada guía',
      'Escribir una guía y nunca actualizarla',
      'Usar los mismos formatos y nombres',
      'Reconocer a quien comparte su saber',
    ], 1),

    // ── Comparación ──
    q(36, 'Comparación', '¿Cuál es el foco de cada enfoque?', [
      'CRM: el flujo del producto; SCM: el saber del equipo; KM: la relación con el cliente',
      'CRM: el saber del equipo; SCM: la relación con el cliente; KM: el flujo del producto',
      'CRM: la relación con el cliente; SCM: el flujo del producto; KM: el saber del equipo',
      'Los tres tienen exactamente el mismo foco',
    ], 2),
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
    group: 'administracion',
    questions: ASI_GRUPO1_QUESTIONS,
  };
})();