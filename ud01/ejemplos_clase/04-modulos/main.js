import { saludar } from "./saludo.js";

document.querySelector("#titulo").textContent = saludar("2º DAW");

console.log("Este módulo está en modo estricto automáticamente.");
console.log("Y sus variables no ensucian el ámbito global:");
console.log("  window.saludar →", window.saludar); // undefined
secreto = "otro secreto";
