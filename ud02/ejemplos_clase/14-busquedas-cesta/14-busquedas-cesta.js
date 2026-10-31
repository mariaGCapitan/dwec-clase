const precios = [12.5, 30, 8, 45.9, 19.99];

console.log("CESTA");
console.log("Precios: ", precios.join(", "));

//find recorrer hasta que encuentra lo que busca
console.log(
  "primero mayor que 20:",
  precios.find((precio) => precio > 20),
);

console.log(
  "primero mayor que 90:",
  precios.find((precio) => precio > 90),
);

//finIndex hace lo mismo pero devuelve la posición en lugar del valor
console.log(
  "posición del mayor que 20:",
  precios.findIndex((precio) => precio > 20),
);
console.log(
  "posición del mayor que 90:",
  precios.findIndex((precio) => precio > 90),
);

//some y every no devulven elementos, ture o false
console.log(
  "Hay algún producto gratis? ",
  precios.some((precio) => precio === 0),
);
console.log(
  "¿Todos los precios están por debajo de 50?",
  precios.every((precio) => precio < 50),
);

//Ordenamos el array
precios.sort((a, b) => a - b);

console.log("Precios ordenados: ", precios.join(", "));
