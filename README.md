# Examenes

Plataforma web de **examen interactivo** para materias universitarias (modo Práctica, Examen y Repaso). Es estática y funciona abriendo `index.html` directamente en el navegador.

> 📐 **Arquitectura:** cada materia vive en su **propia subcarpeta** dentro de `materias/`. Cada examen es un **archivo `.js` auto-contenido**: integra los metadatos de la materia (el antiguo `meta.js`) y las preguntas, y se autoregistra en `SUBJECTS`. En `index.html` hay **un `<script>` estático por examen** (sección sincrónica, por lo que abre sin problemas con `file://`, sin servidor ni comandos extra). Para añadir un examen: **crear el `.js` y agregar su `<script>` a `index.html`** — punto. No modificás `data.js` ni `logic.js`, ni corrés comandos.
>
> 📦 Estado actual: el proyecto incluye las materias **`ia`**, **`redes`** y **`asi`** (Administración de Sistemas de Información). La página (`index.html`) carga actualmente **solo `asi`**; `ia` y `redes` están disponibles en `materias/` y se pueden volver a habilitar agregando sus `<script>`. Podés agregar tantas como necesites siguiendo la plantilla de abajo.

## Estructura del proyecto

```
examen/
├── index.html           # Página principal (data.js + un <script> por examen + logic.js)
├── style.css            # Estilos genéricos (no dependen de la materia)
├── data.js              # Inicializa SUBJECTS = {} + estado global (no se toca)
├── logic.js             # Lógica genérica: barra de materias, selector, filtros, renderizado (no se toca)
└── materias/            # ← aquí van las materias (subcarpeta = clave de la materia)
    ├── ia/
    │   ├── parcial1.js  # auto-contenido: define materia + SUBJECTS.ia.exams.parcial1
    │   └── parcial2.js
    ├── redes/
    │   ├── general.js
    │   ├── parcial2.js
    │   └── parcial3.js
    └── asi/  (Administración de Sistemas de Información)
        ├── grupo1.js  # CRM, SCM y KM
        ├── grupo2.js  # Estrategia, Decisiones, Calidad y Ética
        ├── grupo3.js  # Infraestructura, Software, Datos, Redes y Seguridad
        └── general.js # "Todo en uno": junta las preguntas de grupo1/2/3 (carga DESPUÉS de ellos)
```

### ¿Cómo funciona?

- **`data.js`** se carga **primero**. Inicializa `const SUBJECTS = {};` (vacío) y el estado global (`currentSubject`, `currentExam`, `mode`, `activeTema`, `userAnswers`, …). **No contiene preguntas.**
- Cada **archivo de examen** (`materias/<materia>/<examen>.js`) es **auto-contenido**: define su materia dentro de `if (!SUBJECTS.<materia>)` (registro idempotente) y luego registra su examen con `SUBJECTS.<materia>.exams.<examen> = {...}`.
- El cuerpo de cada examen va dentro de un **IIFE** `(function () { "use strict"; … })()`: las constantes de preguntas (`const …_QUESTIONS`) son **locales al archivo**, por lo que podés **copiar una materia reutilizando los mismos nombres de constantes** sin colisionar.
- **`logic.js`** se carga **al final**. Como los `<script>` de los exámenes son sincrónicos y preceden al de `logic.js`, `SUBJECTS` ya está completo al iniciar. Es completamente genérico: **no hay que tocarlo** para añadir materias ni exámenes.

### Orden de carga en `index.html`

```html
<!-- 1) estado: SUBJECTS vacío -->
<script src="data.js"></script>
<!-- 2) exámenes (uno por archivo; el 1er examen de cada materia define la materia) -->
<!-- ASI — grupo1 define la materia; general reúne grupo1/2/3 → va al final -->
<script src="materias/administracion/grupo1.js"></script>
<script src="materias/administracion/grupo2.js"></script>
<script src="materias/administracion/grupo3.js"></script>
<script src="materias/administracion/general.js"></script>
<!-- 3) UI -->
<script src="logic.js"></script>
```

> ℹ️ La página carga actualmente **solo** la materia `asi` (Administración). Los archivos
> de `ia` y `redes` siguen presentes en `materias/`; si los querés de nuevo, agregá sus
> `<script>` en este bloque (respetando el orden de dependencias de cada materia) y
> volvé a `data.js` ajustando `currentSubject`.

> ⚠️ Si un examen reúne preguntas de otros de la misma materia (como `asi/general`), los
> archivos que proveen las preguntas deben cargarse **antes** que él. El orden alfabético
> es una guía, no un requisito estricto cuando hay dependencias entre exámenes.

## Cómo añadir una nueva materia

> ✅ No corras comandos. Solo: creá el `.js` siguiendo la plantilla y agregá su `<script>` en `index.html`.

#### Paso 1 — Crear `materias/<materia>/<examen>.js`

Un solo archivo con las preguntas **+** el metadato de la materia (registro idempotente) **+** el autoregistro del examen. Reemplazá `<materia>`, `<examen>`, `<PREFIJO>` y los valores de ejemplo:

```js
// ── EXAMEN: <Examen> — <Materia> ──
// Archivo AUTOCONTENIDO: define la materia (si no existía) y registra este examen.
(function () {
  "use strict";

  const <PREFIJO>_<EXAM>_QUESTIONS = [
    {
      "id": "<mat1>",            // único (global)
      "tema": "TEMA I",         // incluido en `temas`
      "seccion": "<Sección>",   // incluido en `secciones` (o null si no hay filtro)
      "text": "¿Pregunta?",
      "opts": ["a", "b", "c", "d"], // EXACTAMENTE 4 strings
      "answer": 0                            // índice 0..3 de la correcta
    }
    // ...más preguntas
  ];

  // ── Metadatos de la materia (auto-registro idempotente) ──
  // Meta integrado en este archivo: define la materia solo si aún no existe.
  if (!SUBJECTS.<materia>) {
    SUBJECTS.<materia> = {
      key: '<materia>',           // = nombre de la carpeta; selectSubject('<materia>')
      icon: "💡",                // emoji del botón de la barra
      label: "<Materia>",        // nombre visible
      badge: "XXX · ÁREA",       // distintivo superior
      subtitle: "Examen Interactivo — <Materia>: ...",
      temas: ["TODOS", "TEMA I"],   // siempre empieza con 'TODOS'
      temaLabels: { "TEMA I": "TEMA I: ..." },           // opcional
      secciones: ["TODAS", "<Sección A>", "<Sección B>"], // opcional; null = sin filtro
      exams: {},
    };
  }

  // ── Registro del examen en SUBJECTS (auto-registro) ──
  SUBJECTS.<materia>.exams.<examen> = {
    key: '<examen>',
    label: "<Examen>",
    questions: <PREFIJO>_<EXAM>_QUESTIONS,
  };
})();
```

**Contrato rápido (lo mismo que aparece como comentario al inicio de cada `.js`):**

| Elemento | Requisito clave |
|---|---|
| `<materia>` | Nombre de la **carpeta** = la clave pasada a `selectSubject`. |
| `key` | Igual al nombre de la carpeta. |
| `temas` | Siempre empieza con `"TODOS"`. |
| `secciones` | Siempre empieza con `"TODAS"`; pon `null` si no usás filtros por sección. |
| `opts` | **Exactamente 4** strings. |
| `answer` | Índice entero `0..3`. |
| `id` | Único a nivel global. |
| IIFE | Envuelve todo el cuerpo: constantes locales → podés copiar/reusar sin colisiones. |

> 💡 Si la materia **no** usa filtros por sección, pon `secciones: null` (en cuyo caso el selector de secciones se oculta).

#### Paso 2 — Agregar su `<script>` a `index.html`

```html
<script src="materias/<materia>/<examen>.js"></script>
```

> 📝 Si la materia tiene varios exámenes, pon el que defina la materia (`<examen>` 1) **antes** que los demás de la misma. El IIFE permite, además, reutilizar libremente los nombres de constantes (`*_QUESTIONS`) entre exámenes de distintas materias.

#### Paso 3 — Abrir / recargar

Abrí `index.html` (doble-clic, sin servidor) y la nueva materia aparece en la barra con su selector de exámenes.

## Cómo añadir un examen a una materia EXISTENTE

Creás **un solo archivo** `materias/<materia>/<nuevo-examen>.js` (con su propio `if (!SUBJECTS.<materia>)` idempotente) y agregás su `<script>` en `index.html`. La materia ya está en la barra; el nuevo examen aparecerá en su selector. Ejemplo: añadir `parcial2.js` a `materias/ia/`.

## Validación (opcional, no obligatorio)

```bash
node --check materias/ia/parcial1.js        # sintaxis de un examen
node --check data.js && node --check logic.js
find . -name '*.js' -not -path './.git/*' | xargs -n1 node --check   # todo el proyecto
```

---

¿Listo para añadir más exámenes? Creá `materias/<materia>/<examen>.js` (un solo archivo, auto-contenido, con su IIFE), agregá su `<script>` en `index.html` y recargá ✨. **No necesitás correr comandos ni generar bundles.**
# exposiciones
