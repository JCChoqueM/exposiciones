// ═════════════════════════════════════════════════════════════════════════════
// 📖 ASI · ENSAYO — texto de lectura (no tiene preguntas)
// Archivo AUTOCONTENIDO: registra el examen 'ensayo' con un campo `essay`.
// logic.js detecta `essay` y, en vez de preguntas, muestra el texto.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'ensayo',
    exam_label: '📖 Ensayo',
  };

  const ESSAY = {
    title: "Lo que falla casi nunca es la máquina",
    meta: "Ensayo · Administración de Sistemas de la Información · UNIOR",
    paragraphs: [
      "Cuando alguien paga con un código QR o recibe una factura emitida desde el sistema de Impuestos Nacionales, casi nunca piensa en lo que hay detrás: un celular, una conexión, una base de datos, un programa que alguien configuró un día. En Bolivia esas escenas ya son normales, y los trabajos que tomé como base para este ensayo (los de infraestructura y seguridad, estrategia y ética, y CRM, SCM y gestión del conocimiento) parten justamente de esa normalidad: una empresa de hoy es, en buena parte, un conjunto de sistemas de información. Lo que quiero sostener es algo que ninguno de los tres dice con estas palabras, pero que aparece en todos. Cuando un sistema falla, rara vez es por la tecnología en sí.",
      "Empecemos por lo de abajo, que es lo que menos se mira. El grupo 3 describe cinco piezas: la infraestructura (equipos, servidores, almacenamiento, la nube), el software, los datos, las redes y la seguridad. Por separado se explican fácil. Lo interesante viene al juntarlas, porque el mismo trabajo muestra que dependen unas de otras: si cae el servidor, nadie entra al sistema de ventas, y si además no hay copias de seguridad, la empresa puede perder información que no vuelve. Me llamó la atención cómo se define una política de respaldo. Es una lista de preguntas casi domésticas: qué se guarda, cada cuánto, dónde, quién se encarga y cómo se recupera. Ninguna es técnica. Son de organización.",
      "A veces el eslabón flojo está lejos de la empresa. El 19 de julio de 2024 una actualización defectuosa de un software de seguridad de CrowdStrike dejó fuera de servicio a unos 8,5 millones de computadoras con Windows, y hubo aerolíneas, bancos y hospitales afectados en todo el mundo (Weston, 2024). El grupo 2 lo usa como ejemplo de fiabilidad, una de las características que mide la norma ISO/IEC 25010. Ninguna de esas organizaciones eligió detenerse ese día, y sin embargo todas dependían de una actualización que no controlaban.",
      "Con los datos pasa algo parecido, solo que más callado. Un dato suelto, como las 500 unidades vendidas en septiembre que usa el grupo 3 de ejemplo, no dice mucho; procesado, en cambio, indica que ese producto se mueve y que conviene pedir más. Pero la cadena es frágil. Si el mismo cliente está registrado dos veces, o un precio se cargó mal, la información que sale es mala, y el reporte más prolijo no lo arregla. El grupo 2 ordena esto en seis dimensiones de calidad (exactitud, completitud, consistencia, oportunidad, validez y unicidad, según DAMA UK, 2013) y agrega una idea que me parece más honesta que las listas: un dato es de calidad cuando le sirve a quien lo usa (Wang y Strong, 1996).",
      "Hasta aquí todo suena técnico, y el grupo 1 fue el que me hizo dudar de esa palabra. Su trabajo trata de tres maneras de gestionar: la relación con los clientes (CRM), el recorrido de un producto desde el proveedor hasta la casa del comprador (SCM) y lo que sabe la gente de la empresa (gestión del conocimiento). Basta mirar los errores comunes que lista cada infografía. En el CRM, que el equipo no lo use o que los datos queden incompletos. En la cadena de suministro, depender de un solo proveedor o adivinar cuánto se va a vender. En la gestión del conocimiento, escribir una guía y no actualizarla nunca. Ninguno de esos errores se arregla con un programa mejor. Se arreglan con costumbres, con alguien que se haga responsable, con tiempo reservado para hacer las cosas bien. La idea con la que cierra el material de SCM, que una cadena es tan fuerte como su parte más débil, vale para los tres enfoques.",
      "Salesforce, SAP o Notion sirven de poco en una empresa donde nadie los abre.",
      "Entonces, ¿para qué tanto sistema? El grupo 2 responde desde la estrategia: la alineación consiste en que los proyectos de tecnología respondan a lo que el negocio quiere lograr, y no al revés (Henderson y Venkatraman, 1993). Uno de los errores que describen como frecuentes en la transformación digital es digitalizar un proceso malo sin rediseñarlo. Dicho sin vueltas, un desorden en papel pasa a ser un desorden en pantalla, solo que más rápido. Con las decisiones ocurre algo semejante. Los sistemas ayudan en todos los niveles, desde los que registran las operaciones diarias hasta los tableros para la alta dirección, pero la decisión sigue siendo de alguien. El caso de Amazon en 2018 muestra qué pasa cuando se le entrega demasiado a la herramienta: su sistema de selección de personal penalizaba a las mujeres porque había aprendido de contrataciones pasadas, en su mayoría de hombres (Dastin, 2018). El algoritmo no inventó el sesgo, lo heredó.",
      "Ahí entra la ética, que en los tres trabajos funciona como último filtro. Facebook y Cambridge Analytica es el ejemplo que todos conocen: datos de hasta 87 millones de usuarios recopilados sin su consentimiento informado y una multa de 5.000 millones de dólares en 2019 (Federal Trade Commission, 2019). Más cerca de nosotros, el grupo 2 señala que Bolivia todavía no tiene una ley integral de protección de datos personales (situación a 2025), aunque sí normas sueltas, como el Decreto Supremo 1793, que exige consentimiento previo y expreso para tratar datos personales. No me toca evaluar si eso alcanza. Lo que sí me parece claro es que una empresa puede cumplir la ley y aun así tratar mal a sus clientes, algo que el mismo trabajo recuerda cuando dice que una conducta puede ser legal y poco ética. Si la ética esperara a que la ley la alcance, siempre llegaría tarde.",
      "Al terminar de leer los tres trabajos me quedó la sensación de que habían hablado de lo mismo desde puertas distintas. El grupo 3 insiste en que ningún componente se puede ver aislado. El grupo 2 lo plantea casi como regla: una estrategia sin calidad produce decisiones erradas, y una buena calidad sin ética puede dañar a las personas. El grupo 1 lo muestra con escenas pequeñas, un vendedor que programa un recordatorio, una compañera veterana que escribe una guía de cinco pasos. Si algo me llevo es que, cuando una empresa quiere saber por qué su sistema no funciona, conviene preguntar primero por la gente y por los hábitos, y después por los equipos. Casi siempre la respuesta está ahí, y a veces cuesta más admitirla que comprar otro servidor."
],
    refs: [
      "Achacollo Mamani, I., Choque Mamani, J. C., y Soria Janco, O. (2026). Sistemas de gestión empresarial: Gestión de la relación con el cliente (CRM), gestión de la cadena de suministro (SCM) y gestión del conocimiento (KM). Universidad Privada de Oruro.",
      "Dastin, J. (2018, 10 de octubre). Amazon scraps secret AI recruiting tool that showed bias against women. Reuters.",
      "DAMA UK Working Group. (2013). The six primary dimensions for data quality assessment. DAMA UK.",
      "Federal Trade Commission. (2019, 24 de julio). FTC imposes $5 billion penalty and sweeping new privacy restrictions on Facebook [Comunicado de prensa].",
      "Gordillo Flores, A. E., Rollano Ovando, L. R., y Soliz García, B. M. (2026). Estrategia, decisiones, calidad de informática y ética. Universidad Privada de Oruro.",
      "Henderson, J. C., y Venkatraman, N. (1993). Strategic alignment: Leveraging information technology for transforming organizations. IBM Systems Journal, 32(1), 4–16.",
      "Mamani Mamani, C. E., Soliz Barrionuevo, L., y Quispe Rodriguez, R. B. (2026). Infraestructura, software, datos, redes y seguridad. Universidad Privada de Oruro.",
      "Wang, R. Y., y Strong, D. M. (1996). Beyond accuracy: What data quality means to data consumers. Journal of Management Information Systems, 12(4), 5–33.",
      "Weston, D. (2024, 20 de julio). Helping our customers through the CrowdStrike outage. Official Microsoft Blog."
],
  };

  // La materia ya la define grupo1.js; este archivo solo agrega su examen.
  if (!SUBJECTS[CONFIG.subject_key]) return;

  SUBJECTS[CONFIG.subject_key].exams[CONFIG.exam_key] = {
    key: CONFIG.exam_key,
    label: CONFIG.exam_label,
    group: 'administracion',
    questions: [],
    essay: ESSAY,
  };
})();