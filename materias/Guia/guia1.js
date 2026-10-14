// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · GUÍA 1 — ERP, CRM, SCM y Gestión del Conocimiento
// Basado en la Guía de estudio - Equipo 1 (ASI-170). Incluye preguntas de repaso.
// Archivo AUTOCONTENIDO: define la materia (si no existe) y registra el examen.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'guia1',
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
    exam_label: 'Guía 1 · ERP, CRM, SCM y Gestión del Conocimiento',
  };

  const NUEVAS_SECCIONES = ['ERP'];
  const NUEVOS_TEMAS = { 'GUÍA 1': 'GUÍA 1: ERP, CRM, SCM y KM' };

  const q = (n, seccion, text, opts, answer) => ({
    id: `asi-e1-${n}`,
    tema: 'GUÍA 1',
    seccion,
    text,
    opts,
    answer,
  });

  const ASI_GUIA1_QUESTIONS = [
    // ── ERP ──
    q(1, 'ERP', '¿Cuál es la idea central de un ERP (Enterprise Resource Planning)?', [
      'Tener un programa grande y costoso',
      'Reemplazar a los empleados de cada área',
      'Trabajar con información común y trazable entre áreas, mediante módulos que comparten datos, reglas y controles',
      'Almacenar únicamente los datos contables',
    ], 2),
    q(2, 'ERP', '¿Cuál de estos es un módulo frecuente de un ERP?', [
      'Inventario',
      'Antivirus',
      'Servidor de correo',
      'Router',
    ], 0),
    q(3, 'ERP', '¿Cuál de estos es un ejemplo de dato maestro en un ERP?', [
      'Factura',
      'Cliente, producto, proveedor o almacén',
      'Pago',
      'Movimiento de inventario',
    ], 1),
    q(4, 'ERP', '¿Cuál de estos es un ejemplo de dato transaccional?', [
      'Un producto del catálogo',
      'Un proveedor registrado',
      'Un almacén',
      'Un pedido, una recepción, una factura o un pago',
    ], 3),
    q(5, 'ERP', '[Repaso] ¿Qué diferencia hay entre un dato maestro y una transacción en un ERP?', [
      'El dato maestro describe entidades relativamente estables (cliente, producto, proveedor, almacén); la transacción registra hechos de la operación (pedido, factura, pago, movimiento)',
      'No hay diferencia: ambos cambian todos los días',
      'El dato maestro es la factura y la transacción es el cliente',
      'Los datos maestros solo los usa finanzas y las transacciones solo ventas',
    ], 0),
    q(6, 'ERP', 'En el flujo de «pedido a cobro», ¿cuál es el orden correcto de los pasos?', [
      'Pedido → Despacho → Reserva → Cobro → Facturación',
      'Reserva → Pedido → Facturación → Despacho → Cobro',
      'Facturación → Pedido → Reserva → Despacho → Cobro',
      'Pedido → Reserva → Despacho → Facturación → Cobro',
    ], 3),
    q(7, 'ERP', 'En el flujo de «pedido a cobro», ¿qué ocurre en el paso de Reserva (módulo de Inventario)?', [
      'Se genera la factura y la cuenta por cobrar',
      'Se verifica y reserva la existencia disponible',
      'Se aplica el pago del cliente',
      'Se valida al cliente y se registra el pedido',
    ], 1),
    q(8, 'ERP', 'En el flujo de «pedido a cobro», ¿qué área o módulo genera la factura y la cuenta por cobrar?', [
      'Ventas',
      'Inventario',
      'Finanzas',
      'Almacén',
    ], 2),
    q(9, 'ERP', '¿Cuál de estos es un beneficio de un ERP?', [
      'Mayor duplicidad de datos',
      'Menor trazabilidad',
      'Eliminar la necesidad de capacitar al personal',
      'Menor duplicidad, mayor trazabilidad y coordinación interfuncional',
    ], 3),
    q(10, 'ERP', '¿Cuál de estos es un riesgo de implantar un ERP?', [
      'Datos deficientes, resistencia al cambio, parametrización incorrecta, dependencia del proveedor y costos de implantación',
      'Que todas las áreas compartan la misma información',
      'Que la información esté más oportuna',
      'Que se reduzca la duplicidad de datos',
    ], 0),

    // ── CRM ──
    q(11, 'CRM', '¿Cuál es el propósito de un CRM según la guía?', [
      'Controlar el inventario y las compras',
      'Conocer mejor al cliente y coordinar marketing, ventas y servicio',
      'Registrar la contabilidad de la empresa',
      'Proteger la red de accesos no autorizados',
    ], 1),
    q(12, 'CRM', '[Repaso] ¿Por qué un CRM no debe limitarse a una lista de contactos?', [
      'Porque las listas de contactos están prohibidas',
      'Porque solo sirve para el área de marketing',
      'Porque debe apoyar un proceso de relación con el cliente y convertir los datos de interacción en acciones comerciales y de servicio',
      'Porque su único objetivo es enviar correos masivos',
    ], 2),
    q(13, 'CRM', 'En un CRM, ¿qué componente trabaja con segmentación, campañas y leads?', [
      'Marketing',
      'Servicio',
      'Ventas',
      'Inventario',
    ], 0),
    q(14, 'CRM', '¿Qué indicadores se asocian al componente de Ventas de un CRM?', [
      'Tasa de respuesta y costo por lead',
      'Tasa de conversión y ciclo de venta',
      'Tiempo de respuesta y satisfacción',
      'Rotación de inventario y fill rate',
    ], 1),
    q(15, 'CRM', 'En un CRM, el componente de Servicio (casos, reclamos, historial) se mide con indicadores como:', [
      'Costo por lead',
      'Ciclo de venta',
      'Tiempo de respuesta y satisfacción',
      'Tasa de conversión',
    ], 2),
    q(16, 'CRM', 'Las oportunidades, cotizaciones y el seguimiento de clientes corresponden al componente de:', [
      'Marketing',
      'Servicio',
      'Finanzas',
      'Ventas',
    ], 3),

    // ── SCM ──
    q(17, 'SCM', '¿Qué coordina un SCM (Supply Chain Management)?', [
      'El flujo de materiales, información y decisiones desde proveedores hasta clientes',
      'Solo las compras a proveedores',
      'Únicamente la atención de reclamos de clientes',
      'El almacenamiento de manuales de la empresa',
    ], 0),
    q(18, 'SCM', '[Repaso] ¿Qué problema intenta reducir un SCM?', [
      'La falta de contraseñas seguras',
      'La falta de sincronización entre abastecimiento, inventario, producción, distribución y entrega',
      'El exceso de clientes potenciales',
      'La duplicación de contactos en el CRM',
    ], 1),
    q(19, 'SCM', '¿Cuál de estas actividades forma parte de un SCM?', [
      'Segmentar campañas de marketing',
      'Redactar manuales de bienvenida',
      'Control de inventarios y reposición, y visibilidad de pedidos, existencias y entregas',
      'Gestionar reclamos de clientes',
    ], 2),

    // ── Gestión del Conocimiento ──
    q(20, 'Gestión del Conocimiento', '¿Qué busca la gestión del conocimiento?', [
      'Capturar, organizar, compartir y aplicar el conocimiento útil de una organización',
      'Registrar únicamente las ventas diarias',
      'Controlar el transporte de mercadería',
      'Guardar solo los contactos de clientes',
    ], 0),
    q(21, 'Gestión del Conocimiento', '[Repaso] Diferencie conocimiento tácito y explícito.', [
      'El tácito se documenta en manuales; el explícito depende de la experiencia',
      'El explícito puede documentarse y almacenarse (manual, procedimiento); el tácito depende de experiencia y práctica (criterio de un técnico experimentado)',
      'Ambos son lo mismo',
      'El tácito está siempre en bases de datos; el explícito solo en la mente de las personas',
    ], 1),
    q(22, 'Gestión del Conocimiento', '¿Cuál es un ejemplo de conocimiento tácito?', [
      'Un manual de procedimientos',
      'Una base de conocimiento',
      'El criterio de un técnico experimentado',
      'Un procedimiento documentado',
    ], 2),
    q(23, 'Gestión del Conocimiento', '¿Cuál de estos es un ejemplo de conocimiento explícito?', [
      'La intuición de un vendedor veterano',
      'La destreza que alguien adquirió con la práctica',
      'La experiencia no escrita de un técnico',
      'Un manual, un procedimiento o una base de conocimiento',
    ], 3),
    q(24, 'Gestión del Conocimiento', '¿Cuál de estos es un recurso de la gestión del conocimiento?', [
      'Lecciones aprendidas y comunidades de práctica',
      'Servidores y routers',
      'Órdenes de compra',
      'Facturas y cuentas por cobrar',
    ], 0),

    // ── Comparación ──
    q(25, 'Comparación', '¿Cuál es la pregunta principal que responde un ERP?', [
      '¿Cómo captamos, atendemos y retenemos clientes?',
      '¿Cómo coordinamos los procesos internos?',
      '¿Cómo coordinamos abastecimiento y entrega?',
      '¿Cómo reutilizamos lo que la organización sabe?',
    ], 1),
    q(26, 'Comparación', '¿Qué pregunta principal responde un CRM?', [
      '¿Cómo coordinamos los procesos internos?',
      '¿Cómo reutilizamos lo que la organización sabe?',
      '¿Cómo captamos, atendemos y retenemos clientes?',
      '¿Cómo coordinamos abastecimiento y entrega?',
    ], 2),
    q(27, 'Comparación', '¿Cuál es la combinación correcta de sistema y dato típico?', [
      'ERP: lead, oportunidad, caso',
      'CRM: pedido, factura, inventario',
      'SCM: procedimiento, solución, lección aprendida',
      'SCM: orden de compra, stock, entrega',
    ], 3),
    q(28, 'Comparación', '¿Qué dato típico maneja un KMS (sistema de gestión del conocimiento)?', [
      'Procedimiento, solución, lección aprendida',
      'Lead, oportunidad, caso',
      'Orden de compra, stock, entrega',
      'Pedido, factura, inventario',
    ], 0),

    // ── Integración ──
    q(29, 'Integración', 'En una organización integrada, ¿cuál es el rol de cada sistema?', [
      'Todos cumplen exactamente la misma función',
      'El ERP organiza clientes; el CRM coordina recursos internos; el SCM guarda experiencias',
      'El ERP coordina recursos internos; el CRM, la relación con clientes; el SCM, abastecimiento y distribución; y la KM conserva y comparte experiencias y buenas prácticas',
      'Solo el ERP es necesario; los demás son opcionales',
    ], 2),
    q(30, 'Integración', '¿Qué evita la integración entre ERP, CRM, SCM y gestión del conocimiento?', [
      'La necesidad de usar datos',
      'La capacitación del personal',
      'El uso de la red',
      'Los silos de información',
    ], 3),
    q(31, 'Integración', 'Caso: una distribuidora recibe pedidos por WhatsApp, ventas anota en una hoja, almacén usa otro archivo y contabilidad vuelve a digitar los datos. ¿Qué sistema integraría pedido, inventario y facturación?', [
      'Un ERP',
      'Un CRM',
      'Un sistema de gestión del conocimiento',
      'Solo una VPN',
    ], 0),
    q(32, 'Integración', 'Caso: los reclamos de los clientes quedan en chats personales. ¿Qué sistema permitiría registrar el historial y los reclamos?', [
      'Un ERP',
      'Un CRM',
      'Un SCM',
      'Un firewall',
    ], 1),
    q(33, 'Integración', 'Caso: compras llama a los proveedores solo cuando falta stock. ¿Qué enfoque ayuda a planificar el abastecimiento y las entregas?', [
      'CRM',
      'Gestión del conocimiento',
      'SCM',
      'Cifrado de datos',
    ], 2),
    q(34, 'Integración', 'Caso: las soluciones a problemas recurrentes no están documentadas. ¿Qué conviene implementar?', [
      'Más hojas de cálculo por área',
      'Un servidor adicional',
      'Un sistema de facturación',
      'Una base de conocimiento que documente esas soluciones',
    ], 3),
    q(35, 'Integración', '[Repaso] Explique con un ejemplo cómo podrían integrarse ERP y CRM. ¿Cuál describe mejor una integración?', [
      'Ventas registra el pedido en el CRM con el historial del cliente, y el ERP valida inventario, genera la factura y la cuenta por cobrar, devolviendo el estado al CRM',
      'El CRM y el ERP se usan por separado sin compartir datos',
      'El ERP solo envía correos a los clientes',
      'El CRM reemplaza al almacén',
    ], 0),
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
    questions: ASI_GUIA1_QUESTIONS,
  };
})();
