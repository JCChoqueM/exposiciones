// ═════════════════════════════════════════════════════════════════════════════
// 🎓 ASI · GUÍAS · TODO EN UNO — junta las preguntas de guia1 + guia2 + guia3
// IMPORTANTE: este <script> debe cargarse DESPUÉS de guia1.js, guia2.js y
// guia3.js (reutiliza sus preguntas, así no hay que duplicarlas).
// ═════════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  const SUBJECT_KEY = 'asi';
  const EXAM_KEY = 'guias_general';

  if (!SUBJECTS[SUBJECT_KEY]) return;

  const exams = SUBJECTS[SUBJECT_KEY].exams;
  const TODAS = ['guia1', 'guia2', 'guia3'].flatMap((k) =>
    exams[k] ? exams[k].questions : [],
  );

  exams[EXAM_KEY] = {
    key: EXAM_KEY,
    label: '⭐ Guías · Todo en uno',
    group: 'guia',
    questions: TODAS,
  };
})();
