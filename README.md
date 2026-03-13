# AniTrack — Mi Lista de Animes 🎌

> **M3L1 · Sprint de clase · ~20 min**

---

## El contexto

El equipo de producto de **AniTrack** te asigna un ticket urgente.
El diseñador ya entregó el HTML y el CSS. El formulario valida y
el backend está conectado. Pero la lista no funciona — los animes
no se guardan, no se pintan y no se pueden eliminar.

Tu Tech Lead lo resume así:

> *"El problema es simple: nadie declaró el array, nadie lo recorre
> y nadie implementó el botón de eliminar. Tres cosas. Tienes 20 minutos."*

Abres el `script.js`. Todo lo demás ya está hecho.

---

## 🧠 Lo nuevo de hoy

Hasta ahora cada dato vivía en su propia variable:
`anime1Titulo`, `anime2Titulo`, `anime3Titulo`...

Hoy ese problema desaparece. Un **array** guarda todos los datos
juntos en una sola estructura, y métodos como `forEach` y `push`
te permiten trabajar con toda la colección de un golpe.

---

## 🎫 Tu ticket — 20 min

Todo el formulario, las validaciones y las funciones de apoyo
ya están implementados. Tu trabajo se concentra en cuatro puntos:

**TODO 1** — Declara el array donde vivirán los animes.
Sin esto nada funciona — es lo primero que debes escribir.

**TODO 2** — Usa `push()` para agregar cada nuevo anime al array
cuando el formulario se envía correctamente.

**TODO 3** — Completa el `forEach` dentro de `renderizarLista()`
para que recorra el array y pinte la tarjeta de cada anime.

**TODO 4** — Implementa el botón de eliminar usando `pop()`.
Cuando el array quede vacío vuelve a mostrar el estado vacío.

> 💡 **Tip del Tech Lead:** Lee `crearTarjeta()` antes de empezar.
> Te dice exactamente qué propiedades debe tener cada objeto anime
> que metas al array.

> 💡 **Tip del Tech Lead:** Los TODOs están numerados en orden de
> dependencia. El 1 antes que el 2, el 2 antes que el 3. Si algo
> no funciona, revisa que el anterior esté bien.

---

## 🔥 Extra Bonus — 10 min

Al final de `renderizarLista()` calcula el promedio de puntuación
de todos los animes usando `forEach` con un acumulador.

Pasos:
1. Declara un acumulador en `0` antes del `forEach`
2. Dentro del `forEach`: `acumulador += anime.puntuacion`
3. Divide entre `listaAnimes.length` al terminar
4. Muestra el resultado en `id="statPromedio"` y quítale el `display:none`

Resultado esperado: `⭐ 8 promedio`

> ⚠️ El programa funciona perfectamente sin este bonus.

---

## 🎓 Consejos del Tech Lead

> *"Declara el array primero y prueba que existe en consola antes
> de seguir. Un array que no existe rompe todo lo demás."*

> *"forEach no retorna nada — solo ejecuta. Si quieres construir
> algo con cada elemento, acumúlalo dentro de la función."*

> *"pop() elimina el último elemento y lo retorna. No necesitas
> guardarlo — solo necesitas que desaparezca del array."*

---

**Módulo:** 3 — Lección 1: Arrays
**Dificultad:** ⭐⭐ Intermedio
**Tiempo:** 20 min + 10 min extra bonus