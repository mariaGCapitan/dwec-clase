const precios = [12.5, 30, 8, 45.9, 19.99];
console.log("PRECIOS");
console.log("Nº artículos: ", precios.length);
console.log("precios de artículos: ", precios.join(", "));

const total = precios.reduce((acumulado, precio) => acumulado + precio, 0);
console.log("Total calculado con reduce: ", total, " €");
