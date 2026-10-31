// El JavaScript decide QUÉ pasa y CUÁNDO. No decide cómo se ve.

const boton = document.querySelector("#cerrar");
const caja  = document.querySelector("#caja");

boton.addEventListener("click", () => {
  caja.classList.add("oculto");     // ← cambia el estado
  // caja.style.display = "none";   // ← esto sería decidir el aspecto desde aquí: no
});
