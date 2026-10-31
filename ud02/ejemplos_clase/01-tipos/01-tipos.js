// Un valor de cada tipo, y lo que dice typeof de él.

console.log('typeof "texto"  →', typeof "texto");
console.log("typeof 42       →", typeof 42);
console.log("typeof 42n      →", typeof 42n);
console.log("typeof true     →", typeof true);
console.log("typeof undefined →", typeof undefined);

// Los tipos que no son primitivos responden todos lo mismo.
console.log("typeof { nombre: 'Ana' } →", typeof { nombre: "Ana" });
console.log("typeof function saludar() {} →", typeof function saludar() {});

// Y tres respuestas que no cuadran con lo que se espera:
console.log("typeof null      →", typeof null);
console.log("typeof NaN       →", typeof NaN);
console.log("typeof [1, 2, 3] →", typeof [1, 2, 3]);

// Para distinguir un array de un objeto cualquiera hay una comprobación aparte.
console.log("Array.isArray([1, 2]) →", Array.isArray([1, 2]));
console.log("Array.isArray({})     →", Array.isArray({}));
