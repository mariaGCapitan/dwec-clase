// EXACTAMENTE EL MISMO ARCHIVO en los ejemplos 01, 02 y 03.
// Lo único que cambia entre ellos es DÓNDE está la etiqueta <script>
// que lo carga, y con qué atributos.
"use strict";

const titulo = document.querySelector("#titulo");

console.log("¿Qué he encontrado?", titulo);

titulo.textContent = "Cambiado desde JavaScript";
