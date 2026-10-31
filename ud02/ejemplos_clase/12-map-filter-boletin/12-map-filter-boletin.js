const notas = [10, 3, 7, 2, 9, 5];

function subir(nota) {
  if (nota < 10) {
    nota++;
  }
  return nota;
}
const subidas = notas.map(subir);

const aprobadas = subidas.filter((nota) => nota >= 5);

console.log("BOLETÍN DE NOTAS");
console.log("Notas originales: ", notas.join(", "));
console.log("Notas subidas con un punto: ", subidas.join(", "));
console.log("Notas aprobadas: ", aprobadas.join(", "));
console.log("Notas originales siguen igual: ", notas.join(", "));
