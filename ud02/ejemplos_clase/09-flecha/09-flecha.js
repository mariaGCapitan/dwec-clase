//Declaración con nombre
function media(a, b) {
  return (a + b) / 2;
}

//Declaración expresión
const mediaExp = function (a, b) {
  return (a + b) / 2;
};

//Flecha
const mediaFlecha = (a, b) => (a + b) / 2;

//Flecha con llaves
const mediaFlechaLLa = (a, b) => {
  return (a + b) / 2;
};
console.log("Nombre:", media(8, 6));
console.log("expresión:", mediaExp(8, 6));
console.log("Flecha:", mediaFlecha(8, 6));
