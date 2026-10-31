// El + concatena si uno de los dos lados es una cadena.
console.log('"5" + 5   →', "5" + 5);
console.log('5 + "5"   →', 5 + "5");
console.log('"5" + 5 + 5 →', "5" + 5 + 5);
console.log('5 + 5 + "5" →', 5 + 5 + "5");

// El resto de operadores aritméticos convierten a número.
console.log('"5" - 5   →', "5" - 5);
console.log('"10" * "2" →', "10" * "2");
console.log('"10" / 2  →', "10" / 2);
console.log('"5" - "a" →', "5" - "a");

// Los booleanos también se convierten
console.log("true + 1  →", true + 1);
console.log("false + 1 →", false + 1);
console.log('"1" + true →', "1" + true);

// null y undefined no se portan igual
console.log("null + 1      →", null + 1);
console.log("undefined + 1 →", undefined + 1);

// Igualdad con conversión (==) frente a igualdad estricta (===)
console.log('"5" == 5   →', "5" == 5);
console.log('"5" === 5  →', "5" === 5);
console.log("0 == false  →", 0 == false);
console.log("0 === false →", 0 === false);
console.log('"" == false →', "" == false);
console.log("null == undefined  →", null == undefined);
console.log("null === undefined →", null === undefined);
console.log("null == 0 →", null == 0);
