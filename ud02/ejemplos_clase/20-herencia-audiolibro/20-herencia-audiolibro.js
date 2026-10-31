import {Libro} from "./libro.js";
import {AudioLibro} from "./audiolibro.js";

const libroSombra = new Libro("La sombra del viento", "Ruiz", 2000);
const AudioLibroMedico = new AudioLibro("El Médico"," autor Medico", 2020, 63);

console.log("FICHAS DE TODOS LOS LIBROS Y AUDIOLIBROS");
console.log(libroSombra.resumen());
console.log(AudioLibroMedico.resumen());


