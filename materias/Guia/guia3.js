// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · GUÍA 3 — Infraestructura, Software, Datos, Redes y Seguridad
// Basado en la Guía de estudio - Equipo 3 (ASI-170). Incluye preguntas de repaso.
// Archivo AUTOCONTENIDO: define la materia (si no existe) y registra el examen.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'guia3',
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
    exam_label: 'Guía 3 · Infraestructura, Software, Datos, Redes y Seguridad',
  };

  const NUEVAS_SECCIONES = ['Controles de seguridad'];
  const NUEVOS_TEMAS = { 'GUÍA 3': 'GUÍA 3: Infraestructura, Software, Datos, Redes y Seguridad' };

  const q = (n, seccion, text, opts, answer) => ({
    id: `asi-e3-${n}`,
    tema: 'GUÍA 3',
    seccion,
    text,
    opts,
    answer,
  });

  const ASI_GUIA3_QUESTIONS = [
    // ── Infraestructura ──
    q(1, 'Infraestructura', '¿Qué es la infraestructura de TI?', [
      'Solo los servidores de la empresa',
      'Únicamente las aplicaciones que usan los empleados',
      'El conjunto de recursos tecnológicos y servicios (hardware, software, almacenamiento, redes, comunicaciones, plataformas y soporte) que permiten operar aplicaciones y procesar información',
      'El edificio donde está el centro de datos',
    ], 2),
    q(2, 'Infraestructura', '[Repaso] ¿Qué diferencia existe entre infraestructura de TI y una aplicación de negocio?', [
      'La infraestructura (hardware, redes, almacenamiento, plataformas, soporte) es la base que permite operar; la aplicación de negocio (ERP, CRM) usa esa base para apoyar procesos y tareas del usuario',
      'No hay diferencia',
      'La aplicación de negocio es el hardware y la infraestructura es el ERP',
      'La infraestructura solo existe en la nube',
    ], 0),
    q(3, 'Infraestructura', 'Si falla el hardware (servidores, PCs, dispositivos), el riesgo es:', [
      'Pérdida de conectividad',
      'Interrupción del procesamiento',
      'Recuperación lenta o dependencia',
      'Decisiones erróneas por datos incorrectos',
    ], 1),
    q(4, 'Infraestructura', 'Si fallan las redes (LAN, WAN, Internet, VPN), el riesgo es:', [
      'Interrupción del procesamiento',
      'Errores en las aplicaciones',
      'Pérdida de conectividad',
      'Pérdida de datos únicamente',
    ], 2),
    q(5, 'Infraestructura', 'Si fallan los servicios (soporte, nube, respaldo), el riesgo es:', [
      'Pérdida de conectividad',
      'Errores o indisponibilidad del software',
      'Interrupción del procesamiento',
      'Recuperación lenta o dependencia',
    ], 3),
    q(6, 'Infraestructura', 'Si fallan los datos (bases de datos, archivos), el riesgo es:', [
      'Pérdida de datos o decisiones erróneas',
      'Pérdida de conectividad',
      'Interrupción del hardware',
      'Ninguno',
    ], 0),

    // ── Software ──
    q(7, 'Software', '¿De qué tres formas puede obtenerse el software según la guía?', [
      'Alquilarlo, regalarlo o venderlo',
      'Desarrollarlo internamente, adquirirlo como paquete o consumirlo como servicio',
      'Solo comprarlo o copiarlo',
      'Únicamente desarrollarlo en la nube',
    ], 1),
    q(8, 'Software', 'Al decidir cómo obtener software, ¿qué debe considerarse?', [
      'Solo el precio de la licencia',
      'Únicamente la marca del proveedor',
      'Costo total, soporte, seguridad, integración, escalabilidad y dependencia del proveedor',
      'El color de la interfaz',
    ], 2),
    q(9, 'Software', '¿Qué es el software de sistema?', [
      'El que apoya procesos y tareas del usuario',
      'El que se consume solo por Internet',
      'El que se usa únicamente en servidores remotos',
      'El que administra los recursos del equipo y la plataforma (por ejemplo, un sistema operativo)',
    ], 3),
    q(10, 'Software', '¿Qué es el software de aplicación?', [
      'El que apoya procesos y tareas del usuario',
      'El que administra los recursos del equipo',
      'El que protege la red',
      'El que construye la infraestructura física',
    ], 0),
    q(11, 'Software', '¿Qué es SaaS?', [
      'Un tipo de hardware de almacenamiento',
      'Una aplicación consumida como servicio, normalmente mediante Internet',
      'Un protocolo de red inalámbrica',
      'Un sistema operativo',
    ], 1),
    q(12, 'Software', '[Repaso] ¿Qué ventajas y riesgos tiene consumir software como servicio (SaaS)?', [
      'Solo ventajas, sin ningún riesgo',
      'Solo riesgos, sin ninguna ventaja',
      'Ventajas: acceso por Internet y menor carga de administrar infraestructura propia; riesgos: dependencia del proveedor, seguridad, integración y costo a largo plazo',
      'No requiere considerar soporte ni seguridad',
    ], 2),

    // ── Datos e información ──
    q(13, 'Datos e información', 'Según la guía, ¿qué debe definirse en la administración de datos?', [
      'Solo el tamaño del disco duro',
      'Únicamente el nombre de la base de datos',
      'Solo quién imprime los reportes',
      'Estructuras, responsables, reglas de calidad, acceso, respaldo, retención y recuperación',
    ], 3),
    q(14, 'Datos e información', '¿Qué es una base de datos?', [
      'Una colección estructurada para almacenar y consultar datos',
      'Un software que gestiona la red',
      'Un tipo de firewall',
      'Una copia de seguridad en USB',
    ], 0),
    q(15, 'Datos e información', '¿Qué es un DBMS (sistema gestor de bases de datos)?', [
      'Un tipo de red',
      'El software que gestiona almacenamiento, consulta, seguridad e integridad de la base de datos',
      'Un dispositivo de respaldo',
      'Un protocolo de seguridad',
    ], 1),
    q(16, 'Datos e información', '¿Para qué sirve un respaldo?', [
      'Para acelerar la red',
      'Para impedir el acceso de usuarios',
      'Para recuperar información después de una pérdida o incidente',
      'Para cifrar contraseñas',
    ], 2),

    // ── Redes ──
    q(17, 'Redes', '¿Qué es una LAN?', [
      'Una red que conecta sucursales en distintas ciudades',
      'Una red pública global',
      'Un túnel protegido sobre una red pública',
      'Una red de alcance local (oficina, edificio, campus)',
    ], 3),
    q(18, 'Redes', '¿Qué es una WAN?', [
      'Una red que conecta redes a distancia, como sucursales en distintas ciudades',
      'Una red de una sola oficina',
      'Un tipo de contraseña',
      'Un software de respaldo',
    ], 0),
    q(19, 'Redes', '¿Qué es una VPN?', [
      'Una red local de una oficina',
      'Un túnel lógico protegido sobre una red pública, útil para acceso remoto o conexión entre sedes',
      'Una base de datos en la nube',
      'Un servidor de archivos',
    ], 1),
    q(20, 'Redes', 'Internet se describe en la guía como:', [
      'Una red local privada',
      'Un túnel protegido',
      'Una red pública global que da acceso a servicios externos',
      'Un tipo de software de aplicación',
    ], 2),
    q(21, 'Redes', '[Repaso] Diferencie LAN, WAN y VPN.', [
      'La LAN conecta redes a distancia, la WAN es local y la VPN es pública',
      'LAN y WAN son idénticas; la VPN es un servidor',
      'La VPN es la red local, la LAN es el túnel y la WAN es Internet',
      'La LAN es una red local; la WAN conecta redes a distancia; la VPN es un túnel lógico protegido sobre una red pública',
    ], 3),
    q(22, 'Redes', 'Al diseñar la conectividad de una red empresarial, ¿qué debe considerarse?', [
      'Disponibilidad, capacidad, seguridad, costos y necesidades de los procesos',
      'Solo el costo',
      'Únicamente la marca del router',
      'Solo la velocidad',
    ], 0),

    // ── Seguridad ──
    q(23, 'Seguridad', '¿Qué es la tríada CIA?', [
      'Un tipo de firewall',
      'Confidencialidad, Integridad y Disponibilidad',
      'Control, Inventario y Auditoría',
      'Un protocolo de red',
    ], 1),
    q(24, 'Seguridad', 'La confidencialidad significa que:', [
      'La información no se altera indebidamente',
      'Los sistemas siempre están disponibles',
      'Solo acceden personas autorizadas',
      'Existen copias de respaldo',
    ], 2),
    q(25, 'Seguridad', 'La integridad significa que:', [
      'Los sistemas y datos están accesibles cuando se requieren',
      'Solo acceden personas autorizadas',
      'Los datos se cifran siempre',
      'La información no se altera indebidamente',
    ], 3),
    q(26, 'Seguridad', 'La disponibilidad significa que:', [
      'Los sistemas y datos están accesibles cuando se requieren',
      'Solo accede la gerencia',
      'La información nunca cambia',
      'Los datos se comparten con todos',
    ], 0),
    q(27, 'Seguridad', '¿Qué controles se asocian a la disponibilidad?', [
      'Permisos, autenticación y cifrado',
      'Redundancia, respaldo y continuidad',
      'Validaciones, registros y firmas',
      'Logs y alertas únicamente',
    ], 1),
    q(28, 'Seguridad', '[Repaso] Explique confidencialidad, integridad y disponibilidad con ejemplos. ¿Cuál asociación es correcta?', [
      'Confidencialidad: respaldo; integridad: permisos; disponibilidad: firmas',
      'Confidencialidad: redundancia; integridad: cifrado; disponibilidad: autenticación',
      'Confidencialidad: permisos, autenticación, cifrado; integridad: validaciones, registros, firmas; disponibilidad: redundancia, respaldo, continuidad',
      'Las tres se resuelven solo con un antivirus',
    ], 2),

    // ── Controles de seguridad ──
    q(29, 'Controles de seguridad', '¿Cuál es el propósito de un control preventivo?', [
      'Recuperar el sistema tras un incidente',
      'Identificar que un incidente ocurrió',
      'Reducir el impacto después del hecho',
      'Evitar que el incidente ocurra',
    ], 3),
    q(30, 'Controles de seguridad', '¿Cuál de estos es un control preventivo?', [
      'MFA, firewall o mínimos privilegios',
      'Logs y alertas',
      'Restauración de respaldo',
      'Plan de respuesta',
    ], 0),
    q(31, 'Controles de seguridad', '¿Cuál es el propósito de un control detectivo?', [
      'Evitar el incidente',
      'Identificar que el incidente ocurrió o está ocurriendo (logs, alertas, monitoreo)',
      'Restaurar los datos',
      'Impedir el acceso de usuarios',
    ], 1),
    q(32, 'Controles de seguridad', '¿Qué tipo de control es la restauración de un respaldo o un plan de respuesta?', [
      'Preventivo',
      'Detectivo',
      'Correctivo',
      'Ninguno de los anteriores',
    ], 2),
    q(33, 'Controles de seguridad', '[Repaso] ¿Qué diferencia existe entre un control preventivo y uno detectivo?', [
      'El preventivo identifica el incidente y el detectivo lo evita',
      'Ambos recuperan información',
      'No hay diferencia',
      'El preventivo busca evitar el incidente (MFA, firewall); el detectivo lo identifica cuando ocurre o está ocurriendo (logs, alertas, monitoreo)',
    ], 3),

    // ── Integración (caso de aplicación) ──
    q(34, 'Integración', 'Caso: una empresa con tres sucursales guarda archivos localmente, usa contraseñas compartidas y respalda manualmente en USB. ¿Cuál es la solución propuesta?', [
      'Arquitectura centralizada o en nube, conectividad WAN/VPN, roles de acceso, autenticación individual, respaldos automatizados, recuperación y monitoreo',
      'Mantener todo igual y comprar más USB',
      'Compartir una sola contraseña más fuerte',
      'Eliminar el acceso remoto',
    ], 0),
    q(35, 'Integración', 'En el caso de las sucursales, ¿qué reemplaza a las contraseñas compartidas?', [
      'Una contraseña única para toda la empresa',
      'Autenticación individual con roles de acceso',
      'Eliminar las contraseñas',
      'Guardarlas en un papel',
    ], 1),
    q(36, 'Integración', 'En el caso de las sucursales, ¿qué permite conectar las sedes y dar acceso remoto de forma protegida?', [
      'Una LAN en cada sucursal sin conexión',
      'Memorias USB',
      'Conectividad WAN/VPN',
      'Impresoras compartidas',
    ], 2),
    q(37, 'Integración', 'Según el caso, la solución debe equilibrar:', [
      'Solo velocidad y estética',
      'Únicamente el costo',
      'Solo la seguridad, sin importar el costo',
      'Costo, disponibilidad y seguridad',
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
    questions: ASI_GUIA3_QUESTIONS,
  };
})();
