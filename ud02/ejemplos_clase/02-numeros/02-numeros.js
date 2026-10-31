// Un único tipo number, en coma flotante de doble precisión.

console.log("0.1 + 0.2       →", 0.1 + 0.2);
console.log("0.1 + 0.2 === 0.3 →", 0.1 + 0.2 === 0.3);
console.log("(0.1 + 0.2).toFixed(2) →", (0.1 + 0.2).toFixed(2));
console.log("typeof (0.1 + 0.2).toFixed(2) →", typeof (0.1 + 0.2).toFixed(2));

// 10 / 3 no se redondea a entero, y dividir por cero no es un error.
console.log("10 / 3   →", 10 / 3);
console.log("10 / 0   →", 10 / 0);
console.log("-10 / 0  →", -10 / 0);
console.log("0 / 0    →", 0 / 0);

// NaN: el resultado de una operación numérica imposible.
console.log("Number('hola') →", Number("hola"));
console.log("NaN === NaN    →", NaN === NaN);

// Entero o no: es una pregunta sobre el valor, no sobre el tipo.
console.log("Number.isInteger(5)   →", Number.isInteger(5));
console.log("Number.isInteger(5.0) →", Number.isInteger(5.0));
console.log("Number.isInteger(5.5) →", Number.isInteger(5.5));
console.log('Number.isInteger("5") →', Number.isInteger("5"));
console.log("5.0 === 5 →", 5.0 === 5);

// Hasta dónde llega un number sin perder precisión
console.log("Number.MAX_SAFE_INTEGER →", Number.MAX_SAFE_INTEGER);
console.log(
  "9007199254740992 === 9007199254740993 →",
  9007199254740992 === 9007199254740993,
);
console.log(
  "Con BigInt: 9007199254740992n === 9007199254740993n →",
  9007199254740992n === 9007199254740993n,
);
