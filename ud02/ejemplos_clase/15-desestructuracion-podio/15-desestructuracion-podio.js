/**const clasificacion = ["María", "Antonio", "Carmen"];

const primero = clasificacion[0];

console.log("EL primero es: ", primero);

//DESESTRUCTURACIÓN

const [oro, plata, bronce] = clasificacion;
console.log("1. ", oro);
console.log("2. ", plata);
console.log("3. ", bronce);

//Saltarnos una posición

const [ganador, , tercero] = clasificacion;
console.log("1. ", ganador);
console.log("3. ", tercero);

//Para quedarnos con el resto de elementos
const [primer, ...resto] = clasificacion;
console.log("Gana", primer);
console.log("El resto son: ", resto.join(", "));

//Intercambuar dos variables
let local = 2;
let visitante = 3;

[local, visitante] = [visitante, local];
*/

//Actividad 4
const notas = [4, 9, 6, 10, 7];
notas.sort((a, b) => b - a);

const [maxima, segunda, ...resto] = notas;
console.log("La nota más alta: ", maxima);
console.log("La segunda más alta: ", segunda);
console.log("El resto de alumnos: ", resto.join(", "));
