//Vamos a crear libros de la clase Libro
import {Libro} from "./libro.js";

const libroSombra = new Libro("La sombra del viento", "Ruiz", 2000);
const libroMedico = new Libro("El Medico", "autor", 2012);

console.log("LIBROS DE LA BIBLIOTECA");
console.log(libroSombra.resumen());
console.log(libroMedico.resumen());

//Vamos a cambiar una propiedad privada del objeto

libroSombra.prestar();
console.log("Está prestado La Sombra: ", libroSombra.estaPrestado());
console.log("Está prestado El Médico: ", libroMedico.estaPrestado());

//Object.keys
console.log("\nCapos visibles del objeto: ", Object.keys(libroSombra).join(", "));
