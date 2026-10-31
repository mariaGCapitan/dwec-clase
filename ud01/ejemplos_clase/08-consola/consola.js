const notas = [
  { alumno: "Ana", nota: 8 },
  { alumno: "Luis", nota: 5 },
  { alumno: "Marta", nota: 9 },
];

// Una lista de objetos, en columnas
console.table(notas);

// Mensajes agrupados y plegables
console.group("Notas una a una");
for (const n of notas) {
  console.log(n.alumno, n.nota);
}
console.groupEnd();

// Cuánto tarda un trozo de código
console.time("suma");
let total = 0;
for (let i = 0; i < 10000000; i++) total += i;
console.timeEnd("suma");

// Cuántas veces se pasa por aquí
for (const n of notas) {
  console.count("vueltas del bucle");
}

// Amarillo y rojo, con la traza de llamadas
console.warn("La nota de Luis está justa");
console.error("No existe el alumno buscado");
