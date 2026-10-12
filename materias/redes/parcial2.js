// ═════════════════════════════════════════════════════════════════════════════
// 🎓 EXAMEN CON CONFIG COMENTADO (SIMPLE)
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ NOTA DE ORDEN DE CARGA:
// Este examen introduce secciones NUEVAS respecto a general.js/parcial3.js
// (xDSL y Última Milla, Frame Relay y ATM, SD-WAN Avanzado), además de las
// 7 secciones originales de 'redes' (se mantienen en el MISMO orden/índices
// para no romper nada si este archivo NO es el primero en cargar).
// Para que el filtro de secciones muestre TODAS las opciones nuevas en el
// dropdown, este archivo debería cargarse ANTES que general.js y parcial3.js
// (así su bloque de meta, más completo, es el que registra la materia).
// Si carga después, el registro ya existente (más corto) seguirá activo y
// las preguntas de secciones nuevas simplemente no aparecerán en ese filtro,
// pero el examen funcionará igual con el filtro 'TODAS'.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'redes', // Nombre de la carpeta: /materias/redes/ | Usa en SUBJECTS[X].exams | IDs: ${charAt(0)}
    exam_key: 'parcial2', // Nombre del examen: SUBJECTS.redes.exams[X] | IDs: ${charAt(-1)} | Archivo: parcial2.js
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
      // Índices 1-7 IDÉNTICOS a general.js/parcial3.js (compatibilidad de orden)
      'TODAS', // Opción "mostrar todas"
      'Modelo OSI', // Sección 1
      'Capas 2 y 3', // Sección 2
      'Protocolos de Transporte', // Sección 3
      'Direccionamiento IPv4', // Sección 4
      'Infraestructura', // Sección 5
      'MPLS y SD-WAN', // Sección 6
      'Arquitectura Moderna', // Sección 7
      // Secciones NUEVAS aportadas por este examen:
      'xDSL y Última Milla', // Sección 8
      'Frame Relay y ATM', // Sección 9
      'SD-WAN Avanzado', // Sección 10
    ],
    exam_label: 'Parcial 2', // Nombre del examen en selector de exámenes
  };

  // ─────────────────────────────────────────────────────────────────────────
  // PREGUNTAS (usa CONFIG para referencias, no hardcode)
  // ─────────────────────────────────────────────────────────────────────────
  const REDES_PARCIAL2_QUESTIONS = [
    // ── Infraestructura (sección 5) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-1`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Cuál es el principal "trade-off" (intercambio) de usar MPLS como infraestructura de red?',
      opts: [
        'Es rápido de desplegar pero no soporta voz',
        'Es barato pero inseguro',
        'Funciona solo con fibra óptica',
        'Ofrece privacidad garantizada por hardware y cero pérdida de paquetes, pero su rigidez física exige alto CAPEX y tiempos de aprovisionamiento lentos (ej: pedir un nuevo circuito MPLS puede tardar semanas)',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-2`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: 'Al modernizar la WAN de una empresa, ¿cuál es el orden correcto de las etapas del proyecto?',
      opts: [
        'Solo se necesita comprar el hardware e instalarlo',
        'Diseño arquitectónico → Diagnóstico → Integración → Selección del proveedor',
        'Diagnóstico de requisitos → Selección del proveedor (evaluar TCO) → Diseño arquitectónico (topologías híbridas, QoS) → Integración fluida (desplegar en paralelo sin interrumpir) → Validación en producción (pruebas de failover)',
        'Validación en producción → Selección del proveedor → Diagnóstico',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-3`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[5],
      text: '¿Cuáles son la principal ventaja y la principal limitación de MPLS como "túnel corporativo estandarizado"?',
      opts: [
        'Ventaja: es gratuito. Limitación: no soporta datos',
        'Ventaja: no requiere routers. Limitación: es inseguro',
        'Ventaja: es inalámbrico. Limitación: solo funciona en el mismo edificio',
        'Ventaja: QoS estricta, baja pérdida de paquetes, baja latencia y rutas privadas dedicadas. Limitación: extrema rigidez operativa, despliegue de nuevas sedes puede tomar semanas y alto costo por megabit',
      ],
      answer: 3,
    },
    // ── MPLS y SD-WAN (sección 6) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-4`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'El encabezado "Shim" de MPLS mide 32 bits y reside entre la Capa 2 y la Capa 3. ¿Cómo se distribuyen esos bits?',
      opts: [
        'Solo contiene la IP de origen y destino',
        '16 bits de dirección MAC + 16 bits de checksum',
        'Label (20 bits) + Exp/Calidad de Servicio (3 bits) + S (1 bit) + TTL (8 bits)',
        'Es un campo de tamaño variable sin subdivisiones',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-5`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Por qué la "Conmutación de Etiquetas" (Label Switching) de MPLS es tan rápida?',
      opts: [
        'Porque elimina completamente la capa IP',
        'Porque usa exclusivamente fibra óptica dedicada',
        'Porque comprime los datos antes de enviarlos',
        'Porque los routers MPLS no abren el paquete IP en cada parada: leen una etiqueta preasignada de 20 bits para un enrutamiento ultrarrápido y garantizado (ej: como leer solo el código postal en vez de toda la dirección)',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-6`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'En el paradigma de Redes Definidas por Software (SDN), ¿qué función cumple cada una de sus tres capas?',
      opts: [
        'Las tres capas hacen exactamente lo mismo por redundancia',
        'Aplicación, Presentación y Sesión únicamente',
        'Capa Física, Capa de Enlace y Capa de Red del modelo OSI',
        'Capa de Aplicación (lógica de negocio) → Capa de Control/"el Cerebro" (el Controlador/NOS decide cómo fluye el tráfico vía APIs) → Capa de Infraestructura/"el Músculo" (dispositivos físicos o virtuales que ejecutan las órdenes)',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-7`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'En la arquitectura SD-WAN, ¿qué hace cada uno de sus tres planos (Orquestación, Control y Datos)?',
      opts: [
        'Orquestación cifra los datos, Control los descifra, Datos los almacena',
        'Los tres planos gestionan únicamente el ancho de banda',
        'Orquestación: autentica componentes con Zero Touch Provisioning (ZTP) y gestiona políticas globales. Control: el "semáforo inteligente" que optimiza el flujo según el tipo de aplicación en tiempo real. Datos: establece conexiones seguras a través de infraestructuras privadas y públicas simultáneamente',
        'Solo existe un plano: el de datos',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-8`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'Según la matriz de diagnóstico arquitectónico, ¿cómo se comparan MPLS y SD-WAN en fiabilidad y modelo de costos?',
      opts: [
        'Ambos tienen exactamente el mismo modelo de costos',
        'SD-WAN no ofrece ningún tipo de cifrado ni seguridad',
        'MPLS: alta disponibilidad por canal virtual/BGP con alto CAPEX. SD-WAN: conmutación dinámica de rutas en milisegundos, optimizado a OPEX con ahorro radical de costos operativos',
        'MPLS siempre es más barato que SD-WAN',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-9`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Qué significa que "SD-WAN no reemplaza a MPLS, lo optimiza" en una arquitectura híbrida?',
      opts: [
        'Que el tráfico crítico (ej: transacciones bancarias) se enruta automáticamente por MPLS con seguridad extrema, el tráfico masivo (ej: YouTube, SaaS) se descarga económicamente por Internet, y el 4G/5G LTE sirve de respaldo y agilidad con ancho de banda bajo demanda',
        'Que todo el tráfico pasa siempre por 4G/5G LTE',
        'Que MPLS deja de usarse por completo',
        'Que SD-WAN solo funciona sin conexión a Internet',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-10`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'Sobre Cisco Viptela: ¿qué componentes clave forman su arquitectura y qué caso de éxito local se menciona?',
      opts: [
        'Solo tiene un componente llamado vRouter',
        'DSLAM, ATU-C y ATU-R; caso de éxito: Universidad de los Andes',
        'vManage (gestión centralizada vía API REST), vBond (orquestación y aprovisionamiento Zero-Touch), vSmart (implementación de políticas vía protocolo OMP) y vEdge (plano de datos en la sucursal); caso de éxito: Banco Pichincha, que redujo costos y mejoró la conectividad en tiempo real',
        'FortiGate, FortiManager y FortiAnalyzer; caso de éxito: Banco Pichincha',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-11`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'Sobre Fortinet: ¿qué componentes clave forman su enfoque de "Seguridad Unificada" (NGFW) y qué caso de éxito local se menciona?',
      opts: [
        'Solo ofrece un router sin funciones de seguridad',
        'vManage, vBond y vSmart; caso de éxito: Uniandes',
        'Fortinet no tiene componentes de gestión centralizada',
        'FortiManager (aprovisionamiento Zero-Touch y gestión), FortiAnalyzer (monitoreo de registros y reportes) y FortiGate (firewall NGFW que unifica IPS, inspección SSL y enrutamiento SD-WAN); caso de éxito: Universidad de los Andes (Uniandes), que superó incidentes críticos de seguridad',
      ],
      answer: 3,
    },
    // ── Arquitectura Moderna (sección 7) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-12`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: '¿Cómo describe la "expansión ineludible del perímetro de red" la relación entre LAN, MAN, WAN y la nube?',
      opts: [
        'Solo existe la WAN; LAN y MAN ya no se usan',
        'La nube reemplaza completamente a la LAN',
        'Son redes completamente aisladas sin ninguna relación',
        'Como anillos concéntricos: el Núcleo (LAN - redes de área local), el Anillo Intermedio (MAN - redes de área metropolitana), el Anillo Exterior (WAN - redes de área amplia) y "La Órbita" (Nube/SaaS), donde el tráfico moderno ya no va solo de sucursal a datacenter, sino directamente a la nube',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-13`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: 'Según el espectro de decisión estratégica, ¿en qué se basa realmente elegir entre Cisco Viptela y Fortinet para una infraestructura empresarial?',
      opts: [
        'Ambas empresas ofrecen exactamente el mismo producto',
        'En cuál marca es más antigua en el mercado',
        'No en cuál es "mejor" en general, sino en la prioridad principal de la empresa: Cisco para topologías globales de alta complejidad de enrutamiento (orquestación de red pura); Fortinet si la ciberseguridad integral en el borde (Edge) es el mandato corporativo principal',
        'En el color de la interfaz gráfica de administración',
      ],
      answer: 2,
    },
    // ── xDSL y Última Milla (sección 8) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-14`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cuál es la diferencia física fundamental entre el cobre y la fibra óptica como medios de transmisión?',
      opts: [
        'La fibra es más barata pero más lenta que el cobre',
        'El cobre no sufre ningún tipo de atenuación',
        'Ambos transmiten luz de la misma manera',
        'El cobre sufre resistencia óhmica y capacitancia parásita, actuando como un filtro paso-bajo que atenúa las frecuencias altas con la distancia; la fibra transmite mediante pulsos de luz e índices de refracción, siendo inmune a interferencias electromagnéticas y ofreciendo un ancho de banda masivo',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-15`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'La tecnología xDSL aprovecha el espectro inactivo del par trenzado de cobre mediante Multiplexación por División de Frecuencia (FDM). ¿Cómo se reparten las bandas?',
      opts: [
        'POTS/voz: 0 a 4 kHz; Upstream (subida): 25.8 kHz a 138 kHz; Downstream (bajada): desde 138 kHz hasta 1.1 MHz en ADSL o 2.2 MHz en ADSL2+',
        'Todo el espectro se usa exclusivamente para voz',
        'El upstream siempre usa más ancho de banda que el downstream',
        'La voz y los datos comparten exactamente la misma frecuencia',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-16`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿En qué consiste el mecanismo de "Bit-Loading" en un módem xDSL?',
      opts: [
        'En bloquear los canales con interferencia de forma permanente',
        'El módem negocia canal por canal evaluando la relación señal a ruido (SNR), asignando hasta 15 bits por ciclo usando modulación QAM en los canales más limpios',
        'En repartir siempre la misma cantidad de bits sin importar el ruido',
        'En cargar un archivo de configuración fijo cada vez que se enciende el módem',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-17`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cuál es la diferencia entre NEXT y FEXT, los dos tipos de diafonía (crosstalk) en cables de cobre?',
      opts: [
        'Son exactamente el mismo fenómeno con nombres distintos',
        'FEXT es causado por la atenuación, no por otros cables',
        'NEXT solo ocurre en fibra óptica',
        'NEXT (Near-End Crosstalk): interferencia extrema en el extremo cercano de la transmisión; FEXT (Far-End Crosstalk): interferencia acumulativa en el extremo lejano de la línea de recepción',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-18`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cuál es la diferencia de enfoque entre las tecnologías asimétricas (ADSL/VDSL) y las simétricas (SHDSL)?',
      opts: [
        'Ambas ofrecen exactamente la misma velocidad en ambos sentidos',
        'Las asimétricas no tienen ninguna limitación de alcance',
        'Las asimétricas se enfocan en el segmento residencial (descarga mayor que subida, ideal para consumo de video/web); las simétricas se enfocan en el segmento corporativo y enlaces LAN-a-LAN, con la misma capacidad en subida y bajada',
        'Las simétricas son exclusivas para uso doméstico',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-19`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'Sobre SHDSL (tecnología simétrica corporativa): ¿qué modulación usa y cuál es su rango de rendimiento?',
      opts: [
        'Solo funciona sobre fibra óptica',
        'No permite agrupar múltiples pares de cobre',
        'Usa QAM exclusivamente y ofrece solo 56 kbps fijos',
        'Usa TC-PAM para optimizar la eficiencia espectral y reducir la diafonía NEXT; rinde desde 192 kbps hasta 2.3 Mbps por par (hasta 5.7 Mbps en SHDSL.bis), permitiendo agrupar hasta 4 pares (Bonding) para enlaces E1/PBX',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-20`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'El perfil 35b de VDSL2 (Supervectoring), ¿qué rango de espectro utiliza y qué velocidades alcanza a corta distancia?',
      opts: [
        'Expande el espectro hasta 35.3 MHz, logrando 300 Mbps de bajada y 100 Mbps de subida a distancias menores a 300 metros',
        'Usa solo hasta 4 kHz, igual que la voz',
        'Alcanza velocidades ilimitadas sin importar la distancia',
        'Solo funciona en distancias mayores a 5 km',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-21`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cómo funciona el "Vectoring" (ITU-T G.993.5) para llevar el cobre a su límite absoluto?',
      opts: [
        'Un procesador central mide la diafonía FEXT en todo el mazo de cables y genera una señal de contrafase en tiempo real para cancelarla activamente (cancelación cuántica de ruido)',
        'Elimina por completo la necesidad de un DSLAM',
        'Convierte automáticamente el cobre en fibra óptica',
        'Aumenta físicamente el grosor del cable de cobre',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-22`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Qué caracteriza a G.fast, el "último escalón" del cobre?',
      opts: [
        'Opera sobre espectros masivos (106 MHz a 212 MHz) usando Duplexación por División de Tiempo (TDD), superando los 500 Mbps en tramos menores a 100 metros (FTTdp)',
        'Es más lento que ADSL clásico',
        'Solo funciona con fibra óptica pura, sin nada de cobre',
        'Opera en frecuencias muy bajas, menores a 1 MHz',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-23`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'En la "Anatomía de la Conexión Local" (última milla), ¿qué elementos conectan el hogar/oficina con la central del ISP?',
      opts: [
        'Solo un cable directo sin ningún dispositivo intermedio',
        'Una conexión satelital directa',
        'Un router 4G/5G LTE únicamente',
        'CPE/Módem (ATU-R) → Splitter pasivo → Bucle Local (par trenzado) → Splitter Central → DSLAM/ATU-C en la Central ISP, mientras el splitter también deriva la línea hacia la PSTN para la voz',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-24`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Cómo afecta PPPoE al MTU de una conexión DSL y qué problema puede causar si no se corrige?',
      opts: [
        'Aumenta el MTU a 9000 bytes automáticamente',
        'Solo afecta a la velocidad de subida, nunca a la navegación',
        'La cabecera PPPoE consume 8 bytes, reduciendo el MTU estándar de Ethernet de 1500 a 1492 bytes; si el router no ajusta el TCP MSS Clamping, los paquetes con el flag DF (Don\'t Fragment) se descartan, bloqueando la navegación HTTPS',
        'PPPoE no afecta el MTU en absoluto',
      ],
      answer: 2,
    },
    // ── Frame Relay y ATM (sección 9) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-25`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: '¿Cuáles son las características principales de Frame Relay como arquitectura de conmutación WAN de Capa 2?',
      opts: [
        'Requiere obligatoriamente fibra óptica',
        'Conmuta tramas de tamaño variable mediante el protocolo LAPF, descarta tramas con errores sin avisar (confiando la corrección a capas superiores, lo que lo hace más ágil que X.25) y utiliza DLCI (Data Link Connection Identifier) para establecer Circuitos Virtuales Permanentes (PVC)',
        'Usa celdas fijas de 53 bytes',
        'No permite ningún tipo de circuito virtual',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-26`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: '¿Cómo está estructurada una celda ATM (Asynchronous Transfer Mode) y para qué fue diseñada originalmente?',
      opts: [
        'Es de tamaño variable, igual que Frame Relay',
        'Fue diseñada exclusivamente para tráfico de video, sin soportar voz ni datos',
        'Celda rígida de exactamente 53 bytes (5 bytes de cabecera + 48 bytes de carga útil), diseñada para la RDSI de Banda Ancha, permitiendo multiplexación TDM asíncrona predecible a nivel de hardware para mezclar voz, video y datos sin latencia',
        'Usa celdas de 1500 bytes como Ethernet',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-27`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: '¿Cuál es la diferencia clave entre Frame Relay y ATM en la forma en que empaquetan los datos?',
      opts: [
        'Ninguno de los dos divide los datos en unidades más pequeñas',
        'ATM usa tramas variables y Frame Relay usa celdas fijas',
        'Ambos usan exactamente el mismo tamaño de paquete',
        'Frame Relay usa tramas de tamaño variable; ATM reemplazó esas tramas por celdas rígidas y minúsculas de tamaño fijo (53 bytes), pensadas para mezclar voz, video y datos con predictibilidad',
      ],
      answer: 3,
    },
    // ── SD-WAN Avanzado (sección 10) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-28`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Según la Matriz de Decisión MPLS vs. SD-WAN, ¿cómo se diferencian en Arquitectura?',
      opts: [
        'Ambas están basadas exclusivamente en software',
        'No existe ninguna diferencia arquitectónica entre ambas',
        'MPLS: enrutamiento manual, topología dedicada subyacente, basado en hardware. SD-WAN: overlay virtual, enrutamiento dinámico sobre cualquier enlace físico, basado en software',
        'MPLS es overlay virtual y SD-WAN es hardware dedicado',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-29`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Según la Matriz de Decisión MPLS vs. SD-WAN, ¿cómo se diferencian en Rendimiento y en Gestión/Costo?',
      opts: [
        'MPLS tiene menor costo operativo que SD-WAN',
        'Ambas tienen exactamente el mismo rendimiento y costo',
        'Rendimiento: MPLS ofrece QoS garantizada de extremo a extremo con menor latencia y alta predictibilidad; SD-WAN depende de las conexiones públicas subyacentes pero optimiza y reconstruye paquetes para mitigar caídas. Gestión/Costo: MPLS es lento de escalar (semanas por sede) con costo operativo prohibitivo; SD-WAN permite despliegue rápido Zero-Touch con gestión centralizada y drástica reducción de costos',
        'SD-WAN siempre es más lento de escalar que MPLS',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-30`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: '¿Qué ocurre en la "Agilidad Dinámica" de SD-WAN cuando la línea MPLS principal sufre una caída?',
      opts: [
        'El software SD-WAN detecta la falla en milisegundos e inyecta instantáneamente el tráfico crítico en enlaces alternativos (ej: VDSL2 o 4G LTE), reconstruyendo paquetes perdidos en tránsito mediante Forward Error Correction (FEC) para garantizar continuidad total sin cortes en la sesión',
        'La empresa pierde toda la conectividad hasta que un técnico repare la línea',
        'El tráfico se descarta permanentemente sin ningún tipo de respaldo',
        'Se necesita reiniciar manualmente todos los routers de la sucursal',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-31`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'En el "Viaje del Dato" de arquitectura end-to-end (Origen → Última Milla → Agregación ISP → Red WAN → Destino), ¿qué ocurre en cada etapa?',
      opts: [
        'El dato viaja directo del usuario a la nube sin pasar por ningún equipo intermedio',
        'Origen (LAN del usuario) → Última Milla (Capa 1/2: modulación VDSL2 con vectoring cancelando el crosstalk) → Agregación ISP (DSLAM, MTU 1492 condicionado por cabecera PPPoE) → Red WAN (Capa 3/Overlay: orquestación dinámica sobre enlaces MPLS e Internet Público) → Destino (Cloud/Datacenter)',
        'La última milla ocurre después de la Red WAN',
        'Todas las etapas realizan exactamente la misma función',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-32`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Según la conclusión "De la Física al Software", ¿cómo se resume la diferencia entre el dominio físico (xDSL) y el dominio lógico (SD-WAN)?',
      opts: [
        'El dominio físico (xDSL) llevó al cobre a su límite termodinámico mediante modulaciones complejas y cancelación de ruido (Vectoring); el dominio lógico (SD-WAN) asume que la capa física eventualmente fallará, usando inteligencia centralizada por software para enrutar, proteger y orquestar servicios ininterrumpidos de forma agnóstica al medio físico',
        'El dominio físico ya no se usa en ninguna red moderna',
        'El dominio lógico reemplazó por completo la necesidad de cualquier medio físico',
        'Ambos dominios son idénticos y cumplen la misma función',
      ],
      answer: 0,
    },
    // ── MPLS y SD-WAN (sección 6) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-33`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Cómo se comparan MPLS y SD-WAN en cuanto a "Banda Ancha" según la matriz de diagnóstico arquitectónico?',
      opts: [
        'MPLS ofrece banda ancha rígida y costosa de escalar; SD-WAN es flexible y combina múltiples conexiones bajo demanda',
        'MPLS es más flexible que SD-WAN para escalar banda ancha',
        'Ambas tienen exactamente la misma flexibilidad de banda ancha',
        'SD-WAN no permite combinar múltiples conexiones',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-34`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: '¿Cómo se comparan MPLS y SD-WAN en cuanto a "Seguridad" según la matriz de diagnóstico arquitectónico?',
      opts: [
        'MPLS no ofrece ningún tipo de privacidad',
        'Ambas dependen exclusivamente de un firewall externo de terceros',
        'MPLS ofrece privacidad inherente de sitio a sitio; SD-WAN aporta cifrado IPsec de extremo a extremo con firewall NGFW integrado',
        'SD-WAN nunca cifra el tráfico',
      ],
      answer: 2,
    },
    // ── Arquitectura Moderna (sección 7) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-35`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: 'El mercado ecuatoriano y global de conectividad está dominado por dos enfoques filosóficos distintos representados por Fortinet y Cisco. ¿Cuál es la pregunta clave que resume esa decisión?',
      opts: [
        '¿Fibra óptica o cobre?',
        '¿Voz o datos?',
        '¿Orquestación de Red pura o Seguridad de Borde unificada?',
        '¿Nube pública o nube privada?',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-36`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[7],
      text: 'Según el mensaje de cierre "La Conectividad Definida por el Negocio", ¿qué transformación produce SD-WAN en la infraestructura empresarial?',
      opts: [
        'Elimina por completo la necesidad de cualquier infraestructura de red',
        'Mantiene la infraestructura exactamente igual que antes, sin ningún cambio',
        'Convierte la red en un centro de costos aún más rígido',
        'Transforma la infraestructura de un centro de costos rígido en un habilitador ágil, seguro y centrado en la nube, de modo que la red se mueva a la misma velocidad que el negocio',
      ],
      answer: 3,
    },
    // ── xDSL y Última Milla (sección 8) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-37`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'En la anatomía de la conexión local, ¿qué función cumple el Splitter (pasivo) tanto en el hogar/oficina como en la Central ISP?',
      opts: [
        'Amplifica la señal de fibra óptica antes de llegar al DSLAM',
        'Separa/deriva la señal de voz (hacia la PSTN o el teléfono) de la señal de datos que viaja por el mismo par de cobre',
        'Convierte la señal digital en analógica para el DSLAM',
        'Bloquea por completo la señal de datos, dejando pasar solo voz',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-38`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: '¿Qué rol cumple el DSLAM en el paso "Del Acceso Local a la Escala Global"?',
      opts: [
        'Es el punto donde termina la "última milla": agrega el tráfico de múltiples líneas de suscriptores individuales para inyectarlo hacia infraestructuras WAN masivas capaces de enrutar terabytes de datos entre ciudades y continentes',
        'Reemplaza completamente al router SD-WAN de la sucursal',
        'Es un dispositivo que solo se usa en el hogar del usuario',
        'Convierte la voz en datos sin agregar tráfico de otros suscriptores',
      ],
      answer: 0,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-39`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'Según el concepto de "Atenuación" en la transmisión por cobre, ¿qué la causa y qué efecto tiene?',
      opts: [
        'La atenuación aumenta la potencia de la señal con la distancia',
        'La potencia de la señal cae drásticamente a medida que aumenta la distancia desde la Central Telefónica (CO), lo que dicta los límites geográficos estrictos de xDSL',
        'La atenuación es independiente de la distancia al nodo central',
        'La atenuación solo afecta a la fibra óptica, nunca al cobre',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-40`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'Los "Enemigos de la Transmisión en Cobre" son la Atenuación y la Diafonía (Crosstalk). ¿Por qué ambos fenómenos, en conjunto, limitan geográficamente a xDSL?',
      opts: [
        'Porque no tienen ninguna relación con la distancia al nodo central',
        'Porque solo afectan a las redes de fibra óptica',
        'Porque ambos fenómenos mejoran la señal a mayor distancia',
        'Porque la degradación física combinada (pérdida de potencia por distancia más interferencia entre pares de cable) dicta los límites geográficos estrictos que xDSL puede alcanzar respecto a la Central Telefónica',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-41`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'G.fast utiliza Duplexación por División de Tiempo (TDD). ¿En qué consiste esta técnica y qué rango de espectro emplea?',
      opts: [
        'Elimina la necesidad de dividir el tiempo o la frecuencia',
        'Usa bandas de frecuencia completamente separadas y simultáneas para subida y bajada, sin compartir tiempo ni espectro',
        'Comparte la misma banda de frecuencia (106 MHz a 212 MHz) para subida y bajada, alternando en el tiempo cuál dirección transmite en cada instante',
        'Opera exclusivamente en la banda de voz de 0 a 4 kHz',
      ],
      answer: 2,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-42`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[8],
      text: 'Dentro de VDSL2, ¿qué diferencia al perfil estándar 17a del perfil 35b (Supervectoring)?',
      opts: [
        'Ambos perfiles usan exactamente el mismo rango de espectro',
        'El perfil 17a siempre alcanza mayor velocidad que el 35b',
        'El perfil 35b expande el espectro utilizable hasta 35.3 MHz (mucho más que el 17a), lo que permite alcanzar hasta 300 Mbps de bajada y 100 Mbps de subida a distancias cortas (menores a 300 m)',
        'El perfil 35b solo funciona a distancias mayores a 5 km',
      ],
      answer: 2,
    },
    // ── Frame Relay y ATM (sección 9) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-43`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: '¿Cuál es la diferencia en el manejo de errores entre Frame Relay y su predecesor X.25?',
      opts: [
        'Ambos protocolos ignoran completamente los errores de transmisión',
        'Frame Relay corrige todos los errores en cada salto, igual que X.25',
        'X.25 nunca verifica errores, a diferencia de Frame Relay',
        'Frame Relay descarta las tramas con errores sin avisar y confía la corrección a las capas superiores, lo que agiliza el proceso; X.25 realizaba verificación y corrección de errores en cada salto, haciéndolo más lento',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-44`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[9],
      text: 'En una celda ATM de 53 bytes, ¿cómo se reparte exactamente ese tamaño fijo?',
      opts: [
        '26.5 bytes de cabecera y 26.5 bytes de carga útil',
        '5 bytes de cabecera + 48 bytes de carga útil (payload)',
        '48 bytes de cabecera + 5 bytes de carga útil',
        '53 bytes de cabecera sin carga útil',
      ],
      answer: 1,
    },
    // ── SD-WAN Avanzado (sección 10) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-45`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'En el modelo de capas de SD-WAN ("La Evolución Inteligente"), ¿qué función cumple la capa de "Red Overlay" (Capa de Abstracción)?',
      opts: [
        'Es el hardware físico de los routers de borde',
        'Es una red virtual segura y cifrada (mediante túneles IPSec) superpuesta sobre la infraestructura física, independiente de los medios físicos de transmisión subyacentes',
        'Elimina por completo la necesidad de cifrado en la red',
        'Es la capa que decide las políticas de enrutamiento de forma centralizada en la nube',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-46`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'En el modelo de capas de SD-WAN, ¿qué caracteriza al "Plano de Datos" (el Músculo) frente al "Plano de Control" (el Cerebro)?',
      opts: [
        'El Plano de Control ejecuta físicamente el envío de paquetes en la sucursal',
        'El Plano de Datos son los routers físicos de borde, cuyo hardware se comoditiza y se limita a ejecutar las órdenes que recibe; el Plano de Control gestiona de forma centralizada en la nube las decisiones lógicas y políticas de enrutamiento',
        'Ambos planos cumplen exactamente la misma función',
        'El Plano de Datos toma todas las decisiones lógicas de enrutamiento',
      ],
      answer: 1,
    },
    // ── MPLS y SD-WAN (sección 6) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-47`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'Comparando los casos de éxito mencionados, ¿qué problema resolvió cada empresa con su respectiva plataforma?',
      opts: [
        'Uniandes usó Cisco Viptela para reducir costos de circuitos MPLS',
        'Ambas instituciones usaron la misma plataforma para resolver el mismo problema',
        'Banco Pichincha resolvió problemas de seguridad con Fortinet',
        'Banco Pichincha (con Cisco Viptela) mitigó caídas de red y complejidad en sucursales mediante orquestación avanzada; la Universidad de los Andes/Uniandes (con Fortinet) superó incidentes críticos de seguridad e interrupciones en pagos en línea integrando conectividad ultra-segura',
      ],
      answer: 3,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-48`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[6],
      text: 'En la etapa 2 ("Selección del Proveedor") del camino hacia la modernización de la WAN, ¿qué se debe evaluar?',
      opts: [
        'Únicamente el precio de lista del hardware, sin considerar nada más',
        'Solo el color corporativo del proveedor',
        'El Costo Total de Propiedad (TCO) y la alineación con la filosofía de TI de la empresa (por ejemplo, Cisco vs. Fortinet)',
        'La cantidad de empleados que tiene el proveedor',
      ],
      answer: 2,
    },
    // ── SD-WAN Avanzado (sección 10) ──
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-49`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Según la conclusión final de "De la Física al Software", ¿qué asume la red moderna respecto a la capa física?',
      opts: [
        'Que la capa física debe gestionarse manualmente sin ningún tipo de software',
        'Que la capa física eventualmente fallará, por lo que utiliza inteligencia centralizada por software para enrutar, proteger y orquestar servicios ininterrumpidos y escalables de manera agnóstica al medio físico',
        'Que la capa física nunca puede fallar y no necesita respaldo',
        'Que ya no es necesaria ninguna capa física en las redes actuales',
      ],
      answer: 1,
    },
    {
      id: `${CONFIG.subject_key.charAt(0)}${CONFIG.exam_key.charAt(CONFIG.exam_key.length - 1)}-50`,
      tema: CONFIG.temas[1],
      seccion: CONFIG.secciones[10],
      text: 'Considerando el recorrido completo "De la Última Milla a la Nube" (desde xDSL hasta SD-WAN), ¿cuál es la idea central que conecta ambas presentaciones?',
      opts: [
        'La conectividad siempre dependió únicamente de circuitos MPLS dedicados, sin ninguna otra tecnología',
        'El cobre fue reemplazado por completo y ya no se usa en ninguna red actual',
        'El software nunca influye en cómo se transmiten los datos físicamente',
        'La conectividad evolucionó desde llevar el cobre físico a su límite técnico (xDSL: modulación, vectoring) hasta abstraer la inteligencia de red en software (SDN/SD-WAN), permitiendo que empresas orquesten tráfico de forma dinámica, segura y agnóstica al medio físico subyacente (MPLS, banda ancha, 4G/5G)',
      ],
      answer: 3,
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
    questions: REDES_PARCIAL2_QUESTIONS,
  };
})();