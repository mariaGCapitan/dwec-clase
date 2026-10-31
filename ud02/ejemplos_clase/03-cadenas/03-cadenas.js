const nombre = "Ana";
const nota = 8.5;

// Tres formas de escribir una cadena. Las dos primeras son equivalentes.
const conComillasDobles = "Hola";
const conComillasSimples = "Hola";
const conComillasInvertidas = `Hola`;

console.log(
  conComillasDobles === conComillasSimples,
  conComillasSimples === conComillasInvertidas,
);

// Concatenar con + frente a una plantilla
console.log("Concatenando: " + nombre + " tiene un " + nota);
console.log(`Con plantilla: ${nombre} tiene un ${nota}`);

// Dentro de ${ } cabe cualquier expresión
console.log(`Redondeada: ${Math.round(nota)}`);
console.log(`Aprobada: ${nota >= 5}`);

// Una plantilla respeta los saltos de línea
const recibo = `Alumna: ${nombre}
Nota: ${nota}`;
console.log(recibo);

// Longitud y algunos métodos. Ninguno modifica la cadena original.
const curso = "Desarrollo Web";
console.log(
  curso.length,
  curso.toUpperCase(),
  curso.includes("Web"),
  curso.slice(0, 10),
);
console.log("La original sigue igual:", curso);
