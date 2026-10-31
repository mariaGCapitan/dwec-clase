// Este archivo EXPORTA una función. Sin export, nadie puede usarla desde fuera.
export function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Esta constante NO se exporta: es privada de este módulo.
// Otro módulo puede tener su propia constante con el mismo nombre sin pisarse.
const secreto = "solo visible aquí dentro";

console.log(secreto);
