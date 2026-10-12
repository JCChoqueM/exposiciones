      // ── Helpers de datos (capa materia → examen → preguntas) ──
      function activeExam() {
        const subject = SUBJECTS[currentSubject];
        return subject && subject.exams && currentExam
          ? subject.exams[currentExam]
          : null;
      }

      function getSubjectQuestions() {
        const ex = activeExam();
        return ex ? ex.questions : [];
      }

      function buildMateriaBar() {
        const wrap = document.getElementById('materia-bar');
        wrap.innerHTML = Object.values(SUBJECTS)
          .map(
            (s) =>
              `<button class="materia-btn ${s.key === currentSubject ? 'active' : ''}" onclick="selectSubject('${s.key}')">
                <span class="materia-icon">${s.icon}</span>${s.label}
              </button>`,
          )
          .join('');
      }

      function buildExamBar() {
        const wrap = document.getElementById('exam-bar');
        const subject = SUBJECTS[currentSubject];
        const exams = subject ? Object.values(subject.exams || {}) : [];
        if (!exams.length) {
          wrap.innerHTML = '';
          wrap.style.display = 'none';
          return;
        }
        wrap.style.display = 'flex';
        wrap.innerHTML = exams
          .map(
            (e) =>
              `<button class="exam-btn ${e.key === currentExam ? 'active' : ''}" onclick="selectExam('${e.key}')">
                ${e.label || e.key}
              </button>`,
          )
          .join('');
      }

      function selectSubject(key) {
        if (!SUBJECTS[key]) return;
        currentSubject = key;
        currentExam = null;          // sin examen activo: se pide elegir uno
        activeTema = 'TODOS';
        activeSeccion = 'TODAS';
        userAnswers = {};
        examSubmitted = false;
        currentQuestions = [];
        isInitialLoad = true;
        mode = 'practice';

        const subject = SUBJECTS[currentSubject];
        document.getElementById('page-badge').textContent = subject.badge;
        document.getElementById('page-title').textContent = subject.label;
        document.getElementById('page-subtitle').textContent = subject.subtitle;
        document.getElementById('result-panel').style.display = 'none';
        document.getElementById('btn-submit').style.display = 'none';
        document.querySelectorAll('.mode-btn').forEach((b) => b.classList.remove('active'));
        const firstModeBtn = document.querySelector('.mode-btn');
        if (firstModeBtn) firstModeBtn.classList.add('active');

        buildMateriaBar();
        buildExamBar();
        // Los filtros de tema/sección solo tienen sentido con un examen activo
        document.getElementById('tema-filter').style.display = 'none';
        document.getElementById('seccion-filter').style.display = 'none';
        renderQuestions();          // empty-state: "elige un examen"
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function selectExam(key) {
        const subject = SUBJECTS[currentSubject];
        if (!subject || !subject.exams[key]) return;
        currentExam = key;
        const exam = subject.exams[key];
        activeTema = 'TODOS';
        activeSeccion = 'TODAS';
        userAnswers = {};
        examSubmitted = false;
        currentQuestions = [...exam.questions];
        isInitialLoad = true;
        mode = 'practice';

        document.getElementById('result-panel').style.display = 'none';
        document.getElementById('btn-submit').style.display = 'none';

        buildExamBar();
        buildTemaFilter();
        buildSeccionFilter();
        renderQuestions();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function toggleTheme() {
        const html = document.documentElement;
        const btn = document.getElementById('theme-btn');
        const current = html.getAttribute('data-theme');
        if (!current) {
          html.setAttribute('data-theme', 'light');
          btn.textContent = '🌙 Oscuro';
        } else if (current === 'light') {
          html.setAttribute('data-theme', 'eye');
          btn.textContent = '☀️ Claro';
        } else {
          html.removeAttribute('data-theme');
          btn.textContent = '🌿 Ojos';
        }
      }

      function setMode(m) {
        mode = m;
        examSubmitted = false;
        userAnswers = {};
        isInitialLoad = true;
        document.querySelectorAll('.mode-btn').forEach((b) => b.classList.remove('active'));
        event.target.classList.add('active');
        document.getElementById('btn-submit').style.display = m === 'exam' ? 'inline-block' : 'none';
        document.getElementById('result-panel').style.display = 'none';
        renderQuestions();
      }

      function buildTemaFilter() {
        const wrap = document.getElementById('tema-filter');
        const subject = SUBJECTS[currentSubject];
        const temas = subject.temas;
        const labels = subject.temaLabels || {};
        wrap.style.display = temas ? 'flex' : 'none';
        wrap.innerHTML = (temas || [])
          .map(
            (t) =>
              `<button class="tema-chip ${t === activeTema ? 'active' : ''}" onclick="filterTema('${t}')">${labels[t] || t}</button>`,
          )
          .join('');
      }

      function filterTema(t) {
        activeTema = t;
        activeSeccion = 'TODAS';
        isInitialLoad = true;
        buildTemaFilter();
        buildSeccionFilter();
        renderQuestions();
      }

      function buildSeccionFilter() {
        const wrap = document.getElementById('seccion-filter');
        const secciones = SUBJECTS[currentSubject].secciones;
        if (!secciones) {
          wrap.innerHTML = '';
          wrap.style.display = 'none';
          return;
        }
        wrap.style.display = 'flex';
        wrap.innerHTML = secciones
          .map(
            (s) =>
              `<button class="seccion-chip ${s === activeSeccion ? 'active' : ''}" onclick="filterSeccion('${s.replace(/'/g, "\\'")}')">${s}</button>`,
          )
          .join('');
      }

      function filterSeccion(s) {
        activeSeccion = s;
        isInitialLoad = true;
        buildSeccionFilter();
        renderQuestions();
      }

      function shuffleQuestions() {
        currentQuestions = [...currentQuestions].sort(() => Math.random() - 0.5);
        userAnswers = {};
        examSubmitted = false;
        isInitialLoad = true;
        document.getElementById('result-panel').style.display = 'none';
        renderQuestions();
      }

      function resetAll() {
        userAnswers = {};
        examSubmitted = false;
        activeTema = 'TODOS';
        activeSeccion = 'TODAS';
        currentQuestions = [...getSubjectQuestions()];
        isInitialLoad = true;
        document.getElementById('result-panel').style.display = 'none';
        buildTemaFilter();
        buildSeccionFilter();
        renderQuestions();
      }

      function getVisibleQuestions() {
        let qs = activeTema === 'TODOS' ? currentQuestions : currentQuestions.filter((q) => q.tema === activeTema);
        if (SUBJECTS[currentSubject].secciones && activeSeccion !== 'TODAS') {
          qs = qs.filter((q) => q.seccion === activeSeccion);
        }
        return qs;
      }

      function renderQuestions() {
        const wrap = document.getElementById('questions-wrap');
        const qs = getVisibleQuestions();

        document.getElementById('stat-total').textContent = qs.length;
        updateStats(qs);

        if (qs.length === 0) {
          const msg = currentExam
            ? 'No hay preguntas para este filtro.'
            : 'Selecciona un examen de la lista de arriba para comenzar.';
          wrap.innerHTML = `<div class="empty-state">${msg}</div>`;
          return;
        }

        const letters = ['a', 'b', 'c', 'd'];
        wrap.innerHTML = qs
          .map((q, qi) => {
            const answered = userAnswers[q.id] !== undefined;
            const userAns = userAnswers[q.id];
            const isExamDone = mode === 'exam' && examSubmitted;
            const showAnswer = mode === 'review' || isExamDone;

            const opts = q.opts
              .map((o, oi) => {
                let cls = 'opt';
                let mark = ''; // marca de bien/mal

                if (mode === 'practice' && answered) {
                  // En práctica: mostrar solo colores con marca dentro del cuadro
                  if (oi === userAns && oi === q.answer) {
                    cls += ' correct';
                    mark = '<span class="opt-mark">✓</span>';
                  } else if (oi === userAns && oi !== q.answer) {
                    cls += ' wrong';
                    mark = '<span class="opt-mark">✗</span>';
                  } else if (oi === q.answer) cls += ' show-correct';
                } else if (showAnswer) {
                  cls += ' disabled';
                  if (oi === userAns && oi === q.answer) {
                    cls += ' correct';
                    mark = '<span class="opt-mark">✓</span>';
                  } else if (oi === userAns && oi !== q.answer) {
                    cls += ' wrong';
                    mark = '<span class="opt-mark">✗</span>';
                  } else if (oi === q.answer) cls += ' show-correct';
                } else if (answered && oi === userAns) {
                  cls += ' selected';
                }

                // En práctica: permite reseleccionar. En examen: solo antes de enviar
                const isClickable = mode === 'practice' || (mode === 'exam' && !examSubmitted);
                const clickable = isClickable ? `onclick="answer('${q.id}', ${oi})"` : '';
                return `<div class="${cls}" ${clickable}>
        <span class="opt-letter">${letters[oi]}</span>
        <span>${o}</span>
        ${mark}
      </div>`;
              })
              .join('');

            let feedback = '';
            // En práctica: no mostrar cuadro extra, las marcas aparecen dentro del propio cuadro
            // En examen después de enviar: mostrar feedback completo
            if (showAnswer && answered) {
              const ok = userAns === q.answer;
              feedback = `<div class="feedback ${ok ? 'ok' : 'bad'}">${ok ? '✓ Correcto' : `✗ Tu respuesta: (${letters[userAns]}) — Correcta: (${letters[q.answer]})`}</div>`;
            }
            if (mode === 'review') {
              feedback = `<div class="feedback ok">✓ Respuesta: (${letters[q.answer]}) ${q.opts[q.answer]}</div>`;
            }

            const temaLabel = (SUBJECTS[currentSubject].temaLabels || {})[q.tema] || q.tema;
            return `<div class="question-card${isInitialLoad ? ' initial-load' : ''}" id="qcard-${q.id}" style="animation-delay:${isInitialLoad ? qi * 0.03 : 0}s">
      <div class="q-header">
        <span class="q-num">#${qi + 1}</span>
        <span class="q-tema-tag">${temaLabel}</span>
        ${q.seccion ? `<span class="q-seccion-tag">${q.seccion}</span>` : ''}
        </div>
        <div class="q-text">${q.text}</div>
      <div class="options">${opts}</div>
      ${feedback}
    </div>`;
          })
          .join('');
      }

      function answer(id, opt) {
        // En modo examen: permite cambiar respuesta
        // En modo práctica: bloquea después de responder
        if (mode === 'practice' && userAnswers[id] !== undefined) return;
        userAnswers[id] = opt;
        isInitialLoad = false;
        renderQuestions();
      }

      function updateStats(qs) {
        const answered = qs.filter((q) => userAnswers[q.id] !== undefined).length;
        const correct = qs.filter((q) => userAnswers[q.id] === q.answer).length;
        const wrong = answered - correct;
        document.getElementById('stat-answered').textContent = answered;
        document.getElementById('stat-correct').textContent = correct;
        document.getElementById('stat-wrong').textContent = wrong;
        const pct = qs.length ? (answered / qs.length) * 100 : 0;
        document.getElementById('progress-fill').style.width = pct + '%';
      }

      function submitExam() {
        const qs = getVisibleQuestions();
        if (qs.length === 0) return;            // no hay examen/preguntas visibles
        examSubmitted = true;
        const answered = qs.filter((q) => userAnswers[q.id] !== undefined).length;
        const correct = qs.filter((q) => userAnswers[q.id] === q.answer).length;
        const wrong = answered - correct;
        const skipped = qs.length - answered;
        const pct = Math.round((correct / qs.length) * 100);

        let grade = '';
        if (pct >= 90) grade = '🏆 Excelente — Sobresaliente';
        else if (pct >= 70) grade = '✅ Aprobado';
        else if (pct >= 50) grade = '⚠️ Necesitas reforzar los temas';
        else grade = '❌ Reprueba — estudia más';

        const panel = document.getElementById('result-panel');
        panel.style.display = 'block';
        document.getElementById('r-score').textContent = pct + '%';
        document.getElementById('r-grade').textContent = grade;
        document.getElementById('r-correct').textContent = correct;
        document.getElementById('r-wrong').textContent = wrong;
        document.getElementById('r-skipped').textContent = skipped;
        setTimeout(() => {
          document.getElementById('r-bar').style.width = pct + '%';
        }, 100);
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        renderQuestions();
      }

      // Botón ir arriba
      const btnTop = document.getElementById('btn-top');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          btnTop.classList.add('visible');
        } else {
          btnTop.classList.remove('visible');
        }
      });
      btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0 });
      });

      // Init
      selectSubject(currentSubject);
      isInitialLoad = false;
