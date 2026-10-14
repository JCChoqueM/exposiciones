// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · TODO EN UNO — junta las preguntas de grupo1 + grupo2 + grupo3
// IMPORTANTE: este <script> debe cargarse DESPUÉS de grupo1.js, grupo2.js y
// grupo3.js (reutiliza sus preguntas, así no hay que duplicarlas ni mantener
// dos copias). Si agregas preguntas a un grupo, aparecen aquí automáticamente.
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const CONFIG = {
    subject_key: 'asi',
    exam_key: 'general',
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
    exam_label: '⭐ Todo en uno',
  };

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

  const exams = SUBJECTS[CONFIG.subject_key].exams;
  const ASI_TODO_QUESTIONS = ['grupo1', 'grupo2', 'grupo3'].flatMap((k) =>
    exams[k] ? exams[k].questions : [],
  );

  // Registro del examen
  exams[CONFIG.exam_key] = {
    key: CONFIG.exam_key,
    label: CONFIG.exam_label,
    group: 'administracion',
    questions: ASI_TODO_QUESTIONS,
  };
})();