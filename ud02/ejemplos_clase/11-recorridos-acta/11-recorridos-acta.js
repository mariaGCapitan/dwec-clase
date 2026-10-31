const notas = [7, 4, 6, 3, 9];
const numeroServidores = 3;
console.log("ACTA DEL GRUPO");

//Podemos mostrar el contenido concatenando algún símbolo
console.log("Notas: ", notas.join(", "));
//Tamaño de mi array
console.log("Cuántos alumnos tengo: ", notas.length);

//La primera posición del array y la última
console.log("1º: ", notas[0], "- Última: ", notas[notas.length - 1]);

//Recorrido 1: for clásico

for (let i = 0; i < notas.length; i++) {
  console.log(`Alumno ${i + 1} -> ${notas[i]}`);
}

//Recorrido 2: for ... of
let aprobados = 0;
for (const nota of notas) {
  if (nota >= 5) {
    aprobados++;
  }
}
console.log(`Aprobados: ${aprobados} de ${notas.length}`);

//Añadir elementos a mi array
notas.push(0);
console.log("Notas tras la nueva nota: ", notas.join(", "));
