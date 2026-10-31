//console.log("Llamada antes de declararla: ", media(8, 6));

function media(a = 1, b = 1) {
  return (a + b) / 2;
}

//Si falta un argumento, el parámetro vale undefined, pero la función sigue
//console.log("Media(8): ", media(8));

//Si sobran, los ignora
//console.log("Media(3,4,5): ", media(3, 4, 5));

//Parámetros por defecto
function saludar(nombre = "alumno/a") {
  return "Hola " + nombre;
}
//console.log(saludar("María"));
//console.log(saludar());

//Una función sin return devuelve undefined
function registrar(mensaje) {
  console.log("Registrado: ", mensaje);
}

//const resultado = registrar("Primera nota");
//console.log("Lo que devuelve registrar: ", resultado);

//return corta la función, lo que hay después no se ejecuta
function clasificar(nota) {
  if (nota < 5) {
    return "Suspenso";
  }
  return "Aprobado";
}
console.log(clasificar(3));

//Para devolver más de un dato, se devuelve un objeto
function analizar(a, b) {
  return { suma: a + b, media: (a + b) / 2 };
}
console.log(analizar(8, 6));
