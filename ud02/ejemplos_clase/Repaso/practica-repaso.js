const kilometros = [12, 5, 18, 7, 3];
/**
 * El dato de una sexta participante llega de un formulario, así que llega como cadena: const kmDeNuria = "9"; Conseguir que al sumarle 1 dé diez.
 */
const kmDeNuria = "9";
//const kmDeNuriaEntero = Number(kmDeNuria);
kilometros.push(Number(kmDeNuria) + 1);
console.log(kilometros.join(", "));

/**Obtener un array nuevo con cada distancia aumentada en 2, y comprobar qué ha pasado con kilometros. */

const sumarDosKm = kilometros.map((dato) => dato + 2);
console.log(sumarDosKm.join(", "));

/**
 * Obtener un array con las distancias que superan los 6 km.
 */

const distLargas = kilometros.filter((dato) => dato > 6);
console.log(distLargas.join(", "));

/*
Obtener un array con las distancias que superan los 6 km, aumentadas en 2, encadenando los
dos métodos. Y averiguar si da lo mismo cambiando el orden de los eslabones.
*/

const mayorSeis_1 = kilometros
  .filter((dato) => dato > 6)
  .map((dato) => dato + 2);
const mayorSeis_2 = kilometros
  .map((dato) => dato + 2)
  .filter((dato) => dato > 6);
console.log("Versión 1: ", mayorSeis_1.join(", "));
console.log("Versión 2: ", mayorSeis_2.join(", "));

/**
 * Obtener el total de kilómetros del grupo, primero con un bucle y después con reduce.
 */

const total = kilometros.reduce((totalKm, km) => totalKm + km, 0);
console.log("Total KMs: ", total, "kms");

/**
 * Obtener el total de las distancias que superan los 6 km.
 */

const totalDistLargas = kilometros
  .filter((dato) => dato > 6)
  .reduce((totalKm, km) => totalKm + km, 0);

console.log("Total KMs de distancias largas: ", totalDistLargas, "kms");
