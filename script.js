// ══════════════════════════════════════════════════════════════
//  ANITRACK — Mi Lista de Animes
//  M3L1 · JavaScript Bootcamp 2026
//
//  INSTRUCCIONES:
//  → Este es el único archivo que debes editar.
//  → El HTML y CSS ya están listos. Tu trabajo es JavaScript.
//  → No borres nada de lo que ya existe.
// ══════════════════════════════════════════════════════════════


// ────────────────────────────────────────────────────────────
//  SECCIÓN 1 — FUNCIONES DE APOYO (ya implementadas ✅)
//  Lee crearTarjeta() antes de empezar — te dice exactamente
//  qué propiedades debe tener cada objeto anime.
// ────────────────────────────────────────────────────────────

function mostrarError(mensaje) {
    let el = document.getElementById("mensajeForm");
    el.textContent = mensaje;
    el.className = "mensaje error";
}

function mostrarExito(mensaje) {
    let el = document.getElementById("mensajeForm");
    el.textContent = mensaje;
    el.className = "mensaje exito";
}

function crearTarjeta(anime) {
    let imagenNombre = anime.genero.toLowerCase().replace("ó", "o").replace("í", "i").replace(/ /g, "-") + ".webp";
    return `
        <div class="anime-card">
            <img src="static/images/${imagenNombre}" alt="${anime.genero}" class="card-img" />
            <div class="card-overlay"></div>
            <span class="card-badge">${anime.genero}</span>
            <div class="card-body">
                <div class="card-info">
                    <p class="card-titulo">${anime.titulo}</p>
                    <p class="card-meta">${anime.episodios} eps vistos</p>
                </div>
                <div class="card-score">
                    ${anime.puntuacion} <span>/ 10</span>
                </div>
            </div>
        </div>
    `;
}

// El formulario ya está conectado y validado ✅
// Lee este código para entender el flujo — tu trabajo empieza abajo
document.getElementById("formAnime").addEventListener("submit", function (evento) {
    evento.preventDefault();

    let titulo = document.getElementById("titulo").value.trim();
    let genero = document.getElementById("genero").value;
    let episodios = Number(document.getElementById("episodios").value);
    let puntuacion = Number(document.getElementById("puntuacion").value);

    if (titulo === "") { mostrarError("El título no puede estar vacío."); return; }
    if (genero === "") { mostrarError("Debes seleccionar un género."); return; }
    if (episodios <= 0) { mostrarError("Los episodios deben ser un número mayor a 0."); return; }
    if (puntuacion < 1 || puntuacion > 10) { mostrarError("La puntuación debe estar entre 1 y 10."); return; }

    let nuevoAnime = {
        titulo: titulo,
        genero: genero,
        episodios: episodios,
        puntuacion: puntuacion
    };

    // TODO 2 — Agrega nuevoAnime al array listaAnimes con push()
    //   ✅ Así se hace: listaAnimes.push(nuevoAnime)



    mostrarExito("✅ " + titulo + " agregado a tu lista.");
    renderizarLista();
    evento.target.reset();
});


// ────────────────────────────────────────────────────────────
//  SECCIÓN 2 — TU TICKET 🎫
//
//  Aquí está todo lo nuevo de hoy: el array y sus métodos.
//  Lee cada TODO con calma antes de escribir.
// ────────────────────────────────────────────────────────────

// TODO 1 — Declara el array donde vivirán los animes.
//   Un array vacío se declara así: let listaAnimes = [];
//   Sin esto nada funciona — es lo primero que debes escribir.



// TODO 3 — Completa renderizarLista() para que pinte las tarjetas.
//   La función ya existe pero le falta el forEach.
//   forEach recorre cada elemento del array y ejecuta una función por cada uno.
//   ✅ El patrón es este:
//
//   listaAnimes.forEach(function(anime) {
//       contenedor.innerHTML += crearTarjeta(anime);
//   });

function renderizarLista() {
    let contenedor = document.getElementById("listaAnimes");

    if (listaAnimes.length > 0) {
        document.getElementById("estadoVacio").style.display = "none";
    }

    contenedor.innerHTML = "";

    // TODO 3 — Escribe aquí el forEach que recorre listaAnimes
    //   y agrega la tarjeta de cada anime al contenedor.



    document.getElementById("statTotal").textContent = listaAnimes.length + " títulos";
}


// TODO 4 — Implementa el botón de eliminar.
//   El botón con id "btnEliminar" ya está en el HTML.
//   Cuando el usuario lo presione debe:
//   · Eliminar el último anime de listaAnimes con pop()
//   · Llamar a renderizarLista() para actualizar la pantalla
//   · Si el array queda vacío, volver a mostrar el estado vacío
//
//   ✅ Así se conecta un botón:
//   document.getElementById("btnEliminar").addEventListener("click", function() {
//       // tu código aquí
//   });



// ════════════════════════════════════════════════════════════
//  🔥 EXTRA BONUS: PROMEDIO DE PUNTUACIÓN
// ════════════════════════════════════════════════════════════
//
//  Al final de renderizarLista() calcula el promedio de
//  puntuación usando forEach con un acumulador.
//
//  Pasos:
//  1. Declara un acumulador en 0 antes del forEach
//  2. Dentro del forEach: acumulador += anime.puntuacion
//  3. Divide entre listaAnimes.length al terminar
//  4. Muestra el resultado en id "statPromedio"
//     y quítale el display:none para que aparezca
//
//  Resultado esperado: "⭐ 8 promedio"
//
//  ⚠️ El programa funciona perfectamente sin este bonus.