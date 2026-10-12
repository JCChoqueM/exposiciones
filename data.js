// ── REGISTRO DE MATERIAS (escalable a futuro) ──
// SUBJECTS se inicializa vacío aquí. Cada examen .js en
// `materias/<materia>/<examen>.js` es AUTO-CONTENIDO: integra su propio
// meta (definición idempotente de SUBJECTS.<key>) y se autoregistra en
// `SUBJECTS.<key>.exams.<examen>`. Los .js de exámenes se cargan con
// <script> estáticos en index.html (uno por examen; el primero de cada
// materia define la materia y el resto sólo agregan su examen). Así,
// crear una materia/examen = crear el .js + agregar su <script> en
// index.html (sin tocar data.js ni logic.js).
const SUBJECTS = {};

let currentSubject = 'asi';  //carpeta de la materia
let currentExam = null;      // examen activo dentro de la materia (clave) — lo gestiona logic.js en runtime
let mode = 'practice';
let activeTema = 'TODOS';
let activeSeccion = 'TODAS';
let userAnswers = {};
let examSubmitted = false;
let currentQuestions = [];
let isInitialLoad = true;

// ── EXAMEN POR DEFECTO AL CARGAR LA PÁGINA ──
// Cambia este valor por la 'exam_key' del examen que quieras que se abra
// automáticamente al entrar a la app (debe existir en SUBJECTS[currentSubject].exams).
// Ejemplo: 'parcial2', 'parcial3', 'general', etc.
const DEFAULT_EXAM = 'general';

// logic.js llama a selectSubject(currentSubject) en su bloque de Init, lo que
// resetea currentExam a null (es su comportamiento normal al cambiar de materia).
// Para que arranque directo en DEFAULT_EXAM sin tocar logic.js, esperamos a que
// termine toda la ejecución síncrona de los scripts (DOMContentLoaded) y ahí
// forzamos la selección del examen.
document.addEventListener('DOMContentLoaded', () => {
  const subject = SUBJECTS[currentSubject];
  if (typeof selectExam === 'function' && subject && subject.exams && subject.exams[DEFAULT_EXAM]) {
    selectExam(DEFAULT_EXAM);
  }
});