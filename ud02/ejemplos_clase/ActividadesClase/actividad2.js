/** Obtener un array nuevo con los precios que superan los 20 € una vez aplicado el IVA del 21 %, redondeados a dos decimales.
 */

const precios = [12.5, 30, 8, 45.9, 19.99];

function preciosIVA_extenso(precio) {
  return precio * 1.21;
}

const preciosIVA = (precio) => precio * 1.21;

const preciosAltos1 = precios
  .map(preciosIVA_extenso)
  .filter((precio) => precio > 10);
const preciosAltos2 = precios.map(preciosIVA).filter((precio) => precio > 10);
const preciosAltos3 = precios
  .map((precio) => precio * 1.21)
  .filter((precio) => precio > 10);

console.log("Precios altos: ");
