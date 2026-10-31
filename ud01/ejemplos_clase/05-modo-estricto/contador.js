// EXACTAMENTE EL MISMO ARCHIVO en los dos ejemplos.
// Lo único que cambia es el atributo del <script> que lo carga.

let contador = 0;

function sumar() {
  contador = contador + 1; // ← errata a propósito: falta la "a" de contador
}

sumar();
sumar();
sumar();

document.querySelector("#valor").textContent = contador;

console.log("contador vale:", contador);
console.log(
  "¿y contdor?",
  typeof contdor !== "undefined" ? contdor : "no existe",
);
