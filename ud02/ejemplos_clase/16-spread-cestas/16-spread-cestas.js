const cestaMaria = [12.5, 90, 76];
const cestaAntonio = [8, 12, 32];

//podemos hacer una copia con spread del array
const copiaCestaMaria = [...cestaMaria];
copiaCestaMaria.sort((a, b) => a - b);
console.log("La cesta original:", cestaMaria.join(", "));
console.log("La cesta ordenada:", copiaCestaMaria.join(", "));

//Un array que contenga varios arrays
const todasCestas = [...cestaMaria, ...cestaAntonio, 44];
console.log("Todas las cestas: ", todasCestas.join(", "));
