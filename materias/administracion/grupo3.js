// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · GRUPO 3 — Infraestructura, Software, Datos, Redes y Seguridad
// Archivo AUTOCONTENIDO: define la materia (si no existe) y registra el examen.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'grupo3',
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
    exam_label: 'Grupo 3 · Infraestructura, Software, Datos, Redes y Seguridad',
  };

  const q = (n, seccion, text, opts, answer) => ({
    id: `asi-g3-${n}`,
    tema: 'GRUPO 3',
    seccion,
    text,
    opts,
    answer,
  });

  const ASI_GRUPO3_QUESTIONS = [
    // ── Infraestructura ──
    q(1, 'Infraestructura', '¿Qué es la infraestructura tecnológica de un sistema de información?', [
      'El conjunto de programas que usan los empleados',
      'Los recursos físicos y tecnológicos que permiten que los sistemas funcionen (hardware, servidores, almacenamiento, centros de datos, nube)',
      'Las normas y políticas de la empresa',
      'El edificio donde trabaja la empresa',
    ], 1),
    q(2, 'Infraestructura', '¿Para qué se utilizan los servidores en una empresa?', [
      'Para proporcionar servicios a otros dispositivos de la red (bases de datos, aplicaciones, archivos, copias de seguridad)',
      'Solo para imprimir documentos',
      'Para conectar los teléfonos de los empleados',
      'Para reemplazar a las computadoras personales',
    ], 0),
    q(3, 'Infraestructura', '¿Cuál de estas NO es una tecnología de almacenamiento?', [
      'SSD',
      'NAS',
      'Wi-Fi',
      'HDD',
    ], 2),
    q(4, 'Infraestructura', '¿Qué permite la computación en la nube?', [
      'Trabajar sin necesidad de energía eléctrica',
      'Eliminar la necesidad de seguridad',
      'Reemplazar el software por hardware',
      'Utilizar recursos tecnológicos mediante Internet sin que todos los equipos estén dentro de la empresa',
    ], 3),
    q(5, 'Infraestructura', '¿Qué puede provocar una infraestructura deficiente?', [
      'Mayor velocidad en todos los sistemas',
      'Menos costos de mantenimiento',
      'Pérdida de información e interrupción de servicios',
      'Mayor seguridad de los datos',
    ], 2),

    // ── Software ──
    q(6, 'Software', '¿Cuáles son ejemplos de sistemas operativos?', [
      'ERP y CRM',
      'Windows y Linux',
      'SSD y NAS',
      'LAN y Wi-Fi',
    ], 1),
    q(7, 'Software', '¿Qué permite un ERP?', [
      'Integrar diferentes áreas de una empresa en un solo sistema, evitando información aislada por departamento',
      'Solo llevar la contabilidad',
      'Conectar las impresoras de la oficina',
      'Proteger la red contra virus',
    ], 0),
    q(8, 'Software', 'Un sistema CRM puede almacenar:', [
      'Solo las facturas de los proveedores',
      'Únicamente el inventario de bodega',
      'Los sueldos de los empleados',
      'Información de clientes, contactos, historial de compras, consultas, reclamos y oportunidades de venta',
    ], 3),
    q(9, 'Software', 'Además de sus beneficios, el software empresarial necesita:', [
      'Ser reemplazado cada mes',
      'Ser usado solo por el administrador',
      'Mantenimiento, actualizaciones y controles de seguridad',
      'Funcionar sin conexión a la red',
    ], 2),

    // ── Datos e información ──
    q(10, 'Datos e información', '¿Cuál es la diferencia entre datos e información?', [
      'Son exactamente lo mismo',
      'Los datos son elementos individuales; la información surge cuando se procesan, organizan e interpretan',
      'La información son los datos sin procesar',
      'Los datos solo existen en las bases de datos',
    ], 1),
    q(11, 'Datos e información', 'Si un producto vendió 500 unidades en septiembre, ¿qué información puede concluir la organización tras procesar los datos?', [
      'Que fue uno de los de mayor demanda y conviene aumentar su abastecimiento',
      'Que hay que dejar de venderlo',
      'Que la red está fallando',
      'Que el producto tiene defectos',
    ], 0),
    q(12, 'Datos e información', 'Si los datos son incorrectos, incompletos o duplicados, entonces:', [
      'El sistema los corrige automáticamente',
      'No afecta a los reportes',
      'Solo se afecta el almacenamiento',
      'La información generada también será incorrecta',
    ], 3),
    q(13, 'Datos e información', '¿Para qué sirven las bases de datos?', [
      'Para conectar dispositivos sin cables',
      'Para proteger los equipos contra virus',
      'Para almacenar y organizar grandes cantidades de información (clientes, productos, ventas, inventarios, etc.)',
      'Para fabricar productos',
    ], 2),
    q(14, 'Datos e información', '¿Por qué las organizaciones modernas consideran los datos un recurso estratégico?', [
      'Porque ocupan poco espacio',
      'Porque permiten analizar ventas, costos, rentabilidad, clientes y tendencias del mercado',
      'Porque reemplazan al software',
      'Porque son gratuitos',
    ], 1),

    // ── Redes ──
    q(15, 'Redes', '¿Qué conecta una red LAN?', [
      'Dispositivos dentro de un área limitada, como una oficina o un edificio',
      'Dispositivos de todo el mundo',
      'Solo servidores en la nube',
      'Solo teléfonos celulares',
    ], 0),
    q(16, 'Redes', '¿Qué precaución se debe tener con las redes Wi-Fi?', [
      'Usarlas solo para computadoras de escritorio',
      'Mantenerlas abiertas para facilitar el acceso',
      'Instalarlas únicamente en el servidor',
      'Configurarlas correctamente para evitar accesos no autorizados',
    ], 3),
    q(17, 'Redes', '¿Para qué puede usar Internet una empresa?', [
      'Solo para enviar correos',
      'Solo para almacenar archivos locales',
      'Comercio electrónico, comunicación, publicidad, servicios en la nube, videoconferencias y acceso remoto',
      'Únicamente para actualizar el hardware',
    ], 2),
    q(18, 'Redes', 'Según el trabajo, ¿por qué las redes son fundamentales para la integración empresarial?', [
      'Porque reducen la cantidad de computadoras',
      'Porque permiten que, por ejemplo, ventas registre una operación y la información llegue automáticamente a inventario y contabilidad',
      'Porque eliminan la necesidad de software',
      'Porque protegen los datos de forma automática',
    ], 1),

    // ── Seguridad ──
    q(19, 'Seguridad', '¿Qué comprende la seguridad de los sistemas de información?', [
      'Solo el uso de contraseñas',
      'Únicamente el antivirus',
      'Políticas, procedimientos, tecnologías y controles para proteger los sistemas y la información, frente a amenazas externas e internas',
      'Solo la protección del edificio',
    ], 2),
    q(20, 'Seguridad', '¿Cuál de estas es un ejemplo de amenaza para los sistemas de información?', [
      'Phishing',
      'Copia de seguridad',
      'Firewall',
      'Cifrado',
    ], 0),
    q(21, 'Seguridad', '¿Qué garantiza la confidencialidad?', [
      'Que los sistemas estén siempre encendidos',
      'Que la información no se modifique',
      'Que existan copias de respaldo',
      'Que la información esté disponible solo para las personas autorizadas',
    ], 3),
    q(22, 'Seguridad', 'Que un empleado no pueda modificar el precio de un producto sin autorización es un ejemplo de:', [
      'Disponibilidad',
      'Integridad',
      'Confidencialidad',
      'Escalabilidad',
    ], 1),
    q(23, 'Seguridad', '¿Qué medidas mejoran la disponibilidad?', [
      'Usar una sola contraseña para todos',
      'Eliminar los permisos de usuario',
      'Servidores redundantes, copias de seguridad, sistemas de respaldo, mantenimiento y planes de recuperación ante desastres',
      'Desconectar la red de Internet',
    ], 2),
    q(24, 'Seguridad', 'Una política de copias de seguridad debe definir:', [
      'Qué respaldar, con qué frecuencia, dónde almacenarlo, quién es responsable y cómo recuperar la información',
      'Solo el color del dispositivo de respaldo',
      'Únicamente cuántos empleados tiene la empresa',
      'Solo el precio del software',
    ], 0),

    // ── Integración ──
    q(25, 'Integración', '¿Cómo se relacionan infraestructura, software, datos, redes y seguridad?', [
      'Funcionan de manera independiente',
      'La infraestructura da los recursos físicos, el software ejecuta aplicaciones, estas procesan datos, las redes comunican todo y la seguridad protege el entorno',
      'Solo el software y los datos están relacionados',
      'Solo la seguridad depende de los demás',
    ], 1),
    q(26, 'Integración', 'Si falla un servidor y además no existen copias de seguridad, la empresa podría:', [
      'Mejorar su productividad',
      'Reducir sus costos',
      'Ganar velocidad de respuesta',
      'Perder información importante y quedarse sin acceso al software empresarial',
    ], 3),
    q(27, 'Integración', '¿Qué puede permitir una red insegura?', [
      'Mayor velocidad de la red',
      'Mejor calidad de los datos',
      'Que una persona no autorizada acceda a información almacenada en los servidores',
      'Que el software se actualice solo',
    ], 2),
    q(28, 'Integración', 'En el ejemplo de la empresa de alimentos, cuando se realiza una venta, ¿qué ocurre?', [
      'El sistema registra los datos, el software procesa la operación y actualiza el inventario, se guarda en la base de datos, la red permite el acceso y la seguridad controla quién entra',
      'Solo se imprime la factura',
      'Se apagan los servidores para ahorrar energía',
      'Se envía la información únicamente al gerente por correo',
    ], 0),
    q(29, 'Integración', 'Según las conclusiones del trabajo, las organizaciones deben considerar los sistemas de información como:', [
      'Un gasto que conviene reducir',
      'Un recurso estratégico y no únicamente una herramienta tecnológica',
      'Una tarea exclusiva del área de TI',
      'Un recurso opcional',
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

  // Registro del examen
  SUBJECTS[CONFIG.subject_key].exams[CONFIG.exam_key] = {
    key: CONFIG.exam_key,
    label: CONFIG.exam_label,
    questions: ASI_GRUPO3_QUESTIONS,
  };
})();
