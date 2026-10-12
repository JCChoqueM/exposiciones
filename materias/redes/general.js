// ═════════════════════════════════════════════════════════════════════════════
// 🎓 EXAMEN CON CONFIG COMENTADO (SIMPLE)
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'redes', // Nombre de la carpeta: /materias/redes/ | Usa en SUBJECTS[X].exams | IDs: ${charAt(0)}
    exam_key: 'general', // Nombre del examen: SUBJECTS.redes.exams[X] | IDs: ${charAt(-1)} | Archivo: general.js
    icon: '🌐', // Emoji en selector de materia (visual)
    label: 'Redes de Computadoras II', // Nombre completo en encabezado, selector, tab del browser
    badge: 'REDES · INFORMÁTICA', // Clasificación debajo del label (ÁREA · CATEGORÍA)
    subtitle: 'Examen Interactivo — Redes de Computadoras II: Conceptos Fundamentales', // Descripción larga bajo el título
    temas: ['TODOS', 'TEMA I'], // Array de temas (filtro en dropdown) | SIEMPRE empieza con "TODOS"
    temaLabels: {
      // Nombres legibles de temas (tooltip al hover)
      'TEMA I': 'TEMA : Redes de Computadoras II', // Mapeo tema → descripción
    },
    secciones: [
      // Array de subsecciones (filtro en dropdown) | SIEMPRE empieza con "TODAS"
      'TODAS', // Opción "mostrar todas"
      'Modelo OSI', // Sección 1
      'Capas 2 y 3', // Sección 2
      'Protocolos de Transporte', // Sección 3
      'Direccionamiento IPv4', // Sección 4
      'Infraestructura', // Sección 5
      'MPLS y SD-WAN', // Sección 6
      'Arquitectura Moderna', // Sección 7
    ],
    exam_label: 'General', // Nombre del examen en selector de exámenes
  };

  // ─────────────────────────────────────────────────────────────────────────
  // PREGUNTAS (usa CONFIG para referencias, no hardcode)
  // ─────────────────────────────────────────────────────────────────────────
  const REDES_GENERAL_QUESTIONS = [
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-1`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Cuál es el propósito principal del Modelo OSI?',
      opts: [
        'Hacer Internet más rápido',
        'Organizar la comunicación en 7 capas para que diferentes tecnologías hablen el mismo idioma (ej: Ethernet y WiFi funcionen juntas)',
        'Reemplazar protocolos antiguos',
        'Proteger contra hackers',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-2`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Qué capa del Modelo OSI maneja la transmisión física de bits?',
      opts: [
        'Capa 2 (Enlace de Datos)',
        'Capa 1 (Física): transmisión de bits, señales, cables, conectores (ej: tu cable Ethernet)',
        'Capa 3 (Red)',
        'Capa 4 (Transporte)',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-3`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Cuál es la función de la Capa 4 (Transporte)?',
      opts: [
        'Transmitir bits por cables',
        'Determinar rutas entre redes',
        'Garantizar entrega ordenada y completa usando TCP/UDP (ej: TCP para descargas, UDP para videojuegos en tiempo real)',
        'Detectar colisiones en red',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-4`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[1],
      text: '¿Qué capa del OSI define cómo se ven los datos en la pantalla?',
      opts: [
        'Capa 3 (Red)',
        'Capa 4 (Transporte)',
        'Capa 6 (Presentación): formato y cifrado de datos (ej: cómo se ve un PDF en tu navegador)',
        'Capa 7 (Aplicación)',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-5`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[2],
      text: '¿Cuál es la función principal de un Switch?',
      opts: [
        'Conectar redes diferentes a Internet',
        'Aprender direcciones MAC y conmutar tramas dentro de una LAN local (ej: conectar tu PC con la impresora de oficina)',
        'Traducir IPs a direcciones MAC',
        'Encriptar datos entre edificios',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-6`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[2],
      text: '¿Cuál es la función principal de un Router?',
      opts: [
        'Conectar dispositivos en la misma red',
        'Seleccionar rutas óptimas usando direcciones IP para conectar redes diferentes (ej: tu oficina con otra ciudad)',
        'Amplificar señales WiFi',
        'Almacenar direcciones MAC',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-7`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[2],
      text: '¿Qué identifica un dispositivo en la Capa 2?',
      opts: [
        'La dirección IP del dispositivo',
        'La dirección MAC del dispositivo: formato físico de la tarjeta de red (ej: 00:1A:2B:3C:4D:5E)',
        'El número de puerto del dispositivo',
        'El nombre de host del dispositivo',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-8`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[2],
      text: '¿Qué identifica un dispositivo en la Capa 3?',
      opts: [
        'La dirección MAC física',
        'La dirección IP lógica: identifica ubicación en la red (ej: 192.168.1.25)',
        'El puerto del Switch',
        'El nombre de la computadora',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-9`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[3],
      text: '¿Cuál es la característica principal de TCP?',
      opts: [
        'Es muy rápido pero no garantiza entrega',
        'Orientado a conexión, confiable, garantiza orden de entrega (ej: cuando descargas un archivo, cada bit debe llegar correcto)',
        'No necesita establecer conexión previa',
        'Se usa solo para juegos en línea',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-10`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[3],
      text: '¿Cuál es la característica principal de UDP?',
      opts: [
        'Garantiza entrega de todos los paquetes',
        'Sin conexión, no confiable, rápido (ej: videojuegos, videollamadas donde un paquete perdido no arruina todo)',
        'Más seguro que TCP',
        'Se usa solo para email',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-11`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[3],
      text: '¿Cuándo usarías TCP?',
      opts: [
        'Para transmitir video en vivo',
        'Para un videojuego competitivo',
        'Para transferencia de archivos bancarios donde cada dato debe llegar perfecto (ej: descargar dinero de tu cuenta)',
        'Para streaming de música',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-12`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[3],
      text: '¿Cuándo usarías UDP?',
      opts: [
        'Para transferir archivos críticos',
        'Para videollamada en WhatsApp donde algunos frames perdidos no arruinan la comunicación (velocidad importa más que perfección)',
        'Para transacciones de banco',
        'Para email',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-13`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[4],
      text: '¿Cuál es la estructura de una dirección IPv4?',
      opts: [
        'Es un código hexadecimal de 48 bits',
        '32 bits divididos en 4 octetos (ej: 192.168.1.25 donde cada número va de 0-255)',
        '64 bits divididos en 8 secciones',
        'Un código alfabético variable',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-14`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[4],
      text: '¿Qué es la máscara de subred /24?',
      opts: [
        'Un número aleatorio de seguridad',
        'Define cuáles bits son RED (24 bits) y cuáles son HOST (8 bits), ej: 192.168.1.0/24 permite 254 dispositivos (de .1 a .254)',
        'Un protocolo de encriptación',
        'Una regla de firewall',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-15`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[4],
      text: '¿Cuál es la dirección de RED en 192.168.1.25/24?',
      opts: ['192.168.1.25', '192.168.1.0 (todos los bits de host a 0)', '192.168.1.254', '192.168.0.0'],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-16`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[4],
      text: '¿Cuál es la dirección de BROADCAST en 192.168.1.0/24?',
      opts: [
        '192.168.1.1',
        '192.168.1.0',
        '192.168.1.255 (todos los bits de host a 1, usada para hablar con TODOS simultáneamente)',
        '192.168.2.0',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-17`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿En qué se diferencia conmutación local de enrutamiento global?',
      opts: [
        'Son exactamente lo mismo',
        'Conmutación local: tráfico dentro de la misma LAN usando direcciones físicas (MAC); Enrutamiento global: tráfico entre redes diferentes usando direcciones lógicas (IP)',
        'El enrutamiento es más lento',
        'La conmutación solo funciona en WiFi',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-18`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Qué es MPLS?',
      opts: [
        'Un tipo de cable de red',
        'Un protocolo que añade etiquetas a paquetes para enrutamiento ultra-rápido y garantizado en redes de operadores (ej: llamadas de video entre ciudades sin perder calidad)',
        'Un estándar de WiFi',
        'Un firewall de seguridad',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-19`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Qué diferencia hay entre MPLS y SD-WAN?',
      opts: [
        'Son lo mismo',
        'MPLS es hardware rígido y costoso; SD-WAN separa el "cerebro" (software) del "músculo" (infraestructura física), permitiendo controlar redes desde software de forma ágil y económica',
        'SD-WAN es más lento',
        'MPLS solo funciona en la nube',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-20`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cuál es el concepto clave de SD-WAN?',
      opts: [
        'Usar solo conexiones de cable',
        'Separar el control (cerebro: decisiones de software) del plano de datos (músculo: donde viajan los datos), haciendo la red programable y centralizada',
        'Eliminar completamente los routers',
        'Reemplazar Internet con MPLS',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-21`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cuál es una ventaja del enfoque SD-WAN?',
      opts: [
        'Requiere más personal técnico',
        'Conectar sucursales a la nube directamente sin pasar por el datacenter central, economizando costos y mejorando velocidad (ej: tu oficina en Quito accede a YouTube directo, no va a Madrid primero)',
        'Aumenta el número de paquetes perdidos',
        'Reduce la seguridad de los datos',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-22`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cuál es la diferencia entre Cisco Viptela y Fortinet FortiGate?',
      opts: [
        'Cisco enfatiza conectividad escalable; Fortinet enfatiza seguridad unificada en el borde (ej: Cisco es mejor para multinacionales con muchas oficinas, Fortinet para quien quiere seguridad integrada en el firewall)',
        'Son exactamente iguales',
        'Fortinet solo funciona en la nube',
        'Cisco solo para pequeñas empresas',
      ],
      answer: 0,
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
    questions: REDES_GENERAL_QUESTIONS,
  };
})();