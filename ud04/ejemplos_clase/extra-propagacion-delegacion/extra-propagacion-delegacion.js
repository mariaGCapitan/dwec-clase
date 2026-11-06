/*
  EJEMPLO EXTRA · PROPAGACIÓN Y DELEGACIÓN, PASO A PASO
  Las tres ideas del ejemplo 03
*/

// ---------------------------------------------------------------------------
// TANDA 1 · el clic sube: propagación
// (Pulsar la butaca: salen tres líneas. La fila: dos. La sala: una.)
// ---------------------------------------------------------------------------

const sala = document.querySelector("#sala");
const fila = document.querySelector("#fila");
const butaca = document.querySelector("#butaca");
const registro = document.querySelector("#registro");

// Añade una línea al registro de la página.
function anotar(texto) {
  const linea = document.createElement("li");
  linea.textContent = texto;
  registro.append(linea);
}

// Una función en cada caja. Al pulsar la butaca se ejecutan las tres, de
// dentro hacia fuera. Y en las tres, target es la butaca: lo pulsado.
butaca.addEventListener("click", (evento) => {
  anotar(`La BUTACA recibe el clic (pulsado: ${evento.target.id})`);
});

fila.addEventListener("click", (evento) => {
  anotar(`La FILA recibe el clic (pulsado: ${evento.target.id})`);
});

sala.addEventListener("click", (evento) => {
  anotar(`La SALA recibe el clic (pulsado: ${evento.target.id})`);
});

// Borra el registro entre prueba y prueba.
document.querySelector("#limpiar").addEventListener("click", () => {
  for (const linea of registro.querySelectorAll("li")) {
    linea.remove();
  }
});

// ---------------------------------------------------------------------------
// TANDA 2 · sin delegación: una función en cada <li>
// (Pulsar las películas de la izquierda. Añadir una y pulsarla: responde,
//  porque se le pone su función al crearla.)
// ---------------------------------------------------------------------------

const eleccion = document.querySelector("#eleccion");
const listaSin = document.querySelector("#lista-sin");

// Una función para cada <li> que existe AHORA.
for (const pelicula of listaSin.querySelectorAll("li")) {
  pelicula.addEventListener("click", () => {
    eleccion.textContent = `Has elegido: ${pelicula.textContent}`;
  });
}

// La película añadida llega después del bucle, así que hay que ponerle su
// función al crearla. Funciona, pero la función de «Has elegido» queda
// escrita dos veces: en el bucle y aquí.
let nuevasSin = 0;
document.querySelector("#anadir-sin").addEventListener("click", () => {
  nuevasSin++;
  const pelicula = document.createElement("li");
  pelicula.textContent = `Estreno ${nuevasSin}`;
  // pelicula.addEventListener("click", () =>{
  //   eleccion.textContent = `Has elegido: ${pelicula.textContent}`;
  // })
  listaSin.append(pelicula);
});

// ---------------------------------------------------------------------------
// TANDA 3 · con delegación: una sola función en la <ul>
// (Pulsar las películas de la derecha. Añadir una y pulsarla: sí responde.)
// ---------------------------------------------------------------------------

const listaCon = document.querySelector("#lista-con");

// Una sola función, en la lista. El clic de cualquier <li> sube hasta ella.
// target dice cuál se ha pulsado; si es el hueco de la lista, no se hace
// nada. tagName es el nombre de la etiqueta, en mayúsculas.
listaCon.addEventListener("click", (evento) => {
  if (evento.target.tagName === "LI") { //tagName devuelve el nombre de la etiqueta en mayúsculas, aunque en el HTML esté escrita en minúsculas: un <li> da "LI", un <strong> da "STRONG" y un <ul> da "UL".
    eleccion.textContent = `Has elegido: ${evento.target.textContent}`;
  }
});

// La película añadida responde sin hacer nada más: su clic también sube. La
// función de «Has elegido» está escrita una sola vez.
let nuevasCon = 0;
document.querySelector("#anadir-con").addEventListener("click", () => {
  nuevasCon++;
  const pelicula = document.createElement("li");
  pelicula.textContent = `Estreno ${nuevasCon}`;
  listaCon.append(pelicula);
});

// ---------------------------------------------------------------------------
// TANDA 4 · etiquetas dentro: closest
// (Pulsar el título en negrita y el año de las películas de la parte 3.)
// ---------------------------------------------------------------------------

const listaDetalle = document.querySelector("#lista-detalle");

// Aquí cada <li> lleva dentro un <strong> y un <span>. Al pulsar el título,
// target es el <strong>, no el <li>, y la comprobación de la tanda 3 no
// valdría. closest("li") sube desde lo pulsado hasta el <li>.
listaDetalle.addEventListener("click", (evento) => {
  const pelicula = evento.target.closest("li");
  if (pelicula) {
    eleccion.textContent = `Has elegido: ${pelicula.textContent}`;
  }
});

